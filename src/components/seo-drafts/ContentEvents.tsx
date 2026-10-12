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
  function cta(event:MouseEvent){
   const link=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[data-content-cta]'):null;
   if(!link)return;
   // Conversion clicks reuse the site-wide funnel event names (see WhatsAppCTA)
   // so the editorial library reports into the same GA4 taxonomy as the
   // marketing pages. Paths only -- same privacy stance as content_next_step.
   trackEvent(link.dataset.contentCta==='playstore'?'play_store_click':'whatsapp_click',{source:'editorial_article',content_path:location.pathname});
  }
  document.addEventListener('click',next);document.addEventListener('click',cta);
  return()=>{document.removeEventListener('click',next);document.removeEventListener('click',cta);};
 },[]);return null;
}
