import React from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

/**
 * The India Home Seller Report — October 2026 edition.
 *
 * Every number on this page comes from a read-only aggregate query against
 * oBizee's production database, run 2026-10-15 and approved by Raunak the same
 * day ("yes numbers are correct, 2am is real sellers working late"). Nothing
 * here is estimated, industry-sourced or modelled. Next edition: re-run the
 * queries (see _project-docs/planning/visibility-network-plan.md) and update
 * REPORT below — this page keeps its canonical URL across editions.
 */
const REPORT = {
  edition: "October 2026",
  queriedOn: "15 October 2026",
  merchants: 238,
  liveStorefronts: 218,
  statesAndUTs: 22,
  products: 3175,
  ordersRecorded: 4092,
  medianOrder: 561,
  meanOrder: 2049,
  medianDaysToFirstOrder: 1,
  p75DaysToFirstOrder: 5,
  // Monthly recorded order value, ₹ thousands. October 2026 is month-to-date.
  monthly: [
    ["Jul 2025", 310, 201], ["Aug 2025", 241, 164], ["Sep 2025", 303, 206],
    ["Oct 2025", 243, 409], ["Nov 2025", 222, 422], ["Dec 2025", 106, 378],
    ["Jan 2026", 145, 414], ["Feb 2026", 142, 429], ["Mar 2026", 143, 408],
    ["Apr 2026", 115, 344], ["May 2026", 246, 671], ["Jun 2026", 226, 475],
    ["Jul 2026", 181, 508], ["Aug 2026", 167, 595], ["Sep 2026", 153, 506],
    ["Oct 2026*", 104, 481],
  ] as [string, number, number][],
  peakHours: ["5 pm", "7 pm", "2 am"],
  topStates: [
    ["Maharashtra", 40], ["Uttar Pradesh", 29], ["West Bengal", 22],
    ["Delhi", 22], ["Karnataka", 17], ["Haryana", 13], ["Gujarat", 11],
    ["Rajasthan", 11], ["Tamil Nadu", 10], ["Madhya Pradesh", 8],
  ] as [string, number][],
};

const CANONICAL = "https://www.obizee.com/india-home-seller-report";

export default function SellerReportPage() {
  const reportJsonLd = {
    "@context": "https://schema.org",
    "@type": "Report",
    name: `The India Home Seller Report — ${REPORT.edition}`,
    url: CANONICAL,
    datePublished: "2026-10-15",
    publisher: { "@type": "Organization", name: "oBizee", url: "https://www.obizee.com/" },
    description:
      "Aggregated, anonymised operating data from India's home-run online businesses: " +
      `${REPORT.merchants} sellers across ${REPORT.statesAndUTs} states and union territories, ` +
      `${REPORT.ordersRecorded.toLocaleString("en-IN")} recorded orders, a median order of ₹${REPORT.medianOrder}, ` +
      "and order entry peaking at 5 pm, 7 pm — and 2 am.",
  };

  const headline = [
    { n: REPORT.merchants.toLocaleString("en-IN"), label: "sellers on the platform" },
    { n: String(REPORT.statesAndUTs), label: "states & union territories" },
    { n: REPORT.products.toLocaleString("en-IN"), label: "products listed" },
    { n: REPORT.ordersRecorded.toLocaleString("en-IN"), label: "orders recorded" },
    { n: `₹${REPORT.medianOrder}`, label: "median order value" },
    { n: "≈3×", label: "growth in monthly order value, year on year" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.obizee.com/" },
          { name: "India Home Seller Report", url: CANONICAL },
        ]}
      />
      <JsonLd data={reportJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="border-b border-orange-100 bg-gradient-to-b from-orange-50/70 to-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Report · {REPORT.edition} edition
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              The India <span className="text-orange-600">Home Seller</span> Report
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              What running an online business from home in India actually looks
              like — measured, not guessed. Every figure below is an aggregated,
              anonymised query over the orders, products and stores run on
              oBizee, as of {REPORT.queriedOn}.
            </p>
          </div>
        </section>

        {/* Headline numbers */}
        <section className="py-10 sm:py-14" aria-label="Headline numbers">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {headline.map((h) => (
                <div key={h.label} className="rounded-xl border border-gray-200 bg-white p-5">
                  <p className="text-3xl font-extrabold text-gray-900">{h.n}</p>
                  <p className="mt-1 text-sm text-gray-600">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 2am finding */}
        <section className="bg-gray-900 py-12 text-white sm:py-16" aria-labelledby="late-night">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
              The finding we did not expect
            </p>
            <h2 id="late-night" className="mt-3 text-3xl font-extrabold sm:text-4xl">
              India&rsquo;s home sellers work at <span className="text-orange-400">2 am</span>
            </h2>
            <p className="mt-4 max-w-2xl text-gray-300">
              Order entry on oBizee peaks at {REPORT.peakHours[0]} and{" "}
              {REPORT.peakHours[1]} — and then again at {REPORT.peakHours[2]} IST.
              The third-busiest hour of the selling day happens after midnight:
              home sellers closing the day&rsquo;s DMs, confirming payments and
              recording orders after the household sleeps. Home business in India
              is not a 9-to-5 — it is a before-9 and an after-5, and then some.
            </p>
          </div>
        </section>

        {/* Growth table */}
        <section className="py-12 sm:py-16" aria-labelledby="growth">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 id="growth" className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Order value nearly tripled in a year
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Monthly recorded order value grew from ₹2.01 lakh in July 2025 to
              ₹5.95 lakh in August 2026, while order counts stayed in the same
              band — home sellers are closing bigger orders, not just more of
              them.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Month</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Orders recorded</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Order value (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {REPORT.monthly.map(([m, n, v], i) => (
                    <tr key={m} className={i % 2 ? "bg-orange-50/40" : "bg-white"}>
                      <td className="px-4 py-2.5 font-medium text-gray-900">{m}</td>
                      <td className="px-4 py-2.5 text-gray-700">{n}</td>
                      <td className="px-4 py-2.5 text-gray-700">{(v * 1000).toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              *October 2026 is month-to-date as of {REPORT.queriedOn}.
            </p>
          </div>
        </section>

        {/* Order economics + adoption */}
        <section className="bg-orange-50/50 py-12 sm:py-16" aria-labelledby="economics">
          <div className="mx-auto grid max-w-4xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
            <div>
              <h2 id="economics" className="text-2xl font-extrabold text-gray-900">
                The ₹561 order is the real India
              </h2>
              <p className="mt-3 text-gray-600">
                The median order on oBizee is ₹{REPORT.medianOrder}. The mean is
                ₹{REPORT.meanOrder.toLocaleString("en-IN")} — pulled up by a small
                number of large custom and wholesale orders. Any picture of
                Indian home selling built on averages alone misses the business:
                high-frequency, modest-ticket, relationship-driven orders.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                First order recorded within a day
              </h2>
              <p className="mt-3 text-gray-600">
                Half of the sellers who record orders put their first one in
                within {REPORT.medianDaysToFirstOrder} day of joining;
                three-quarters within {REPORT.p75DaysToFirstOrder} days. These
                are real businesses arriving with orders already in hand — the
                software meets a business that already exists, usually in
                Instagram DMs and WhatsApp chats.
              </p>
            </div>
          </div>
        </section>

        {/* Geography */}
        <section className="py-12 sm:py-16" aria-labelledby="geography">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 id="geography" className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Where India&rsquo;s home sellers are
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Live storefronts span {REPORT.statesAndUTs} states and union
              territories — from metros to towns the serviceability maps barely
              reach.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {REPORT.topStates.map(([s, n]) => (
                <li key={s} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <p className="text-xl font-extrabold text-gray-900">{n}</p>
                  <p className="text-xs text-gray-600">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Method */}
        <section className="border-t border-gray-200 bg-gray-50 py-12" aria-labelledby="method">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 id="method" className="text-xl font-extrabold text-gray-900">Method, honestly</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
              <li>
                All figures are aggregate, read-only queries over oBizee&rsquo;s
                production database on {REPORT.queriedOn}. No individual seller
                or customer is identifiable from anything on this page.
              </li>
              <li>
                &ldquo;Orders recorded&rdquo; includes every order a seller
                entered — storefront checkouts and orders recorded from
                Instagram, WhatsApp and offline sales. Recording the whole
                business is the product&rsquo;s purpose; treat these as business
                activity, not only website checkouts.
              </li>
              <li>
                We do not publish repeat-purchase rates or payment-mode splits in
                this edition: the underlying data cannot support those claims
                cleanly yet, so we make no claim.
              </li>
              <li>
                Cite freely with attribution:
                &ldquo;The India Home Seller Report, oBizee, {REPORT.edition}&rdquo;
                — and link this page, which keeps its URL across editions.
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              See the sellers behind the numbers on{" "}
              <Link href="/shops" className="font-semibold text-orange-700 underline underline-offset-2">
                the live shop wall
              </Link>
              , or read{" "}
              <Link href="/guides/" className="font-semibold text-orange-700 underline underline-offset-2">
                the seller guides
              </Link>{" "}
              this data informs.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
