import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompareDM2buyPage = dynamic(() => import("@/pages/CompareDM2buy"), { ssr: false });

export const metadata: Metadata = {
  title:
    "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026 Comparison]",
  description:
    "Compare oBizee vs DM2buy for Indian sellers. oBizee offers Delhivery/DTDC shipping, WhatsApp + Instagram selling, transparent pricing (1% max ₹10). DM2buy is Instagram-only with no logistics.",
  keywords:
    "oBizee vs DM2buy, DM2buy alternative, best D2C platform India, DM2buy review, Instagram selling platform India, dm2buy shipping",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-dm2buy",
  },
  openGraph: {
    title:
      "oBizee vs DM2buy — Which D2C Platform Wins for Indian Sellers?",
    description:
      "Feature-by-feature comparison: logistics, multi-channel, pricing, and more. See why oBizee wins on 14 of 19 features.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs DM2buy — Best D2C Platform for Indian Sellers [2026]",
    description:
      "Logistics, multi-channel, transparent pricing — oBizee wins on 14 of 19 features vs DM2buy.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs DM2buy \u2014 Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 14 of 19 features with built-in Delhivery/DTDC logistics.",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the difference between oBizee and DM2buy?", acceptedAnswer: { "@type": "Answer", text: "oBizee is a full D2C commerce platform with multi-channel support (Instagram, WhatsApp, web), built-in Delhivery & DTDC shipping, custom order forms, and transparent pricing (1% per order, max \u20B910). DM2buy is primarily an Instagram-focused storefront that excels at converting DMs into orders, but does not include logistics integration or multi-channel selling." } },
      { "@type": "Question", name: "Does DM2buy have shipping integration?", acceptedAnswer: { "@type": "Answer", text: "No. DM2buy does not have built-in logistics or shipping integration. Merchants need to handle shipping separately. oBizee has native integration with Delhivery and DTDC \u2014 you can generate AWB numbers, schedule courier pickups, and provide live tracking to customers directly from the app." } },
      { "@type": "Question", name: "Is DM2buy free to use?", acceptedAnswer: { "@type": "Answer", text: "DM2buy offers a free tier for basic features, but their pricing for advanced features is not publicly documented. oBizee has fully transparent pricing: no monthly fees, just 1% per order capped at \u20B910 maximum. You always know exactly what you\u2019ll pay." } },
      { "@type": "Question", name: "Can I sell on WhatsApp with DM2buy?", acceptedAnswer: { "@type": "Answer", text: "No, DM2buy is Instagram-only. oBizee supports selling through Instagram, WhatsApp, and your own auto-generated website \u2014 all managed from a single dashboard. This multi-channel approach means you can reach more customers without managing multiple tools." } },
      { "@type": "Question", name: "Which is better for Indian small businesses \u2014 oBizee or DM2buy?", acceptedAnswer: { "@type": "Answer", text: "oBizee is the more complete solution for Indian small businesses. It offers everything DM2buy does (online storefront, product listings, order management) plus logistics integration, multi-channel selling, custom order forms, fare calculator, and transparent pricing. oBizee wins on 13 out of 19 features in a direct comparison." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs DM2buy", item: "https://www.obizee.com/compare/obizee-vs-dm2buy" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareDM2buyPage />
    </>
  );
}
