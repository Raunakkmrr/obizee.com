export function calculate(key, raw, labels = {}) {
 const label = name => labels[name] || ({per:'Hours per item',price:'Selling price',contribution:'Contribution per order',months:'Number of months',orders:'Number of orders',products:'Number of products',views:'Views per product',rate:'Contribution rate'}[name]) || 'This input';
 const required={margin:['price','product','packing','fee'],'target-price':['cost','target','fee'],'break-even':['fixed','contribution'],'discount-limit':['price','cost','target','fee'],bundle:['price','components','packing','fee'],'shipping-threshold':['delivery','target','rate'],'campaign-budget':['orders','contribution','retained'],'plan-cost':['monthly','annual','months'],capacity:['hours','reserve','per'],reorder:['daily','days','safety'],'launch-budget':['build','assets','monthly','months','reserve'],'photo-plan':['products','views','minutes','setup']};
 if(!required[key])throw new Error('Unknown resource.');
 if(!raw||required[key].some(name=>!Object.hasOwn(raw,name)))throw new Error('Complete every required input.');
 const v={};
 for(const [name,value] of Object.entries(raw)){
  if(String(value).trim()===''||!Number.isFinite(Number(value))||Number(value)<0||Number(value)>1e9) throw new Error(label(name)+': enter a number from 0 to 1 billion.');
  v[name]=Number(value);
 }
 if('fee' in v&&v.fee>=100)throw new Error('The fee must be below 100%.');
 const positive=(name)=>{if(!(v[name]>0))throw new Error(label(name)+' must be greater than zero.');};
 const whole=(name)=>{if(!Number.isInteger(v[name]))throw new Error(label(name)+' must be a whole number.');};
 const row=(label,value,unit='rupees')=>{if(!Number.isFinite(value)||Math.abs(value)>1e12)throw new Error('This scenario is too large for this planning tool.');return {label,value,unit};};
 switch(key){
 case 'margin': positive('price');return [row('Gross profit',v.price-v.product),row('Gross margin',(v.price-v.product)/v.price*100,'percent'),row('Contribution',v.price-v.product-v.packing-v.price*v.fee/100)];
 case 'target-price': return [row('Required price, rounded up to paise',Math.ceil(((v.cost+v.target)/(1-v.fee/100))*100-1e-8)/100)];
 case 'break-even': positive('contribution');return [row('Whole orders required',Math.ceil(v.fixed/v.contribution),'count')];
 case 'discount-limit': positive('price');{const floor=Math.ceil((v.cost+v.target)/(1-v.fee/100)*100-1e-8)/100;if(floor>v.price)throw new Error('No feasible discount: the required retained price is above the current price.');return [row('Minimum retained price',floor),row('Maximum discount amount',v.price-floor),row('Maximum discount percentage, rounded down',Math.floor((v.price-floor)/v.price*10000+1e-8)/100,'percent')];}
 case 'bundle': return [row('Contribution',v.price-v.components-v.packing-v.price*v.fee/100)];
 case 'shipping-threshold': positive('rate');if(v.rate>100)throw new Error('Contribution rate cannot exceed 100%.');return [row('Indicative basket threshold',Math.ceil((v.delivery+v.target)/(v.rate/100)*100-1e-8)/100)];
 case 'campaign-budget':whole('orders');if(v.retained>v.contribution)throw new Error('Retained contribution exceeds the available contribution.');return [row('Scenario spending limit',v.orders*(v.contribution-v.retained))];
 case 'plan-cost':whole('months');positive('months');if(v.months>12)throw new Error('Use 1 to 12 months for this annual comparison.');return [row('Monthly-billed scenario',v.monthly*v.months),row('Annual upfront commitment',v.annual),row('Annual minus monthly scenario',v.annual-v.monthly*v.months)];
 case 'capacity':positive('per');if(v.reserve>v.hours)throw new Error('Reserved time exceeds total available time.');return [row('Available production hours',v.hours-v.reserve,'hours'),row('Whole-item capacity',Math.floor((v.hours-v.reserve)/v.per),'count')];
 case 'reorder':return [row('Reorder trigger in whole units',Math.ceil(v.daily*v.days+v.safety),'count')];
 case 'launch-budget':whole('months');positive('months');return [row('One-time setup and assets',v.build+v.assets),row('Recurring costs for period',v.monthly*v.months),row('Total including contingency',v.build+v.assets+v.monthly*v.months+v.reserve)];
 case 'photo-plan':whole('products');whole('views');positive('views');return [row('Planned views',v.products*v.views,'count'),row('Session time before editing',v.products*v.views*v.minutes+v.setup,'minutes')];
 default:throw new Error('Unknown resource.');
 }
}
