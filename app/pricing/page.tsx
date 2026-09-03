import type { Metadata } from "next";
import PricingPage from "@/pages/Pricing";


export const metadata: Metadata = {
  title: "oBizee Pricing — 0 Subscription Charges. Pay Only When You Get an Order.",
  description:
    "0 subscription charges — you pay oBizee nothing at all until your store has taken ₹50,000 " +
    "in orders. After that, 1% per successful order capped at ₹10, so a ₹10,000 order still costs " +
    "₹10. A month with no orders costs nothing.",
  keywords:
    "oBizee pricing, no subscription ecommerce India, pay per order, free until 50000 in orders, 1 percent fee, max 10 rupees per order, India SaaS pricing",
  alternates: { canonical: "https://www.obizee.com/pricing" },
  openGraph: {
    title: "oBizee Pricing — 0 Subscription Charges. Pay Only When You Get an Order.",
    description:
      "Simple single-plan pricing: nothing until your store has taken ₹50,000 in orders, then 1% per successful order capped at ₹10.",
    type: "website",
    url: "https://www.obizee.com/pricing",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Pricing — 0 Subscription Charges. Pay Only When You Get an Order.",
    description:
      "Simple single-plan pricing: nothing until your store has taken ₹50,000 in orders, then 1% per successful order capped at ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oBizee",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    areaServed: "IN",
    offers: {
      "@type": "Offer",
      name: "oBizee Single Plan",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.obizee.com/pricing",
      description: "Nothing to pay until your store has taken ₹50,000 in orders. After that, 1% per successful order with a maximum fee cap of ₹10 per order.",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "When does billing start?", acceptedAnswer: { "@type": "Answer", text: "Billing starts only after your store has taken ₹50,000 in orders." } },
      { "@type": "Question", name: "What exactly is the platform fee after ₹50,000?", acceptedAnswer: { "@type": "Answer", text: "Once your store has taken ₹50,000 in orders, the platform fee is 1% per successful order with a maximum cap of ₹10 for each order." } },
      { "@type": "Question", name: "Do I pay fee on failed or canceled orders?", acceptedAnswer: { "@type": "Answer", text: "No. Platform fee is applied only on successful orders." } },
      { "@type": "Question", name: "Are there any setup charges or hidden fees?", acceptedAnswer: { "@type": "Answer", text: "No setup charges, no hidden platform fee, and no monthly minimum commitment." } },
      { "@type": "Question", name: "How does the cap help on larger order values?", acceptedAnswer: { "@type": "Answer", text: "Even if 1% becomes higher than ₹10, your fee per order remains ₹10 due to the cap." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.obizee.com/pricing" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PricingPage />
    </>
  );
}
