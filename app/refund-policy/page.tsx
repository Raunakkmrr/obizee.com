import type { Metadata } from "next";
import dynamic from "next/dynamic";

const RefundPolicyPage = dynamic(() => import("@/pages/RefundPolicy"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | oBizee",
  description:
    "Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing.",
  keywords:
    "refund policy, cancellation policy, returns, refund processing, product returns, money-back guarantee",
  alternates: { canonical: "https://www.obizee.com/refund-policy" },
  openGraph: {
    title: "Refund & Cancellation Policy | oBizee",
    description:
      "Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing.",
    type: "website",
    url: "https://www.obizee.com/refund-policy",
    images: [{ url: "/refund-policy-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund & Cancellation Policy | oBizee",
    description:
      "Learn about oBizee's refund and cancellation policy. Understand our guidelines for cancellations, returns, and refund processing.",
    images: ["/refund-policy-twitter.jpg"],
  },
};

export default function Page() {
  return <RefundPolicyPage />;
}
