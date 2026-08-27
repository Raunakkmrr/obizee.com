"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * The hero visual: three real app surfaces as a rotating deck.
 *
 * A single screenshot cannot stand for a product this wide, and a cropped
 * navigation menu proves nothing at all — so this is a composition rather than
 * one flat image. Each card takes its turn at the front, which is the point:
 * a seller runs money, stock and best-sellers out of one app, and no single one
 * of them deserves to be the permanent headline.
 *
 * Cards travel right → front → left, so the deck reads as moving right to left.
 * The recycle from left back to right happens behind the front card and at low
 * opacity, where it is least visible.
 *
 * Motion is layered across independent CSS properties so nothing overwrites
 * anything else: `left`/`top` place the slot, `rotate` tilts, `scale` sizes,
 * `translate` carries pointer parallax, and `opacity` masks the recycle. The
 * browser composes them, so parallax keeps working mid-rotation.
 *
 * Deliberately NOT dynamic({ ssr: false }) like the old DashboardPreview. That
 * never reached the server-rendered HTML, so the hero carried no imagery for a
 * crawler. These are plain <img> tags with real alt text, and every card is
 * fully opaque in the served markup — visibility never waits on JS.
 *
 * The rotation pauses on hover, so a card being read holds still, and stops
 * entirely under prefers-reduced-motion.
 */
const cards = [
  {
    key: "money",
    src: "/app/app-money.jpg",
    tag: "Your money",
    alt: "oBizee app showing revenue of ₹1,83,487, lifetime profit of ₹1,67,875 and 171 total orders",
  },
  {
    key: "stock",
    src: "/app/app-stock.jpg",
    tag: "Stock",
    alt: "oBizee app showing raw material stock, with acrylic wool flagged low at 900g against a 1500g minimum",
  },
  {
    key: "sells",
    src: "/app/app-sells.jpg",
    tag: "What sells",
    alt: "oBizee app ranking best selling products, Korean earrings first at 107 units sold",
  },
];

/**
 * The three resting places. Order matters: a card advances 0 → 1 → 2 → 0, which
 * is front → left → right → front. Two of those three moves travel leftwards;
 * the third is the recycle, dimmed and behind.
 */
const slots = [
  { left: 22, top: 0, scale: 1, rotate: 0, z: 30, opacity: 1, depth: 1 },
  { left: -2, top: 24, scale: 0.8, rotate: -5, z: 20, opacity: 0.92, depth: 0.5 },
  { left: 46, top: 30, scale: 0.8, rotate: 5, z: 10, opacity: 0.92, depth: 0.6 },
];

const ROTATE_MS = 3400;

export default function HeroComposition() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // the deck rotation
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // pointer parallax
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // On a touch screen there is no hover position to read, so the listener
    // would never fire usefully.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let pending = 0;
    const onMove = (e: MouseEvent) => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const clamp = (v: number) => Math.max(-1, Math.min(1, v));
        setTilt({
          x: clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 12,
          y: clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 8,
        });
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      if (pending) cancelAnimationFrame(pending);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-[4/3.1] w-full max-w-[560px] lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        setTilt({ x: 0, y: 0 });
      }}
    >
      {/* warm bloom behind the deck, kept subtle so the page ground still reads */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-[6%] h-28 rounded-full bg-orange-400/20 blur-3xl"
      />

      {cards.map(({ key, src, tag, alt }, i) => {
        const slot = slots[(i + tick) % slots.length];
        return (
          <figure
            key={key}
            style={{
              left: `${slot.left}%`,
              top: `${slot.top}%`,
              zIndex: slot.z,
              rotate: `${slot.rotate}deg`,
              scale: `${slot.scale}`,
              opacity: slot.opacity,
              translate: `${tilt.x * slot.depth}px ${tilt.y * slot.depth}px`,
            }}
            className="absolute w-[56%] overflow-hidden rounded-2xl bg-gray-900 shadow-2xl shadow-gray-900/30 [transition:left_900ms_cubic-bezier(0.65,0,0.35,1),top_900ms_cubic-bezier(0.65,0,0.35,1),scale_900ms_cubic-bezier(0.65,0,0.35,1),rotate_900ms_cubic-bezier(0.65,0,0.35,1),opacity_600ms_ease-out,translate_300ms_ease-out]"
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
        );
      })}
    </div>
  );
}
