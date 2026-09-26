import fs from 'node:fs';
import assert from 'node:assert/strict';
const articles=[...JSON.parse(fs.readFileSync('src/content/seo-drafts/articles.json','utf8')),...JSON.parse(fs.readFileSync('src/content/seo-drafts/acquisition-final.json','utf8'))];
const routes=[{route:'/editorial-preview/',title:articles.length+' complete drafts'},...articles];
let checked=0;
for(let i=0;i<routes.length;i+=8){
 await Promise.all(routes.slice(i,i+8).map(async a=>{
  const response=await fetch('http://127.0.0.1:3276'+a.route,{signal:AbortSignal.timeout(15000)});
  assert.equal(response.status,200,a.route);
  assert.equal(response.headers.get('x-robots-tag'),'noindex, nofollow');
  assert.equal(response.headers.get('cache-control'),'no-store');
  const html=await response.text();
  const decoded=html.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"');
  assert.ok(decoded.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').includes(a.title),a.route+' title');
  checked++;
 }));
}
console.log(JSON.stringify({routes:checked,status:200,robots:'noindex, nofollow',cache:'no-store',formsSubmitted:0}));
