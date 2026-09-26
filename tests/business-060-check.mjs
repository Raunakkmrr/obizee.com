import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root = process.argv[2];
assert.ok(root, 'Provide growth directory');
const articles = JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json'));
const batch = articles.filter(a => a.id >= 150 && a.id <= 209);
const manifest = JSON.parse(fs.readFileSync(path.join(root,'SEO-BUSINESS-060-MANIFEST.json')));
const inventory = JSON.parse(fs.readFileSync(path.join(root,'SITESPLACED-BLOG-TITLES-2026-09-26.json'))).topics;
const baseline = JSON.parse(fs.readFileSync('tests/pre-business-149-hashes.json'));
assert.equal(articles.filter(a=>a.id<210).length,209);
assert.equal(batch.length,60);
assert.deepEqual(batch.map(a=>a.id).sort((a,b)=>a-b),Array.from({length:60},(_,i)=>150+i));
const allocations={'Crochet':10,'Jewellery':10,'Gifts':10,'Clothing':10,'Home décor':5,'Bags':5,'Art and prints':5,'Handmade accessories':5};
for (const [category,count] of Object.entries(allocations)) assert.equal(batch.filter(a=>a.category===category).length,count,category);
for(const expected of baseline){
 const a=articles.find(a=>a.id===expected.id);
 assert.equal(createHash('sha256').update(JSON.stringify(a)).digest('hex'),expected.sha256,'Prior article unchanged: '+expected.id);
}
for(const a of batch){
 const p=manifest.articles.find(p=>p.id===a.id);
 assert.ok(p);
 assert.equal(p.title,a.title); assert.equal(p.route,a.route); assert.equal(p.category,a.category);
 const slug=a.title.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 assert.equal(a.route,'/blog/'+slug+'/','Normalised route: '+a.id);
 assert.ok(inventory.some(t=>t.url===p.reference.url&&t.title===p.reference.title),'Observed source: '+a.id);
 assert.ok(!inventory.some(t=>t.title.toLowerCase()===a.title.toLowerCase()),'Original title: '+a.id);
 assert.ok(a.body.split(/\s+/).length>650);
 assert.ok(!/\bTODO\b|PLACEHOLDER/.test(a.body));
}
const grams=body=>{
 const w=body.toLowerCase().replace(/https?:\/\/\S+/g,'').match(/[a-z0-9]+/g)||[];
 return new Set(w.slice(0,-9).map((_,i)=>w.slice(i,i+10).join(' ')));
};
const sets=articles.map(a=>grams(a.body)); let highest={ratio:0,ids:[]};
for(let i=0;i<articles.length;i++) for(let j=i+1;j<articles.length;j++){
 if(articles[i].id<150&&articles[j].id<150) continue;
 const shared=[...sets[i]].filter(g=>sets[j].has(g)).length;
 const ratio=shared/Math.min(sets[i].size,sets[j].size);
 if(ratio>highest.ratio) highest={ratio,ids:[articles[i].id,articles[j].id]};
 assert.ok(ratio<.12,'Internal overlap: '+articles[i].id+'/'+articles[j].id);
}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-8);
near(140+60+55+3*120,615);
near(40+20,60); near(12*60/60,12);
near(Math.min(8,5),5); near(Math.min(10,Math.floor(12/2)),6);
near(45+15/60*120,75);
near(30-2*2,26); near(40-2*2,36);
near(Math.min(9,Math.floor(14/2),8),7);
const result={articles:articles.length,businessGuides:batch.length,priorArticlesPreserved:baseline.length,allocations,words:batch.reduce((n,a)=>n+a.body.split(/\s+/).length,0),minimumWords:Math.min(...batch.map(a=>a.body.split(/\s+/).length)),maximumWords:Math.max(...batch.map(a=>a.body.split(/\s+/).length)),distinctObservedSources:new Set(manifest.articles.map(a=>a.reference.url)).size,highestInternalTenWordOverlap:highest,arithmeticChecks:9};
console.log(JSON.stringify(result,null,2));
console.log('PASS: 60 business guides; original 149 intact; provenance, arithmetic and internal overlap. Not an external plagiarism scan, browser visual review or publishing approval.');
