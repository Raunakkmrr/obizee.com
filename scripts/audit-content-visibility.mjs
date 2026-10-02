import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const origin=process.env.AUDIT_ORIGIN || 'https://www.obizee.com';
const destination=process.env.AUDIT_OUTPUT;
if(!destination)throw new Error('AUDIT_OUTPUT must name a new report directory');
fs.mkdirSync(destination,{recursive:true});
if(fs.existsSync(path.join(destination,'report.json')))throw new Error('Refusing to overwrite an audit');
const sets=['articles','acquisition-final','help','commercial','resources','hubs'];
const records=sets.flatMap(kind=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${kind}.json`)).map(a=>({...a,kind})));
const xmlLinks=x=>[...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
const clean=x=>x.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]*>/g,' ').replace(/&(?:nbsp|amp|quot|#x27|#39|lt|gt);/g,' ').replace(/\s+/g,' ').trim();
async function get(route){const start=Date.now();const r=await fetch(origin+route,{signal:AbortSignal.timeout(25000)});return{status:r.status,url:r.url,ms:Date.now()-start,headers:Object.fromEntries(r.headers),html:await r.text()};}
const sitemap=await get('/sitemap.xml');
const sitemapResults=[];let urls=[];
for(const u of xmlLinks(sitemap.html)){
 const s=await get(new URL(u).pathname);sitemapResults.push({url:u,status:s.status,count:xmlLinks(s.html).length});urls.push(...xmlLinks(s.html));
}
const paths=[...new Set(['/',...urls.map(u=>new URL(u).pathname),...records.map(r=>r.route),'/stories/crochetbypriya/'])];
let index=0;const pages=[];
async function worker(){while(index<paths.length){const route=paths[index++];try{
 const r=await get(route);const h=r.html;
 const canonical=h.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]||'';
 const robots=h.match(/<meta\b[^>]*name="robots"[^>]*content="([^"]+)"/)?.[1]||'';
 const main=h.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]||h;
 const links=[...h.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)].flatMap(m=>{try{const u=new URL(m[1].replace(/&amp;/g,'&'),origin);return u.origin===origin?[u.pathname]:[];}catch{return[];}});
 const title=clean(h.match(/<title>([\s\S]*?)<\/title>/i)?.[1]||'');
 const description=h.match(/<meta\b[^>]*name="description"[^>]*content="([^"]+)"/)?.[1]||'';
 pages.push({route,status:r.status,finalUrl:r.url,ms:r.ms,bytes:Buffer.byteLength(h),canonical,robots,xRobots:r.headers['x-robots-tag']||'',title,description,h1:[...h.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m=>clean(m[1])),words:clean(main).split(/\s+/).length,links:[...new Set(links)],mainHash:crypto.createHash('sha256').update(clean(main)).digest('hex'),analytics:{ga:/googletagmanager|gtag\(/.test(h),clarity:/clarity\.ms/.test(h)}});
 }catch(e){pages.push({route,error:e.name});}if(pages.length%100===0)console.log(`Audited ${pages.length}/${paths.length}`);}}
await Promise.all(Array.from({length:4},worker));
const canonicalPath=p=>p==='/'?p:p.replace(/\/$/,'')+'/';
const lookup=new Map(pages.map(p=>[canonicalPath(p.route),p]));const distances=new Map([['/',0]]);const queue=['/'];
for(let i=0;i<queue.length;i++){const p=queue[i];for(const l of lookup.get(p)?.links||[]){const n=canonicalPath(l);if(lookup.has(n)&&!distances.has(n)){distances.set(n,distances.get(p)+1);queue.push(n);}}}
for(const p of pages){p.depth=distances.get(canonicalPath(p.route))??null;p.inbound=pages.filter(q=>q.links?.some(l=>canonicalPath(l)===canonicalPath(p.route))).length;}
const paragraphs=new Map();const content=records.map(a=>{
 const body=a.body||[a.intro,...(a.steps||[]),...(a.sections||[]).flat(),a.success,a.troubleshoot].filter(Boolean).flat().join('\n\n');
 const parts=body.split(/\n\s*\n/).filter(p=>p.split(/\s+/).length>=20);
 for(const p of parts){const key=p.trim().toLowerCase();paragraphs.set(key,[...(paragraphs.get(key)||[]),a.route]);}
 return{route:a.route,kind:a.kind,title:a.title,category:a.category||'',bodyWords:body.split(/\s+/).length,externalSources:[...new Set([...body.matchAll(/https?:\/\/[^\s)]+/g)].map(m=>m[0]).filter(s=>!s.includes('obizee.com')))],internalBodyLinks:[...body.matchAll(/\]\((\/[^)]+)\)/g)].map(m=>m[1]),verification:a.verification||null};
});
const repeated=[...paragraphs].filter(([,v])=>new Set(v).size>=3).map(([text,routes])=>({text,routes:[...new Set(routes)]})).sort((a,b)=>b.routes.length-a.routes.length);
const crawlers=[];for(const ua of ['Googlebot','OAI-SearchBot','Bingbot','PerplexityBot']){const r=await fetch(origin+'/blog/',{headers:{'User-Agent':ua},signal:AbortSignal.timeout(25000)});crawlers.push({ua,status:r.status,bytes:Buffer.byteLength(await r.text()),note:'User-agent simulation only; not a verified crawler IP'});}
const robots=await get('/robots.txt');fs.writeFileSync(path.join(destination,'robots.txt'),robots.html);
const issues=pages.filter(p=>p.error||p.status!==200||!p.title||!p.canonical||p.h1?.length!==1||/noindex|nosnippet/i.test((p.robots||'')+' '+(p.xRobots||'')));
const report={at:new Date().toISOString(),origin,sourceCounts:Object.fromEntries(sets.map(s=>[s,records.filter(r=>r.kind===s).length])),sitemapResults,sitemapDuplicates:urls.filter((u,i)=>urls.indexOf(u)!==i),pages,content,repeatedParagraphs:repeated,crawlers,issues,limits:['HTML and source audit is not Google indexed coverage','Word counts and repeated text are triage signals, not automatic quality scores','No analytics conversion, verified bot-origin or manual factual certification implied']};
fs.writeFileSync(path.join(destination,'report.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({routes:pages.length,issues:issues.length,depth:Object.fromEntries([...new Set(pages.map(p=>p.depth))].map(d=>[String(d),pages.filter(p=>p.depth===d).length])),repeatedParagraphs:repeated.length,topRepeated:repeated.slice(0,5).map(p=>({text:p.text,count:p.routes.length})),crawlers},null,2));
