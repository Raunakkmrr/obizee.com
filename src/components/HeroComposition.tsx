"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * The hero visual: three real app surfaces, running.
 *
 * These were flat screenshots being shuffled around the page, which is the
 * wrong instinct — the reference sites do the opposite. Linear holds its hero
 * surface perfectly still and animates what is *inside* it; SitesPlaced carries
 * no hero image at all and animates live order data. Moving a picture is
 * decoration. Moving the numbers is the product.
 *
 * So the cards hold their positions and the data runs: an order lands every few
 * seconds, revenue and profit climb, the order counters move, raw material is
 * consumed off the stock list, and the best-seller table re-ranks itself when
 * one product overtakes another.
 *
 * These are DOM, not images, which also means the hero now ships real text to a
 * crawler instead of three <img> tags.
 *
 * The figures are a demonstration of the product, seeded from a real seller's
 * dashboard — they are not live platform data and are not labelled as such.
 *
 * Under prefers-reduced-motion the simulation never starts and every value sits
 * at its seed.
 */

const INR = new Intl.NumberFormat("en-IN");

/** Seeded from the real dashboard the screenshots were taken from. */
const SEED = {
  revenue: 183487,
  profit: 167875,
  todayOrders: 0,
  totalOrders: 171,
  inProgress: 25,
  newOrders: 57,
  completed: 15,
  shipped: 4,
  temporary: 70,
};

const SEED_STOCK = [
  { id: "wool", name: "Acrylic wool — mustard", cat: "Yarn & thread", unit: "g", current: 900, min: 1500, per: 26 },
  { id: "stickers", name: "Branded stickers", cat: "Packaging", unit: "pcs", current: 640, min: 300, per: 2 },
  { id: "chenille", name: "Chenille yarn — ivory", cat: "Yarn & thread", unit: "g", current: 1180, min: 400, per: 14 },
];

const SEED_TOP = [
  { id: "p1", name: "Big flower korean earrings", units: 107 },
  { id: "p2", name: "Sunflower crochet earrings", units: 103 },
  { id: "p3", name: "Crochet Bouquet with floral bunch", units: 96 },
  { id: "p4", name: "Handmade crochet bow clips", units: 59 },
];

const STEP_MS = 2600;
const useIsoLayout = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * A figure that flashes when it changes.
 *
 * This used to ease toward its target over requestAnimationFrame. Two problems:
 * rAF does not run at all in a hidden tab, so the number silently stalled and
 * then lurched when you came back, and it re-rendered on every frame. A step is
 * also the truer reading — revenue jumps when an order lands, it does not ramp.
 *
 * `key` on the value restarts the CSS flash each time the number changes, which
 * is what makes the movement legible without animating the digits.
 */
function Tick({ children, value }: { children: React.ReactNode; value: number }) {
  return (
    <span key={value} className="inline-block animate-[obz-pop_500ms_ease-out] motion-reduce:animate-none">
      {children}
    </span>
  );
}

export default function HeroComposition() {
  const [s, setS] = useState(SEED);
  const [stock, setStock] = useState(SEED_STOCK);
  const [top, setTop] = useState(SEED_TOP);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);
  const seq = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const n = (seq.current += 1);
      // A deterministic walk rather than Math.random, so the sequence is the
      // same every load and can be reasoned about when something looks wrong.
      const value = 380 + ((n * 137) % 1020);

      setS((p) => {
        const closing = n % 3 === 0;
        return {
          revenue: p.revenue + value,
          profit: p.profit + Math.round(value * 0.91),
          todayOrders: p.todayOrders + 1,
          totalOrders: p.totalOrders + 1,
          inProgress: Math.max(0, p.inProgress + (closing ? 0 : 1)),
          newOrders: p.newOrders + 1,
          completed: p.completed + (closing ? 1 : 0),
          shipped: p.shipped + (closing ? 1 : 0),
          temporary: p.temporary,
        };
      });

      setStock((p) =>
        p.map((m, i) => {
          if ((n + i) % 2) return m;
          const next = m.current - m.per;
          // restock rather than run to zero, so the card stays believable
          return { ...m, current: next < m.per * 2 ? m.min * 2 : next };
        })
      );

      setTop((p) => {
        const hit = n % p.length;
        return p
          .map((x, i) => (i === hit ? { ...x, units: x.units + 1 } : x))
          .sort((a, b) => b.units - a.units);
      });
    }, STEP_MS);

    return () => clearInterval(id);
  }, []);

  // pointer parallax — pointing devices only; a touch screen has no hover
  // position to read, so the listener would never fire usefully
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let pending = 0;
    const onMove = (e: MouseEvent) => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const c = (v: number) => Math.max(-1, Math.min(1, v));
        setTilt({
          x: c((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 10,
          y: c((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 7,
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
      className="relative mx-auto w-full max-w-[560px] lg:h-[330px] lg:max-w-none"
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] bottom-[6%] h-28 rounded-full bg-orange-400/25 blur-3xl"
      />

      <Card
        label="Seller dashboard showing revenue, profit and today's orders"
        tag="Your money"
        tilt={tilt}
        depth={1}
        delay={0}
        className="relative z-30 mx-auto w-full max-w-[330px] lg:absolute lg:left-[22%] lg:top-[30%] lg:mx-0 lg:w-[56%] lg:max-w-none"
      >
        {/* Colours sampled from the app itself rather than the site palette —
            this panel has to read as the product, not as the marketing page. */}
        <div className="bg-[linear-gradient(165deg,#C87A4B_0%,#B25C2B_100%)] px-3 pb-3.5 pt-3">
          <div className="mb-3 grid grid-cols-2 gap-2">
            <Pill icon="💰" label="Revenue" value={<Tick value={s.revenue}>₹{INR.format(s.revenue)}</Tick>} />
            <Pill icon="📈" label="Lifetime profit" value={<Tick value={s.profit}>₹{INR.format(s.profit)}</Tick>} />
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/25">
            <Stat n={s.todayOrders} label="Today's orders" />
            <Stat n={s.totalOrders} label="Total orders" />
            <Stat n={s.inProgress} label="In progress" />
          </div>
          <div className="mt-3 grid grid-cols-4 divide-x divide-white/25 border-t border-white/20 pt-3">
            <Stat n={s.newOrders} label="New orders" small />
            <Stat n={s.completed} label="Completed" small />
            <Stat n={s.shipped} label="Shipped" small />
            <Stat n={s.temporary} label="Temporary" small />
          </div>
        </div>
      </Card>

      <Card
        label="Raw material stock, with low items flagged"
        tag="Stock"
        tilt={tilt}
        depth={0.5}
        delay={90}
        className="absolute left-0 top-0 z-20 hidden w-[46%] -rotate-[5deg] lg:block"
      >
        <ul className="space-y-1.5 bg-gray-50 p-2">
          {stock.map((m, i) => {
            const low = m.current < m.min;
            return (
              <li key={m.id} className="rounded-lg bg-white p-2 shadow-sm">
                <p className="truncate text-[10px] font-bold leading-tight text-gray-900">{m.name}</p>
                <p className="mt-0.5 text-[8px] text-gray-500">{m.cat}</p>
                <div className="mt-1 flex items-center gap-1">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[7px] font-semibold ${
                      low ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    <span className={`h-1 w-1 rounded-full ${low ? "bg-amber-500" : "bg-emerald-500"}`} />
                    {low ? "Low stock" : "In stock"}
                  </span>
                </div>
                <p className="mt-1 text-[8px] tabular-nums text-gray-600">
                  Current: {INR.format(m.current)} {m.unit} · Min: {INR.format(m.min)} {m.unit}
                </p>
              </li>
            );
          })}
        </ul>
      </Card>

      <Card
        label="Top selling products, ranked by units sold"
        tag="What sells"
        tilt={tilt}
        depth={0.6}
        delay={180}
        className="absolute right-0 top-[7%] z-10 hidden w-[46%] rotate-[5deg] lg:block"
      >
        <TopSellers rows={top} />
      </Card>
    </div>
  );
}

function Pill({ icon, label, value }: { icon: string; label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-white/20 px-2 py-1.5">
      <div className="flex items-center gap-1.5">
        <span aria-hidden="true" className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/85 text-[8px]">
          {icon}
        </span>
        <span className="truncate text-[7px] font-semibold uppercase tracking-wider text-white/85">{label}</span>
      </div>
      <p className="mt-0.5 truncate text-[13px] font-bold tabular-nums text-white">{value}</p>
    </div>
  );
}

function Stat({ n, label, small }: { n: number; label: string; small?: boolean }) {
  return (
    <div className="px-1 text-center">
      <p className={`font-bold tabular-nums text-white ${small ? "text-[13px]" : "text-[17px]"}`}>
        <Tick value={n}>{n}</Tick>
      </p>
      <p className="mt-0.5 text-[6.5px] font-medium uppercase tracking-wider text-white/80">{label}</p>
    </div>
  );
}

/** Re-ranks with a FLIP transition, so an overtake reads as a move not a jump. */
function TopSellers({ rows }: { rows: { id: string; name: string; units: number }[] }) {
  const refs = useRef(new Map<string, HTMLLIElement>());
  const prev = useRef(new Map<string, number>());

  useIsoLayout(() => {
    refs.current.forEach((el, id) => {
      const top = el.getBoundingClientRect().top;
      const was = prev.current.get(id);
      if (was !== undefined && Math.abs(was - top) > 0.5) {
        el.style.transition = "none";
        el.style.transform = `translateY(${was - top}px)`;
        requestAnimationFrame(() => {
          el.style.transition = "transform 480ms cubic-bezier(0.22,1,0.36,1)";
          el.style.transform = "";
        });
      }
      prev.current.set(id, top);
    });
  }, [rows]);

  return (
    <div className="bg-white p-2.5">
      <p className="mb-1.5 text-[10px] font-bold text-gray-900">Top Selling Products</p>
      <ul>
        {rows.map((p, i) => (
          <li
            key={p.id}
            ref={(el) => {
              if (el) refs.current.set(p.id, el);
              else refs.current.delete(p.id);
            }}
            className="flex items-center gap-1.5 border-b border-gray-100 py-1.5 last:border-0"
          >
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-orange-500 text-[8px] font-bold text-white">
              {i + 1}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[9px] font-medium leading-tight text-gray-900">{p.name}</span>
              <span className="block text-[8px] tabular-nums text-gray-500">
                <Tick value={p.units}>{p.units} units sold</Tick>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Card({
  children,
  className,
  tag,
  label,
  tilt,
  depth,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  tag: string;
  label: string;
  tilt: { x: number; y: number };
  depth: number;
  delay: number;
}) {
  return (
    <figure
      role="img"
      aria-label={`oBizee app: ${label}`}
      style={{ translate: `${tilt.x * depth}px ${tilt.y * depth}px`, animationDelay: `${delay}ms` }}
      className={`overflow-hidden rounded-2xl bg-gray-900 shadow-2xl shadow-gray-900/30 [transition:translate_300ms_ease-out] animate-[obz-rise_650ms_cubic-bezier(0.22,1,0.36,1)_backwards] motion-reduce:animate-none ${className}`}
    >
      <figcaption aria-hidden="true" className="flex items-center gap-2 px-2.5 py-1.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded bg-orange-500" />
        <span className="text-[10px] font-bold tracking-tight text-white">oBizee</span>
        <span className="ml-auto text-[7px] font-medium uppercase tracking-widest text-gray-400">{tag}</span>
      </figcaption>
      <div aria-hidden="true">{children}</div>
      <style jsx global>{`
        @keyframes obz-pop {
          from {
            opacity: 0.45;
            transform: translateY(-3px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes obz-rise {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </figure>
  );
}
