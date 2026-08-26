"use client";

import React from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { liveShops } from "@/data/liveShops";

/**
 * A wall of real oBizee storefronts, moving.
 *
 * The first attempt at this was a static mosaic of all 42 at mixed sizes, and it
 * read as noise — forty small dark screenshots competing for the same attention.
 * Rows that scroll show fewer at any moment, so each one is legible, and the
 * movement itself signals "these are live" better than a caption could.
 *
 * Middle row runs the other way so the block does not read as a single sliding
 * strip. Hovering pauses every row, because a visitor who wants to read a name
 * should not have to chase it.
 *
 * Every shop here was verified reachable and rendering products on 2026-08-27.
 * These are other people's businesses: the links are real and open in a new tab,
 * and the alt text names the shop rather than describing a screenshot.
 */
const rows = [
  liveShops.filter((_, i) => i % 3 === 0),
  liveShops.filter((_, i) => i % 3 === 1),
  liveShops.filter((_, i) => i % 3 === 2),
];

function Card({ brandName, subDomain, category, state }: (typeof liveShops)[number]) {
  return (
    <a
      href={`https://${subDomain}.obizee.com`}
      target="_blank"
      rel="noopener noreferrer"
      className="group/card relative block w-[220px] shrink-0 overflow-hidden rounded-xl bg-orange-50 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[250px]"
      style={{ aspectRatio: "16 / 11" }}
    >
      <img
        src={`/shops/${subDomain}.jpg`}
        alt={`${brandName} — a real ${category.toLowerCase()} shop running on oBizee`}
        loading="lazy"
        className="h-full w-full object-cover object-top"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-2.5 text-white">
        <span className="block text-[12.5px] font-bold leading-tight">{brandName}</span>
        <span className="mt-0.5 block text-[9.5px] font-medium uppercase tracking-wider text-orange-100">
          {category}
          {state ? ` · ${state}` : ""}
        </span>
      </span>
    </a>
  );
}

export default function ShopsWall() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24" aria-labelledby="shops-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
            Shops built on oBizee
          </p>
          <h2 id="shops-heading" className="mb-5 text-3xl font-bold text-gray-900 sm:text-5xl">
            Real shops.
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {" "}Open one and buy something
            </span>
            .
          </h2>
          <p className="flex items-center gap-2 text-lg text-gray-600">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500"
            />
            {liveShops.length} shops open right now, run by real sellers. Hover to stop a row
            and take a look.
          </p>
        </ScrollReveal>
      </div>

      <div className="space-y-3">
        {rows.map((row, i) => (
          // group/row, not a shared group: hovering one row should stop that row
          // so its cards can be read and clicked, and leave the others moving.
          <div
            key={i}
            className="group/row relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
          >
            <div
              className="flex w-max gap-3 group-hover/row:[animation-play-state:paused] motion-reduce:animate-none"
              style={{
                animation: `obz-marquee-${i % 2 === 1 ? "right" : "left"} ${58 + i * 9}s linear infinite`,
              }}
            >
              {/* rendered twice so the -50% loop is seamless */}
              {[...row, ...row].map((shop, n) => (
                <Card key={`${shop.subDomain}-${n}`} {...shop} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes obz-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes obz-marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
