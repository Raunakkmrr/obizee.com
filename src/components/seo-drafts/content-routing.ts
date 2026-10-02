import prior from '@/content/seo-drafts/articles.json';
import final from '@/content/seo-drafts/acquisition-final.json';
import hubs from '@/content/seo-drafts/hubs.json';

export const allGuides = [...prior, ...final];
const foundationHubs: Record<number,string> = {1:'selling-online',2:'choosing-and-designing-store',3:'businesses',4:'catalogue-and-stock',5:'selling-online',6:'choosing-and-designing-store',7:'catalogue-and-stock',8:'choosing-and-designing-store',9:'catalogue-and-stock'};
export function guideHub(article: {id:number;category:string}) {
  const key=foundationHubs[article.id] || (article.category==='Search, data and automation'?'selling-online':hubs.find(h=>h.categories.includes(article.category))?.key);
  return hubs.find(h=>h.key===key) || hubs[0];
}
export function guidesForHub(key:string) { return allGuides.filter(a=>guideHub(a).key===key); }
const foundationTopics: Record<number,string> = {1:'WhatsApp',2:'Platform comparisons',3:'Clothing',4:'Catalogue',5:'Instagram',6:'Pricing decisions',7:'Stock',8:'Pricing decisions',9:'Catalogue'};
const topic=(a:{id:number;category:string})=>foundationTopics[a.id] || a.category;
const terms=(s:string)=>new Set(s.toLowerCase().match(/[a-z]{4,}/g)?.filter(w=>!['with','from','your','that','before','without','into','when','what','make','store','item','items','manage','choice','choices'].includes(w)) || []);
export function relatedGuides(id:number) {
  const current=allGuides.find(a=>a.id===id)!; const words=terms(current.title);
  const group=allGuides.filter(a=>a.id!==id && guideHub(a).key===guideHub(current).key);
  // Match the editorial topic first, including older category aliases, then title terms.
  return group.map(a=>({a,sameTopic:topic(a)===topic(current)?1:0,score:[...terms(a.title)].filter(w=>words.has(w)).length})).sort((x,y)=>y.sameTopic-x.sameTopic||y.score-x.score||Math.abs(x.a.id-id)-Math.abs(y.a.id-id)||x.a.id-y.a.id).slice(0,3).map(x=>x.a);
}
