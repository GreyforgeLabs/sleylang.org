import { canonicalRoutes, SITE_ORIGIN, SITEMAP_LAST_MODIFIED } from "../lib/routes.mjs";

export default function sitemap() {
  return canonicalRoutes.map((route) => ({
    url: new URL(route.path, SITE_ORIGIN).href,
    lastModified: new Date(SITEMAP_LAST_MODIFIED),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
