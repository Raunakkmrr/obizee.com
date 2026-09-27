import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type { Metadata } from 'next';
import {contentMetadata} from './page-metadata';
import help from '@/content/seo-drafts/help.json';
import {HelpHeader,HelpFooter} from './HelpChrome';
import HelpNavigation from './HelpNavigation';
import './editorial.css';
import './knowledge.css';
export function helpMetadata(key:string):Metadata {const a=help.find(a=>a.key===key)!;return contentMetadata({title:a.title,description:a.intro,route:a.route,isHelp:true});}
export default function HelpPage({helpKey}:{helpKey:string}) {
 const a=help.find(a=>a.key===helpKey)!;
 const related=help.filter(b=>b.category===a.category&&b.key!==a.key).slice(0,3);
 return <div className="hc-shell"><HelpHeader/><main id="main" className="hc-article-layout"><HelpNavigation current={a.route}/><div className="hc-article-main"><ContentDiscovery route={a.route} title={a.title} description={a.intro} kind="TechArticle"/><header className="hc-article-heading"><p className="hc-eyebrow">{a.category}</p><h1>{a.title}</h1><p>{a.intro}</p><span>Source checked · 26 September 2026</span></header><aside className="hc-verification"><strong>Source-checked guidance</strong><p>Checked against the current local V1 app or storefront source. These instructions have not been independently executed in a live account. If your screen differs, confirm the app version before changing business data.</p></aside><article className="hc-copy"><h2>What to do</h2><ol>{a.steps.map(s=><li key={s}>{s}</li>)}</ol><h2>What you should see</h2><p>{a.success}</p><h2>If it does not work</h2><p>{a.troubleshoot}</p><p>For support, include the screen name, time, app version and a redacted error. Never share passwords, OTPs, payment PINs or secret keys.</p></article><section className="hc-related"><h2>Related help</h2><ul>{related.map(b=><li key={b.key}><a href={b.route}>{b.title} →</a></li>)}</ul><p><a href="/help/">Search all 100 help articles</a> · <a href="/guides/">Business guides</a></p></section></div></main><HelpFooter/></div>;
}
