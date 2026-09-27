'use client';
import {useEffect,useMemo,useState} from 'react';
import help from '@/content/seo-drafts/help.json';
import {searchHelp} from './help-search.mjs';
const descriptions:Record<string,string>={
'Store setup':'Set up your store and prepare the essentials before sharing it.',
'Store design':'Choose the look and layout of your storefront.',
'Store content':'Keep your store information and customer-facing content useful.',
'Delivery':'Understand delivery settings, charges and address checks.',
'Direct payment':'Understand payment settings, records and what to check.',
'Account access':'Find your way into the right account safely.',
'Support':'Report a problem with the information needed to investigate it.',
'Products':'Add, organise and maintain your product catalogue.',
'Inventory':'Understand stock quantities and verify saved inventory changes.',
'Orders':'Find orders and understand the next action.',
'Bills':'Create and manage bills and check their saved details.',
'Shopping':'Help for customers browsing a store and checking an order.',
'Account and support':'Keep account details safe when asking for help.'
};
export default function HelpCenterSearch(){
 const [query,setQuery]=useState('');const [category,setCategory]=useState('All');
 const categories=Array.from(new Set(help.map(a=>a.category)));
 useEffect(()=>{const p=new URLSearchParams(window.location.search);setQuery(p.get('q')||'');const c=p.get('category');if(c&&categories.includes(c))setCategory(c);},[]);
 const matches:typeof help=useMemo(()=>searchHelp(help,query,category),[query,category]);
 const filtering=!!query.trim()||category!=='All';
 return <section className="hc-find" aria-label="Find help"><div className="hc-search-controls"><label className="hc-sr" htmlFor="help-query">Search guides</label><input id="help-query" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search guides — try stock, delivery or payment"/><label className="hc-sr" htmlFor="help-category">Filter by category</label><select id="help-category" value={category} onChange={e=>setCategory(e.target.value)}><option value="All">All topics</option>{categories.map(c=><option key={c}>{c}</option>)}</select></div>{filtering?<section className="hc-results"><div className="hc-results-heading"><h2>Search results</h2><button type="button" onClick={()=>{setQuery('');setCategory('All');window.history.replaceState(null,'','/help/');}}>Clear filters</button></div><p role="status" aria-live="polite">{matches.length} matching {matches.length===1?'article':'articles'}</p>{matches.length?<ul>{matches.map(a=><li key={a.key}><a href={a.route}><span>{a.category}</span><h3>{a.title} <span aria-hidden="true">→</span></h3><p>{a.intro}</p></a></li>)}</ul>:<p>No matching article. Try fewer words or a different topic. You can also <a href="/contact/">contact us</a> with a redacted description of the problem.</p>}</section>:<div className="hc-category-grid">{categories.map((c,i)=>{const items=help.filter(a=>a.category===c);return <section className="hc-category" key={c}><div className="hc-category-title"><span className="hc-category-icon" aria-hidden="true">{String(i+1).padStart(2,'0')}</span><h2>{c}</h2></div><p>{descriptions[c]}</p><ul>{items.slice(0,4).map(a=><li key={a.key}><a href={a.route}><span aria-hidden="true">→</span>{a.title}</a></li>)}</ul><a className="hc-view-all" href={'/help/?category='+encodeURIComponent(c)} onClick={e=>{e.preventDefault();setCategory(c);window.history.replaceState(null,'','/help/?category='+encodeURIComponent(c));document.getElementById('help-query')?.focus();}}>View all {items.length} articles →</a></section>})}</div>}<noscript><h2>All help articles</h2><ul>{help.map(a=><li key={a.key}><a href={a.route}>{a.title}</a></li>)}</ul></noscript></section>;
}
