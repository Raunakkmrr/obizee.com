import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CustomerTestimonialsPage = dynamic(
  () => import("@/pages/CustomerTestimonialsPage"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "oBizee Customer Testimonials | Real Business Growth Stories",
  description:
    "Read customer testimonials from Indian small businesses and Instagram sellers using oBizee to manage orders, stock, and operations.",
  alternates: { canonical: "https://www.obizee.com/customer-testimonials" },
  openGraph: {
    title: "oBizee Customer Testimonials | Real Business Growth Stories",
    description:
      "See how real Indian businesses use oBizee to streamline day-to-day operations and grow online.",
    type: "website",
    url: "https://www.obizee.com/customer-testimonials",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Customer Testimonials | Real Business Growth Stories",
    description:
      "Real testimonials from Indian sellers and founders using oBizee to run business operations.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CustomerTestimonialsPage />;
}
