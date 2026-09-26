import ContentDiscovery from './ContentDiscovery';
import {editorialPreview} from './publication-mode';
import type { Metadata } from 'next';
import {contentMetadata} from './page-metadata';
import type { ReactNode } from 'react';
import Link from 'next/link';
import priorArticles from '@/content/seo-drafts/articles.json';
import finalArticles from '@/content/seo-drafts/acquisition-final.json';
const articles=[...priorArticles,...finalArticles];
import './editorial.css';
import FeatureExplainers from './FeatureExplainers';

const localHref = (href: string) => href.replace(/^https:\/\/www\.obizee\.com(?=\/)/, '');
const related: Record<number, number[]> = { 1:[5,7,4], 2:[1,6,4], 3:[4,9,7], 4:[9,3,7], 5:[1,7,4], 6:[8,4,2], 7:[4,5,3], 8:[6,7,4], 9:[4,3,5] };
function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = localHref(link[2]);
      return /^(https?:\/\/|\/(?!\/)|#)/.test(href) ? <a key={i} href={href}>{link[1]}</a> : link[1];
    }
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i}>{part.slice(1, -1)}</code>;
    return part;
  });
}
function blocks(body: string) {
  let heading = 0;
  return body.split(/\n\s*\n/).map((block, index) => {
    const lines = block.trim().split('\n');
    if (/^#{2,3} /.test(block)) {
      const title = block.replace(/^#{2,3} /, '');
      const id = `section-${++heading}`;
      return block.startsWith('###') ? <h3 id={id} key={index}>{inline(title)}</h3> : <h2 id={id} key={index}>{inline(title)}</h2>;
    }
    if (lines[0].startsWith('|')) {
      const rows = lines.filter(l => !/^\|[\s:|-]+\|$/.test(l)).map(l => l.slice(1, -1).split('|').map(s => s.trim()));
      return <div key={index}><p className="ed-table-hint" id={`table-hint-${index}`}>More columns may be available: swipe horizontally, or focus the table and use the arrow keys.</p><div className="ed-table" tabIndex={0} role="region" aria-describedby={`table-hint-${index}`} aria-label={`Table: ${rows[0].join(", ")}`}><table><thead><tr>{rows[0].map((s, i) => <th scope="col" key={i}>{inline(s)}</th>)}</tr></thead><tbody>{rows.slice(1).map((r, i) => <tr key={i}>{r.map((s, j) => <td key={j}>{inline(s || '—')}</td>)}</tr>)}</tbody></table></div></div>;
    }
    if (lines.every(l => /^[-*] /.test(l))) return <ul key={index}>{lines.map((l, i) => <li key={i}>{inline(l.slice(2))}</li>)}</ul>;
    if (lines.every(l => /^\d+\. /.test(l))) return <ol key={index}>{lines.map((l, i) => <li key={i}>{inline(l.replace(/^\d+\. /, ''))}</li>)}</ol>;
    if (block.startsWith('> ')) return <blockquote key={index}>{inline(block.replace(/^> /gm, ''))}</blockquote>;
    if (block === '---') return <hr key={index} />;
    return <p key={index}>{inline(block)}</p>;
  });
}
export function articleMetadata(id: number): Metadata {
  const a = articles.find(a => a.id === id)!;
  return contentMetadata({...a, article:true});
}
export function EditorialHeader() {
  return <><a className="ed-skip" href="#main">Skip to content</a>{editorialPreview && <div className="ed-draft">EDITORIAL PREVIEW <span>Unpublished · for review</span></div>}<header className="ed-header"><Link href="/blog/" className="ed-brand" aria-label="oBizee editorial library">oBizee<span> / FIELDNOTES</span></Link><nav aria-label="Editorial navigation"><Link href="/guides/">Guides</Link><Link href="/help/">Help</Link><Link href="/resources/">Tools</Link><a href="/features/">oBizee ↗</a></nav></header></>;
}
export function ArticlePage({ id }: { id: number }) {
  const a = articles.find(a => a.id === id)!;
  const toc = a.body.split(/\n\s*\n/).filter(b => /^#{2,3} /.test(b)).map((b, i) => ({ label: b.replace(/^#{2,3} /, ''), id: `section-${i + 1}`, small: b.startsWith('###') }));
  return <div className="ed-shell"><EditorialHeader /><main id="main"><ContentDiscovery route={a.route} title={a.title} description={a.description} kind="Article"/><section className="ed-hero"><div className="ed-eyebrow">GUIDE {String(a.id).padStart(2, '0')} / {a.category}</div><h1>{a.title}</h1><p className="ed-deck">{a.description}</p><div className="ed-meta"><span>{a.minutes} min read · estimate</span><span>Practical guidance for independent sellers</span></div></section><div className="ed-layout"><aside className="ed-toc" aria-label="On this page"><p className="ed-toc-title">On this page</p><nav aria-label="Table of contents">{toc.map(t => <a className={t.small ? 'ed-sub' : ''} key={t.id} href={`#${t.id}`}>{t.label}</a>)}</nav></aside><article className="ed-copy">{blocks(a.body)}<FeatureExplainers route={a.route}/><div className="ed-endnote"><strong>Use this guide, then test your own workflow.</strong><p>Examples are illustrative. Confirm current features, charges and suitability before making a business decision.</p><a href="/blog/">Explore the complete reading list →</a></div></article></div><section className="ed-related"><p className="ed-eyebrow">KEEP BUILDING</p><h2>Your next useful read</h2><div className="ed-cards">{(related[id] || articles.filter(b => b.id !== id && b.category === a.category).slice(0, 3).map(b => b.id)).map(nextId => articles.find(b => b.id === nextId)!).map(b => <Link key={b.id} href={b.route}><span>{b.category}</span><h3>{b.title}</h3><p>{b.minutes} min read <span aria-hidden>↗</span></p></Link>)}</div></section></main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><span>Clearer decisions. Better-prepared stores.</span><Link href="/blog/">Back to all guides ↑</Link></footer></div>;
}
export function EditorialIndex() {
  const categories = ['Instagram', 'WhatsApp', 'Catalogue', 'Stock', 'Shipping', 'Customer service', 'Growth', 'Crochet', 'Jewellery', 'Gifts', 'Clothing', 'Home décor', 'Bags', 'Art and prints', 'Handmade accessories', 'Platform comparisons', 'Pricing decisions', 'Store design','Search, data and automation'];
  const groups = [{ id: 'foundations', title: 'Foundations', items: articles.filter(a => a.id < 10) }, ...categories.map((title, index) => ({ id: `topic-${index + 1}`, title, items: articles.filter(a => a.id >= 10 && a.category === title).sort((a, b) => a.id - b.id) }))];
return <div className="ed-shell"><EditorialHeader /><main id="main"><section className="ed-hero ed-index"><p className="ed-eyebrow">THE INDEPENDENT SELLER’S READING LIST</p><h1>Less guesswork.<br /><em>More clarity.</em></h1><p className="ed-deck">Practical guides to selling, merchant operations, platform choices, pricing and store design.</p><div className="ed-meta"><span>{articles.length} complete drafts</span><span>Research-backed · unpublished</span></div></section><section className="ed-library" aria-label="500-page programme overview"><h2>500-page content programme</h2><p>350 acquisition articles · 100 help articles · 30 commercial pages · 12 working resources · 8 hubs. All are local, unpublished drafts.</p><nav className="ed-topics" aria-label="Programme collections"><a href="/guides/">Guides and commercial pages</a><a href="/help/">100 help articles</a><a href="/resources/">12 calculators and planners</a><a href="/stories/crochetbypriya/">Merchant feedback: crochetByPriya</a></nav></section><section className="ed-library" aria-label="All editorial guides"><nav className="ed-topics" aria-label="Browse guides by topic">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title} <span>{group.items.length}</span></a>)}</nav>{groups.map(group => <section key={group.id} id={group.id} className="ed-topic-group" aria-labelledby={`${group.id}-title`}><div className="ed-topic-heading"><h2 id={`${group.id}-title`}>{group.title}</h2><span>{group.items.length} guides</span><a href="#main">Back to topics ↑</a></div><div className="ed-cards">{group.items.map(a => <Link key={a.id} href={a.route}><span>{String(a.id).padStart(2, '0')} / {a.category}</span><h3>{a.title}</h3><p>{a.description}</p><strong>{a.minutes} min read <span aria-hidden>↗</span></strong></Link>)}</div></section>)}</section></main><footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><span>Drafts only. Nothing has been published.</span></footer></div>;
}
