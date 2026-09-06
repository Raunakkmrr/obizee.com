"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Compare — DERIVED.
 *
 * IMPORTED via
 *   npx shadcn@latest add "https://ui.aceternity.com/registry/compare.json"
 * Aceternity's own KEYLESS registry. UI-003 names 21st.dev id 1080
 * (`@manuarora700/compare`); `API_KEY_21ST` is empty, so 21st.dev answers 403 (verified
 * 2026-09-06). `manuarora700` IS Aceternity's author — this is the same published
 * component from its first-party host.
 *
 * The whole interaction model is the published source, unchanged: hover-slide as the
 * default with drag as the fallback, the `clipPath: inset(...)` reveal, the pointer/touch
 * handler set, the autoplay loop. UI-003 is explicit that hover-slide must NOT be
 * reconfigured to drag-only, so `slideMode` keeps its published default.
 *
 * FIVE DIFFS.
 *
 * 1. `motion/react` -> `framer-motion`, and the `motion` package uninstalled again. Same
 *    reason as the vanish input: this repo already ships `framer-motion@11`, and two
 *    copies of one animation runtime in one bundle is the defect.
 *
 * 2. `SparklesCore` REMOVED. The registry entry imports `@/components/ui/sparkles` and
 *    does not declare it as a dependency, so the CLI installed a component that could not
 *    compile. Rather than pull a tsparticles engine — a package the brief never sourced —
 *    onto a marketing page for a glitter effect on a drag handle, the sparkle layer is
 *    gone. The divider keeps its two gradient glows, which is what actually reads at this
 *    size. Recorded as a REMOVAL, not a silent omission.
 *
 * 3. `@tabler/icons-react` -> `lucide-react`. One icon was the only use of a whole icon
 *    set this repo does not otherwise carry; `lucide-react` is already a dependency and
 *    is what every other icon on this page comes from. `GripVertical` also says "drag me"
 *    more plainly than a dots glyph does. The `@tabler/icons-react` package was
 *    uninstalled again.
 *
 * 4. TOKENS, NOT LITERALS. The published divider is indigo and cyan with a raw-hex box
 *    shadow — an off-brand pair on a page whose accent is orange. Re-pointed at the
 *    `[data-entry="import-handoff"]` scope in src/index.css.
 *
 * 5. A KEYBOARD PATH, which the published component has none of — UI-003's AC-5. The
 *    divider becomes a real `role="slider"` with `tabIndex`, arrow keys moving it in 2%
 *    steps (10% with Shift, and Home/End to the ends), plus the aria-value* trio and an
 *    `aria-label` the caller supplies. Without this the comparison is mouse-only, which
 *    on a marketing page is a WCAG 2.1.1 failure, not a nice-to-have. The keyboard
 *    position is held in the same `sliderXPercent` state the pointer uses, so there is
 *    one source of truth and no second code path to drift.
 *
 * Also: the published `handleStart` took a `clientX` it never read. Dropped — this repo
 * lints unused parameters off, but a parameter that exists to be ignored is still a lie
 * about the function.
 */

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  firstImageAlt?: string;
  secondImageAlt?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
  /** DIFF 5 — the accessible name of the divider control. */
  sliderLabel?: string;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  firstImageAlt = "",
  secondImageAlt = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
  sliderLabel = "Reveal the comparison",
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16); // ~60fps
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging],
  );

  const handleMouseDown = useCallback(() => handleStart(), [handleStart]);
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove],
  );

  const handleTouchStart = useCallback(() => {
    if (!autoplay) handleStart();
  }, [handleStart, autoplay]);

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) handleEnd();
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) handleMove(e.touches[0].clientX);
    },
    [handleMove, autoplay],
  );

  /**
   * DIFF 5 — the keyboard path. 2% a press is roughly 8px on the 390px mobile box and
   * 19px on the 960px desktop one: fine enough to place the divider precisely, coarse
   * enough to cross the frame without fifty presses. Shift jumps by 10%.
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 10 : 2;
      let next: number | null = null;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = sliderXPercent - step;
      if (e.key === "ArrowRight" || e.key === "ArrowUp") next = sliderXPercent + step;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = 100;
      if (next === null) return;
      e.preventDefault();
      stopAutoplay();
      setSliderXPercent(Math.max(0, Math.min(100, next)));
    },
    [sliderXPercent, stopAutoplay],
  );

  return (
    <div
      ref={sliderRef}
      className={cn("h-[400px] w-[400px] overflow-hidden", className)}
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="absolute top-0 m-auto h-full w-px bg-gradient-to-b from-transparent from-[5%] via-[color:var(--compare-divider)] to-transparent to-[95%]"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}
        >
          <div className="absolute left-0 top-1/2 z-20 h-full w-36 -translate-y-1/2 bg-gradient-to-r from-[color:var(--compare-glow)] via-transparent to-transparent opacity-50 [mask-image:radial-gradient(100px_at_left,white,transparent)]" />
          <div className="absolute left-0 top-1/2 z-10 h-1/2 w-10 -translate-y-1/2 bg-gradient-to-r from-[color:var(--compare-divider)] via-transparent to-transparent opacity-100 [mask-image:radial-gradient(50px_at_left,white,transparent)]" />
          {showHandlebar && (
            /* DIFF 5 — this is now the control, so it is focusable, named, and 44px of
               hit area even though the visible chip stays the published 20px. */
            <div
              role="slider"
              tabIndex={0}
              aria-label={sliderLabel}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(sliderXPercent)}
              aria-valuetext={`${Math.round(sliderXPercent)}% revealed`}
              aria-orientation="horizontal"
              onKeyDown={handleKeyDown}
              className="absolute -right-[22px] top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center focus-visible:outline-none"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[color:var(--compare-handle-ground)] shadow-[var(--compare-handle-shadow)] ring-offset-2 ring-offset-transparent transition-shadow group-focus:ring-2">
                <GripVertical
                  className="h-4 w-4 text-[color:var(--compare-handle-ink)]"
                  aria-hidden="true"
                />
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none relative z-20 h-full w-full overflow-hidden">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 h-full w-full shrink-0 select-none overflow-hidden rounded-2xl",
                firstImageClassName,
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              {/* `alt` comes from the `firstImageAlt` prop. The published source shipped
                  the literal string "first image", which describes nothing; the caller
                  now supplies a real description of each pane. (A `jsx-a11y/alt-text`
                  disable was written here first — this repo's flat eslint config does not
                  load that plugin, so the directive was an unresolved-rule ERROR.) */}
              <img
                alt={firstImageAlt}
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 h-full w-full shrink-0 select-none rounded-2xl",
                  firstImageClassName,
                )}
                draggable={false}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute left-0 top-0 z-[19] h-full w-full select-none rounded-2xl",
              secondImageClassname,
            )}
            alt={secondImageAlt}
            src={secondImage}
            draggable={false}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};
