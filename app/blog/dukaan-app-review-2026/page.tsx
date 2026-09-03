import type { Metadata } from "next";
import BlogPost6 from "@/pages/blog/BlogPost6";

export const metadata: Metadata = {
  title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
  description: "An honest review of Dukaan in 2026 — what it does well, where it falls short, pricing breakdown, and how it compares to alternatives like oBizee for Indian sellers.",
  keywords: "Dukaan app review, Dukaan pros cons, Dukaan alternative India, Dukaan vs oBizee, Dukaan pricing 2026",
  alternates: { canonical: "https://www.obizee.com/blog/dukaan-app-review-2026" },
  openGraph: {
    title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "Honest Dukaan review for 2026. Pros, cons, pricing, and how it compares to oBizee for Indian sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/dukaan-app-review-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "Honest Dukaan review for 2026. Pros, cons, pricing, and how it compares to oBizee for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost6 />
    </>
  );
}
