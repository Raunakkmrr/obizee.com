import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CompliancePage = dynamic(() => import("@/pages/Compliance"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "oBizee Compliance | Legal Details, Payment Flow, PCI Checklist",
  description:
    "oBizee compliance information for payment gateway onboarding: legal entity details, business model, payment flow, registration certificate support, and PCI DSS checklist.",
  alternates: { canonical: "https://www.obizee.com/compliance" },
  openGraph: {
    title: "oBizee Compliance | Legal Details, Payment Flow, PCI Checklist",
    description:
      "Review oBizee merchant compliance details including legal name, address, payment process flow, and PCI DSS checklist.",
    type: "website",
    url: "https://www.obizee.com/compliance",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Compliance | Legal Details, Payment Flow, PCI Checklist",
    description:
      "Merchant compliance details for oBizee payment integration and onboarding.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <CompliancePage />;
}
