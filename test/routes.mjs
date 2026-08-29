import assert from "node:assert/strict";

import sitemap from "../app/sitemap.js";
import nextConfig from "../next.config.mjs";
import {
  canonicalRoutes,
  classifyHref,
  legacyRedirects,
  resolveScopedHref,
  SITE_ORIGIN,
} from "../lib/routes.mjs";

const canonicalPaths = canonicalRoutes.map((route) => route.path);
assert.equal(new Set(canonicalPaths).size, canonicalPaths.length);

const sitemapUrls = sitemap().map((entry) => entry.url);
assert.deepEqual(
  sitemapUrls,
  canonicalPaths.map((route) => new URL(route, SITE_ORIGIN).href),
);

const redirects = await nextConfig.redirects();
assert.deepEqual(redirects, legacyRedirects);
assert.equal(
  new Set(redirects.map((redirect) => redirect.source)).size,
  redirects.length,
);
assert.ok(redirects.every((redirect) => redirect.permanent === true));

assert.equal(resolveScopedHref("", "/docs"), "/docs");
assert.equal(resolveScopedHref("/", "/docs"), "/docs");
assert.equal(resolveScopedHref("/sley/", "/docs"), "/sley/docs");
assert.equal(resolveScopedHref("//sley//", "/docs//"), "/sley/docs");
assert.equal(resolveScopedHref("/sley", "/"), "/sley");
assert.equal(
  resolveScopedHref("", "/docs?view=brief#start"),
  "/docs?view=brief#start",
);

assert.equal(classifyHref("https://example.com/docs"), "external");
assert.equal(classifyHref("http://example.com"), "external");
assert.equal(classifyHref("/docs"), "internal");
assert.equal(classifyHref("//example.com/docs"), "invalid");
assert.equal(classifyHref("javascript:alert(1)"), "invalid");
assert.equal(classifyHref("ftp://example.com"), "invalid");
assert.equal(classifyHref(""), "invalid");
assert.throws(() => resolveScopedHref("", "docs"));

const acceptedInternal = new Set([
  ...canonicalPaths,
  ...legacyRedirects.map((redirect) => redirect.source),
  "/robots.txt",
  "/sitemap.xml",
]);
assert.equal(acceptedInternal.has("/definitely-not-a-route"), false);

console.log("route manifest smoke ok");
