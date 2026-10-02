/** Fixed-choice qualification. No private values belong in analytics. */
export const BUSINESS_NEEDS = [
  'Orders and customer follow-ups',
  'Catalogue and stock',
  'Payments, expenses and balances',
  'Packing and dispatch',
  'Employees and team coordination',
  'Preparing to start selling',
] as const;

export type FitInput = {
  category: string | null;
  volume: string | null;
  channel: string | null;
  need: string | null;
  name?: string;
};

export function fitReady(input: FitInput) {
  return Boolean(input.category && input.volume && input.need && BUSINESS_NEEDS.includes(input.need as typeof BUSINESS_NEEDS[number]));
}

export function fitMessage(input: FitInput) {
  const lines = ["Hi oBizee, I'd like to discuss managing my business with you."];
  if (input.name?.trim()) lines.push(`I'm ${input.name.trim()}.`);
  if (input.category) lines.push(`I sell: ${input.category}`);
  if (input.volume) lines.push(`Orders a month: ${input.volume}`);
  if (input.channel) lines.push(`I sell on: ${input.channel}`);
  if (input.need) lines.push(`I'd like help with: ${input.need}`);
  return lines.join('\n');
}

export function fitEvent(input: FitInput) {
  const volumes: Record<string,string> = {'Just starting out':'starting','Under 25':'under_25','25 – 100':'25_100','100 – 500':'100_500','500+':'500_plus'};
  const needs: Record<string,string> = Object.fromEntries(BUSINESS_NEEDS.map((v,i)=>[v,['orders_customers','catalogue_stock','money_records','dispatch','team','starting'][i]]));
  const volume = volumes[input.volume || ''] || 'unknown';
  const need = needs[input.need || ''] || 'unknown';
  return {
    qualification_version: 'buyer_fit_1',
    order_volume: volume,
    business_need: need,
    fit_segment: volume === 'unknown' || need === 'unknown' ? 'unknown' : volume === 'starting' || need === 'starting' ? 'preparing' : 'existing_seller',
  };
}
