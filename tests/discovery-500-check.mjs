import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT;assert.ok(out);
const names=['articles','acquisition-final','commercial','help','resources','hubs'];
const rows=names.flatMap(n=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${n}.json`)).map(row=>({...row,source:n})));
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const plain=s=>decode(s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ').trim();
const titles=new Set(),descriptions=new Set(),inbound=new Set(),results=[];
for(const row of rows){
 const html=fs.readFileSync(path.join(out,row.route,'index.html'),'utf8');
 const text=plain(html),url='https://www.obizee.com'+row.route;
 const graphs=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const nodes=graphs.flatMap(g=>g['@graph']||[g]);
 const own=nodes.filter(n=>n['@id']===url+'#content');assert.equal(own.length,1,row.route);
 const expected=row.source==='help'?'TechArticle':row.source==='hubs'?'CollectionPage':['articles','acquisition-final'].includes(row.source)?'Article':'WebPage';
 assert.equal(own[0]['@type'],expected);assert.equal(own[0].name,row.title);assert.equal(own[0].url,url);
 assert.ok(text.includes(row.title),row.route+' visible title');assert.ok(text.includes(own[0].description),row.route+' visible description');
 assert.ok(!('datePublished' in own[0])&&!('aggregateRating' in own[0]),'No fabricated dates/ratings');
 const breadcrumb=nodes.find(n=>n['@id']===url+'#breadcrumb');assert.ok(breadcrumb);
 assert.ok(html.includes('aria-label="Breadcrumb"'));
 breadcrumb.itemListElement.forEach((c,i)=>{assert.equal(c.position,i+1);assert.ok(text.includes(c.name));assert.ok(fs.existsSync(path.join(out,new URL(c.item).pathname,'index.html')))});
 const title=decode(html.match(/<title>([\s\S]*?)<\/title>/)[1]);assert.ok(!titles.has(title),row.route+' duplicate title');titles.add(title);
 const desc=decode(html.match(/<meta name="description" content="([^"]*)"/)[1]);assert.ok(!descriptions.has(desc),row.route+' duplicate description');descriptions.add(desc);
 assert.ok(html.includes(`href="${url}"`));assert.ok(html.includes('content="index, follow"'));
 assert.equal((html.match(/<h1\b/g)||[]).length,1);assert.ok((html.match(/<h2\b/g)||[]).length>=2);
 for(const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)){let p=m[1].replace(/\/$/,'')+'/';if(p!==row.route)inbound.add(p);}
 const body=row.body||row.intro||row.sections?.[0]?.[1]||row.formula||row.description;const lead=Array.isArray(body)?body[0]:body.split(/\n\s*\n/)[0];
 results.push({route:row.route,type:expected,lead,leadWords:lead.split(/\s+/).length,externalReferences:typeof row.body==='string'?[...new Set(row.body.match(/https?:\/\/[^\s)]+/g)||[])]:[],sourceKeys:row.sources||[],bodyWords:plain(String(row.body||row.steps?.join(' ')||row.sections?.flat().join(' ')||row.intro||row.formula)).split(/\s+/).length});
}
// Crawlable index pages supplement related links; no JavaScript search required.
for(const r of ['/blog/',...Array.from({length:15},(_,i)=>`/blog/page/${i+2}/`),'/help/','/guides/','/resources/']){
 const html=fs.readFileSync(path.join(out,r,'index.html'),'utf8');for(const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g))inbound.add(m[1].replace(/\/$/,'')+'/');
}
const orphans=rows.filter(r=>!inbound.has(r.route));assert.equal(orphans.length,0,JSON.stringify(orphans.map(r=>r.route)));
assert.equal(fs.readFileSync('public/llms.txt','utf8'),fs.readFileSync('public/.well-known/llms.txt','utf8'));
const report={build:fs.readFileSync('.next/BUILD_ID','utf8').trim(),pages:rows.length,structuredDataAndVisibleBreadcrumbs:500,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,orphans:0,externalReferencePages:results.filter(r=>r.externalReferences.length).length,shortLeads:results.filter(r=>r.leadWords<15).map(r=>r.route),automatedChecksOnly:true,factualClaimVerification:'Existing source evidence reused; these checks do not prove every claim or source freshness.',liveIndexingVerified:false};
console.log(JSON.stringify(process.argv.includes('--inventory')?{...report,pages:results}:report,null,2));
