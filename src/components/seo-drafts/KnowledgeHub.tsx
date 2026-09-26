import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type {Metadata} from 'next';
import {contentMetadata} from './page-metadata';
import articles from '@/content/seo-drafts/articles.json';
import finalArticles from '@/content/seo-drafts/acquisition-final.json';
import hubs from '@/content/seo-drafts/hubs.json';
import resources from '@/content/seo-drafts/resources.json';
import commercial from '@/content/seo-drafts/commercial.json';
import HelpSearch from './HelpSearch';
import {EditorialHeader} from './ArticlePage';
import './editorial.css';import './knowledge.css';
export function hubMetadata(key:string):Metadata{const h=hubs.find(h=>h.key===key)!;return contentMetadata(h);}
export default function KnowledgeHub({hubKey}:{hubKey:string}){
 const h=hubs.find(h=>h.key===hubKey)!;
 const matches=hubKey==='guides'?[...articles.filter(a=>a.id<10),...commercial.map(p=>({...p,id:1000+p.id})),...finalArticles]:articles.filter(a=>h.categories.includes(a.category));
 return <div className="ed-shell"><EditorialHeader/><main id="main"><ContentDiscovery route={h.route} title={h.title} description={h.description} kind="CollectionPage"/><section className="ed-hero"><p className="ed-eyebrow">{editorialPreview ? 'LEARNING LIBRARY / UNPUBLISHED' : 'LEARNING LIBRARY'}</p><h1>{h.title}</h1><p className="ed-deck">{h.description}</p></section><div className="kh-hub">{h.intro.map(p=><p key={p}>{p}</p>)}<section className="kh-path"><h2>Your reading path</h2><ol>{h.path.map(p=><li key={p}>{p}</li>)}</ol></section>{hubKey==='help'?<><HelpSearch/><section id="support-options-heading"><h2>Need to report an issue?</h2><p>Start with <a href="/help/support-safe-evidence/">a safe, useful support report</a>. This page does not create a ticket or promise a response time.</p></section></>:hubKey==='resources'?<section><h2>Choose a working resource</h2><div className="ed-cards">{resources.map(r=><a key={r.key} href={r.route}><span>Calculator / planner</span><h3>{r.title}</h3><p>{r.description}</p></a>)}</div></section>:<section><h2>{hubKey==='guides'?'Foundation guides':'Read the guides'}</h2><ul className="kh-links">{matches.map(a=><li key={a.id}><a href={a.route}>{a.title}</a></li>)}</ul></section>}<section id="resources-heading"><h2>Explore another part of the library</h2><ul className="kh-links">{hubs.filter(b=>b.key!==h.key).map(b=><li key={b.key}><a href={b.route}>{b.title}</a></li>)}</ul></section></div></main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><a href="/blog/">All articles</a></footer></div>;
}
