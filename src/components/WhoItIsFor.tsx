"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

/**
 * Who oBizee is for — which is anyone who can put a price on a thing.
 *
 * Deliberately NOT a short list of verticals. Naming five categories tells a
 * candle maker or a bookshop that the product is not for them, when it plainly
 * is. The five that link out are the ones with a landing page behind them; the
 * rest are there so the promise reads as open rather than segmented.
 */
const types: { label: string; href?: string }[] = [
  { label: "Clothing & fashion", href: "/for/clothing-stores" },
  { label: "Food & tiffin", href: "/for/food-business" },
  { label: "Handmade & crochet", href: "/for/handicrafts" },
  { label: "Jewellery", href: "/for/jewellery-sellers" },
  { label: "Kirana & grocery", href: "/for/kirana-stores" },
  { label: "Candles & home fragrance" },
  { label: "Stationery & art prints" },
  { label: "Beauty & skincare" },
  { label: "Home decor" },
  { label: "Plants & gardening" },
  { label: "Toys & games" },
  { label: "Pet supplies" },
  { label: "Sports & fitness" },
  { label: "Books" },
  { label: "Electronics & accessories" },
  { label: "Furniture" },
  { label: "Bakery & desserts" },
  { label: "Gifting & hampers" },
  { label: "Packaged goods" },
];

const chip =
  "inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-700";

export default function WhoItIsFor() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="who-for-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-10">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Who it is for
          </p>
          <h2 id="who-for-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            Whatever you sell,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {" "}oBizee sells it
            </span>
            .
          </h2>
          <p className="text-lg text-gray-600">
            None of these is a special plan or an upgrade tier. It is the same product, at the
            same price, for all of them.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap gap-2.5">
            {types.map(({ label, href }) =>
              href ? (
                <Link key={label} href={href} className={chip}>
                  {label}
                </Link>
              ) : (
                <span key={label} className={chip}>
                  {label}
                </span>
              ),
            )}
            <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
              Anything you can put a price on
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
