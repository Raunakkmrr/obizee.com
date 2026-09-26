import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type { Metadata } from 'next';
import {contentMetadata} from './page-metadata';
import help from '@/content/seo-drafts/help.json';
import {EditorialHeader} from './ArticlePage';
import './editorial.css';
import './knowledge.css';
export function helpMetadata(key:string):Metadata {const a=help.find(a=>a.key===key)!;return contentMetadata({title:a.title,description:a.intro,route:a.route,isHelp:true});}
export default function HelpPage({helpKey}:{helpKey:string}) {
 const a=help.find(a=>a.key===helpKey)!;
 const related=help.filter(b=>b.category===a.category&&b.key!==a.key).slice(0,3);
 return <div className="ed-shell"><EditorialHeader/><main id="main"><ContentDiscovery route={a.route} title={a.title} description={a.intro} kind="TechArticle"/><section className="ed-hero"><p className="ed-eyebrow">HELP / {a.category}</p><h1>{a.title}</h1><p className="ed-deck">{a.intro}</p></section><div className="kh-article"><aside className="kh-verification"><strong>Source-checked guidance · 26 September 2026</strong><p>Checked against the current local V1 app or storefront source. These instructions have not been independently executed in a live account. If your screen differs, confirm the app version before changing business data.</p></aside><article className="ed-copy"><h2>What to do</h2><ol>{a.steps.map(s=><li key={s}>{s}</li>)}</ol><h2>What you should see</h2><p>{a.success}</p><h2>If it does not work</h2><p>{a.troubleshoot}</p><p>For support, include the screen name, time, app version and a redacted error. Never share passwords, OTPs, payment PINs or secret keys.</p></article><section><h2>Related help</h2><ul>{related.map(b=><li key={b.key}><a href={b.route}>{b.title}</a></li>)}</ul><p><a href="/help/">Search all 100 help articles</a> · <a href="/guides/">Business guides</a></p></section></div></main><footer className="ed-footer"><strong>oBizee / HELP</strong><span>Guidance only. No account action is performed here.</span></footer></div>;
}
