"use client";

import React from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { sellerQuotes } from "@/data/sellerQuotes";

/**
 * Seller proof, at position 4 on the homepage.
 *
 * Laid out as a grid rather than the horizontal auto-scroller this used to be.
 * A sideways strip hides most of the proof behind a gesture people do not always
 * make, and on a phone it fights the page scroll. Every quote should be
 * reachable by scrolling down, which is the one gesture everyone makes.
 *
 * The quotes are drafted by oBizee and attributed to real, named businesses.
 * They render as plain testimonials, so each seller must sign off on their own
 * line before it can be considered accurate. Track that in sellerQuotes.ts.
 */
const Testimonials = () => {
  return (
    <section className="bg-orange-50 py-16 sm:py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-12 max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Sellers
          </p>
          <h2
            id="testimonials-heading"
            className="mb-5 text-3xl font-bold text-gray-900 sm:max-w-[440px] sm:text-5xl"
          >
            Don&rsquo;t take our word. Take{" "}
            <span className="text-orange-600">theirs</span>.
          </h2>
          <p className="text-lg text-gray-600">Real shops you can open and buy from today.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sellerQuotes.map(({ brandName, subDomain, category, products, logo, quote }) => (
            <ScrollReveal key={subDomain}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 pt-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7">

                <blockquote className="mb-7 text-[17px] leading-relaxed text-gray-800">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-gray-200 pt-5">
                  {/* the seller's real businessImage, not a drawn stand-in */}
                  <img
                    src={logo}
                    alt={`${brandName} logo`}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 rounded-lg object-cover"
                  />
                  <span className="min-w-0">
                    <a
                      href={`https://${subDomain}.obizee.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block truncate font-bold text-gray-900 transition-colors hover:text-orange-600"
                    >
                      {brandName}
                    </a>
                    <span className="mt-0.5 block font-mono text-[13px] text-gray-500">
                      {category} &middot; {products} products
                    </span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
