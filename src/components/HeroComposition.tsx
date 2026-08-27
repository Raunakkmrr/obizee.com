"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * The hero visual: three real app surfaces fanned in depth, responding to the
 * pointer.
 *
 * A single screenshot cannot stand for a product this wide, and a cropped
 * navigation menu proves nothing at all — so this is a composition rather than
 * one flat image. Money in front because that is what a seller opens the app to
 * check; stock and best-sellers behind it, tilted, so all three read at once.
 *
 * Three motions, each doing a different job:
 *   1. a staggered entrance, the cards arriving from the right;
 *   2. a slow horizontal drift, right to left and back, so the stack is never
 *      fully still — each card on its own period, so they never travel in
 *      lockstep;
 *   3. pointer parallax weighted by depth — the front card travels furthest,
 *      which is what sells the illusion that these sit at different distances.
 *
 * Those would fight each other on a single `transform`, so they are layered:
 * an outer wrapper runs the entrance, the figure carries `rotate` for the fan,
 * `translate` for parallax and `scale` for hover, and an inner div rides
 * `transform` for the drift. Nothing overwrites anything else.
 *
 * The entrance is CSS, never React state. Gating opacity on a state flag makes
 * the imagery invisible until hydration — the same failure that once left this
 * page at 93 characters for a crawler. Parallax and hover are the only
 * JS-driven parts, and losing them costs motion, never visibility.
 *
 * Deliberately NOT dynamic({ ssr: false }) like the old DashboardPreview. That
 * never reached the server-rendered HTML, so the hero carried no imagery for a
 * crawler. These are plain <img> tags with real alt text.
 *
 * Everything below is skipped under prefers-reduced-motion: no float, no
 * parallax, no entrance — the fan simply renders in place.
 */
const cards = [
  {
    key: "stock",
    src: "/app/app-stock.jpg",
    tag: "Stock",
    alt: "oBizee app showing raw material stock, with acrylic wool flagged low at 900g against a 1500g minimum",
    className: "left-0 top-[22%] w-[46%]",
    rotate: -4,
    /** how far this card travels on parallax, 0–1. Furthest back moves least. */
    depth: 0.45,
    z: 10,
    delay: 90,
    drift: { seconds: 9.5, phase: -3.1 },
  },
  {
    key: "sells",
    src: "/app/app-sells.jpg",
    tag: "What sells",
    alt: "oBizee app ranking best selling products, Korean earrings first at 107 units sold",
    className: "right-0 top-[28%] w-[46%]",
    rotate: 5,
    depth: 0.55,
    z: 10,
    delay: 180,
    drift: { seconds: 12, phase: -7.4 },
  },
  {
    key: "money",
    src: "/app/app-money.jpg",
    tag: "Your money",
    alt: "oBizee app showing revenue of ₹1,83,487, lifetime profit of ₹1,67,875 and 171 total orders",
    className: "left-[22%] top-0 w-[56%]",
    rotate: 0,
    depth: 1,
    z: 30,
    delay: 0,
    drift: { seconds: 7.5, phase: 0 },
  },
];

export default function HeroComposition() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pointer parallax, on pointing devices only — on a touch screen there is no
    // hover position to read, and the listener would never fire usefully.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let pending = 0;
    const onMove = (e: MouseEvent) => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        // -1..1 from the centre of the composition
        const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        const clamp = (v: number) => Math.max(-1, Math.min(1, v));
        setTilt({ x: clamp(nx) * 14, y: clamp(ny) * 10 });
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
      className="group relative mx-auto aspect-[4/3.1] w-full max-w-[560px] lg:max-w-none"
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* warm bloom behind the stack, kept subtle so the page ground still reads */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-[6%] h-28 rounded-full bg-orange-400/20 blur-3xl"
      />

      {cards.map(({ key, src, tag, alt, className, rotate, depth, z, delay, drift }) => {
        const isHovered = hovered === key;
        const dimmed = hovered !== null && !isHovered;
        return (
          <div
            key={key}
            style={{ zIndex: isHovered ? 40 : z, animationDelay: `${delay}ms` }}
            className={`absolute animate-[obz-enter_700ms_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none ${className}`}
          >
            <figure
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                rotate: `${isHovered ? rotate * 0.4 : rotate}deg`,
                translate: `${tilt.x * depth}px ${tilt.y * depth}px`,
                scale: isHovered ? 1.045 : 1,
                opacity: dimmed ? 0.72 : 1,
              }}
              className="overflow-hidden rounded-2xl bg-gray-900 shadow-2xl shadow-gray-900/30 [transition:translate_300ms_cubic-bezier(0.22,1,0.36,1),scale_450ms_cubic-bezier(0.22,1,0.36,1),rotate_450ms_cubic-bezier(0.22,1,0.36,1),opacity_300ms_ease-out]"
            >
              {/* The drift rides `transform`, leaving translate/rotate/scale free
                  for parallax, the fan and hover. Paused while the pointer is on
                  the stack, so a card being inspected holds still. */}
              <div
                className="group-hover:[animation-play-state:paused] motion-reduce:animate-none"
                style={{ animation: `obz-drift ${drift.seconds}s ease-in-out ${drift.phase}s infinite` }}
              >
                <figcaption className="flex items-center gap-2 px-2.5 py-2">
                  <span className="h-3 w-3 shrink-0 rounded bg-orange-500" aria-hidden="true" />
                  <span className="text-[11px] font-bold tracking-tight text-white">oBizee</span>
                  <span className="ml-auto text-[8px] font-medium uppercase tracking-widest text-gray-400">
                    {tag}
                  </span>
                </figcaption>
                <img src={src} alt={alt} loading="eager" className="block w-full" />
              </div>
            </figure>
          </div>
        );
      })}

      <style jsx global>{`
        @keyframes obz-enter {
          from {
            opacity: 0;
            scale: 0.92;
            transform: translateX(56px);
          }
          to {
            opacity: 1;
            scale: 1;
            transform: translateX(0);
          }
        }
        @keyframes obz-drift {
          0%,
          100% {
            transform: translateX(12px);
          }
          50% {
            transform: translateX(-12px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes obz-enter {
            from,
            to {
              opacity: 1;
              scale: 1;
              transform: none;
            }
          }
          @keyframes obz-drift {
            0%,
            100% {
              transform: none;
            }
          }
        }
      `}</style>
    </div>
  );
}
