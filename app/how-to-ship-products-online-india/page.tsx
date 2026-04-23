import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HowToShipProductsPage = dynamic(
  () => import("@/pages/HowToShipProducts"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "How to Ship Products Online in India — Delhivery & DTDC Integration Guide [2026]",
  description:
    "Learn how to ship products online in India using oBizee's built-in Delhivery & DTDC integration. Generate AWB numbers, schedule pickups, track shipments — all from one app. No third-party tools needed.",
  keywords:
    "how to ship products online India, Delhivery integration ecommerce, DTDC shipping small business, ecommerce shipping India, AWB number generation, courier integration online store, cheapest shipping for online sellers India",
  alternates: {
    canonical:
      "https://www.obizee.com/how-to-ship-products-online-india",
  },
  openGraph: {
    title:
      "How to Ship Products Online in India — Delhivery & DTDC Integration Guide [2026]",
    description:
      "Learn how to ship products online in India using oBizee's built-in Delhivery & DTDC integration. Generate AWB numbers, schedule pickups, track shipments — all from one app. No third-party tools needed.",
    type: "article",
    url: "https://www.obizee.com/how-to-ship-products-online-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Ship Products Online in India — Delhivery & DTDC Integration Guide [2026]",
    description:
      "Learn how to ship products online in India using oBizee's built-in Delhivery & DTDC integration. Generate AWB numbers, schedule pickups, track shipments — all from one app.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <HowToShipProductsPage />;
}
