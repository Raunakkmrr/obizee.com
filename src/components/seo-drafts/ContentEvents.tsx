'use client';
import {useEffect} from 'react';
import {NON_REPORTING_HOSTS, trackEvent} from '@/lib/analytics';
export default function ContentEvents(){
 useEffect(()=>{
  if(NON_REPORTING_HOSTS.includes(location.hostname))return;
  function next(event:MouseEvent){
   const link=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[data-content-next]'):null;
   if(!link)return;
   const target=new URL(link.href);
   if(target.origin!==location.origin)return;
   // No search text, query strings, customer data, or invented conversion event.
   trackEvent('content_next_step',{content_path:location.pathname,destination_path:target.pathname});
  }
  document.addEventListener('click',next);return()=>document.removeEventListener('click',next);
 },[]);return null;
}
