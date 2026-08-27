// IndexNow postbuild submitter for Astro sites.
//
// Install (per site):
//   1. Generate a key:  openssl rand -hex 16
//   2. Save it as public/<key>.txt containing just the key string.
//   3. Copy this file to scripts/indexnow-postbuild.mjs in the site repo.
//   4. Set INDEXNOW_KEY in the Netlify env (or hardcode below).
//   5. package.json: "postbuild": "node scripts/indexnow-postbuild.mjs"
//
// Submits every sitemap URL to api.indexnow.org after each build. Covers
// Bing, Yandex, Seznam, Naver — Bing's index also feeds ChatGPT search,
// Copilot, and DuckDuckGo. Google does not consume IndexNow.
//
// Skips silently (exit 0) when INDEXNOW_KEY is unset or dist/ has no
// sitemap, so it never breaks a build.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const KEY = process.env.INDEXNOW_KEY || "d318964a7e5799e40e7eb24aa04b444b";

if (!KEY) {
  console.log("indexnow: INDEXNOW_KEY not set, skipping");
  process.exit(0);
}

// Only submit on production deploys, not previews/branch builds.
if (process.env.NETLIFY && process.env.CONTEXT !== "production") {
  console.log(`indexnow: context is '${process.env.CONTEXT}', skipping`);
  process.exit(0);
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

if (!existsSync(DIST)) {
  console.log("indexnow: no dist/ directory, skipping");
  process.exit(0);
}

const sitemapFiles = readdirSync(DIST).filter((f) => /^sitemap.*\.xml$/.test(f));
if (sitemapFiles.length === 0) {
  console.log("indexnow: no sitemap in dist/, skipping");
  process.exit(0);
}

const urls = new Set();
for (const f of sitemapFiles) {
  for (const loc of extractLocs(readFileSync(join(DIST, f), "utf8"))) {
    if (loc.endsWith(".xml")) continue; // sitemap-index entries
    urls.add(loc);
  }
}

const urlList = [...urls];
if (urlList.length === 0) {
  console.log("indexnow: sitemap had no page URLs, skipping");
  process.exit(0);
}

const host = new URL(urlList[0]).host;
const body = {
  host,
  key: KEY,
  keyLocation: `https://${host}/${KEY}.txt`,
  urlList: urlList.slice(0, 10000),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200/202 = accepted. Anything else logs but never fails the build.
console.log(`indexnow: submitted ${urlList.length} URLs for ${host} — HTTP ${res.status}`);
