import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type {Metadata} from 'next';
import {contentMetadata} from './page-metadata';
import resources from '@/content/seo-drafts/resources.json';
import {EditorialHeader} from './ArticlePage';
import ResourceCalculator from './ResourceCalculator';
import './editorial.css';
export function resourceMetadata(key:string):Metadata {
 const r=resources.find(r=>r.key===key)!;
 return contentMetadata(r);
}
export default function ResourcePage({resourceKey}:{resourceKey:string}) {
 const r=resources.find(r=>r.key===resourceKey)!;
 return <div className="ed-shell"><EditorialHeader/><main id="main"><ContentDiscovery route={r.route} title={r.title} description={r.description}/><section className="ed-hero"><p className="ed-eyebrow">{editorialPreview ? 'WORKING RESOURCE / UNPUBLISHED' : 'CALCULATOR & PLANNER'}</p><h1>{r.title}</h1><p className="ed-deck">{r.description}</p></section><div className="ed-resource-body"><ResourceCalculator resource={r}/><article className="ed-copy"><h2>How the calculation works</h2><p>{r.formula}</p><h2>Worked example</h2><p>{r.example}</p><h2>Use the result carefully</h2><p>{r.limit}</p><p>Choose a consistent time period and cost boundary. Keep a note of where each input came from, then compare the scenario with actual results. Money is displayed in rupees to two decimal places; calculation precision and rounding are described above.</p><h2>Before using this in your business</h2><ol><li>Replace every example input with a value you can explain.</li><li>Check that taxes, refunds, shipping, labour and fixed costs are included or excluded deliberately.</li><li>Run a conservative scenario as well as your expected case.</li><li>Do not treat the output as a price quotation, tax advice, credit decision or automatic store setting.</li></ol><p><a href={r.related}>Read the related decision guide</a> · <a href="/resources/">All calculators and planners</a></p><p>There is no account connection or saved history. Reloading clears your entries. Print only if you want a local record; use non-sensitive inputs.</p></article></div></main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><a href="/blog/">Return to the article library</a></footer></div>;
}
