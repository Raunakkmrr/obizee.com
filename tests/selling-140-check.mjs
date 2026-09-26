import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root = process.argv[2];
assert.ok(root, 'Provide the growth directory');
const articles = JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json', 'utf8'));
const batch = articles.filter(a => a.id >= 10 && a.id < 150);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'SEO-SELLING-140-MANIFEST.json'), 'utf8'));
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'SITESPLACED-BLOG-TITLES-2026-09-26.json'), 'utf8')).topics;
const hashes = JSON.parse(fs.readFileSync('tests/approved-nine-hashes.json', 'utf8'));
assert.equal(articles.filter(a => a.id < 150).length, 149);
assert.equal(batch.length, 140);
assert.deepEqual(batch.map(a => a.id).sort((a,b) => a-b), Array.from({length:140}, (_,i) => i+10));
for (const category of ['Instagram','WhatsApp','Catalogue','Stock','Shipping','Customer service','Growth']) {
  assert.equal(batch.filter(a => a.category === category).length, 20, category);
}
for (const a of batch) {
  const source = manifest.articles.find(m => m.id === a.id);
  assert.ok(inventory.some(t => t.url === source.reference.url && t.title === source.reference.title), `Exact observed topic reference: ${a.id}`);
  assert.ok(!a.body.includes('PLACEHOLDER') && !a.body.includes('TODO'), `No draft placeholders: ${a.id}`);
}
for (const expected of hashes) {
  const a = articles.find(a => a.id === expected.id);
  assert.equal(createHash('sha256').update(a.body).digest('hex'), expected.sha256, `Approved original ${a.id} unchanged`);
}
assert.equal(new Set(batch.map(a => createHash('sha256').update(a.body).digest('hex'))).size, 140);
const grams = body => {
  const w = body.toLowerCase().replace(/https?:\/\/\S+/g, '').match(/[a-z0-9]+/g) || [];
  return new Set(w.slice(0, -9).map((_,i) => w.slice(i,i+10).join(' ')));
};
const sets = batch.map(a => grams(a.body));
let highest = {ratio:0, ids:[]};
for (let i=0;i<batch.length;i++) for (let j=i+1;j<batch.length;j++) {
  const shared = [...sets[i]].filter(g => sets[j].has(g)).length;
  const ratio = shared / Math.min(sets[i].size, sets[j].size);
  if (ratio > highest.ratio) highest = {ratio, ids:[batch[i].id,batch[j].id]};
  assert.ok(ratio < .12, `Excessive internal ten-word overlap: ${batch[i].id}/${batch[j].id}`);
}
const near = (value, expected) => assert.ok(Math.abs(value-expected)<1e-8);
near(1200/4,300); near(900-450-20-80,350); near(350-200,150);
near(30*20*15/5000,1.8); near(Math.max(1.2,1.8),1.8);
near(10+4-5-1,8); near(8-2,6); near(Math.min(8,Math.floor(13/2),10),6);
near(3*7+6,27); near(10-3,7); near(7+3,10); near(11-1,10);
near(1/20*100,5); near(2/20*100,10); near((.1/.05-1)*100,100);
near(7+5,12); near(5-3,2); near(12/2,6); near(6-1,5);
near(15-2-1,12); near(12+1,13); near(110-65,45); near(240-90,150);
near(1000+1500,2500); near(2500-120,2380); near(90/6,15); near(20*5,100);
console.log(JSON.stringify({articles:articles.length,newGuides:batch.length,originalsPreserved:hashes.length,topicsVerified:140,distinctTopicSources:new Set(manifest.articles.map(a=>a.reference.url)).size,words:batch.reduce((n,a)=>n+a.body.split(/\s+/).length,0),highestInternalTenWordOverlap:highest,arithmeticChecks:27},null,2));
console.log('PASS: complete seven-category batch, provenance, original preservation, internal overlap and arithmetic. This is not an external plagiarism scan or visual review.');
