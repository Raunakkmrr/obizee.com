import type { Metadata } from "next";
import BlogPost5 from "@/pages/blog/BlogPost5";

export const metadata: Metadata = {
  title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
  description: "Shopify's real cost for Indian sellers, plus the India-specific problems its own community forum is full of — GST not calculating at checkout, broken Cash on Delivery, no live shipping rates — and how oBizee handles each.",
  keywords: "Shopify pricing India, Shopify cost India, is Shopify worth it India, Shopify expensive India, Shopify alternative cheap, Shopify GST checkout problem, Shopify cash on delivery India, Shopify Payments India",
  alternates: { canonical: "https://www.obizee.com/blog/shopify-india-pricing-review" },
  openGraph: {
    title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
    description: "Real cost breakdown of Shopify for Indian sellers, plus the GST, COD and shipping problems its own community forum is full of.",
    type: "article",
    url: "https://www.obizee.com/blog/shopify-india-pricing-review",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
    description: "Real cost breakdown of Shopify for Indian sellers, plus the GST, COD and shipping problems its own community forum is full of.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Why doesn't Shopify Payments work in India?", acceptedAnswer: { "@type": "Answer", text: "It was never launched for Indian merchants. Every Indian store runs on a third-party gateway (Razorpay, PayU or Paytm) instead, which means paying Shopify's own transaction fee on top of whatever the gateway charges, on every order." } },
      { "@type": "Question", name: "Why did GST stop calculating at checkout on Shopify?", acceptedAnswer: { "@type": "Answer", text: "Merchants using Razorpay have reported GST no longer being applied automatically at checkout, after Shopify stopped sharing full order and customer details with the gateway. The only workaround discussed is manual: reconfigure taxes and pull GST data separately after the fact." } },
      { "@type": "Question", name: "Why does Cash on Delivery redirect my Shopify customer to pay upfront?", acceptedAnswer: { "@type": "Answer", text: "Shopify's own recommended app for this, Advanced Cash on Delivery, has been discontinued. Merchants report the COD option redirecting straight to a Razorpay payment screen instead of letting the customer pay on delivery, with no built-in setting to change it." } },
      { "@type": "Question", name: "Why can't I show a real shipping rate before checkout on Shopify in India?", acceptedAnswer: { "@type": "Answer", text: "Shopify's real-time, carrier-calculated shipping rates aren't available for Indian addresses. Indian stores are stuck choosing between a flat shipping rate or a paid app to show a real courier cost." } },
      { "@type": "Question", name: "Why doesn't my Shopify refund show up correctly?", acceptedAnswer: { "@type": "Answer", text: "Refunds processed through Razorpay don't sync back into Shopify's own order and analytics records, so the two ledgers drift apart and merchants end up reconciling manually." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <BlogPost5 />
    </>
  );
}
