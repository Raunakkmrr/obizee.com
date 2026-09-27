import fs from 'node:fs';
import assert from 'node:assert/strict';
import {searchHelp} from '../src/components/seo-drafts/help-search.mjs';
const help=JSON.parse(fs.readFileSync('src/content/seo-drafts/help.json'));
const out=process.env.EDITORIAL_OUT;assert.ok(out);
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#x27;|&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const home=clean(fs.readFileSync(out+'/help/index.html','utf8'));
assert.equal(help.length,100);
const categories=[...new Set(help.map(a=>a.category))];
assert.equal((home.match(/class="hc-category"/g)||[]).length,categories.length);
assert.ok(home.includes('id="help-query"')&&home.includes('id="help-category"'));
for(const c of categories)assert.equal(searchHelp(help,'',c).length,help.filter(a=>a.category===c).length);
assert.equal(searchHelp(help,'unfindable_xyz').length,0);
assert.ok(searchHelp(help,'stock').length>0);
let steps=0;
for(const a of help){
 const html=clean(fs.readFileSync(out+a.route+'index.html','utf8'));
 const text=decode(html.replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ');
 assert.ok(html.includes('class="hc-sidebar"')&&html.includes('id="help-article-picker"'),a.route);
 assert.ok(html.includes('href="'+a.route+'" aria-current="page"'),a.route);
 assert.ok(!/<details|<summary/.test(html),a.route+' no accordions');
 for(const item of help)assert.ok(html.includes('href="'+item.route+'"'),a.route+' navigation '+item.route);
 for(const s of a.steps){assert.ok(text.includes(s.replace(/\s+/g,' ')),a.route+' preserved step');steps++;}
 assert.ok(text.includes(a.success)&&text.includes(a.troubleshoot),a.route+' preserved guidance');
}
console.log(JSON.stringify({articles:100,categories:categories.length,preservedSteps:steps,sidebarLinksChecked:10000,search:true,renderedBrowserProof:false}));
