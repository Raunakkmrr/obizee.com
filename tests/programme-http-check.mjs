import fs from 'node:fs';import assert from 'node:assert/strict';
const read=n=>JSON.parse(fs.readFileSync('src/content/seo-drafts/'+n+'.json'));
const rows=[...read('articles'),...read('help'),...read('resources'),...read('hubs'),...read('commercial'),...read('acquisition-final'),{route:'/editorial-preview/',title:'351 complete drafts'},{route:'/stories/crochetbypriya/',title:'Priya Yadav'}];
let count=0;for(let i=0;i<rows.length;i+=8)await Promise.all(rows.slice(i,i+8).map(async a=>{
 const r=await fetch('http://127.0.0.1:3276'+a.route,{signal:AbortSignal.timeout(15000)});assert.equal(r.status,200,a.route);
 assert.equal(r.headers.get('x-robots-tag'),'noindex, nofollow');assert.equal(r.headers.get('cache-control'),'no-store');
 const h=(await r.text()).replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/<[^>]+>/g,'').replace(/\s+/g,' ');
 assert.ok(h.includes(a.title),a.route+' title');count++;
}));console.log(JSON.stringify({result:'pass',routes:count,noindex:true,noStore:true,mutations:0,browserInteraction:false}));
