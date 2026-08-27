import type { Metadata } from "next";
import FeaturesPage from "@/pages/FeaturesPage";


export const metadata: Metadata = {
  title: "oBizee Features | Orders, Inventory, Payments, Analytics",
  description:
    "0 subscription charges — you pay oBizee only when you get an order, then 1% capped at ₹10. Explore oBizee features for Indian sellers and small businesses. Manage orders, inventory, payments, customer updates, and analytics from one dashboard.",
  alternates: { canonical: "https://www.obizee.com/features" },
  openGraph: {
    title: "oBizee Features | Orders, Inventory, Payments, Analytics",
    description:
      "One platform for Indian businesses to manage core operations: orders, stock, payments, and growth analytics.",
    type: "website",
    url: "https://www.obizee.com/features",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Features | Orders, Inventory, Payments, Analytics",
    description:
      "Manage your business operations in one place with oBizee's India-first feature set.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee Features",
    description: "Explore oBizee features for Indian sellers: order management, inventory tracking, payment workflows, analytics, and business operations in one place.",
    url: "https://www.obizee.com/features",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What features does oBizee offer?", acceptedAnswer: { "@type": "Answer", text: "oBizee offers auto-generated merchant websites, order management dashboard, inventory tracking, custom order form builder, Delhivery, DTDC & Blue Dart logistics integration, fare calculator, employee & vendor management, payment tracking, and sales analytics — all from a single mobile app." } },
      { "@type": "Question", name: "Does oBizee have shipping and logistics features?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee has native integration with Delhivery, DTDC and Blue Dart. You can generate AWB numbers, schedule courier pickups, and provide live order tracking to your customers — all directly from the app." } },
      { "@type": "Question", name: "Can I manage inventory on oBizee?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee includes full inventory management with stock tracking, product categories, and real-time updates across all your sales channels." } },
      { "@type": "Question", name: "Does oBizee support payment processing?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee supports hosted payment processing with UPI, cards, net banking, and wallet options via integrated payment gateway. Transaction visibility is available in the dashboard." } },
      { "@type": "Question", name: "Can I track my business performance on oBizee?", acceptedAnswer: { "@type": "Answer", text: "Yes. oBizee provides business analytics including order funnel visibility, revenue and expense snapshots, product-level insights, and custom date range reports to help you make data-driven decisions." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://www.obizee.com/features" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <FeaturesPage />
    </>
  );
}
