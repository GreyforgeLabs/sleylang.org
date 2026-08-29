import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import path from "node:path";
import { fileURLToPath } from "node:url";

import axe from "axe-core";
import { JSDOM } from "jsdom";

import {
  canonicalRoutes,
  classifyHref,
  legacyRedirects,
  SITE_ORIGIN,
} from "../lib/routes.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const port = 4700 + (process.pid % 1000);
const localOrigin = `http://127.0.0.1:${port}`;
const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", String(port)],
  {
    cwd: root,
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let serverOutput = "";
for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk) => {
    if (serverOutput.length < 128 * 1024) serverOutput += chunk.toString("utf8");
  });
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForServer() {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next server exited early:\n${serverOutput}`);
    }
    try {
      const response = await fetch(localOrigin, { redirect: "manual" });
      if (response.status === 200) return;
    } catch {
      // The listener may not be ready yet.
    }
    await delay(100);
  }
  throw new Error(`Next server did not become ready:\n${serverOutput}`);
}

async function stopServer() {
  if (server.exitCode !== null) return;
  server.kill("SIGTERM");
  await Promise.race([once(server, "exit"), delay(2_000)]);
  if (server.exitCode === null) {
    server.kill("SIGKILL");
    await once(server, "exit");
  }
}

function externalRelIsExplicit(anchor) {
  const tokens = new Set((anchor.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  return ["external", "noopener", "noreferrer"].every((token) => tokens.has(token));
}

function redirectFixture(redirect) {
  if (!redirect.source.includes(":path*")) return redirect;
  const fixture = "sley-loom-graph-profile.png";
  return {
    ...redirect,
    source: redirect.source.replace(":path*", fixture),
    destination: redirect.destination.replace(":path*", fixture),
  };
}

try {
  await waitForServer();
  const crawledInternal = new Set();

  for (const route of canonicalRoutes) {
    const response = await fetch(new URL(route.path, localOrigin));
    assert.equal(response.status, 200, `${route.path} did not render`);
    if (!response.headers.get("content-type")?.includes("text/html")) continue;

    const html = await response.text();
    const dom = new JSDOM(html, {
      runScripts: "outside-only",
      url: new URL(route.path, SITE_ORIGIN),
    });
    const { document } = dom.window;
    const canonical = document.querySelector('link[rel="canonical"]')?.href;
    assert.equal(canonical, new URL(route.path, SITE_ORIGIN).href);

    for (const anchor of document.querySelectorAll("a[href]")) {
      const href = anchor.getAttribute("href");
      const kind = classifyHref(href);
      assert.notEqual(kind, "invalid", `invalid href on ${route.path}: ${href}`);
      if (kind === "external") {
        assert.ok(
          externalRelIsExplicit(anchor),
          `external link lacks explicit rel on ${route.path}: ${href}`,
        );
        continue;
      }
      const target = new URL(href, localOrigin);
      const key = `${target.pathname}${target.search}`;
      if (crawledInternal.has(key)) continue;
      crawledInternal.add(key);
      const linked = await fetch(target);
      assert.ok(linked.status < 400, `broken internal link ${href}: ${linked.status}`);
    }

    dom.window.eval(axe.source);
    const axeResult = await dom.window.axe.run(document, {
      rules: { "color-contrast": { enabled: false } },
    });
    assert.equal(
      axeResult.violations.length,
      0,
      `accessibility violations on ${route.path}: ${JSON.stringify(
        axeResult.violations.map((violation) => ({
          id: violation.id,
          targets: violation.nodes.map((node) => node.target),
        })),
      )}`,
    );
    dom.window.close();
  }

  for (const declared of legacyRedirects) {
    const redirect = redirectFixture(declared);
    const response = await fetch(new URL(redirect.source, localOrigin), {
      redirect: "manual",
    });
    assert.equal(response.status, 308, `${redirect.source} is not permanent`);
    assert.equal(
      new URL(response.headers.get("location"), localOrigin).pathname,
      redirect.destination,
    );
  }

  const missing = await fetch(new URL("/definitely-not-a-route", localOrigin), {
    redirect: "manual",
  });
  assert.equal(missing.status, 404);

  const sitemapResponse = await fetch(new URL("/sitemap.xml", localOrigin));
  assert.equal(sitemapResponse.status, 200);
  const sitemapXml = await sitemapResponse.text();
  const locations = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].replaceAll("&amp;", "&"),
  );
  assert.deepEqual(
    locations,
    canonicalRoutes.map((route) => new URL(route.path, SITE_ORIGIN).href),
  );

  console.log("production site crawl and accessibility smoke ok");
} finally {
  await stopServer();
}
