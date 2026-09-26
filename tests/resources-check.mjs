import assert from 'node:assert/strict';
import fs from 'node:fs';
import {calculate} from '../src/components/seo-drafts/resource-engine.mjs';
const resources=JSON.parse(fs.readFileSync('src/content/seo-drafts/resources.json'));
let checks=0;
const value=(key,input,index=0)=>calculate(key,input)[index].value;
const near=(a,b)=>{assert.ok(Math.abs(a-b)<1e-7,a+' vs '+b);checks++;};
near(value('margin',{price:1000,product:600,packing:50,fee:2},2),330);
near(value('margin',{price:1000,product:600,packing:50,fee:2},1),40);
near(value('target-price',{cost:500,target:150,fee:3}),670.11);
near(value('break-even',{fixed:12500,contribution:300}),42);
near(value('discount-limit',{price:1000,cost:600,target:150,fee:2}),765.31);
near(value('discount-limit',{price:1000,cost:600,target:150,fee:2},2),23.46);
near(value('bundle',{price:750,components:540,packing:30,fee:0}),180);
near(value('shipping-threshold',{delivery:80,target:100,rate:40}),450);
near(value('campaign-budget',{orders:20,contribution:300,retained:100}),4000);
near(value('plan-cost',{monthly:1200,annual:12000,months:6},2),4800);
near(value('capacity',{hours:40,reserve:10,per:3},1),10);
near(value('reorder',{daily:3,days:7,safety:5}),26);
near(value('launch-budget',{build:15000,assets:5000,monthly:1500,months:12,reserve:3000},2),41000);
near(value('photo-plan',{products:12,views:4,minutes:3,setup:60},1),204);
for(const r of resources){
 const input=Object.fromEntries(r.fields.map(f=>[f.name,f.value]));
 assert.ok(calculate(r.key,input).every(x=>Number.isFinite(x.value)));checks++;
 for(const bad of ['',-1,NaN,Infinity,1e10]){
  assert.throws(()=>calculate(r.key,{...input,[r.fields[0].name]:bad}));checks++;
 }
 assert.throws(()=>calculate(r.key,{}));checks++;
 assert.ok(fs.existsSync('app'+r.route+'page.tsx'));checks++;
}
for(const [key,input] of [['margin',{price:0,product:0,packing:0,fee:0}],['target-price',{cost:500,target:150,fee:100}],['break-even',{fixed:100,contribution:0}],['discount-limit',{price:100,cost:200,target:20,fee:0}],['shipping-threshold',{delivery:10,target:20,rate:0}],['campaign-budget',{orders:2.5,contribution:30,retained:10}],['plan-cost',{monthly:10,annual:100,months:13}],['capacity',{hours:2,reserve:3,per:1}],['photo-plan',{products:1,views:0,minutes:2,setup:1}],['photo-plan',{products:1e9,views:1e9,minutes:2,setup:1}]]){
 assert.throws(()=>calculate(key,input));checks++;
}
near(value('margin',{price:100,product:200,packing:0,fee:0},2),-100);
console.log(JSON.stringify({resources:resources.length,checks,networkCalls:0,result:'pass'}));
