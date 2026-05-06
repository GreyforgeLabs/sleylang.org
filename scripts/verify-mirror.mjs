import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const required = [
  "public/index.html",
  "public/docs.html",
  "public/tutorial.html",
  "public/faq.html",
  "public/llms.txt",
  "public/README.txt",
  "public/site.css",
  "public/assets/sley-loom-graph-banner.png",
  "public/assets/sley-loom-graph-post.png",
  "public/assets/sley-loom-graph-profile.png",
  "public/sley/index.html",
  "public/sley/docs.html",
  "public/sley/tutorial.html",
  "public/sley/faq.html",
  "public/sley/llms.txt",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/404.html"
];

const missing = required.filter((path) => !existsSync(join(root, path)));
if (missing.length > 0) {
  console.error(`Missing required mirror files:\n${missing.join("\n")}`);
  process.exit(1);
}

const textFiles = [
  "public/index.html",
  "public/docs.html",
  "public/tutorial.html",
  "public/faq.html",
  "public/llms.txt",
  "public/README.txt",
  "public/sley/index.html",
  "public/sley/docs.html",
  "public/sley/tutorial.html",
  "public/sley/faq.html",
  "public/sley/llms.txt",
  "public/sley/README.txt"
];

for (const path of textFiles) {
  const text = readFileSync(join(root, path), "utf8");
  if (text.includes("https://sley.greyforge.tech")) {
    console.error(`${path} still points canonical Sley URLs at sley.greyforge.tech`);
    process.exit(1);
  }
}

console.log("Sley static mirror verified.");
