import { legacyRedirects } from "./lib/routes.mjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
