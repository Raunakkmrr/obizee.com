const origin='https://www.obizee.com';
type Props={route:string;title:string;description:string;kind?:'Article'|'TechArticle'|'CollectionPage'|'WebPage'};
export default function ContentDiscovery({route,title,description,kind='WebPage'}:Props){
 const section=route.split('/').filter(Boolean)[0];
 const parents:Record<string,string>={blog:'Articles',help:'Help',resources:'Tools',guides:'Guides',features:'Features',solutions:'Solutions',for:'Business guides',stories:'Merchant feedback'};
 const parentRoute=section==='for'?'/guides/':section==='stories'?'/blog/':`/${section}/`;
 const crumbs=[{name:'oBizee',route:'/'},...(parentRoute!==route?[{name:parents[section]||'Guides',route:parentRoute}]:[]),{name:title,route}];
 const url=origin+route;
 const graph={ '@context':'https://schema.org','@graph':[
  {'@type':kind,'@id':url+'#content',url,name:title,...(kind.endsWith('Article')?{headline:title,mainEntityOfPage:url,publisher:{'@type':'Organization',name:'oBizee',url:origin+'/'}}:{}),description,inLanguage:'en-IN',isPartOf:{'@type':'WebSite',name:'oBizee',url:origin+'/'},...(kind.endsWith('Article')?{}:{breadcrumb:{'@id':url+'#breadcrumb'}})},
  {'@type':'BreadcrumbList','@id':url+'#breadcrumb',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:origin+c.route}))}
 ]};
 return <><nav className="ed-breadcrumbs" aria-label="Breadcrumb"><ol>{crumbs.map((c,i)=><li key={c.route}>{i===crumbs.length-1?<span aria-current="page">{c.name}</span>:<a href={c.route}>{c.name}</a>}</li>)}</ol></nav><script type="application/ld+json" data-content-schema="true" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,'\\u003c')}}/></>;
}
