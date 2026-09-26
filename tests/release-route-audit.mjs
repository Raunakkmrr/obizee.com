import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT;
assert.ok(out&&fs.existsSync(path.join(out,'index.html')),'Set EDITORIAL_OUT to the built export');
const read=n=>JSON.parse(fs.readFileSync('src/content/seo-drafts/'+n+'.json'));
const programme=[...read('articles'),...read('acquisition-final'),...read('commercial'),...read('help'),...read('resources'),...read('hubs')];
const normal=p=>p==='/'?p:p.replace(/\/+$/,'')+'/';
const content=new Set(programme.map(p=>normal(p.route)));
content.add('/stories/crochetbypriya/');
const all=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){
 if(e.name.startsWith('.')||e.name==='_next')continue;
 const file=path.join(dir,e.name);
 if(e.isDirectory())walk(file);
 else if(e.name==='index.html')all.push({route:normal('/'+path.relative(out,dir).split(path.sep).filter(Boolean).join('/')),file});
}}
walk(out);
all.sort((a,b)=>a.route.localeCompare(b.route));
const routes=new Set(all.map(r=>r.route));
const physicalByFold=new Map(all.map(r=>[r.route.toLowerCase(),r.route]));
const intended=new Set(Object.keys(JSON.parse(fs.readFileSync('.next/prerender-manifest.json','utf8')).routes).map(normal));
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"');
const missingLinks=new Map(), canonicalGroups=new Map();
const inventory=all.map(({route,file})=>{
 const html=fs.readFileSync(file,'utf8');
 const canonical=decode(html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]||'');
 if(canonical){const group=canonicalGroups.get(canonical)||[];group.push(route);canonicalGroups.set(canonical,group);}
 if([...content].some(r=>r.toLowerCase()===route.toLowerCase()))for(const m of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)){
  const raw=decode(m[1]);let url;
  try{url=new URL(raw,'https://www.obizee.com'+route);}catch{continue;}
  if(url.origin!=='https://www.obizee.com')continue;
  const target=normal(decodeURIComponent(url.pathname));
  if(!intended.has(target)&&!routes.has(target)&&!fs.existsSync(path.join(out,url.pathname))){
   const sources=missingLinks.get(target)||new Set();sources.add(route);missingLinks.set(target,sources);
  }
 }
 return {route,classification:content.has(route)?'content':route==='/editorial-preview/'?'private-preview':/^\/blog\/page\/\d+\/$/.test(route)?'pagination':'inherited',canonical,noindex:/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html),mainCount:(html.match(/<main\b/g)||[]).length,h1Count:(html.match(/<h1\b/g)||[]).length};
});
const sitemapRows=[];
for(const name of fs.readdirSync('public').filter(n=>/^sitemap.*\.xml$/.test(n))){
 const xml=fs.readFileSync('public/'+name,'utf8');
 if(!xml.includes('<urlset'))continue;
 for(const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)){
  const url=new URL(decode(match[1]));
  sitemapRows.push({sitemap:name,url:url.href,route:normal(url.pathname),host:url.hostname});
 }
}
const map=new Map();for(const row of sitemapRows){const k=row.host+row.route;map.set(k,[...(map.get(k)||[]),row.sitemap]);}
const current=new Set(sitemapRows.filter(r=>r.host==='www.obizee.com').map(r=>r.route));
const report={
 buildId:fs.readFileSync('.next/BUILD_ID','utf8').trim(),
 counts:{exportedIndexPages:all.length,programme:programme.length,contentIncludingFeedback:content.size,inherited:inventory.filter(r=>r.classification==='inherited').length,pagination:inventory.filter(r=>r.classification==='pagination').length},
 missingContentRoutes:[...content].filter(r=>!routes.has(r)),
 missingIntendedContentRoutes:[...content].filter(r=>!intended.has(r)),
 caseMismatches:[...content].filter(r=>!routes.has(r)&&physicalByFold.has(r.toLowerCase())).map(route=>({route,physical:physicalByFold.get(route.toLowerCase())})),
 brokenContentLinks:[...missingLinks].map(([target,sources])=>({target,sources:[...sources]})),
 sitemap:{entries:sitemapRows.length,uniqueRoutes:current.size,programmeCovered:programme.filter(r=>current.has(normal(r.route))).length,missingContent:[...content].filter(r=>!current.has(r)),missingExport:sitemapRows.filter(r=>r.host==='www.obizee.com'&&!routes.has(r.route)),foreignHosts:sitemapRows.filter(r=>r.host!=='www.obizee.com'),duplicateEntries:[...map].filter(([,v])=>v.length>1).map(([route,files])=>({route,files}))},
 duplicateCanonicals:[...canonicalGroups].filter(([,v])=>v.length>1).map(([canonical,owners])=>({canonical,owners})),
 inheritedCapitalisedAliases:inventory.filter(r=>r.classification==='inherited'&&/[A-Z]/.test(r.route)),
 inventory,
 publicationAllowed:false,
 note:'Local static audit only. Missing legacy sitemap entries are not live404 findings. No deployment, indexing or analytics change.'
};
if(process.argv.includes('--full'))console.log(JSON.stringify(report,null,2));
else {
 const {inventory, ...summary}=report;
 summary.sitemap={...report.sitemap,missingContentCount:report.sitemap.missingContent.length,missingContent:report.sitemap.missingContent.slice(0,5)};
 summary.caseMismatchCount=report.caseMismatches.length;
 summary.caseMismatches=report.caseMismatches.slice(0,12);
 summary.missingContentRouteCount=report.missingContentRoutes.length;
 summary.missingContentRoutes=report.missingContentRoutes.slice(0,12);
 summary.inheritedCapitalisedAliasCount=report.inheritedCapitalisedAliases.length;
 summary.inheritedCapitalisedAliases=report.inheritedCapitalisedAliases.slice(0,8);
 console.log(JSON.stringify(summary,null,2));
}
