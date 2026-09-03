import type { Metadata } from "next";
import BlogPost3 from "@/pages/blog/BlogPost3";

export const metadata: Metadata = {
  title: "oBizee Customer Success Stories: Real Merchants, Real Growth",
  description: "How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee's platform. Real stories from real merchants.",
  keywords: "oBizee success stories, Indian seller stories, Instagram seller India, crochet business India, small business online India",
  alternates: { canonical: "https://www.obizee.com/blog/obizee-customer-success-stories" },
  openGraph: {
    title: "oBizee Customer Success Stories: Real Merchants, Real Growth",
    description: "How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee. Real stories from real merchants.",
    type: "article",
    url: "https://www.obizee.com/blog/obizee-customer-success-stories",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Customer Success Stories: Real Merchants, Real Growth",
    description: "How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee. Real stories from real merchants.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost3 />
    </>
  );
}
