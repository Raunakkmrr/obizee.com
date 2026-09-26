import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT;assert.ok(out);
const names=['articles','acquisition-final','commercial','help','resources','hubs'];
const rows=names.flatMap(n=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${n}.json`)));
rows.push({route:'/stories/crochetbypriya/'});
for(const {route} of rows){
 const html=fs.readFileSync(path.join(out,route,'index.html'),'utf8');
 const robots=html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/)?.[1];
 assert.equal(robots,'index, follow',route+' public indexing');
 for(const phrase of ['EDITORIAL PREVIEW','Unpublished · for review','WORKING RESOURCE / UNPUBLISHED','LEARNING LIBRARY / UNPUBLISHED','Draft capability evidence','This is an unpublished commercial draft.'])assert.ok(!html.includes(phrase),route+': '+phrase);
 assert.ok(!html.includes('href="/editorial-preview/"'),route+' private link');
}
const privateFile=path.join(out,'editorial-preview/index.html');
if(fs.existsSync(privateFile)){
 const html=fs.readFileSync(privateFile,'utf8');
 assert.ok(!html.includes('500-page content programme'));
 assert.ok(/noindex/.test(html));
}
assert.ok(fs.readFileSync(path.join(out,'help/direct-pay-bank/index.html'),'utf8').includes('not been independently executed in a live account'));
assert.ok(fs.readFileSync(path.join(out,'stories/crochetbypriya/index.html'),'utf8').includes('No direct interview or measured business outcome is claimed'));
console.log(JSON.stringify({publicContentPages:rows.length,draftChromeAbsent:true,publicIndexing:true,privateReviewClosed:true,evidenceCaveatsPreserved:true,live:false}));
