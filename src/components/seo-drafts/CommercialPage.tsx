import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type {Metadata} from 'next';
import {contentMetadata} from './page-metadata';
import FeatureExplainers from './FeatureExplainers';
import pages from '@/content/seo-drafts/commercial.json';
import {EditorialHeader} from './ArticlePage';
import './editorial.css';import './knowledge.css';
export function commercialMetadata(key:string):Metadata{const p=pages.find(p=>p.key===key)!;return contentMetadata(p);}
export default function CommercialPage({pageKey}:{pageKey:string}){
 const p=pages.find(p=>p.key===pageKey)!;
 const evaluation=['order-workspace','stock-tracking','social-seller-workflow'].includes(pageKey)?<section className="ed-endnote"><h2>Compare the workflow before choosing software</h2><p>Already handling orders? Use <a data-content-next="true" href="/guides/choose-order-management-software/">the practical business-software checklist</a> to test a representative order, the money record and the handoff to the next person. You can use the checklist with any provider.</p></section>:null;
 return <div className="ed-shell"><EditorialHeader/><main id="main"><ContentDiscovery route={p.route} title={p.title} description={p.description}/><section className="ed-hero"><p className="ed-eyebrow">oBizee / CAPABILITY &amp; BUSINESS FIT</p><h1>{p.title}</h1><p className="ed-deck">{p.description}</p></section><div className="kh-article"><article className="ed-copy">{p.sections.map(([h,t])=><section key={h}><h2>{h}</h2><p>{t}</p></section>)}<FeatureExplainers route={p.route}/><h2>Bring this checklist to your evaluation</h2><ul>{p.checks.map(c=><li key={c}>{c}</li>)}</ul>{evaluation}<div className="ed-endnote"><h2>Check the workflow that matters to your business</h2><p><a href={'/help/'+p.help+'/'}>Read the relevant setup and troubleshooting guide</a>, then <a data-content-next="true" href="/signup/">explore getting started with oBizee</a>. Confirm current account availability and terms before committing.</p></div></article><aside className="kh-verification"><strong>Availability and evidence</strong><p>Descriptions checked against local V1 app or storefront source on 26 September 2026. No live account walkthrough, universal plan entitlement or measured business outcome is claimed. Confirm the workflow in your own account before relying on it.</p></aside><p><a href="/guides/">Browse the complete learning library</a></p></div></main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><span>Choose around the work you need to complete.</span></footer></div>;
}
