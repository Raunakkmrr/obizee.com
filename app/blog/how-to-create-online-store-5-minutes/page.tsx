import type { Metadata } from "next";
import BlogPost1 from "@/pages/blog/BlogPost1";

export const metadata: Metadata = {
  title: "How to Create Your Online Store in 5 Minutes with oBizee",
  description: "A complete guide to setting up your online store on oBizee. From download to first sale — no coding, no monthly fees, no technical knowledge needed.",
  keywords: "create online store India, how to sell online, oBizee store setup, free online store India, sell on Instagram India",
  alternates: { canonical: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes" },
  openGraph: {
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    type: "article",
    url: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost1 />
    </>
  );
}
