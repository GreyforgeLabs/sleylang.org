export const SITE_ORIGIN = "https://sleylang.org";
export const SITEMAP_LAST_MODIFIED = "2026-08-30T00:00:00.000Z";

export const canonicalRoutes = Object.freeze([
  { path: "/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/docs", changeFrequency: "weekly", priority: 0.7 },
  { path: "/tutorial", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.6 },
  { path: "/legacy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/readme", changeFrequency: "weekly", priority: 0.6 },
  { path: "/llms.txt", changeFrequency: "weekly", priority: 0.8 },
]);

export const legacyRedirects = Object.freeze([
  { source: "/index.html", destination: "/", permanent: true },
  { source: "/docs.html", destination: "/docs", permanent: true },
  { source: "/tutorial.html", destination: "/tutorial", permanent: true },
  { source: "/faq.html", destination: "/faq", permanent: true },
  { source: "/README.txt", destination: "/readme", permanent: true },
  { source: "/sley", destination: "/", permanent: true },
  { source: "/sley/index.html", destination: "/", permanent: true },
  { source: "/sley/docs", destination: "/docs", permanent: true },
  { source: "/sley/docs.html", destination: "/docs", permanent: true },
  { source: "/sley/tutorial", destination: "/tutorial", permanent: true },
  { source: "/sley/tutorial.html", destination: "/tutorial", permanent: true },
  { source: "/sley/faq", destination: "/faq", permanent: true },
  { source: "/sley/faq.html", destination: "/faq", permanent: true },
  { source: "/sley/readme", destination: "/readme", permanent: true },
  { source: "/sley/README.txt", destination: "/readme", permanent: true },
  { source: "/sley/llms.txt", destination: "/llms.txt", permanent: true },
  { source: "/sley/robots.txt", destination: "/robots.txt", permanent: true },
  { source: "/sley/sitemap.xml", destination: "/sitemap.xml", permanent: true },
  { source: "/sley/assets/:path*", destination: "/assets/:path*", permanent: true },
]);

export function classifyHref(href) {
  if (typeof href !== "string" || href.length === 0) return "invalid";
  if (href.startsWith("/") && !href.startsWith("//")) return "internal";
  try {
    const url = new URL(href);
    return url.protocol === "http:" || url.protocol === "https:"
      ? "external"
      : "invalid";
  } catch {
    return "invalid";
  }
}

function normalizedPath(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

export function resolveScopedHref(scope, target) {
  const kind = classifyHref(target);
  if (kind === "external") return target;
  if (kind !== "internal") throw new TypeError(`unsupported href: ${target}`);

  const parsedTarget = new URL(target, SITE_ORIGIN);
  const targetPath = normalizedPath(parsedTarget.pathname);
  const scopePath = normalizedPath(scope || "/");
  const pathname =
    scopePath === "/"
      ? targetPath
      : targetPath === "/"
        ? scopePath
        : normalizedPath(`${scopePath}/${targetPath}`);
  return `${pathname}${parsedTarget.search}${parsedTarget.hash}`;
}
