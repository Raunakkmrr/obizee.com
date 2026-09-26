import explainers from '@/content/seo-drafts/feature-explainers.json';
export default function FeatureExplainers({route}:{route:string}){
 const items=explainers.filter(item=>item.route===route);
 if(!items.length)return null;
 return <section className="ed-explainers" aria-label="Understanding this workflow"><p className="ed-eyebrow">UNDERSTANDING THE WORKFLOW</p>{items.map(item=><section key={item.id} id={item.id.toLowerCase()}><h2>{item.title}</h2>{item.body.split(/\n\s*\n/).map((part,i)=>part.startsWith('### ')?<h3 key={i}>{part.slice(4)}</h3>:<p key={i}>{part}</p>)}</section>)}</section>;
}
