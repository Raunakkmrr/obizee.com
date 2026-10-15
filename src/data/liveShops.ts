/**
 * Live oBizee storefronts shown on the homepage wall.
 *
 * Every entry is a real shop that was reachable and rendering products when this
 * list was regenerated on 2026-10-15 from a read-only production query: every websiteLive merchant with 2+ catalogue products and a business image, internal test accounts excluded. The set is every merchant with more than two
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

/**
 * Merchants who have crossed the ₹50,000 first-goal mark. OWNER-SUPPLIED
 * (Raunak, 2026-09-03) and NOT derivable from this file — liveShops only lists
 * shops with a reachable storefront and more than two products, which is a
 * different set. It was previously read off `liveShops.length`, which meant
 * removing one dead storefront silently restated the ₹50,000 claim as 41.
 * Update this only from billing data.
 */
export const MILESTONE_MERCHANT_COUNT = 42;

/**
 * Every merchant selling on oBizee. OWNER-SUPPLIED (Raunak, 2026-09-03) and,
 * like MILESTONE_MERCHANT_COUNT, NOT derivable from liveShops — that array only
 * holds shops with a reachable storefront and more than two products.
 *
 * It exists because it was previously a bare literal typed into the page in two
 * places, and a third spot reached for liveShops.length instead, which rendered
 * "42 merchants sell on it today; 42 have passed ₹50,000". Update from billing
 * data only.
 */
export const TOTAL_MERCHANT_COUNT = 238; // queried from production users collection, 2026-10-15

export const liveShops: LiveShop[] = [
  { brandName: "CrochetByPriya", subDomain: "crochetbypriya", category: "Crochet & handmade", state: "Haryana" },
  { brandName: "NuttyNibbles", subDomain: "nuttynibbles", category: "Food", state: "West Bengal" },
  { brandName: "blissbows_com", subDomain: "blissbowscom", category: "Handmade", state: "Jharkhand" },
  { brandName: "DeeCraftedStudio", subDomain: "deecraftedstudio", category: "Stationery & art", state: "Karnataka" },
  { brandName: "Candle_of__midnight", subDomain: "candleofmidnight", category: "Candles & home", state: "Uttar Pradesh" },
  { brandName: "Crazy Crochet", subDomain: "crazycrochet", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "Snazzy Store", subDomain: "snazzystore", category: "Handmade", state: "Maharashtra" },
  { brandName: "Inkdoo", subDomain: "inkdoo", category: "Stationery & art", state: "Delhi" },
  { brandName: "Rohtas Handmade Store", subDomain: "rohtashandmadestore", category: "Handmade", state: "Punjab" },
  { brandName: "Bhulli Crafts", subDomain: "bhullicrafts", category: "Stationery & art", state: "Uttar Pradesh" },
  { brandName: "Shop velnora", subDomain: "shopvelnora", category: "Clothing", state: "Maharashtra" },
  { brandName: "Crochetbymansi", subDomain: "crochetbymansi", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "OurShoppe", subDomain: "oursho6", category: "Handmade", state: "Tamil Nadu" },
  { brandName: "Kalaqari", subDomain: "kalaqari", category: "Handmade", state: "Maharashtra" },
  { brandName: "Fashion Rich", subDomain: "fashionrich", category: "Handmade", state: "Maharashtra" },
  { brandName: "Agrima Doodles", subDomain: "agrimadoodles", category: "Stationery & art", state: "Maharashtra" },
  { brandName: "Everblommmmmmmm", subDomain: "everblommmmmmmm", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Alina cozy corner", subDomain: "alinacozycorner", category: "Jewellery", state: "GJ" },
  { brandName: "Sitarajewel", subDomain: "sitarajewel1", category: "Jewellery", state: "Maharashtra" },
  { brandName: "Tsukimoon", subDomain: "tsukimoon", category: "Jewellery", state: "Rajasthan" },
  { brandName: "andaaz_of_threads", subDomain: "andaazofthreads", category: "Handmade", state: "UP" },
  { brandName: "SPIRITUAL CHOICE", subDomain: "spiritualchoice", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Handmade Giftstore", subDomain: "handmadegiftstore", category: "Jewellery", state: "Maharashtra" },
  { brandName: "Willow forge", subDomain: "willowforge", category: "Handmade", state: "Delhi" },
  { brandName: "The Vani Jewels", subDomain: "thevanijewels", category: "Jewellery", state: "Gujarat" },
  { brandName: "Zonemart Toys & gadgets", subDomain: "zonemartgadgetstoys", category: "Toys & gadgets", state: "DL" },
  { brandName: "AS FIREWORKS", subDomain: "asfireworks", category: "Handmade", state: "Tamil Nadu" },
  { brandName: "Bestfitzz Fashion", subDomain: "bestfitzzfashion", category: "Clothing", state: "WB" },
  { brandName: "the DUOdle shop", subDomain: "theduodleshop", category: "Handmade", state: "West Bengal" },
  { brandName: "Cozoracreation", subDomain: "cozoracreation", category: "Handmade", state: "Tamil Nadu" },
  { brandName: "Knot & Dot", subDomain: "knotdot", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "sid aac", subDomain: "sidaac", category: "Jewellery", state: "Maharashtra" },
  { brandName: "Yellow Mellow Crochet", subDomain: "yellowmellowcrochet", category: "Crochet & handmade", state: "Karnataka" },
  { brandName: "Little world", subDomain: "littleworld", category: "Handmade", state: "Nagaland" },
  { brandName: "AdrenaX", subDomain: "adrenax", category: "Handmade", state: "Maharashtra" },
  { brandName: "Kwality Custom Print", subDomain: "kwalitycustomprint", category: "Stationery & art", state: "DL" },
  { brandName: "Komaurabeauty", subDomain: "komaurabeauty", category: "Beauty", state: "Rajasthan" },
  { brandName: "BLUSHBOXg", subDomain: "blushboxg", category: "Beauty", state: "Madhya Pradesh" },
  { brandName: "Lax", subDomain: "wearlax", category: "Jewellery", state: "KA" },
  { brandName: "Tara", subDomain: "tara", category: "Jewellery", state: "WB" },
  { brandName: "Khelora", subDomain: "khelora", category: "Handmade", state: "Kerala" },
  { brandName: "Daresbold", subDomain: "daresbold", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Kaurcrochet's", subDomain: "kaurcrochets", category: "Crochet & handmade", state: "Maharashtra" },
  { brandName: "Blossom Bliss", subDomain: "blossombliss", category: "Jewellery", state: "AS" },
  { brandName: "Crystalbeejewels", subDomain: "crystalbeejewels", category: "Jewellery", state: "UP" },
  { brandName: "Farchun Store", subDomain: "farchunstore", category: "Handmade", state: "Rajasthan" },
  { brandName: "Zaib's Yarn Boutique", subDomain: "zaibsyarnboutique", category: "Crochet & handmade", state: "UP" },
  { brandName: "Auraby.gm", subDomain: "aurabygm", category: "Jewellery", state: "MP" },
  { brandName: "Rá Bags", subDomain: "rbags", category: "Handmade", state: "Maharashtra" },
  { brandName: "Fioraé", subDomain: "fiora", category: "Handmade", state: "Jammu & Kashmir" },
  { brandName: "oh.trinkets", subDomain: "ohtrinkets", category: "Jewellery", state: "West Bengal" },
  { brandName: "MITRASO", subDomain: "mitraso", category: "Handmade", state: "Rajasthan" },
  { brandName: "Bhulli Crafts | Handmade gifts", subDomain: "bhullicraftshandmadegifts", category: "Handmade", state: "" },
  { brandName: "Velvet twist by Diksha", subDomain: "velvettwistbydiksha", category: "Handmade", state: "Maharashtra" },
  { brandName: "dori_roots", subDomain: "doriroots", category: "Handmade", state: "Haryana" },
  { brandName: "Thewhitelotus.twl", subDomain: "thewhitelotustwl", category: "Handmade", state: "Gujarat" },
  { brandName: "Nifty Thrifty Arts", subDomain: "niftythriftyarts", category: "Jewellery", state: "Delhi" },
  { brandName: "Crochet Items", subDomain: "crochetitems", category: "Crochet & handmade", state: "West Bengal" },
  { brandName: "Brixton Bombay Masala", subDomain: "brixtonbombaymasala", category: "Food", state: "Maharashtra" },
  { brandName: "Shash Atelier", subDomain: "shashatelier", category: "Handmade", state: "TN" },
  { brandName: "Meer Chikan", subDomain: "meerchikan", category: "Clothing", state: "Uttar Pradesh" },
  { brandName: "StretchyLobes", subDomain: "stretchylobes", category: "Handmade", state: "Maharashtra" },
  { brandName: "Butterflien", subDomain: "butterflien", category: "Jewellery", state: "KA" },
  { brandName: "codeSmokers", subDomain: "codesmokers", category: "Handmade", state: "" },
  { brandName: "Swari Arts", subDomain: "swariarts", category: "Stationery & art", state: "KA" },
  { brandName: "Praestans Accessories", subDomain: "praestansaccessories", category: "Handmade", state: "KA" },
  { brandName: "Ivaah Jewellery", subDomain: "ivaahjewellery", category: "Jewellery", state: "Karnataka" },
  { brandName: "The Millennial Edit", subDomain: "themillennialedit", category: "Handmade", state: "Delhi" },
  { brandName: "Unique Plastic Store", subDomain: "uniqueplasticstore", category: "Handmade", state: "Uttar Pradesh" },
  { brandName: "Cibola", subDomain: "cibola", category: "Stationery & art", state: "MH" },
  { brandName: "RarityCharms Wholesale", subDomain: "raritycharmswholesale", category: "Handmade", state: "GJ" },
  { brandName: "Abs", subDomain: "abs", category: "Handmade", state: "Madhya Pradesh" },
  { brandName: "niinii.Charmss", subDomain: "niiniicharmss", category: "Handmade", state: "MP" },
  { brandName: "GlyphX_Studio", subDomain: "glyphxstudio", category: "Handmade", state: "Maharashtra" },
  { brandName: "Talk To Sreepriya", subDomain: "talktosreepriya", category: "Handmade", state: "Karnataka" },
  { brandName: "Sekpro", subDomain: "sekpro", category: "Handmade", state: "Punjab" },
  { brandName: "Roopsringara Fancy", subDomain: "roopsringarafancy", category: "Jewellery", state: "OD" },
];
