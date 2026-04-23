import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PricingPage = dynamic(() => import("@/pages/Pricing"), { ssr: false });

export const metadata: Metadata = {
  title: "oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)",
  description:
    "Start with a 3-month free trial. After trial, pay 1% per successful order with a maximum cap of ₹10 per order.",
  keywords:
    "oBizee pricing, 3 month free trial, 1 percent fee, max 10 rupees per order, India SaaS pricing",
  alternates: { canonical: "https://www.obizee.com/pricing" },
  openGraph: {
    title: "oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)",
    description:
      "Simple single-plan pricing: 3-month free trial, then 1% per successful order capped at ₹10.",
    type: "website",
    url: "https://www.obizee.com/pricing",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)",
    description:
      "Simple single-plan pricing: 3-month free trial, then 1% per successful order capped at ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <PricingPage />;
}
