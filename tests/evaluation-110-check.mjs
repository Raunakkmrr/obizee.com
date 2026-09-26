import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const root=process.argv[2];
assert.ok(root,'Provide growth directory');
const partial=process.argv.includes('--partial');
const articles=JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json'));
const batch=articles.filter(a=>a.id>=210&&a.id<=319);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'SEO-EVALUATION-110-MANIFEST.json')));
const inventory=JSON.parse(fs.readFileSync(path.join(root,'SITESPLACED-BLOG-TITLES-2026-09-26.json'))).topics;
const baseline=JSON.parse(fs.readFileSync('tests/pre-evaluation-209-hashes.json'));
assert.equal(manifest.articles.length,110);
assert.equal(baseline.length,209);
assert.equal(articles.filter(a=>a.id<210).length,209);
if(!partial) assert.equal(batch.length,110);
const allocations={'Platform comparisons':45,'Pricing decisions':35,'Store design':30};
for(const [category,count] of Object.entries(allocations)){
 assert.equal(manifest.articles.filter(a=>a.category===category).length,count);
 if(!partial) assert.equal(batch.filter(a=>a.category===category).length,count);
}
for(const expected of baseline){
 const a=articles.find(a=>a.id===expected.id);
 assert.equal(createHash('sha256').update(JSON.stringify(a)).digest('hex'),expected.sha256,'Prior article unchanged '+expected.id);
}
for(const a of batch){
 const p=manifest.articles.find(p=>p.id===a.id);
 assert.ok(p);assert.equal(a.title,p.title);assert.equal(a.route,p.route);assert.equal(a.category,p.category);
 assert.ok(fs.existsSync(path.join('app',a.route,'page.tsx')),'Active app route '+a.id);
 assert.ok(!fs.existsSync(path.join('src/app',a.route,'page.tsx')),'No inactive duplicate route '+a.id);
 assert.ok(inventory.some(t=>t.url===p.reference.url&&t.title===p.reference.title),'Observed topic '+a.id);
 assert.ok(!inventory.some(t=>t.title.toLowerCase()===a.title.toLowerCase()));
 assert.equal(a.route,'/blog/'+a.title.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'/');
 assert.ok(a.body.split(/\s+/).length>650,'Full body '+a.id);
 assert.ok(!/\bTODO\b|PLACEHOLDER/.test(a.body));
}
const grams=body=>{const w=body.toLowerCase().replace(/https?:\/\/\S+/g,'').match(/[a-z0-9]+/g)||[];return new Set(w.slice(0,-9).map((_,i)=>w.slice(i,i+10).join(' ')));};
const sets=articles.map(a=>grams(a.body));let highest={ratio:0,ids:[]};
for(let i=0;i<articles.length;i++)for(let j=i+1;j<articles.length;j++){
 if(articles[i].id<210&&articles[j].id<210)continue;
 const n=[...sets[i]].filter(g=>sets[j].has(g)).length,r=n/Math.min(sets[i].size,sets[j].size);
 if(r>highest.ratio)highest={ratio:r,ids:[articles[i].id,articles[j].id]};
 assert.ok(r<.12,'Internal overlap '+articles[i].id+'/'+articles[j].id);
}
let arithmeticChecks=0;
const near=(a,b)=>{arithmeticChecks++;assert.ok(Math.abs(a-b)<1e-8);};
near(1000-600,400);near(400/1000,.4);near(600*1.4,840);near(600/(1-.4),1000);
near(900-600-900*.03,273);near(12000/300,40);assert.equal(Math.ceil(12500/300),42);
near(300+180+40+27+50,597);near(900-597,303);near(1000/8,125);
near((60+10*20)/10/60*120,52);near((60+5*20)/5/60*120,64);
assert.equal(Math.min(5,Math.floor(8/2)),4);near(12000/1000,12);
near(1000-400-50-30,520);near(650-400-20,230);near(20*230-600,4000);
near(600-350+400-180,470);near(900-530,370);near(900-510,390);
near((80+100)/.4,450);near(18000/230,78.26086956521739);assert.equal(Math.ceil(18000/230),79);near(78*230,17940);near(79*230,18170);
near(250*.12,30);near(800-530,270);near(830-530,300);near(100*30,3000);
near(800-2*150-250,250);near(400/2,200);near(250/1,250);
near(650/.97,670.1030927835052);near(.97*670.11-500,150.0067);near(.9*.9,.81);
near(600-100,500);near(600*.9,540);near(1500-100,1400);near(1500*.9,1350);
near(750-3*180,210);near(750-3*180-30,180);
near(1080-680,400);near(1000-680,320);near(1080-600-110,370);near(1000-600-110,290);
near(15/60*120+20,50);near(120*5/100,6);near(300-70,230);
near(12000+3600+1200+8000,24800);near(1000*.02+1000*.01,30);
near(1200*12-12000,2400);near(1200*6,7200);near(1200*4,4800);near(199+2*1299,2797);
near((300+500+700)*12,18000);near(12000/20,600);near(12000/15,800);
near(20000+8000,28000);near(1500*12+6000,24000);near(6000/20,300);near(250-300,-50);
near(3000/200,15);near(90*100+10*180,10800);near(80*100+20*180,11600);
near(960*.02,19.2);near(40+19.2,59.2);near(59.2-50,9.2);
near(15000+36*1000,51000);near(36*1500,54000);near(15000+12*1000,27000);near(12*1500,18000);
near(1000/.01,100000);near(60000*.01,600);near(1000-600,400);
console.log(JSON.stringify({mode:partial?'partial-source-check':'complete',articles:articles.length,newDrafts:batch.length,priorPreserved:209,allocations:Object.fromEntries(Object.keys(allocations).map(k=>[k,batch.filter(a=>a.category===k).length])),words:batch.reduce((n,a)=>n+a.body.split(/\s+/).length,0),minimumWords:Math.min(...batch.map(a=>a.body.split(/\s+/).length)),highestInternalTenWordOverlap:highest,arithmeticChecks},null,2));
console.log('PASS: source checks only; not an external plagiarism scan, visual review or publication approval.');
