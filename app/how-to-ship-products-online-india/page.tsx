import type { Metadata } from "next";
import HowToShipProductsPage from "@/pages/HowToShipProducts";


export const metadata: Metadata = {
  title:
    "How to Ship Products Online in India — Delhivery, DTDC, Blue Dart & Hyperlocal Integration Guide [2026]",
  description:
    "Learn how to ship products online in India using oBizee's built-in Delhivery, DTDC, Blue Dart & hyperlocal integration. Generate AWB numbers, schedule pickups, track shipments — all from one app. No third-party tools needed.",
  keywords:
    "how to ship products online India, Delhivery integration ecommerce, DTDC shipping small business, ecommerce shipping India, AWB number generation, courier integration online store, cheapest shipping for online sellers India",
  alternates: {
    canonical:
      "https://www.obizee.com/how-to-ship-products-online-india",
  },
  openGraph: {
    title:
      "How to Ship Products Online in India — Delhivery, DTDC, Blue Dart & Hyperlocal Integration Guide [2026]",
    description:
      "Learn how to ship products online in India using oBizee's built-in Delhivery, DTDC, Blue Dart & hyperlocal integration. Generate AWB numbers, schedule pickups, track shipments — all from one app. No third-party tools needed.",
    type: "article",
    url: "https://www.obizee.com/how-to-ship-products-online-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Ship Products Online in India — Delhivery, DTDC, Blue Dart & Hyperlocal Integration Guide [2026]",
    description:
      "Learn how to ship products online in India using oBizee's built-in Delhivery, DTDC, Blue Dart & hyperlocal integration. Generate AWB numbers, schedule pickups, track shipments — all from one app.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Ship Products Online in India \u2014 Delhivery, DTDC, Blue Dart & Hyperlocal Integration Guide [2026]",
    description: "Learn how to ship products online in India using oBizee's built-in Delhivery, DTDC, Blue Dart & hyperlocal integration. Generate AWB numbers, schedule pickups, track shipments \u2014 all from one app. No third-party tools needed.",
    url: "https://www.obizee.com/how-to-ship-products-online-india",
    inLanguage: "en-IN",
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Ship Products Online in India with oBizee",
    description: "Step-by-step guide to shipping products in India using oBizee's built-in Delhivery, DTDC, Blue Dart and same-day hyperlocal integration. Generate AWB numbers, schedule pickups, and provide live tracking to customers.",
    totalTime: "PT5M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "37" },
    tool: [
      { "@type": "HowToTool", name: "oBizee App (Android or iOS)" },
      { "@type": "HowToTool", name: "Delhivery or DTDC merchant account" },
    ],
    step: [
      { "@type": "HowToStep", name: "Set Up Shipping Integration", text: "Go to Settings \u2192 Shipping Settings in the oBizee app. Connect your Delhivery or DTDC account in one tap.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-1" },
      { "@type": "HowToStep", name: "Receive an Order", text: "When a customer places an order through your oBizee store, it appears on your Orders dashboard with full customer and delivery details.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-2" },
      { "@type": "HowToStep", name: "Create a Shipment", text: "Open the order, tap Create Shipment. Enter your pickup address, package dimensions (length, breadth, height), and weight.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-3" },
      { "@type": "HowToStep", name: "Choose Shipping Mode", text: "Select between Surface (standard) and Express delivery. See real-time pricing for each option before confirming.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-4" },
      { "@type": "HowToStep", name: "Generate AWB Number", text: "Tap Get AWB Number to generate your Air Waybill. The courier pickup is automatically scheduled.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-5" },
      { "@type": "HowToStep", name: "Customer Gets Live Tracking", text: "Your customer automatically receives live order tracking showing shipment status, expected delivery date, and real-time updates.", url: "https://www.obizee.com/how-to-ship-products-online-india#step-6" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Which courier services does oBizee support?", acceptedAnswer: { "@type": "Answer", text: "oBizee has native integration with Delhivery, DTDC and Blue Dart \u2014 two of India's largest courier networks. You can connect either or both from the Shipping Settings in the app." } },
      { "@type": "Question", name: "How do I generate an AWB number on oBizee?", acceptedAnswer: { "@type": "Answer", text: "Open any order, tap Create Shipment, enter package dimensions and weight, choose your shipping mode (Surface or Express), and tap Get AWB Number. The AWB is generated instantly and the pickup is scheduled automatically." } },
      { "@type": "Question", name: "How much does shipping cost on oBizee?", acceptedAnswer: { "@type": "Answer", text: "Shipping costs depend on the courier partner, package dimensions, weight, and destination. oBizee shows you real-time pricing from Delhivery, DTDC and Blue Dart before you confirm \u2014 for example, Surface delivery from Delhi might cost \u20B937 while Express costs \u20B938. You always see the price before committing." } },
      { "@type": "Question", name: "Do I need a separate Delhivery account?", acceptedAnswer: { "@type": "Answer", text: "You need a Delhivery or DTDC merchant account, which you can set up directly from the oBizee app under Settings \u2192 Shipping Settings. The integration takes just one step." } },
      { "@type": "Question", name: "Can my customers track their orders?", acceptedAnswer: { "@type": "Answer", text: "Yes. Once you create a shipment, your customer automatically gets a live tracking page showing the order status (In Progress, Shipped, Out for Delivery, Delivered), expected delivery date, and all order details." } },
      { "@type": "Question", name: "Do I need to use third-party shipping apps like Shiprocket?", acceptedAnswer: { "@type": "Answer", text: "No. Unlike Shopify or WooCommerce where you need third-party tools like Shiprocket, oBizee has Delhivery, DTDC and Blue Dart built directly into the app. No extra apps, no extra fees, no complex setup." } },
      { "@type": "Question", name: "What information do I need to create a shipment?", acceptedAnswer: { "@type": "Answer", text: "You need the pickup address (saved from your settings), package dimensions (length, breadth, height in cm), package weight (minimum 50 grams), and packaging type (Box or Plastic Cover). The customer's delivery address is automatically pulled from their order." } },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "How to Ship Products Online in India", item: "https://www.obizee.com/how-to-ship-products-online-india" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HowToShipProductsPage />
    </>
  );
}
