import BlogIndex, {BLOG_PAGE_COUNT, blogPageHref} from '@/legacy-views/BlogIndex';
import {contentMetadata} from '@/components/seo-drafts/page-metadata';
import {notFound} from 'next/navigation';
export const dynamicParams=false;
export function generateStaticParams(){return Array.from({length:BLOG_PAGE_COUNT-1},(_,i)=>({page:String(i+2)}));}
function pageNumber(value:string){const n=Number(value);if(!Number.isInteger(n)||n<2||n>BLOG_PAGE_COUNT||String(n)!==value)notFound();return n;}
export async function generateMetadata({params}:{params:Promise<{page:string}>}){
 const page=pageNumber((await params).page);
 return contentMetadata({title:`Seller guides — page ${page}`,description:'Practical guides to selling, merchant operations, pricing and store design.',route:blogPageHref(page)});
}
export default async function Page({params}:{params:Promise<{page:string}>}){return <BlogIndex page={pageNumber((await params).page)}/>;}
