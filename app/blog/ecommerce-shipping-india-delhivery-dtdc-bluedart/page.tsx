import type { Metadata } from "next";
import TopFunnelPost3 from "@/pages/blog/TopFunnelPost3";

export const metadata: Metadata = {
  title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
  description: "Complete guide to ecommerce shipping in India. Compare Delhivery, DTDC, and BlueDart on pricing, coverage, speed, and reliability. Plus how to integrate shipping into your online store.",
  keywords: "ecommerce shipping India, Delhivery vs DTDC, best courier for ecommerce India, shipping for online sellers India, cheapest courier India",
  alternates: { canonical: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart" },
  openGraph: {
    title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
    description: "Compare Delhivery, DTDC, and BlueDart for ecommerce shipping in India. Pricing, coverage, speed, and integration guide for online sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
    description: "Compare Delhivery, DTDC, and BlueDart for ecommerce shipping in India. Pricing, coverage, speed, and integration guide.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <TopFunnelPost3 />
    </>
  );
}
