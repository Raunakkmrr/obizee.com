import type { Metadata } from "next";
import SellerReportPage from "@/legacy-views/SellerReport";

/**
 * Metadata only — the Report JSON-LD and breadcrumb live in the page component
 * so the structured data and the visible numbers can never diverge (same rule
 * as the compare routes). The canonical stays constant across editions; the
 * edition is content, not URL.
 */
export const metadata: Metadata = {
  title: "The India Home Seller Report 2026 | oBizee",
  description:
    "Measured, not guessed: 238 home sellers across 22 states, 4,092 recorded orders, a median order of ₹561, order value up ~3× in a year — and order entry peaking at 2 am. Aggregated production data, free to cite with attribution.",
  alternates: { canonical: "https://www.obizee.com/india-home-seller-report" },
};

export default function Page() {
  return <SellerReportPage />;
}
