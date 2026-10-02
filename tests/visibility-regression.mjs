import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT || 'out';
const read=n=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${n}.json`));
const guides=[...read('articles'),...read('acquisition-final')];
const questions=read('reader-questions');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const html=r=>fs.readFileSync(path.join(out,r,'index.html'),'utf8');
const hrefs=s=>[...s.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(m=>decode(m[1]));
const text=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ')).replace(/\s+/g,' ');
const hubs=read('hubs').filter(h=>h.categories.length);
let assigned=0;
for(const a of guides){
 const own=html(a.route);
 const parent=own.match(/class="ed-topic-parent"><a href="([^"]+)"/);assert.ok(parent,a.route+' topic');
 assert.ok(hubs.some(h=>h.route===parent[1]),a.route+' known hub');
 assert.ok(hrefs(html(parent[1])).includes(a.route),a.route+' listed in its hub');assigned++;
 const next=own.match(/<section class="ed-related">([\s\S]*?)<\/section>/)?.[1]||'';
 const links=hrefs(next);assert.equal(links.length,3);assert.equal(new Set(links).size,3);assert.ok(!links.includes(a.route));
 for(const link of links)assert.ok(guides.some(g=>g.route===link),link);
 if(a.id===7)for(const link of links)assert.equal(guides.find(g=>g.route===link).category,'Stock','stock guide recommends stock guides');
}
for(const q of questions){const own=html(q.route);assert.ok(text(own).includes(q.question));assert.ok(text(own).includes(q.answer));assert.ok(hrefs(own).includes(q.next));assert.ok(fs.existsSync(path.join(out,q.next,'index.html')));}
for(const q of questions.slice(0,6))assert.ok(hrefs(html('/')).includes(q.route),'homepage question '+q.route);
for(const r of ['/features/','/business-journey/','/customer-testimonials/','/'])assert.equal((html(r).match(/<h1\b/g)||[]).length,1,r);
for(const r of ['/compare/best-dukaan-alternatives/','/compare/obizee-vs-instamojo/','/compare/best-instamojo-alternatives/','/compare/obizee-alternatives/','/compare/best-bikayi-alternatives/'])assert.ok(hrefs(html('/')).includes(r),'orphan recovery '+r);
assert.ok(!html('/blog/profitable-online-business-ideas-india-2026/').includes('href="/for/handmade-crafts"'));
assert.equal((html('/features/').match(/"@type":"FAQPage"/g)||[]).length,1,'one feature FAQ graph');
assert.ok(!text(html('/guides/selling-online/')).includes('5,000 weekly impressions'));
assert.ok(text(html('/guides/')).includes('AI assistance'));
assert.ok(fs.readFileSync('public/robots.txt','utf8').includes('User-agent: OAI-SearchBot\nAllow: /'));
console.log(JSON.stringify({result:'pass',guidesWithReciprocalTopicLinks:assigned,questionAnswers:questions.length,homeQuestionLinks:6,headings:4,recoveredComparisonLinks:5,featureFaqGraphs:1}));
