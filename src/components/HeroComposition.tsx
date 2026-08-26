"use client";

import React from "react";

/**
 * The hero visual: three real app surfaces fanned in depth, drifting gently.
 *
 * A single screenshot cannot stand for a product this wide, and a cropped
 * navigation menu proves nothing at all — so this is a composition rather than
 * one flat image. Money in front because that is what a seller opens the app to
 * check; stock and best-sellers behind it, tilted, so all three read at once.
 *
 * Deliberately NOT dynamic({ ssr: false }) like DashboardPreview and
 * FloatingFeatures. Those never reach the server-rendered HTML, so the hero
 * carried no imagery for a crawler. These are plain <img> tags with real alt
 * text describing the figures on screen.
 *
 * The drift pauses on hover and stops entirely under prefers-reduced-motion.
 */
const cards = [
  {
    key: "stock",
    src: "/app/app-stock.jpg",
    tag: "Stock",
    alt: "oBizee app showing raw material stock, with acrylic wool flagged low at 900g against a 1500g minimum",
    className:
      "left-0 top-[22%] w-[46%] sm:w-[42%] z-10 -rotate-3 animate-[obz-drift-a_7s_ease-in-out_infinite]",
  },
  {
    key: "sells",
    src: "/app/app-sells.jpg",
    tag: "What sells",
    alt: "oBizee app ranking best selling products, Korean earrings first at 107 units sold",
    className:
      "right-0 top-[28%] w-[46%] sm:w-[42%] z-10 rotate-3 animate-[obz-drift-b_7s_ease-in-out_0.9s_infinite]",
  },
  {
    key: "money",
    src: "/app/app-money.jpg",
    tag: "Your money",
    alt: "oBizee app showing revenue of ₹1,83,487, lifetime profit of ₹1,67,875 and 171 total orders",
    className:
      "left-1/2 -translate-x-1/2 top-0 w-[62%] sm:w-[58%] z-30 animate-[obz-drift-c_6s_ease-in-out_0.4s_infinite]",
  },
];

export default function HeroComposition() {
  return (
    <div className="group relative mx-auto aspect-[4/3] w-full max-w-[560px]">
      {/* warm bloom behind the stack, kept subtle so the page ground still reads */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-[6%] h-28 rounded-full bg-orange-400/20 blur-3xl"
      />

      {cards.map(({ key, src, tag, alt, className }) => (
        <figure
          key={key}
          className={`absolute overflow-hidden rounded-2xl bg-gray-900 shadow-2xl shadow-gray-900/30 transition-transform duration-500 ease-out group-hover:[animation-play-state:paused] motion-reduce:animate-none ${className}`}
        >
          <figcaption className="flex items-center gap-2 px-2.5 py-2">
            <span className="h-3 w-3 shrink-0 rounded bg-orange-500" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-tight text-white">oBizee</span>
            <span className="ml-auto text-[8px] font-medium uppercase tracking-widest text-gray-400">
              {tag}
            </span>
          </figcaption>
          <img src={src} alt={alt} loading="eager" className="block w-full" />
        </figure>
      ))}

      <style jsx>{`
        @keyframes obz-drift-a {
          0%,
          100% {
            transform: rotate(-3deg) translateY(0);
          }
          50% {
            transform: rotate(-3deg) translateY(-7px);
          }
        }
        @keyframes obz-drift-b {
          0%,
          100% {
            transform: rotate(3deg) translateY(0);
          }
          50% {
            transform: rotate(3deg) translateY(-7px);
          }
        }
        @keyframes obz-drift-c {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -9px);
          }
        }
      `}</style>
    </div>
  );
}
