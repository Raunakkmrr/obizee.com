import fs from 'node:fs';
import assert from 'node:assert/strict';

const out = process.env.EDITORIAL_OUT;
assert.ok(out, 'Set EDITORIAL_OUT to the exported candidate');
const names = ['articles', 'acquisition-final', 'help', 'commercial', 'resources', 'hubs'];
const rows = names.flatMap(name => JSON.parse(fs.readFileSync(`src/content/seo-drafts/${name}.json`, 'utf8')));
assert.equal(rows.length, 500);
const decode = s => s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const failures = [];
let checks = 0;
for (const row of rows) {
  const html = fs.readFileSync(`${out}${row.route}index.html`, 'utf8');
  const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => {
    const attrs = Object.fromEntries([...m[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(a => [a[1], decode(a[2])]));
    return attrs;
  });
  const expected = {
    description: row.description || row.intro,
    'og:title': row.title,
    'og:description': row.description || row.intro,
    'og:url': `https://www.obizee.com${row.route}`,
    'twitter:title': row.title,
    'twitter:description': row.description || row.intro,
  };
  for (const [key, value] of Object.entries(expected)) {
    checks++;
    const found = tags.filter(t => t.name === key || t.property === key);
    if (found.length !== 1 || found[0].content !== value) failures.push({route:row.route, field:key});
  }
  checks++;
  if (!tags.some(t => t.name === 'robots' && /noindex/.test(t.content))) failures.push({route:row.route,field:'draft indexing protection'});
}
console.log(JSON.stringify({pages:rows.length,checks,failureCount:failures.length,affectedPages:new Set(failures.map(f=>f.route)).size,failures},null,2));
if (failures.length) process.exitCode = 1;
