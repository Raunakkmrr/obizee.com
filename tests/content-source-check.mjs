import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root = process.argv[2];
assert.ok(root, 'Provide the growth research directory');
const articles = JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json', 'utf8'));
const summaries = JSON.parse(fs.readFileSync('src/content/seo-drafts/summaries.json', 'utf8'));
assert.deepEqual(summaries, articles.map(({body, ...summary}) => summary));
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'SEO-SELLING-140-MANIFEST.json'), 'utf8'));
const business = JSON.parse(fs.readFileSync(path.join(root, 'SEO-BUSINESS-060-MANIFEST.json'), 'utf8'));
const evaluation = JSON.parse(fs.readFileSync(path.join(root, 'SEO-EVALUATION-110-MANIFEST.json'), 'utf8'));
assert.equal(manifest.articles.length, 140);
assert.equal(articles.filter(a => a.id < 10).length, 9);
for (const a of articles.filter(a => a.id >= 10)) {
  const planned = (a.id < 150 ? manifest : a.id < 210 ? business : evaluation).articles.find(p => p.id === a.id);
  assert.ok(planned, 'Every new article has topic provenance');
  assert.equal(a.route, planned.route);
  assert.equal(a.title, planned.title);
  assert.notEqual(a.title.toLowerCase(), planned.reference.title.toLowerCase());
}
assert.equal(new Set(articles.map(a => a.route)).size, articles.length);
assert.equal(new Set(articles.map(a => a.title)).size, articles.length);
for (const a of articles) {
  const source = fs.readFileSync(path.join(root, `SEO-ARTICLE-${String(a.id).padStart(3,'0')}-DRAFT.md`), 'utf8');
  const body = a.id === 1 ? source.slice(source.indexOf('\n', source.indexOf('# '))).trim() : source.slice(source.indexOf('\n---') + 4).trim();
  assert.equal(a.body, body, `Body parity ${a.id}`);
  assert.equal(a.title, source.match(/^# (.+)$/m)[1]);
  assert.equal(a.minutes, Math.ceil(body.split(/\s+/).length / 200));
  assert.ok(body.split(/\s+/).length > 650, 'A full article, not a descriptor');
  console.log(`${a.id}: ${body.split(/\s+/).length} words; SHA256 ${createHash('sha256').update(body).digest('hex')}`);
}
const near = (a,b) => assert.ok(Math.abs(a-b) < 1e-8);
near(12-2-3,7); near(7-1,6); near(6+3,9);
near(600-380-600*.03,202); near(600*.85,510);
near(510-380-510*.03,114.7); near(202-114.7,87.3);
near(Math.round((202/114.7-1)*1000)/10,76.1);
near(Math.round((202-114.7)/202*1000)/10,43.2);
near(1100-(760-20)-1100*.03,327); near(202*2-327,77);
near(420-300-420*.03,107.4); near(378-300-378*.03,66.66);
console.log(`${articles.length}/${articles.length} source parity; 13 arithmetic assertions passed.`);
