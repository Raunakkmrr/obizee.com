import fs from 'node:fs';
import assert from 'node:assert/strict';
const out=process.env.EDITORIAL_OUT;
assert.ok(out,'Set EDITORIAL_OUT');
const read=n=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${n}.json`,'utf8'));
const rows=['articles','acquisition-final','help','commercial','resources','hubs'].flatMap(read);
let checks=0;const failures=[];
const check=(condition,route,message)=>{checks++;if(!condition)failures.push({route,message});};
for(const row of rows){
 const html=fs.readFileSync(`${out}${row.route}index.html`,'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 check(new Set(ids).size===ids.length,row.route,'No duplicate IDs');
 check((html.match(/<h1\b/g)||[]).length===1,row.route,'One primary heading');
 check((html.match(/<main\b/g)||[]).length===1,row.route,'One main landmark');
 check(ids.includes('main'),row.route,'Skip-link target exists');
 check(!/href="\/editorial-preview\//.test(html),row.route,'Reader navigation does not depend on a draft-only route');
 for(const m of html.matchAll(/href="#([^"]+)"/g))check(ids.includes(m[1]),row.route,`Anchor ${m[1]} exists`);
 for(const m of html.matchAll(/<(input|textarea|select)\b[^>]*>/g)){
  if(/type="hidden"/.test(m[0]))continue;
  const id=m[0].match(/\bid="([^"]+)"/)?.[1];
  // Explicit or enclosing label; this checks server markup, not screen-reader behaviour.
  const prefix=html.slice(0,m.index);
  const enclosing=prefix.lastIndexOf('<label')>prefix.lastIndexOf('</label>');
  check(!!(m[0].match(/aria-label(?:ledby)?="[^"]+"/)||enclosing||(id&&html.includes(`for="${id}"`))),row.route,'Form control has a label');
 }
 for(const m of html.matchAll(/<img\b[^>]*>/g))check(/\balt="[^"]*"/.test(m[0]),row.route,'Image has an alt attribute');
}
console.log(JSON.stringify({pages:rows.length,checks,failures,browserAccessibilityAudit:false},null,2));
if(failures.length)process.exitCode=1;
