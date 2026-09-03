import type { Metadata } from "next";
import MoveMyStoreClient from "./MoveMyStoreClient";

export const metadata: Metadata = {
  title: "Move Your Store to oBizee — We Do the Migration, Free",
  description:
    "Already selling on Dukaan, Shopify, Bikayi, Instamojo or Instagram? Send us your store " +
    "link and we move your products, images, prices and categories across for you. No charge " +
    "for the move. No monthly fee after it, no setup fee — and nothing at all until your store has taken ₹50,000 in orders, then 1% per order capped at ₹10.",
  keywords:
    "migrate from Dukaan, Shopify alternative India migration, move online store India, " +
    "Bikayi alternative, Instamojo alternative, switch ecommerce platform India",
  alternates: { canonical: "https://www.obizee.com/move-my-store" },
};

export default function MoveMyStorePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does the migration cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nothing. We move your products, images, prices, variants and categories across at no charge. After the move there are 0 subscription charges — you pay oBizee only when you get an order, and then 1% of it capped at ₹10.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most stores are moved within 48 hours of you sending the link. Larger catalogues take longer; we will tell you before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Do I have to close my existing store first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Keep it running. We build yours on oBizee alongside it, you check it, and you switch only when you are happy with it.",
        },
      },
      {
        "@type": "Question",
        name: "Which platforms can you move from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dukaan, Shopify, Bikayi, Instamojo, WooCommerce and dm2buy, plus a plain Instagram catalogue. If your store is somewhere else, send the link and we will tell you honestly whether we can move it.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <MoveMyStoreClient />
    </>
  );
}
