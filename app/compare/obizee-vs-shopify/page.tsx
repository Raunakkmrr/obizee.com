import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareShopifyPage = dynamic(() => import("@/pages/CompareShopify"));

export const metadata: Metadata = {
  title:
    "oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]",
  description:
    "Compare oBizee vs Shopify for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Shopify: ₹2,000+/month + extra for Indian logistics.",
  keywords:
    "oBizee vs Shopify, Shopify alternative India, cheapest Shopify alternative, Shopify too expensive India, best ecommerce platform India, Shopify India pricing",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-shopify",
  },
  openGraph: {
    title:
      "oBizee vs Shopify — Is oBizee the Cheapest Shopify Alternative in India?",
    description:
      "Side-by-side comparison: ₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid third-party apps. See why Indian sellers are switching to oBizee.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-shopify",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]",
    description:
      "₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid apps. Compare oBizee and Shopify for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Shopify \u2014 Cheapest Shopify Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Shopify for Indian sellers. oBizee charges 1% per order (max \u20B910) with no monthly fees. Shopify costs \u20B92,000+/month.",
    url: "https://www.obizee.com/compare/obizee-vs-shopify",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is oBizee really cheaper than Shopify for Indian sellers?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee has no monthly subscription \u2014 you pay only 1% per order, capped at \u20B910 max. A merchant doing 100 orders/month at \u20B9500 average pays just \u20B9500 total on oBizee vs \u20B92,000+ on Shopify before any transaction fees. For small Indian merchants, oBizee is dramatically more affordable." } },
      { "@type": "Question", name: "Does oBizee have shipping like Shopify?", acceptedAnswer: { "@type": "Answer", text: "oBizee has built-in native integration with Delhivery and DTDC \u2014 India\u2019s top courier services. You can generate AWB numbers, schedule pickups, and provide live tracking directly from the app. Shopify requires third-party apps like Shiprocket for Indian logistics, adding complexity and cost." } },
      { "@type": "Question", name: "Can I migrate from Shopify to oBizee?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can set up your oBizee store in under 2 minutes, add your products, and start taking orders immediately. Your customers won\u2019t notice any difference \u2014 they get a clean storefront and order tracking just like Shopify." } },
      { "@type": "Question", name: "Is Shopify better for larger businesses?", acceptedAnswer: { "@type": "Answer", text: "Shopify has more advanced features for larger, global businesses with complex needs. But for Indian small merchants, home businesses, Instagram sellers, and WhatsApp businesses, oBizee offers everything you need at a fraction of the cost \u2014 with logistics built in rather than requiring paid add-ons." } },
      { "@type": "Question", name: "Which is the cheapest Shopify alternative in India?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the cheapest Shopify alternative in India. With zero monthly fees and a maximum of \u20B910 per order in commission, it\u2019s designed specifically for Indian small merchants who find Shopify\u2019s \u20B92,000+/month pricing too expensive." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs Shopify", item: "https://www.obizee.com/compare/obizee-vs-shopify" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareShopifyPage />
    </>
  );
}
