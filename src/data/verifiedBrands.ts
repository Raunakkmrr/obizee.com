export interface VerifiedBrand {
  brandName: string;
  ownerName: string;
  instagramUrl: string;
  logo: string;
  walletBalance: number;
  state: string;
  subDomain: string;
  stage: string;
  quote: string;
  challenge: string;
  solution: string;
}

// Source: user-provided `users` API payload, filtered to walletBalance < 499.
const PRIORITY_BRAND = "CrochetByPriya";

export const verifiedBrands: VerifiedBrand[] = [
  {
    brandName: "Rubber Band",
    ownerName: "Seerat Khera",
    instagramUrl: "https://www.instagram.com/rubberr_band_/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1769237347952.jpg",
    walletBalance: 483.2,
    state: "RJ",
    subDomain: "rubberband",
    stage: "Wallet below ₹499",
    quote: "Instagram-led business operations are now easier to track in one place with oBizee.",
    challenge: "Orders and customer updates were distributed across DMs and manual notes.",
    solution: "oBizee is used as a single dashboard for order tracking and customer follow-ups.",
  },
  {
    brandName: "Loop and Love",
    ownerName: "Saima Ansari",
    instagramUrl: "https://www.instagram.com/loopandlove.crochets/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1768466224979.jpg",
    walletBalance: 496.51,
    state: "UP",
    subDomain: "loopandlove",
    stage: "Wallet below ₹499",
    quote: "Store operations are now organized better with a single business workflow.",
    challenge: "Manual process handling caused delays in updates and order confirmations.",
    solution: "oBizee is used to centralize order status and customer communication.",
  },
  {
    brandName: "Kala haat",
    ownerName: "Tanvi Patel",
    instagramUrl: "https://www.instagram.com/kala_haat__/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1765695086215.png",
    walletBalance: 492.02,
    state: "GJ",
    subDomain: "kalahaat",
    stage: "Wallet below ₹499",
    quote: "Inventory and order clarity improved after moving to a structured dashboard.",
    challenge: "Stock confirmation and order handling required repeated manual checks.",
    solution: "oBizee is used for inventory-aware order confirmation and tracking.",
  },
  {
    brandName: "Crochy_inmind",
    ownerName: "Richa",
    instagramUrl: "https://www.instagram.com/crochy_inmind/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1765456420982.jpg",
    walletBalance: 443.3,
    state: "CG",
    subDomain: "crochyinmind",
    stage: "Wallet below ₹499",
    quote: "Daily order and dispatch communication is now easier to manage.",
    challenge: "Delivery and status updates were difficult to track consistently.",
    solution: "oBizee is used to streamline updates, dispatch flow, and customer visibility.",
  },
  {
    brandName: "Crazy Crochet",
    ownerName: "Minal",
    instagramUrl: "https://www.instagram.com/crazy__crochet009/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1765250286657.png",
    walletBalance: 452.53,
    state: "MH",
    subDomain: "crazycrochet",
    stage: "Wallet below ₹499",
    quote: "Order handling is now cleaner with fewer manual follow-up steps.",
    challenge: "Business communication and orders were spread across chat threads.",
    solution: "oBizee is used to run orders and follow-ups inside one business system.",
  },
  {
    brandName: "NuttyNibbles",
    ownerName: "Udeeta Dey",
    instagramUrl: "https://www.instagram.com/peanutbutter.kolkata/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1768413053951.png",
    walletBalance: 222.21,
    state: "WB",
    subDomain: "nuttynibbles",
    stage: "Wallet below ₹499",
    quote: "Operations are managed with better visibility across orders and customers.",
    challenge: "Maintaining customer and order flow manually consumed daily time.",
    solution: "oBizee is used to keep ordering and customer updates organized.",
  },
  {
    brandName: "Manaz Beauty",
    ownerName: "Mahak Beg",
    instagramUrl: "https://www.instagram.com/_manaz_beauty/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1744278062712.jpg",
    walletBalance: 378.72,
    state: "DL",
    subDomain: "manazbeauty",
    stage: "Wallet below ₹499",
    quote: "Business workflow now runs through a single platform instead of scattered tools.",
    challenge: "Tracking changes and customer interactions manually was inconsistent.",
    solution: "oBizee is used as a central workflow for business operations.",
  },
  {
    brandName: "CrochetByPriya",
    ownerName: "Priya Yadav",
    instagramUrl: "https://www.instagram.com/crochet_by_priya_/",
    logo: "https://crochetimagess.s3.ap-south-1.amazonaws.com/1767767555033.jpg",
    walletBalance: 223.81,
    state: "HR",
    subDomain: "crochetbypriya",
    stage: "Wallet below ₹499",
    quote: "A structured order process replaced manual tracking for day-to-day operations.",
    challenge: "Manual order capture made repeat operations and updates slower.",
    solution: "oBizee is used to centralize orders and simplify daily business flow.",
  },
].sort((a, b) => {
  if (a.brandName === PRIORITY_BRAND) return -1;
  if (b.brandName === PRIORITY_BRAND) return 1;
  return 0;
});
