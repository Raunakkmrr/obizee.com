'use client';
import {useMemo,useState} from 'react';
import help from '@/content/seo-drafts/help.json';
import {searchHelp} from './help-search.mjs';
export default function HelpSearch(){
 const [query,setQuery]=useState('');const [category,setCategory]=useState('All');
 const categories=Array.from(new Set(help.map(a=>a.category)));
 const matches:typeof help=useMemo(()=>searchHelp(help,query,category),[query,category]);
 return <section id="faq-heading" className="kh-search"><h2>Find the task you need</h2><div className="kh-controls"><label>Search help<input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Try stock, bill, pincode or payout"/></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option>{categories.map(c=><option key={c}>{c}</option>)}</select></label><button type="button" onClick={()=>{setQuery('');setCategory('All');}}>Clear filters</button></div><p role="status" aria-live="polite">{matches.length} of {category==='All'?help.length:help.filter(a=>a.category===category).length} articles{category!=='All'?` in ${category} (${help.length} across all help)`:''}</p>{matches.length===0?<p>No matching article. Try a shorter phrase, clear the category or use the support-report guide below.</p>:<div className="ed-cards">{matches.map(a=><a key={a.key} href={a.route}><span>{a.category}</span><h3>{a.title}</h3><p>{a.intro}</p></a>)}</div>}</section>;
}
