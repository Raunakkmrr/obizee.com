import fs from 'node:fs';import assert from 'node:assert/strict';import crypto from 'node:crypto';import path from 'node:path';
const growth=process.argv[2];assert.ok(growth,'growth path');
const read=n=>JSON.parse(fs.readFileSync('src/content/seo-drafts/'+n+'.json'));
const prior=read('articles'),final=read('acquisition-final'),help=read('help'),commercial=read('commercial');
const manifest=JSON.parse(fs.readFileSync(path.join(growth,'SEO-PROGRAMME-181-MANIFEST.json')));
const inventory=JSON.parse(fs.readFileSync(path.join(growth,'SITESPLACED-BLOG-TITLES-2026-09-26.json'))).topics;
let checks=0;const ok=(v,m)=>{assert.ok(v,m);checks++;};
for(const a of final){
 const planned=manifest.acquisition.find(p=>p.id===a.id);ok(planned&&planned.title===a.title,'manifest '+a.id);
 ok(inventory.some(t=>t.url===planned.reference.url&&t.title===planned.reference.title),'observed SitesPlaced topic '+a.id);
 ok(!inventory.some(t=>t.title.toLowerCase()===a.title.toLowerCase()),'original title '+a.id);
 ok(fs.readFileSync(path.join(growth,'SEO-ARTICLE-'+a.id+'-DRAFT.md'),'utf8').includes(a.body),'whole draft parity '+a.id);
 ok(a.body.split(/\s+/).length>=350,'focused guide completeness '+a.id);
 ok(!/\bTODO\b|PLACEHOLDER/.test(a.body),'no placeholders '+a.id);
}
for(const a of help){
 const master=fs.readFileSync(path.join(growth,'SEO-HELP-'+String(a.id).padStart(3,'0')+'-DRAFT.md'),'utf8');
 for(const t of [a.intro,...a.steps,a.success,a.troubleshoot])ok(master.includes(t),'help master '+a.id);
}
for(const a of commercial){
 const master=fs.readFileSync(path.join(growth,'SEO-COMMERCIAL-'+String(a.id+1).padStart(3,'0')+'-DRAFT.md'),'utf8');
 for(const t of a.sections.flat())ok(master.includes(t),'commercial master '+a.id);
}
const sourceMap=JSON.parse(fs.readFileSync(path.join(growth,'SEO-HELP-100-SOURCE-MAP.json')));
const workspace=path.resolve(growth,'../..');
for(const [alias,s] of Object.entries(sourceMap.sources))ok(crypto.createHash('sha256').update(fs.readFileSync(path.join(workspace,s.path))).digest('hex')===s.sha256,'source unchanged '+alias);
const grams=t=>{const w=t.toLowerCase().replace(/https?:\/\/\S+/g,'').match(/[a-z0-9]+/g)||[];return new Set(w.slice(0,-9).map((_,i)=>w.slice(i,i+10).join(' ')));};
const all=[...prior,...final],sets=all.map(a=>grams(a.body));let peak={ratio:0,ids:[]};
for(let i=prior.length;i<all.length;i++)for(let j=0;j<i;j++){
 const share=[...sets[i]].filter(g=>sets[j].has(g)).length,ratio=share/Math.min(sets[i].size,sets[j].size);
 if(ratio>peak.ratio)peak={ratio,ids:[all[i].id,all[j].id]};ok(ratio<.12,'internal overlap '+all[i].id+'/'+all[j].id);
}
const words=t=>t.trim().split(/\s+/).length;
console.log(JSON.stringify({result:'pass',checks,priorArticles:prior.length,newAcquisition:final.length,newAcquisitionWords:final.reduce((n,a)=>n+words(a.body),0),newAcquisitionRange:[Math.min(...final.map(a=>words(a.body))),Math.max(...final.map(a=>words(a.body)))],helpWords:help.reduce((n,a)=>n+words([a.intro,...a.steps,a.success,a.troubleshoot].join(' ')),0),commercialSectionWords:commercial.reduce((n,a)=>n+words(a.sections.flat().join(' ')),0),sourceFiles:Object.keys(sourceMap.sources).length,highestInternalTenWordOverlap:peak,externalPlagiarismScan:false},null,2));
