// scripts/verify-garden.mjs
import { promises as fs } from "node:fs";
import path from "node:path";

const MUST_EXIST = [
  "app/sitemap.ts",
  "app/robots.ts",
  "app/rss.xml/route.ts",
  "app/manifest.ts",
  "app/calendar/archive/page.tsx",
  "components/CalendarYearClient.tsx",
  "lib/calendar.ts",
  "lib/text.ts",
  "lib/slug.ts",
  "lib/tech.ts",
  ".prettierrc",
  ".prettierignore",
];

const MAIN_LANDMARK_PAGES = [
  "app/page.tsx",
  "app/plushies/page.tsx",
  "app/plushies/[id]/page.tsx",
  "app/projects/page.tsx",
  "app/tea/page.tsx",
  "app/balloons/page.tsx",
  "app/diary/page.tsx",
  "app/diary/[year]/[slug]/page.tsx",
  "app/calendar/page.tsx",
  "app/calendar/archive/[year]/page.tsx",
];

const CHECKS = [
  ["layout has metadataBase", "app/layout.tsx", /metadataBase:\s*new URL\(process\.env\.NEXT_PUBLIC_SITE_URL/],
  ["layout has skip link", "app/layout.tsx", /href="#main".+Skip to content/s],
  ["globals reduced motion", "app/globals.css", /@media\s*\(prefers-reduced-motion:\s*reduce\)[\s\S]*\.leaf/],
  ["projects page JSON-LD", "app/projects/page.tsx", /<script[^>]+type="application\/ld\+json"[^>]+dangerouslySetInnerHTML=/],
  ["tea card a11y", "components/TeaCard.tsx", /<article[^>]+aria-labelledby=\{`t-\$\{tea\.slug\}`\}[\s\S]*<h3 id=\{`t-\$\{tea\.slug\}`\}/],
  ["diary autoLink use", "app/diary/[year]/[slug]/page.tsx", /from\s+"@\/lib\/text".+autoLink/s],
  ["balloons legend", "app/balloons/page.tsx", /difficulty:\s*1\s*easy\s*—\s*5\s*tricky/],
  ["events type has tags", "content/events.ts", /tags\?\:\s*string\[\]/],
];

function log(ok, label, extra = "") {
  console.log(`${ok ? "✅" : "❌"} ${label}${extra ? " — " + extra : ""}`);
}

async function fileExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function read(p) { return fs.readFile(p, "utf8"); }

async function main() {
  let fails = 0;

  // Must-exist files
  for (const f of MUST_EXIST) {
    const ok = await fileExists(f);
    log(ok, `exists: ${f}`); if (!ok) fails++;
  }

  // Pattern checks
  for (const [label, file, re] of CHECKS) {
    if (!(await fileExists(file))) { log(false, `${label}`, `${file} missing`); fails++; continue; }
    const txt = await read(file);
    const ok = re.test(txt);
    log(ok, `${label}`, file); if (!ok) fails++;
  }

  // id="main" landmarks
  for (const f of MAIN_LANDMARK_PAGES) {
    if (!(await fileExists(f))) { log(false, `id="main" on page`, `${f} missing`); fails++; continue; }
    const ok = /id="main"/.test(await read(f));
    log(ok, `id="main" on page`, f); if (!ok) fails++;
  }

  // package.json checks
  if (await fileExists("package.json")) {
    const pkg = JSON.parse(await read("package.json"));
    const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
    const noFM = !("framer-motion" in deps);
    log(noFM, "framer-motion removed from dependencies");
  }

  // assets presence (optional in this pass)
  const og = await fileExists("public/og.png");
  log(og, "public/og.png present (optional but recommended)");
  const icons = await Promise.all([
    "public/apple-touch-icon.png",
    "public/icons/icon-16.png",
    "public/icons/icon-32.png",
    "public/icons/icon-48.png",
    "public/icons/icon-512.png",
  ].map(fileExists));
  log(icons.every(Boolean), "favicon set present", "public/icons/* + apple-touch-icon.png");

  if (fails) {
    console.log(`\n❌ ${fails} checks failed. See lines above.`);
    process.exitCode = 1;
  } else {
    console.log("\n🎉 All checks passed.");
  }
}
main();
