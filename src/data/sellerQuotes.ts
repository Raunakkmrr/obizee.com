/**
 * Drafted seller quotes for the homepage proof section.
 *
 * IMPORTANT — every quote in this file is a DRAFT written by oBizee, not words
 * these sellers have said. Each card renders a visible "awaiting approval" badge
 * for exactly that reason. Do NOT remove a badge until that seller has read
 * their quote and approved it in writing; set `approved` to the approval date
 * and the badge disappears on its own.
 *
 * Attributing invented words to a real, named business without that marker
 * would be fabrication, whatever the intent.
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
  /** false while the quote is a draft; set to the approval date once given. */
  approved: false | string;
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
    approved: false,
  },
  {
    brandName: "Shop velnora",
    subDomain: "shopvelnora",
    category: "Clothing",
    products: 192,
    logo: "/sellers/shopvelnora.png",
    quote:
      "Orders used to sit in my DMs until I scrolled back and found them. Now they land in one list with the size and the address already filled in. I have not lost an order since.",
    approved: false,
  },
  {
    brandName: "Candle_of__midnight",
    subDomain: "candleofmidnight",
    category: "Candles & home",
    products: 132,
    logo: "/sellers/candleofmidnight.jpg",
    quote:
      "Half my buyers still want cash on delivery. The COD money used to be a spreadsheet I dreaded. It reconciles against the orders on its own now.",
    approved: false,
  },
  {
    brandName: "Snazzy Store",
    subDomain: "snazzystore",
    category: "Lifestyle",
    products: 157,
    logo: "/sellers/snazzystore.png",
    quote:
      "I run the whole shop from my phone between school runs. I have opened a laptop twice this year, both times because I wanted to, not because I had to.",
    approved: false,
  },
  {
    brandName: "Crazy Crochet",
    subDomain: "crazycrochet",
    category: "Crochet & handmade",
    products: 85,
    logo: "/sellers/crazycrochet.png",
    quote:
      "Booking a Delhivery pickup used to mean a separate account and a separate login. It is three taps now, and the customer gets the tracking without me sending it.",
    approved: false,
  },
  {
    brandName: "oh.trinkets",
    subDomain: "ohtrinkets",
    category: "Jewellery",
    products: 64,
    logo: "/sellers/ohtrinkets.png",
    quote:
      "On a ₹400 pair of earrings the fee is ₹4. On the platform I left it was closer to ₹40. At my volumes that is the difference between a hobby and an income.",
    approved: false,
  },
];
