import type { Metadata } from "next";
import BlogPost8 from "@/pages/blog/BlogPost8";

export const metadata: Metadata = {
  title: "Online Store vs WhatsApp Business: Which Is Better for Selling?",
  description: "Should you sell through WhatsApp Business alone or create an online store? A detailed comparison of both approaches — with the case for using both together.",
  keywords: "online store vs WhatsApp business, sell on WhatsApp India, WhatsApp business limitations, should I create online store",
  alternates: { canonical: "https://www.obizee.com/blog/online-store-vs-whatsapp-business" },
  openGraph: {
    title: "Online Store vs WhatsApp Business: Which Is Better for Selling?",
    description: "WhatsApp Business vs online store for Indian sellers. Limitations, benefits, and why using both together is the smartest approach.",
    type: "article",
    url: "https://www.obizee.com/blog/online-store-vs-whatsapp-business",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Store vs WhatsApp Business: Which Is Better for Selling?",
    description: "WhatsApp Business vs online store for Indian sellers. Limitations, benefits, and why using both together is the smartest approach.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost8 />
    </>
  );
}
