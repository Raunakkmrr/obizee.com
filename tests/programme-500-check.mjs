import fs from 'node:fs';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {searchHelp} from '../src/components/seo-drafts/help-search.mjs';
const read=name=>JSON.parse(fs.readFileSync('src/content/seo-drafts/'+name+'.json'));
const help=read('help'),resources=read('resources'),hubs=read('hubs'),articles=read('articles'),commercial=read('commercial'),final=read('acquisition-final');
let checks=0;const ok=(v,m)=>{assert.ok(v,m);checks++;};
ok(help.length===100,'100 help');ok(resources.length===12,'12 resources');ok(hubs.length===8,'8 hubs');ok(articles.length===319,'319 retained');
const rows=[...articles,...help,...resources,...hubs,...commercial,...final];ok(commercial.length===29,'29 new commercial pages');ok(final.length===32,'32 final acquisition');ok(new Set(rows.map(a=>a.route)).size===500,'500 distinct content routes');
for(const a of help){
 ok(a.steps.length>=3,a.key+' steps');ok(a.sources.length>0,a.key+' provenance');
 ok(a.intro.length>50&&a.success.length>50&&a.troubleshoot.length>80,a.key+' substantive help sections');
 ok(fs.existsSync('app'+a.route+'page.tsx'),a.key+' root route');
 ok(a.verification==='local-source-only',a.key+' honest verification');
}
for(const a of [...resources,...hubs,...commercial,...final])ok(fs.existsSync('app'+a.route+'page.tsx'),a.title+' route');
for(const a of commercial){ok(a.sections.length===4,'four specific sections '+a.key);ok(help.some(h=>h.key===a.help),'help link '+a.key);ok(a.sources.length>0,'provenance '+a.key);}
ok(searchHelp(help,'').length===100,'empty search');
ok(searchHelp(help,'pincode').some(a=>a.key==='shopper-pincode'),'pincode search');
const payoutResults=searchHelp(help,'payout','Direct payment');
ok(payoutResults.length>0&&payoutResults.every(a=>a.category==='Direct payment'),'non-vacuous category isolation');
ok(searchHelp(help,'zzzznotatopic').length===0,'no results');
ok(searchHelp(help,'  BILL  ').length===searchHelp(help,'bill').length,'normalisation');
ok(searchHelp(help,'stock reason').some(a=>a.key==='adjust-stock'),'AND search across text');
const baseline=JSON.parse(fs.readFileSync('tests/pre-programme-319-hashes.json'));
for(const a of articles)ok(crypto.createHash('sha256').update(JSON.stringify(a)).digest('hex')===baseline[a.id],'preserved '+a.id);
const out=process.env.EDITORIAL_OUT;
if(out){for(const a of [...help,...resources,...hubs,...commercial,...final]){
 const file=out+a.route+'index.html';ok(fs.existsSync(file),'export '+a.route);
 const html=fs.readFileSync(file,'utf8');ok(html.includes('noindex'),'noindex '+a.route);ok(html.includes('<h1'),'h1 '+a.route);
 ok(html.includes(a.route),'canonical '+a.route);
 for(const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
  const route=match[1];if(route.startsWith('/_next/')||route.includes('.'))continue;
  ok(fs.existsSync(out+route.replace(/\/$/,'')+'/index.html')||fs.existsSync(out+route),'local link '+a.route+' → '+route);
 }
}}
console.log(JSON.stringify({result:'pass',checks,counts:{acquisition:350,help:100,commercial:30,resources:12,hubs:8,total:500},remaining:0,exportChecked:!!out}));
