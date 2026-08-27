"use client";

import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { liveShops } from "@/data/liveShops";

/**
 * Every shop on oBizee, browsable — the long form of the homepage shop wall.
 *
 * The homepage runs these as marquees, which proves the shops exist but does not
 * let anyone look for one. Here they are a filterable grid, because the useful
 * question is "is there someone like me on this?" and a seller of candles wants
 * to see candles.
 *
 * These are other people's businesses. Links are real, open in a new tab, and
 * the alt text names the shop rather than describing a screenshot.
 */
export default function ShopsPageClient() {
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    liveShops.forEach((s) => counts.set(s.category, (counts.get(s.category) ?? 0) + 1));
    return [
      { name: "All", count: liveShops.length },
      ...[...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([name, count]) => ({ name, count })),
    ];
  }, []);

  const shown = category === "All" ? liveShops : liveShops.filter((s) => s.category === category);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-orange-50 py-16 sm:py-24" aria-labelledby="shops-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Shops built on oBizee
            </p>
            <h1 id="shops-heading" className="mb-5 text-3xl font-bold text-gray-900 sm:text-5xl">
              Real shops.{" "}
              <span className="text-orange-600">Open one and buy something</span>.
            </h1>
            <p className="text-lg text-gray-600">
              {liveShops.length} shops open right now, run by sellers across India. Every link
              goes to their real storefront — not a demo, not a mockup.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter shops by category">
              {categories.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setCategory(c.name)}
                  aria-pressed={category === c.name}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    category === c.name
                      ? "border-orange-600 bg-orange-600 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-700"
                  }`}
                >
                  {c.name}
                  <span className="ml-1.5 tabular-nums opacity-70">{c.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 font-mono text-[12px] text-gray-500">
            Showing {shown.length} of {liveShops.length}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((s) => (
              <a
                key={s.subDomain}
                href={`https://${s.subDomain}.obizee.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <span className="block overflow-hidden bg-orange-50" style={{ aspectRatio: "16 / 11" }}>
                  <img
                    src={`/shops/${s.subDomain}.jpg`}
                    alt={`${s.brandName} — a real ${s.category.toLowerCase()} shop running on oBizee`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="block p-4">
                  <span className="block font-bold text-gray-900 group-hover:text-orange-700">
                    {s.brandName}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-wider text-gray-500">
                    {s.category}
                    {s.state ? ` · ${s.state}` : ""}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
