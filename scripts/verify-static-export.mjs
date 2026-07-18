import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outputDirectory = path.join(root, "out");

function fail(message) {
  console.error(`Static export verification failed: ${message}`);
  process.exitCode = 1;
}

function filesUnder(directory) {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(entryPath) : [entryPath];
  });
}

function routePathFromFile(filePath) {
  const relativePath = path.relative(outputDirectory, filePath).split(path.sep).join("/");

  if (relativePath === "index.html") return "/";

  return `/${relativePath.replace(/index\.html$/, "")}`;
}

function normalizePath(value) {
  const pathname = value.split(/[?#]/, 1)[0];
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function outputFileForPath(value) {
  const normalizedPath = normalizePath(value);
  return normalizedPath === "/"
    ? path.join(outputDirectory, "index.html")
    : path.join(outputDirectory, normalizedPath.slice(1), "index.html");
}

if (!fs.existsSync(outputDirectory)) {
  fail("out/ does not exist; run npm run build first.");
  process.exit();
}

const allOutputFiles = filesUnder(outputDirectory);
const htmlFiles = allOutputFiles.filter((filePath) => filePath.endsWith(".html"));
const routeFiles = htmlFiles.filter((filePath) => {
  const relativePath = path.relative(outputDirectory, filePath).split(path.sep).join("/");
  return relativePath !== "404.html" && relativePath !== "404/index.html";
});
const routePaths = new Set(routeFiles.map(routePathFromFile));

for (const requiredFile of ["robots.txt", "sitemap.xml", "llms.txt"]) {
  if (!fs.existsSync(path.join(outputDirectory, requiredFile))) {
    fail(`missing ${requiredFile}`);
  }
}

const contactPage = path.join(outputDirectory, "kontakt", "index.html");
if (fs.existsSync(contactPage)) {
  const contactHtml = fs.readFileSync(contactPage, "utf8");

  if (!contactHtml.includes('action="https://api.staticforms.dev/submit"')) {
    fail("contact form is not configured for Static Forms");
  }

  if (!contactHtml.includes('name="apiKey"')) {
    fail("contact form is missing the Static Forms API key field");
  }
}

const sitemap = fs.existsSync(path.join(outputDirectory, "sitemap.xml"))
  ? fs.readFileSync(path.join(outputDirectory, "sitemap.xml"), "utf8")
  : "";
const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([_, url]) => normalizePath(new URL(url).pathname));

if (new Set(sitemapPaths).size !== sitemapPaths.length) {
  fail("sitemap contains duplicate URLs");
}

for (const sitemapPath of sitemapPaths) {
  if (!routePaths.has(sitemapPath)) {
    fail(`sitemap URL has no generated route: ${sitemapPath}`);
  }
}

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, "utf8");

  if (html.includes("mailto: ")) {
    fail(`malformed mailto link in ${path.relative(root, htmlFile)}`);
  }

  for (const [, href] of html.matchAll(/href=["']([^"']+)["']/g)) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;

    const normalizedHref = href.split(/[?#]/, 1)[0];
    const directTarget = path.join(outputDirectory, normalizedHref.slice(1));
    const targetPath = fs.existsSync(directTarget) && fs.statSync(directTarget).isFile()
      ? directTarget
      : outputFileForPath(href);

    if (!fs.existsSync(targetPath)) {
      fail(`broken local link ${href} in ${path.relative(root, htmlFile)}`);
    }
  }

  for (const [, assetPath] of html.matchAll(/(?:src|srcSet)=["']([^"']+)["']/g)) {
    for (const asset of assetPath.split(/\s*,\s*|\s+/)) {
      if (!asset.startsWith("/images/") || !asset.includes(".webp")) continue;
      const assetFile = path.join(outputDirectory, asset.split(/[?#]/, 1)[0].slice(1));
      if (!fs.existsSync(assetFile)) fail(`missing responsive image ${asset}`);
    }
  }
}

if (routePaths.size !== sitemapPaths.length) {
  fail(`sitemap covers ${sitemapPaths.length} routes but out/ contains ${routePaths.size}`);
}

if (process.exitCode) process.exit();

console.log(`Static export verified: ${routePaths.size} routes, ${htmlFiles.length} HTML files, and ${sitemapPaths.length} sitemap URLs.`);
