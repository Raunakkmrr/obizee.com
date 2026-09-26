import fs from 'node:fs';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT;
assert.ok(out);
const rows=JSON.parse(fs.readFileSync('src/content/seo-drafts/feature-explainers.json'));
assert.equal(rows.length,25);
assert.equal(new Set(rows.map(r=>r.id)).size,25);
for(const r of rows){
 const html=fs.readFileSync(out+r.route+'index.html','utf8');
 assert.ok(html.includes('id="'+r.id.toLowerCase()+'"'),r.id+' absent from owner');
}
const articles=[...JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json')),...JSON.parse(fs.readFileSync('src/content/seo-drafts/acquisition-final.json'))];
for(const r of articles){
 const html=fs.readFileSync(out+r.route+'index.html','utf8');
 assert.ok(html.includes('On this page'),r.route);
 assert.ok(!html.includes('<details'),r.route+' accordion remains');
}
const story=fs.readFileSync(out+'/stories/crochetbypriya/index.html','utf8');
for(const t of ['Priya Yadav','crochetByPriya','Razorpay','Paytm','bank transfer','does not announce a fix','permission to use the name were relayed'])assert.ok(story.includes(t),t);
assert.equal((story.match(/<main\b/g)||[]).length,1);
assert.equal((story.match(/<h1\b/g)||[]).length,1);
assert.ok(story.includes('https://www.obizee.com/stories/crochetbypriya/'));
assert.ok(!/<img\b/.test(story),'No invented merchant photograph');
for(const file of ['/blog/index.html','/editorial-preview/index.html'])assert.ok(fs.readFileSync(out+file,'utf8').includes('href="/stories/crochetbypriya/"'));
console.log(JSON.stringify({explainers:25,owningRoutes:new Set(rows.map(r=>r.route)).size,articlesWithoutAccordion:articles.length,attributedFeedbackPages:1,liveVerification:false}));
