"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

/**
 * What oBizee costs, in rupees rather than in percentages.
 *
 * "1% capped at ₹10" is abstract until someone sees it on an order they
 * recognise, so the three worked examples do the explaining. The point they
 * carry is the cap: the fee stops growing at ₹10 whatever the order is worth.
 *
 * Competitor figures are from their public pricing pages and are dated in the
 * note below on purpose — they change, and an undated comparison quietly becomes
 * a false claim. Re-check before each release.
 */
const worked = [
  { fee: "₹5", on: "on a ₹500 order", note: "1% of ₹500" },
  { fee: "₹10", on: "on a ₹2,000 order", note: "the cap holds" },
  { fee: "₹10", on: "on a ₹10,000 order", note: "still ₹10" },
];

const rows = [
  { label: "Most we take from one order", us: "₹10", dm: "No cap", shopify: "No cap" },
  { label: "Subscription", us: "None", dm: "₹999/mo", shopify: "₹1,994/mo" },
  { label: "A month with no orders", us: "₹0", dm: "₹999", shopify: "₹1,994" },
  { label: "Same-day hyperlocal delivery", us: "Yes", dm: "No", shopify: "No" },
  { label: "Raw materials & vendors", us: "Yes", dm: "No", shopify: "No" },
  { label: "Migration done for you", us: "Free", dm: "—", shopify: "Paid agency" },
];

export default function PricingExplained() {
  return (
    <section className="py-16 sm:py-24 bg-orange-50/40" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-10">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
            What it costs
          </p>
          <h2 id="pricing-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              0 subscription charges
            </span>
            . Pay us when you get an order.
          </h2>
          <p className="text-lg text-gray-600">
            Nothing monthly, nothing to set up, nothing hidden — and nothing at all until your shop
            has taken ₹50,000 in orders. After that you pay 1% of each order, and that stops at ₹10
            however large the order is.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {worked.map(({ fee, on, note }) => (
              <div
                key={on}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-4xl font-extrabold text-gray-900 tracking-tight">{fee}</p>
                <p className="mt-2 text-sm text-gray-600">{on}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-orange-600">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="px-5 py-4 font-semibold text-gray-500" />
                  <th className="px-5 py-4 font-semibold text-orange-600">oBizee</th>
                  <th className="px-5 py-4 font-semibold text-gray-500">dm2buy</th>
                  <th className="px-5 py-4 font-semibold text-gray-500">Shopify</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, us, dm, shopify }) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-4 font-medium text-gray-900">{label}</td>
                    <td className="px-5 py-4 font-bold text-orange-600">{us}</td>
                    <td className="px-5 py-4 text-gray-600">{dm}</td>
                    <td className="px-5 py-4 text-gray-600">{shopify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Competitor terms taken from their public pricing pages, August 2026.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-gray-800"
          >
            See the full pricing page
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
