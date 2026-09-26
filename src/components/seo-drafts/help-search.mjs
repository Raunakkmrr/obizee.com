export function searchHelp(items,query='',category='All') {
 const words=String(query).toLowerCase().trim().split(/\s+/).filter(Boolean);
 return items.filter(a=>(category==='All'||a.category===category)&&words.every(word=>(a.title+' '+a.intro+' '+a.category+' '+a.steps.join(' ')+' '+a.success+' '+a.troubleshoot).toLowerCase().includes(word)));
}
