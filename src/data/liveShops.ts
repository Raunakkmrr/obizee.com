/**
 * Live oBizee storefronts shown on the homepage wall.
 *
 * Every entry is a real shop that was reachable and rendering products when this
 * list was generated on 2026-08-27. The set is every merchant with more than two
 * products and a working storefront; the internal testing account is excluded.

 *
 * Screenshots live in public/shops/<subDomain>.jpg. If a merchant closes or
 * redesigns, regenerate rather than editing by hand — a stale screenshot of
 * someone else's shop is worse than no screenshot.
 *
 * Capturing gotcha: /etc/hosts on the dev machine maps crochetbypriya.obizee.com
 * to 127.0.0.1 for local storefront testing, so a headless capture from that
 * machine screenshots a connection-refused page instead of the shop. Override it
 * per-capture rather than editing the hosts file:
 *   chrome --host-resolver-rules="MAP <host> <cloudfront-ip>"
 */
export interface LiveShop {
  brandName: string;
  subDomain: string;
  category: string;
  state: string;
}

export const liveShops: LiveShop[] = [
  { brandName: "CrochetByPriya", subDomain: "crochetbypriya", category: "Crochet & handmade", state: "Haryana" },
  { brandName: "Shop velnora", subDomain: "shopvelnora", category: "Clothing", state: "Maharashtra" },
  { brandName: "Snazzy Store", subDomain: "snazzystore", category: "Handmade", state: "Maharashtra" },
  { brandName: "Candle_of__midnight", subDomain: "candleofmidnight", category: "Candles & home", state: "Uttar Pradesh" },
  { brandName: "BLUSHBOXg", subDomain: "blushboxg", category: "Beauty", state: "Madhya Pradesh" },
  { brandName: "Crazy Crochet", subDomain: "crazycrochet", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "Fioraé", subDomain: "fiora", category: "Handmade", state: "Jammu & Kashmir" },
  { brandName: "oh.trinkets", subDomain: "ohtrinkets", category: "Jewellery", state: "West Bengal" },
  { brandName: "MITRASO", subDomain: "mitraso", category: "Handmade", state: "Rajasthan" },
  { brandName: "DeeCraftedStudio", subDomain: "deecraftedstudio", category: "Stationery & art", state: "Karnataka" },
  { brandName: "Velvet twist by Diksha", subDomain: "velvettwistbydiksha", category: "Handmade", state: "Maharashtra" },
  { brandName: "Bhulli Crafts", subDomain: "bhullicrafts", category: "Stationery & art", state: "Uttar Pradesh" },
  { brandName: "blissbows_com", subDomain: "blissbowscom", category: "Handmade", state: "Jharkhand" },
  { brandName: "Crochetbymansi", subDomain: "crochetbymansi", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "OurShoppe", subDomain: "oursho6", category: "Handmade", state: "Tamil Nadu" },
  { brandName: "NuttyNibbles", subDomain: "nuttynibbles", category: "Food", state: "West Bengal" },
  { brandName: "Inkdoo", subDomain: "inkdoo", category: "Stationery & art", state: "Delhi" },
  { brandName: "Sitarajewel", subDomain: "sitarajewel1", category: "Jewellery", state: "Maharashtra" },
  { brandName: "dori_roots", subDomain: "doriroots", category: "Handmade", state: "Haryana" },
  { brandName: "Agrima Doodles", subDomain: "agrimadoodles", category: "Stationery & art", state: "Maharashtra" },
  { brandName: "Crochet Items", subDomain: "crochetitems", category: "Crochet & handmade", state: "West Bengal" },
  { brandName: "Brixton Bombay Masala", subDomain: "brixtonbombaymasala", category: "Food", state: "Maharashtra" },
  { brandName: "Meer Chikan", subDomain: "meerchikan", category: "Clothing", state: "Uttar Pradesh" },
  { brandName: "Kalaqari", subDomain: "kalaqari", category: "Handmade", state: "Maharashtra" },
  { brandName: "Daresbold", subDomain: "daresbold", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Velora", subDomain: "velora", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Everblommmmmmmm", subDomain: "everblommmmmmmm", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "the DUOdle shop", subDomain: "theduodleshop", category: "Handmade", state: "West Bengal" },
  { brandName: "Knot & Dot", subDomain: "knotdot", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "Cozoracreation", subDomain: "cozoracreation", category: "Handmade", state: "Tamil Nadu" },
  { brandName: "Kaurcrochet's", subDomain: "kaurcrochets", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "The Millennial Edit", subDomain: "themillennialedit", category: "Handmade", state: "Delhi" },
  { brandName: "Unique Plastic Store", subDomain: "uniqueplasticstore", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Fashion Rich", subDomain: "fashionrich", category: "Handmade", state: "Maharashtra" },
  { brandName: "Little world", subDomain: "littleworld", category: "Handmade", state: "Nagaland" },
  { brandName: "SPIRITUAL CHOICE", subDomain: "spiritualchoice", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Yellow Mellow Crochet", subDomain: "yellowmellowcrochet", category: "Crochet & handmade", state: "Karnataka" },
  { brandName: "RRB VISIONIQ", subDomain: "rrbvisioniq", category: "Handmade", state: "Punjab" },
  { brandName: "Abs", subDomain: "abs", category: "Handmade", state: "Madhya Pradesh" },
  { brandName: "AdrenaX", subDomain: "adrenax", category: "Handmade", state: "Maharashtra" },
  { brandName: "Farchun Store", subDomain: "farchunstore", category: "Handmade", state: "Rajasthan" },
  { brandName: "Willow forge", subDomain: "willowforge", category: "Handmade", state: "Delhi" },
];
