/** @type {import("next").NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/sley/index.html" },
        { source: "/docs", destination: "/sley/docs.html" },
        { source: "/tutorial", destination: "/sley/tutorial.html" },
        { source: "/faq", destination: "/sley/faq.html" },
        { source: "/readme", destination: "/sley/README.txt" },
        { source: "/README.txt", destination: "/sley/README.txt" },
        { source: "/llms.txt", destination: "/sley/llms.txt" },
        { source: "/robots.txt", destination: "/sley/robots.txt" },
        { source: "/sitemap.xml", destination: "/sley/sitemap.xml" },
        { source: "/sley", destination: "/sley/index.html" },
      ],
    };
  },
};

export default nextConfig;
