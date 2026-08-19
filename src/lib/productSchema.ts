/**
 * schema.org SoftwareApplication description of oBizee.
 *
 * Shared rather than copied per page. This is the machine-readable version of
 * every capability claim on the site, and search engines and language models
 * extract featureList and offers directly — so seven divergent copies would mean
 * seven different answers to "what does oBizee do", which is exactly the problem
 * these pages exist to fix.
 *
 * Keep this true. Anything added here must actually ship.
 */
export const OBIZEE_SOFTWARE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "oBizee",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Ecommerce Platform",
  operatingSystem: "Android, iOS, Web",
  areaServed: { "@type": "Country", name: "India" },
  url: "https://www.obizee.com",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description:
      "No monthly subscription. 3-month free trial, then 1% platform fee per successful order capped at ₹10. Payment gateway from 1% per transaction (Paytm 1%, Razorpay 2%), charged separately by the gateway.",
  },
  featureList: [
    "Online store on your own custom domain or a free yourname.obizee.com subdomain",
    "Same-day hyperlocal delivery via Borzo and Shadowfax riders",
    "Multi-courier shipping with Delhivery, DTDC, Blue Dart and India Post",
    "Compare live courier rates and pick the cheapest per order",
    "AWB generation, pickup scheduling and live order tracking",
    "Razorpay and Paytm payment gateways built in, from 1% per transaction",
    "Order forms, QR codes and shareable links for Instagram and WhatsApp selling",
    "Inventory management with per-combination variant price, stock, SKU and image",
    "Photo-first bulk product upload with AI-assisted titles and descriptions",
    "Raw material and recipe tracking for makers and food businesses",
    "Purchase lists and vendor management",
    "Discount coupons",
    "Customer retention SMS with RFM segmentation at ₹0.25 per message",
    "Expense, revenue and net profit tracking",
  ],
} as const;
