import type { Metadata } from "next";
import BestPlatforms2026Page from "@/pages/BestPlatforms2026";


export const metadata: Metadata = {
  title:
    "7 Best Ecommerce Platforms in India [2026] — Cheapest to Most Expensive",
  description:
    "0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products. Ranked list of the 7 best ecommerce platforms for Indian sellers in 2026. Compare pricing, shipping integration, and features. oBizee, Dukaan, Shopify, Bikayi, Instamojo, WooCommerce, DM2buy.",
  keywords:
    "best ecommerce platform India 2026, cheapest online store India, D2C platform India, Shopify alternative India, best platform to sell online India",
  alternates: {
    canonical:
      "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
  },
  openGraph: {
    title:
      "7 Best Ecommerce Platforms in India [2026] — Cheapest to Most Expensive",
    description:
      "We compared 7 ecommerce platforms for Indian sellers on pricing, shipping, and features. See which one is best for your business.",
    type: "article",
    url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Ecommerce Platforms in India [2026]",
    description:
      "Ranked list of the best ecommerce platforms for Indian sellers. Compare pricing, shipping, and features.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "7 Best Ecommerce Platforms in India [2026] \u2014 Cheapest to Most Expensive",
    description: "We compared pricing, features, shipping integration, and ease of use across the 7 most popular ecommerce platforms for Indian merchants in 2026.",
    url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which is the cheapest ecommerce platform in India?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the cheapest, with 0 SUBSCRIPTION, 0 SETUP FEE and a FREE mapped custom domain \u2014 see Pricing for the simple structure once you're selling." } },
      { "@type": "Question", name: "Which platform has built-in shipping in India?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the only platform on this list with native Delhivery, DTDC, Blue Dart and hyperlocal integration built into the app. Others require third-party shipping solutions." } },
      { "@type": "Question", name: "Can I start an online store for free in India?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee has 0 SETUP FEE, 0 SUBSCRIPTION and a FREE mapped custom domain, with a 3-month FREE trial (see Pricing for what applies once you're selling). Bikayi and DM2buy also have free tiers but with limitations." } },
      { "@type": "Question", name: "Which platform is best for Instagram sellers in India?", acceptedAnswer: { "@type": "Answer", text: "oBizee and DM2buy both support Instagram selling. oBizee is better if you also want WhatsApp selling and built-in shipping. DM2buy offers a seller collaboration network." } },
      { "@type": "Question", name: "Is Shopify worth it for small Indian businesses?", acceptedAnswer: { "@type": "Answer", text: "For most small Indian businesses, Shopify\u2019s \u20B92,000+/month pricing is hard to justify when platforms like oBizee offer similar core features at a fraction of the cost with built-in Indian logistics." } },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Ecommerce Platforms in India 2026",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 7,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "oBizee", description: "Best overall for Indian small merchants" },
      { "@type": "ListItem", position: 2, name: "Dukaan", description: "Good all-round D2C platform" },
      { "@type": "ListItem", position: 3, name: "Shopify", description: "Best for larger or international businesses" },
      { "@type": "ListItem", position: 4, name: "Bikayi", description: "Best for WhatsApp-first sellers" },
      { "@type": "ListItem", position: 5, name: "Instamojo", description: "Best for digital products and payment links" },
      { "@type": "ListItem", position: 6, name: "WooCommerce", description: "Best for technical users wanting full control" },
      { "@type": "ListItem", position: 7, name: "DM2buy", description: "Best for Instagram-only sellers in a community" },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Best Ecommerce Platforms India 2026", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BestPlatforms2026Page />
    </>
  );
}
