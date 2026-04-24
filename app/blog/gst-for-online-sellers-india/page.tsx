import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TopFunnelPost4 = dynamic(() => import("@/pages/blog/TopFunnelPost4"), { ssr: false });

export const metadata: Metadata = {
  title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
  description: "Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered for ecommerce businesses.",
  keywords: "GST for online sellers India, GST registration online business, GST rates ecommerce India, do I need GST for online selling",
  alternates: { canonical: "https://www.obizee.com/blog/gst-for-online-sellers-india" },
  openGraph: {
    title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered.",
    type: "article",
    url: "https://www.obizee.com/blog/gst-for-online-sellers-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete guide to GST for online sellers in India. Registration, rates, filing, invoicing, and common questions answered.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <TopFunnelPost4 />;
}
