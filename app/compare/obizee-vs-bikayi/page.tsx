import type { Metadata } from "next";
import CompareBikayiPage from "@/pages/CompareBikayi";


export const metadata: Metadata = {
  title:
    "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
  description:
    "0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products. Compare oBizee vs Bikayi for Indian sellers. oBizee: ₹0/month, built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping. Bikayi: free tier + paid plans from ₹999/month.",
  keywords:
    "oBizee vs Bikayi, Bikayi alternative, Bikayi app review, cheapest online store India, Bikayi pricing",
  alternates: {
    canonical: "https://www.obizee.com/compare/obizee-vs-bikayi",
  },
  openGraph: {
    title:
      "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
    description:
      "Side-by-side comparison: ₹0/month vs ₹999+/month. Built-in Delhivery, DTDC & Blue Dart vs no logistics. See why Indian sellers choose oBizee over Bikayi.",
    type: "article",
    url: "https://www.obizee.com/compare/obizee-vs-bikayi",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]",
    description:
      "₹0/month vs ₹999+/month. Built-in Delhivery, DTDC & Blue Dart vs no logistics. Compare oBizee and Bikayi for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Bikayi \u2014 Best Bikayi Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Bikayi for Indian sellers. oBizee has 0 SUBSCRIPTION and 0 SETUP FEE. Bikayi has paid plans from \u20B9999/month.",
    url: "https://www.obizee.com/compare/obizee-vs-bikayi",
    inLanguage: "en-IN",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is oBizee better than Bikayi?", acceptedAnswer: { "@type": "Answer", text: "For Indian small merchants who need built-in shipping, yes. oBizee offers Delhivery, DTDC & Blue Dart logistics, custom order forms, 0 SUBSCRIPTION and a FREE mapped custom domain. Bikayi excels with WhatsApp Business API integration." } },
      { "@type": "Question", name: "Does Bikayi have shipping integration?", acceptedAnswer: { "@type": "Answer", text: "No. Bikayi focuses on WhatsApp commerce and store building but doesn\u2019t have built-in logistics. oBizee has native Delhivery, DTDC, Blue Dart and hyperlocal integration." } },
      { "@type": "Question", name: "Is Bikayi free?", acceptedAnswer: { "@type": "Answer", text: "Bikayi has a free tier with limited features, and ties a free custom domain to its paid yearly plan. oBizee has 0 SUBSCRIPTION, 0 SETUP FEE and a FREE mapped custom domain on every plan." } },
      { "@type": "Question", name: "Which is cheaper \u2014 oBizee or Bikayi?", acceptedAnswer: { "@type": "Answer", text: "oBizee is cheaper for most merchants \u2014 0 SUBSCRIPTION and 0 SETUP FEE vs Bikayi's paid plans that start at \u20B9999/month for full features." } },
      { "@type": "Question", name: "Can I sell on WhatsApp with oBizee?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee supports WhatsApp selling along with Instagram and your own website. While Bikayi offers deeper WhatsApp Business API integration, oBizee provides multi-channel selling with built-in logistics." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      { "@type": "ListItem", position: 3, name: "oBizee vs Bikayi", item: "https://www.obizee.com/compare/obizee-vs-bikayi" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <CompareBikayiPage />
    </>
  );
}
