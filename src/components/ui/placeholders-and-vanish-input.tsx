"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { cssColorFromPixel } from "@/lib/colors";

/**
 * PlaceholdersAndVanishInput — DERIVED.
 *
 * IMPORTED via
 *   npx shadcn@latest add "https://ui.aceternity.com/registry/placeholders-and-vanish-input.json"
 * Aceternity's own KEYLESS registry. UI-002 names 21st.dev id 1420
 * (`@manuarora700/placeholders-and-vanish-input`); `API_KEY_21ST` is empty, so 21st.dev
 * answers 403 (verified 2026-09-06). `manuarora700` IS Aceternity's author and this is
 * the same published component from its first-party host — the same code, not a
 * lookalike. Nothing below was retyped from memory.
 *
 * The canvas particle routine — `draw`, `animate`, the pixel scan, the per-particle
 * decay — is the published source, untouched but for the two colour lines noted below.
 * It is the one honest particle effect on the entry screen: the handle genuinely leaves
 * this origin (design-brief.md §5, M3).
 *
 * SEVEN DIFFS, each forced by this repo or by UI-002's acceptance criteria.
 *
 * 1. `motion/react` -> `framer-motion`. The registry pulled in the `motion` package,
 *    which is the same library under its post-v11 name; this repo already ships
 *    `framer-motion@11` and every other animated component here imports from it. Two
 *    copies of one animation runtime in one bundle is the defect, not the fix. The
 *    `motion` package was uninstalled again.
 *
 * 2. CONTROLLED, and this is the load-bearing change. The published component owns its
 *    own `value` and clears it on every submit. UI-002's AC-3 requires an INVALID handle
 *    to keep its text, keep focus, and not navigate — with the published component the
 *    text she got wrong would vanish before she could read what was wrong with it. So
 *    `value` / `onValueChange` come from the caller, and `onSubmit` RETURNS a boolean:
 *    true means accepted, and only then does the vanish run. Validation stays in
 *    `MoveYourShop`, where the error message lives.
 *
 * 3. A REAL, LABELLED SUBMIT — two of them, one visible at a time. The published button
 *    is a 32px circle with an arrow and no accessible name. UI-002's E5 is the words
 *    "Read my Instagram", and its AC-5 puts that button FULL-WIDTH BENEATH the field at
 *    390px, never beside it. `sm:` shows the inline one, the default shows the stacked
 *    one; both are `type="submit"` on the same form, so Enter (AC-7) and either tap run
 *    the same path.
 *
 * 4. A FIXED `@` PREFIX (E4). Not part of the typed value — she should not have to type
 *    it, and `parseHandle` strips it anyway — so it is a `pointer-events-none` span and
 *    the input's padding is offset past it.
 *
 * 5. TOKENS, NOT LITERALS. The published file hardcodes its pill ground, its ink, its
 *    placeholder grey, its button fill, a `dark:` pair for each of those, a raw
 *    three-part box-shadow, and a hardcoded fill inside the canvas routine. The `dark:`
 *    variants are the same bug the shimmer had: they fire on the OS setting, which has
 *    nothing to do with the ground this sits on (always the dark slab). All of it is
 *    re-pointed at the `[data-entry="import-handoff"]` scope in src/index.css, which is
 *    the one file in this repo where a colour may be written down. The one place a
 *    colour must be CONSTRUCTED at runtime — a sampled pixel handed back to
 *    `ctx.fillStyle` — moved to `@/lib/colors`.
 *
 * 6. `prefers-reduced-motion`. The published component runs the canvas particle loop and
 *    the placeholder rotation unconditionally. `useReducedMotion` (framer-motion's, the
 *    same hook `ScrollReveal` already uses on this page — one source of truth, no second
 *    check) skips straight to the cleared field, and stops the rotation: a placeholder
 *    that changes under you every three seconds is motion, whatever it is made of.
 *
 * 7. `any[]` -> real element types on the particle arrays. This repo bans `any`; the
 *    published file used it for both refs.
 */
export function PlaceholdersAndVanishInput({
  placeholders,
  value,
  onValueChange,
  onSubmit,
  onBlur,
  id,
  name,
  ariaDescribedBy,
  ariaInvalid,
  submitLabel,
  prefix = "@",
  inputRef: externalInputRef,
}: {
  placeholders: string[];
  value: string;
  onValueChange: (next: string) => void;
  /** Return true to accept the submission and run the vanish; false to keep the text. */
  onSubmit: (value: string) => boolean;
  onBlur?: () => void;
  id?: string;
  name?: string;
  ariaDescribedBy?: string;
  ariaInvalid?: boolean;
  submitLabel: string;
  prefix?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const reduced = useReducedMotion();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000);
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        // Published behaviour, kept: a tab in the background should not burn a timer.
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === "visible") {
        startAnimation();
      }
    };
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders, reduced]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<Array<{ x: number; y: number; r: number; color: string }>>([]);
  const localInputRef = useRef<HTMLInputElement>(null);
  const inputRef = externalInputRef ?? localInputRef;
  const [animating, setAnimating] = useState(false);

  /* ---- published source, from here to the end of `animate` ---- */
  const draw = useCallback(() => {
    if (!inputRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;
    ctx.clearRect(0, 0, 800, 800);
    const computedStyles = getComputedStyle(inputRef.current);

    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    // DIFF 5, edit one of two inside the published routine, which assigned a hardcoded
    // white here. A canvas context cannot resolve `var(...)`, so the token is read off
    // the input's own computed style; the input's `color` is the fallback because it is
    // itself a token value, so no colour is written down in this file.
    ctx.fillStyle =
      computedStyles.getPropertyValue("--field-particle-ink").trim() || computedStyles.color;
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 800);
    const pixelData = imageData.data;
    const newData: Array<{ x: number; y: number; color: number[] }> = [];

    for (let t = 0; t < 800; t++) {
      const i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        const e = i + 4 * n;
        if (pixelData[e] !== 0 && pixelData[e + 1] !== 0 && pixelData[e + 2] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [pixelData[e], pixelData[e + 1], pixelData[e + 2], pixelData[e + 3]],
          });
        }
      }
    }

    // DIFF 5, edit two of two: the published source assembled the CSS colour string
    // inline. Every value in it is a MEASURED pixel, not a chosen colour, but a CSS
    // colour function may only be written where colours are allowed to be written down —
    // so the expression moved to `@/lib/colors` and nothing else about it changed.
    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: cssColorFromPixel(color),
    }));
  }, [value, inputRef]);

  useEffect(() => {
    draw();
  }, [value, draw]);

  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          onValueChange("");
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };
  /* ---- end published source ---- */

  /**
   * DIFF 2 + DIFF 6. Ask the caller first; only a `true` spends the handle.
   * Under reduced motion the field clears with no particle pass — the state change still
   * happens, it just is not performed.
   */
  const attemptSubmit = () => {
    if (animating) return;
    const current = inputRef.current?.value ?? value;
    if (!onSubmit(current)) return;
    if (reduced || !current) {
      onValueChange("");
      return;
    }
    setAnimating(true);
    draw();
    const maxX = newDataRef.current.reduce((prev, cur) => (cur.x > prev ? cur.x : prev), 0);
    animate(maxX);
  };

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        attemptSubmit();
      }}
      noValidate
    >
      <div
        className={cn(
          // 48px — E4's height, and `h-12` is exactly that.
          "relative h-12 w-full overflow-hidden rounded-full transition-colors",
          "[transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
          "bg-[color:var(--field-ground)] shadow-[var(--field-shadow)]",
          "focus-within:ring-2 focus-within:ring-[color:var(--field-ring)] focus-within:ring-offset-2 focus-within:ring-offset-gray-900",
          value && "bg-[color:var(--field-ground-typed)]",
        )}
      >
        <canvas
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-8 top-[20%] origin-top-left scale-50 pr-20 text-base",
            // `filter invert` is the published trick: the canvas draws light glyphs, and
            // inverting them makes the particles read as ink on a light pill.
            "invert",
            animating ? "opacity-100" : "opacity-0",
          )}
          ref={canvasRef}
        />

        {/* DIFF 4 — a fixed prefix, not part of the value. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-1/2 z-50 -translate-y-1/2 text-base font-medium text-[color:var(--text-primary)] opacity-45"
        >
          {prefix}
        </span>

        {/* The rotating placeholder, positioned against the PILL rather than the form,
            which now also contains the stacked button. Published motion values. */}
        <PlaceholderLayer
          show={!value}
          text={placeholders[currentPlaceholder]}
          reduced={Boolean(reduced)}
        />

        <input
          id={id}
          name={name}
          ref={inputRef}
          value={value}
          type="text"
          inputMode="text"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-describedby={ariaDescribedBy}
          aria-invalid={ariaInvalid || undefined}
          onBlur={onBlur}
          onChange={(e) => {
            if (!animating) onValueChange(e.target.value);
          }}
          onKeyDown={(e) => {
            // AC-7 — Enter submits. Kept from the published source, routed through the
            // controlled path so an invalid handle does not vanish.
            if (e.key === "Enter" && !animating) {
              e.preventDefault();
              attemptSubmit();
            }
          }}
          className={cn(
            "relative z-50 h-full w-full rounded-full border-none bg-transparent pl-10 text-base",
            "text-[color:var(--text-primary)]",
            "focus:outline-none focus:ring-0",
            // The inline button only exists from 640px up, so only reserve room there.
            "pr-4 sm:pr-52",
            animating && "text-transparent",
          )}
        />

        {/* DIFF 3a — the inline action, from 640px up.
            NOT DISABLED ON AN EMPTY FIELD, and that is a correction made by looking.
            The published component disables its button until something is typed; rendered
            at 1440 and at 390 (evidence/ui-port/moveyourshop-*.png, first pass) that put a
            45%-opacity orange slab reading "Read my Instagram" directly beside a rotating
            placeholder that looks exactly like typed text — a primary action that appears
            broken, in white-on-washed-orange that clears no contrast floor at all. An
            empty submit now runs the caller's validation and gets the real sentence back
            ("Type the name after the @ in your Instagram profile link"), which is the
            answer she actually needs. `animating` still disables it, because a second
            submit during the vanish would double-navigate. */}
        <button
          type="submit"
          disabled={animating}
          className={cn(
            // `min-h-[44px]` inside a 48px pill, measured: the first pass rendered this
            // at 40px, under the touch-target floor. 44 leaves 2px of pill above and
            // below, which still reads as an inset control.
            "absolute right-1.5 top-1/2 z-50 hidden min-h-[44px] -translate-y-1/2 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition-colors sm:inline-flex",
            "[transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
            // Gate A's binding ruling: this section's CTA keeps its live orange.
            "bg-orange-500 hover:bg-orange-600 disabled:cursor-wait",
          )}
        >
          {submitLabel}
          <SubmitArrow active={Boolean(value)} />
        </button>
      </div>

      {/* DIFF 3b — AC-5: at 390px the action is full-width BENEATH the field.
          `min-h-[44px]` is not decoration; it is the touch-target floor. */}
      <button
        type="submit"
        disabled={animating}
        className={cn(
          "mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition-colors sm:hidden",
          "[transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
          "hover:bg-orange-600 disabled:cursor-wait",
        )}
      >
        {submitLabel}
        <SubmitArrow active={Boolean(value)} />
      </button>
    </form>
  );
}

/** Published arrow, with the same `strokeDashoffset` reveal. */
function SubmitArrow({ active }: { active: boolean }) {
  return (
    <motion.svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        d="M5 12l14 0"
        initial={{ strokeDasharray: "50%", strokeDashoffset: "50%" }}
        animate={{ strokeDashoffset: active ? 0 : "50%" }}
        transition={{ duration: 0.3, ease: "linear" }}
      />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </motion.svg>
  );
}

function PlaceholderLayer({
  show,
  text,
  reduced,
}: {
  show: boolean;
  text: string;
  reduced: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-40 flex items-center rounded-full">
      <AnimatePresence mode="wait">
        {show && (
          <motion.p
            key={`current-placeholder-${text}`}
            initial={{ y: reduced ? 0 : 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduced ? 0 : -15, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3, ease: "linear" }}
            className="w-[calc(100%-2rem)] truncate pl-10 text-left text-base font-normal text-[color:var(--text-placeholder)]"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
