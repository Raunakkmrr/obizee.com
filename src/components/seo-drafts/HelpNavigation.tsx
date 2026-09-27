'use client';
import help from '@/content/seo-drafts/help.json';
export default function HelpNavigation({current}:{current:string}){
 const categories=Array.from(new Set(help.map(a=>a.category)));
 return <><div className="hc-mobile-nav"><label htmlFor="help-article-picker">Browse help articles</label><select id="help-article-picker" value={current} onChange={e=>{window.location.assign(e.target.value)}}>{categories.map(c=><optgroup label={c} key={c}>{help.filter(a=>a.category===c).map(a=><option value={a.route} key={a.key}>{a.title}</option>)}</optgroup>)}</select></div><nav className="hc-sidebar" aria-label="Help articles">{categories.map(c=><section key={c}><h2>{c}</h2><ul>{help.filter(a=>a.category===c).map(a=><li key={a.key}><a href={a.route} aria-current={current===a.route?'page':undefined}>{a.title}</a></li>)}</ul></section>)}</nav></>;
}
