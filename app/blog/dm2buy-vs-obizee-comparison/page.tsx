import type { Metadata } from "next";
import BlogPost7 from "@/pages/blog/BlogPost7";

export const metadata: Metadata = {
  title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
  description: "A detailed comparison of DM2buy and oBizee — features, pricing, shipping, multi-channel support, and which platform is better for Indian online sellers.",
  keywords: "DM2buy vs oBizee, DM2buy review, DM2buy alternative, Instagram selling platform India, DM2buy shipping",
  alternates: { canonical: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison" },
  openGraph: {
    title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "DM2buy vs oBizee — detailed feature comparison, pricing, shipping integration, and which is better for Indian sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "DM2buy vs oBizee — detailed feature comparison, pricing, shipping integration, and which is better for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost7 />
    </>
  );
}
