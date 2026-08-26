#!/usr/bin/env node
/**
 * Sole owner of the sitemap XML in public/.
 *
 * Two bugs this fixes, both of which cost crawl budget on every URL:
 *
 *   1. next.config.js sets `trailingSlash: true`, so every page canonicalises to
 *      a URL ending in "/". Every <loc> in the sitemaps omitted it, so Google was
 *      handed 60-odd URLs that all 301 — and a redirect is a weaker signal than
 *      the page itself.
 *
 *   2. <lastmod> was hand-written and had drifted four months behind the pages.
 *      The compare pages were rewritten on 2026-08-20 while the sitemap index
 *      still claimed 2026-04-22, so Google had no reason to recrawl them.
 *
 * lastmod now comes from git — the real commit date of the route's page.tsx —
 * so it cannot drift again. Run after changing any page:
 *
 *     node scripts/fix-sitemaps.mjs          # report only
 *     node scripts/fix-sitemaps.mjs --write
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const WRITE = process.argv.includes('--write');
const PUBLIC = 'public';
const ORIGIN = 'https://www.obizee.com';

/** Commit date of the file backing a route, falling back to the newest page. */
function lastModified(route) {
  const clean = route.replace(ORIGIN, '').replace(/^\/|\/$/g, '');
  const candidates = clean
    ? [`app/${clean}/page.tsx`, `app/${clean}/page.ts`]
    : ['app/page.tsx'];
  for (const f of candidates) {
    if (!existsSync(f)) continue;
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', f], {
        encoding: 'utf8',
      }).trim();
      if (out) return out;
    } catch {
      /* not in git yet — fall through */
    }
  }
  return null;
}

const files = readdirSync(PUBLIC).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));
let addedSlash = 0;
let dateChanged = 0;

// Pass 1: child sitemaps. Fix <loc> slashes and set <lastmod> per URL.
const newestPerFile = {};
for (const f of files) {
  if (f === 'sitemap.xml') continue;
  const path = join(PUBLIC, f);
  let xml = readFileSync(path, 'utf8');
  let newest = null;

  // Handle <loc> and <lastmod> as separate passes inside each <url>. Doing it
  // in one expression needs a lazy match before an optional group, which always
  // matches empty and silently skips every lastmod.
  xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) return block;

    let url = loc;
    if (!url.endsWith('/') && !/\.[a-z0-9]{2,5}$/i.test(url)) {
      url += '/';
      addedSlash++;
    }
    const real = lastModified(url);
    if (real && (!newest || real > newest)) newest = real;

    let out = block.replace(/<loc>[^<]+<\/loc>/, `<loc>${url}</loc>`);
    if (real) {
      if (/<lastmod>/.test(out)) {
        out = out.replace(/<lastmod>([^<]+)<\/lastmod>/, (m, old) => {
          if (old !== real) dateChanged++;
          return `<lastmod>${real}</lastmod>`;
        });
      } else {
        out = out.replace(/<\/loc>/, `</loc>\n    <lastmod>${real}</lastmod>`);
        dateChanged++;
      }
    }
    return out;
  });

  newestPerFile[f] = newest;
  if (WRITE) writeFileSync(path, xml);
}

// Pass 2: the index. Each child's lastmod is the newest page inside it.
const indexPath = join(PUBLIC, 'sitemap.xml');
let index = readFileSync(indexPath, 'utf8');
const indexChanges = [];
index = index.replace(/<sitemap>([\s\S]*?)<\/sitemap>/g, (block) => {
  const name = block.match(/<loc>[^<]*\/(sitemap-[a-z]+\.xml)<\/loc>/)?.[1];
  const newest = name && newestPerFile[name];
  if (!newest) return block;
  return block.replace(/<lastmod>([^<]+)<\/lastmod>/, (m, old) => {
    if (old !== newest) indexChanges.push(`${name}: ${old} -> ${newest}`);
    return `<lastmod>${newest}</lastmod>`;
  });
});
if (WRITE) writeFileSync(indexPath, index);

console.log(`  trailing slashes added : ${addedSlash}`);
console.log(`  per-URL lastmod fixed  : ${dateChanged}`);
console.log(`  index lastmod updated  : ${indexChanges.length}`);
for (const c of indexChanges) console.log(`    ${c}`);
console.log(WRITE ? '\n  written.' : '\n  dry run — re-run with --write.');
