import type { Metadata } from "next";
import CompareDukaanPage from "@/pages/CompareDukaan";


export const metadata: Metadata = {
  title:
    "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
  description:
    "Compare oBizee vs Dukaan for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC. Dukaan: ₹4,999/year subscription.",
  keywords:
    "oBizee vs Dukaan, Dukaan alternative, Dukaan app review, cheapest online store India, Dukaan pricing, best Dukaan alternative 2026",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-dukaan",
  },
  openGraph: {
    title:
      "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
    description:
      "Side-by-side comparison: ₹0/month vs ₹4,999/year. Built-in Delhivery/DTDC vs no shipping integration. See why Indian sellers are switching to oBizee.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-dukaan",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Dukaan — Best Dukaan Alternative in India [2026 Comparison]",
    description:
      "₹0/month vs ₹4,999/year. Built-in Delhivery/DTDC vs no shipping. Compare oBizee and Dukaan for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Dukaan \u2014 Best Dukaan Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Dukaan for Indian sellers. oBizee charges 1% per order (max \u20B910) with no monthly fees. Dukaan costs \u20B94,999/year plus 2-3% per order.",
    url: "https://www.obizee.com/compare/obizee-vs-dukaan",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is oBizee cheaper than Dukaan?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee has no yearly subscription and charges only 1% per order, capped at \u20B910 max. Dukaan charges \u20B94,999/year plus 2-3% per order. For a merchant doing 100 orders/month at \u20B9500 average, oBizee costs \u20B9500/month vs Dukaan\u2019s \u20B9417/month subscription + \u20B91,000+ in transaction fees." } },
      { "@type": "Question", name: "Does Dukaan have shipping integration?", acceptedAnswer: { "@type": "Answer", text: "No. Dukaan does not have built-in logistics. You need to handle shipping separately or use third-party services. oBizee has native Delhivery and DTDC integration with AWB generation, pickup scheduling, and live customer tracking." } },
      { "@type": "Question", name: "Can I switch from Dukaan to oBizee?", acceptedAnswer: { "@type": "Answer", text: "Yes. Set up your oBizee store in under 2 minutes, add your products, and start selling immediately. You get an auto-generated website, order management, and shipping \u2014 all without paying a yearly subscription." } },
      { "@type": "Question", name: "Does Dukaan have WhatsApp selling?", acceptedAnswer: { "@type": "Answer", text: "Yes, both Dukaan and oBizee support WhatsApp selling. However, oBizee also includes built-in logistics integration, custom order forms, and a fare calculator that Dukaan doesn\u2019t offer." } },
      { "@type": "Question", name: "Which is the best Dukaan alternative in India?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the best Dukaan alternative for merchants who want lower costs and built-in shipping. With zero monthly fees, 1% per order (max \u20B910), and native Delhivery/DTDC logistics, oBizee offers more value at a fraction of the cost." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs Dukaan", item: "https://www.obizee.com/compare/obizee-vs-dukaan" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareDukaanPage />
    </>
  );
}
