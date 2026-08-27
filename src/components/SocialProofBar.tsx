"use client";

import React from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

/**
 * The proof strip, directly under the hero.
 *
 * This was a four-icon stat grid, which reads as decoration — the same shape
 * every SaaS homepage uses for numbers nobody checks. SitesPlaced, the
 * competitor that outranks us, runs a bordered strip of trading figures at the
 * top of their page instead, and it is the strongest thing they have. This is
 * that, with better numbers.
 *
 * Deliberately NOT labelled "live". SitesPlaced's says LIVE because theirs is
 * wired to a feed; ours is a lifetime total verified by hand, and the date says
 * so. Calling it live would be the same class of overstatement as the 0%
 * commission claim this site just had to walk back.
 *
 * Figures verified 2026-08-27 against /admin/stats and /admin/users: 165
 * merchants, 3,314 non-refunded orders, ₹53.46L processed. Re-verify and move
 * the date before changing any of them — an undated figure quietly becomes a
 * false one.
 */
const figures = [
  { value: 5346000, prefix: "₹", suffix: "", label: "Processed for sellers", compact: "53.4L" },
  { value: 3314, prefix: "", suffix: "", label: "Orders delivered" },
  { value: 165, prefix: "", suffix: "", label: "Sellers trading" },
  { value: 4.8, prefix: "", suffix: "", label: "App rating", static: true },
];

export default function SocialProofBar() {
  return (
    <section
      className="border-y border-orange-100 bg-orange-50/50 py-10 sm:py-14"
      aria-label="Trading figures"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-orange-200/70 bg-white">
            <p className="border-b border-orange-100 bg-orange-50/60 px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-orange-700 sm:text-[11px]">
              On oBizee stores &middot; lifetime totals, verified 27 Aug 2026
            </p>

            <div className="grid grid-cols-2 divide-orange-100 sm:grid-cols-3 sm:divide-x lg:grid-cols-5">
              {figures.map((f) => (
                <div key={f.label} className="border-b border-orange-100 px-5 py-5 sm:border-b-0 lg:py-6">
                  <p className="text-2xl font-bold tabular-nums text-gray-900 sm:text-3xl">
                    {f.static ? (
                      <span>{f.value}</span>
                    ) : f.compact ? (
                      <span>
                        {f.prefix}
                        {f.compact}
                      </span>
                    ) : (
                      <AnimatedCounter target={f.value} suffix={f.suffix} />
                    )}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-gray-500 sm:text-[11px]">
                    {f.label}
                  </p>
                </div>
              ))}

              {/* The cap belongs in this row, not in a pricing section further
                  down — it is the number a seller is actually weighing, and it
                  is the one figure here that is a promise rather than a total. */}
              <div className="border-b border-orange-100 bg-orange-50/40 px-5 py-5 sm:border-b-0 lg:py-6">
                <p className="text-2xl font-bold tabular-nums text-orange-600 sm:text-3xl">₹0/mo</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-orange-700 sm:text-[11px]">
                  Only when you sell
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
