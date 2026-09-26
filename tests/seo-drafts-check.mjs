import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
const articles = [...JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json', 'utf8')),...JSON.parse(fs.readFileSync('src/content/seo-drafts/acquisition-final.json','utf8'))];
const decode = s => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const plain = s => decode(s.replace(/<\/(?:p|li|h[1-6]|td|th|tr|blockquote)>/g, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ')).trim();
let checks = 0;
for (const a of articles) {
  const html = fs.readFileSync(path.join('out', a.route, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1); checks++;
  assert.ok(plain(html).includes(a.title)); checks++;
  assert.ok(html.includes(`href="https://www.obizee.com${a.route}"`)); checks++;
  assert.ok(html.includes('content="noindex, nofollow"')); checks++;
  assert.ok(!html.includes('googletagmanager.com') && !html.includes('clarity.ms/tag')); checks++;
  assert.ok(!html.includes('Editorial status:') && !html.includes('Suggested description:')); checks++;
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.+?)<\/script>/)[1]);
  assert.equal(schema.headline, a.title); assert.ok(!schema.datePublished && !schema.author); checks++;
  const ids = [...html.matchAll(/id="(section-\d+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size); checks++;
  for (const link of html.matchAll(/href="#(section-\d+)"/g)) assert.ok(ids.includes(link[1])); checks++;
  const bodyText = plain(html.match(/<article class="ed-copy">([\s\S]+?)<\/article>/)[1]);
  for (const block of a.body.split(/\n\s*\n/)) {
    if (block.startsWith('|')) {
      for (const line of block.split('\n').filter(l => !/^\|[\s:|-]+\|$/.test(l))) {
        for (const cell of line.slice(1,-1).split('|').filter(c => c.trim())) {
          assert.ok(bodyText.includes(cell.trim().replace(/\*\*|`/g,'')), `Missing table cell ${a.id}`); checks++;
        }
      }
      continue;
    }
    if (block === '---') continue;
    const expected = block.replace(/^#{2,3} /, '').replace(/^> /gm, '').replace(/^[-*] /gm, '').replace(/^\d+\. /gm, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim();
    assert.ok(bodyText.includes(expected), `Missing or altered prose in ${a.id}: ${expected.slice(0, 80)}`); checks++;
  }
  for (const m of a.body.matchAll(/\]\((https:\/\/www\.obizee\.com\/[^)]+|\/(?!\/)[^)]+)\)/g)) {
    const route = m[1].replace('https://www.obizee.com', '').split('#')[0];
    assert.ok(fs.existsSync(path.join('out', route, 'index.html')), `Missing destination ${route}`); checks++;
  }
  console.log(`PASS ${a.route}`);
}
assert.ok(fs.existsSync('out/editorial-preview/index.html'));
const hub = fs.readFileSync('out/editorial-preview/index.html', 'utf8');
assert.equal((hub.match(/<h1[ >]/g) || []).length, 1); checks++;
assert.ok(plain(hub).includes(`${articles.length} complete drafts`)); checks++;
assert.ok(hub.includes('aria-label="Browse guides by topic"')); checks++;
for (const a of articles) {
  assert.equal((hub.match(new RegExp(`href="${a.route}"`, 'g')) || []).length, 1, `Exactly one hub card for ${a.id}`); checks++;
}
for (let i = 1; i <= new Set(articles.filter(a => a.id >= 10).map(a => a.category)).size; i++) {
  assert.ok(hub.includes(`href="#topic-${i}"`) && hub.includes(`id="topic-${i}"`)); checks++;
}
console.log(`${checks} assertions passed across ${articles.length} pages; review hub exported.`);
