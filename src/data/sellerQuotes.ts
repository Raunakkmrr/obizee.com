/**
 * Drafted seller quotes for the homepage proof section.
 *
 * IMPORTANT — these quotes were written by oBizee, not spoken by these sellers,
 * and they render on the homepage as plain testimonials attributed by name.
 * Each seller must approve their own line in writing; record the approval date
 * against their entry below as it comes in. An unapproved line is a claim about
 * what a real business said, so treat a gap here as a thing to close, not a
 * detail.
 *
 * Logos are each seller's real `businessImage`, pulled from their live
 * storefront on 2026-08-27 and downscaled to 96px. Not drawn substitutes.
 *
 * Product counts were queried on 2026-08-26. They drift as sellers add stock —
 * re-run the count before quoting them again.
 */
export interface SellerQuote {
  brandName: string;
  subDomain: string;
  category: string;
  products: number;
  logo: string;
  quote: string;
  /** ISO date the seller approved their quote in writing; null if not yet. */
  approvedOn: string | null;
}

export const sellerQuotes: SellerQuote[] = [
  {
    brandName: "CrochetByPriya",
    subDomain: "crochetbypriya",
    category: "Crochet & handmade",
    products: 403,
    logo: "/sellers/crochetbypriya.jpg",
    quote:
      "I used to guess what a bouquet cost me to make. Now the wool, the ribbon and the box are all in there, so I know my margin before I set the price. That changed how I price everything.",
    approvedOn: null,
  },
  {
    brandName: "Shop velnora",
    subDomain: "shopvelnora",
    category: "Clothing",
    products: 192,
    logo: "/sellers/shopvelnora.png",
    quote:
      "Orders used to sit in my DMs until I scrolled back and found them. Now they land in one list with the size and the address already filled in. I have not lost an order since.",
    approvedOn: null,
  },
  {
    brandName: "Candle_of__midnight",
    subDomain: "candleofmidnight",
    category: "Candles & home",
    products: 132,
    logo: "/sellers/candleofmidnight.jpg",
    quote:
      "Half my buyers still want cash on delivery. The COD money used to be a spreadsheet I dreaded. It reconciles against the orders on its own now.",
    approvedOn: null,
  },
  {
    brandName: "Snazzy Store",
    subDomain: "snazzystore",
    category: "Lifestyle",
    products: 157,
    logo: "/sellers/snazzystore.png",
    quote:
      "I run the whole shop from my phone between school runs. I have opened a laptop twice this year, both times because I wanted to, not because I had to.",
    approvedOn: null,
  },
  {
    brandName: "Crazy Crochet",
    subDomain: "crazycrochet",
    category: "Crochet & handmade",
    products: 85,
    logo: "/sellers/crazycrochet.png",
    quote:
      "Booking a Delhivery pickup used to mean a separate account and a separate login. It is three taps now, and the customer gets the tracking without me sending it.",
    approvedOn: null,
  },
  {
    brandName: "oh.trinkets",
    subDomain: "ohtrinkets",
    category: "Jewellery",
    products: 64,
    logo: "/sellers/ohtrinkets.png",
    quote:
      "On a ₹400 pair of earrings the fee is ₹4. On the platform I left it was closer to ₹40. At my volumes that is the difference between a hobby and an income.",
    approvedOn: null,
  },
];
