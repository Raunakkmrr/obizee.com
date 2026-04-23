import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SuccessStoriesPage = dynamic(() => import("@/pages/SuccessStories"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Success Stories | How Businesses Thrive with oBizee",
  description:
    "Read real success stories from early-stage Indian brands using oBizee to run orders, inventory, and customer communication in one place.",
  keywords:
    "oBizee success stories, Indian startup brands, customer testimonials, Instagram seller stories, business growth case studies",
  alternates: { canonical: "https://www.obizee.com/success-stories" },
  openGraph: {
    title: "Success Stories | How Businesses Thrive with oBizee",
    description:
      "Real stories from early-stage Indian brands using oBizee for day-to-day business operations.",
    type: "website",
    url: "https://www.obizee.com/success-stories",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | How Businesses Thrive with oBizee",
    description:
      "Real stories from early-stage Indian brands using oBizee for order, stock, and customer workflows.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <SuccessStoriesPage />;
}
