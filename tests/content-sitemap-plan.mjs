import fs from 'node:fs';
const names=['articles','acquisition-final','commercial','help','resources','hubs'];
const content=names.flatMap(n=>JSON.parse(fs.readFileSync(`src/content/seo-drafts/${n}.json`))).map(r=>'https://www.obizee.com'+r.route);
content.push('https://www.obizee.com/stories/crochetbypriya/');
for(let n=2;n<=16;n++)content.push(`https://www.obizee.com/blog/page/${n}/`);
const existing=new Set(fs.readdirSync('public').filter(n=>/^sitemap.*\.xml$/.test(n)&&n!=='sitemap-content.xml').flatMap(n=>{
 const xml=fs.readFileSync('public/'+n,'utf8');
 return xml.includes('<urlset')?[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]):[];
}));
const additions=[...new Set(content)].filter(u=>!existing.has(u)).sort();
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+additions.map(u=>`  <url><loc>${u}</loc></url>`).join('\n')+'\n</urlset>\n';
process.stdout.write(xml);
