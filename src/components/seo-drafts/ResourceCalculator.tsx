'use client';
import {useRef,useState} from 'react';
import {calculate} from './resource-engine.mjs';
import './resources.css';
export default function ResourceCalculator({resource}:{resource:any}) {
 const initial=Object.fromEntries(resource.fields.map((f:any)=>[f.name,String(f.value)]));
 const [values,setValues]=useState<Record<string,string>>(initial);
 const [result,setResult]=useState<any[]|null>(null);
 const [error,setError]=useState('');
 const [notes,setNotes]=useState('');
 const errorRef=useRef<HTMLParagraphElement>(null);
 const format=(value:number,unit:string)=>unit==='rupees'?new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:2,maximumFractionDigits:2}).format(value):new Intl.NumberFormat('en-IN',{maximumFractionDigits:2}).format(value)+(unit==='percent'?'%':unit==='count'?'':' '+unit);
 return <section className="ed-tool" aria-label="Interactive planning worksheet">
 <p>Example inputs are illustrative, not recommended prices. Your entries stay in this page's memory; this tool does not send, save or apply them to your store.</p>
 <form noValidate onSubmit={e=>{e.preventDefault();try{setResult(calculate(resource.key,values,Object.fromEntries(resource.fields.map((f:any)=>[f.name,f.label]))));setError('');}catch(e){setResult(null);setError(e instanceof Error?e.message:'Check your inputs.');requestAnimationFrame(()=>errorRef.current?.focus());}}}>
 <div className="ed-tool-fields">{resource.fields.map((f:any)=><label key={f.name} htmlFor={'field-'+f.name}>{f.label}<input id={'field-'+f.name} type="number" inputMode="decimal" step="any" min="0" max="1000000000" required value={values[f.name]} onChange={e=>{setValues({...values,[f.name]:e.target.value});setResult(null);setError('');}} /></label>)}</div>
 <div className="ed-tool-actions"><button type="submit">Calculate scenario</button><button type="button" onClick={()=>{setValues(initial);setResult(null);setError('');setNotes('');}}>Reset to example</button><button type="button" onClick={()=>window.print()}>Print worksheet</button></div>
 </form>
 {error&&<p ref={errorRef} tabIndex={-1} role="alert" className="ed-tool-error">{error}</p>}
 <div aria-live="polite" aria-atomic="true">{result&&<><h2>Your scenario</h2><dl className="ed-tool-results">{result.map(r=><div key={r.label}><dt>{r.label}</dt><dd>{format(r.value,r.unit)}</dd></div>)}</dl><p>Planning estimate only. Use the formula and exclusions below before making a decision.</p></>}</div>
 {resource.key==='photo-plan'&&<label className="ed-tool-notes" htmlFor="shot-notes">Shot list: product / front / detail / scale / options<textarea id="shot-notes" value={notes} onChange={e=>setNotes(e.target.value)} rows={6} placeholder="Use product names or codes only. Do not enter customer details." /></label>}
 </section>;
}
