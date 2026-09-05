"use client";

import NumberFlow from "@number-flow/react";
import { useReducedMotion } from "framer-motion";

/**
 * W2 — THE COUNTER. `100 -> 200 -> 561`, and only the digits that changed move.
 *
 * PROVENANCE — npm `@number-flow/react@0.6.2`, the exact package and version
 * design-brief.md §4.6 sources for `CaptureCounter`. Not a registry component and not
 * hand-rolled: rolling digits are a Web Animations problem (each digit column is its own
 * animated strip, and the columns have to stay optically aligned while the value gains a
 * digit), and the package solves it with zero runtime dependencies.
 *
 * AC-2 IS ABOUT THE DOM, NOT THE LOOK. The component renders one `<span>` per digit and
 * marks the ones whose value changed, so "100 became 208" animates the last two columns
 * and leaves the hundreds column alone. A naive re-render of the whole string would
 * re-animate every digit on every poll — 270 times over a nine-minute extraction — which
 * is both wrong and expensive.
 *
 * M12's REDUCED-MOTION FALLBACK IS THE PACKAGE'S OWN. `animated={false}` swaps the value
 * with no transition rather than removing the number, because the number is information
 * and a reader who has asked for less motion has not asked for less information. The
 * route-level `prefers-reduced-motion` rule (styles.css:319) collapses CSS animations,
 * but this package animates with WAAPI, which that rule cannot reach — hence the prop.
 *
 * `useReducedMotion()` is framer-motion's, already a dependency, and is the same hook
 * `ImportRoute` and `CodeStep` use. One source of truth for the setting on this route.
 */
export default function CaptureCounter({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <NumberFlow
      value={value}
      // Indian digit grouping. This is an Indian seller's post count, and `5,61,000`
      // is what she would write — `en-IN` is what the rest of this route formats with.
      locales="en-IN"
      animated={!reduced}
      // M12 — `--motion-slow`, the token the animation plan assigns to the counter roll.
      transformTiming={{ duration: 320, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      // A digit that changes should not also fade; the roll IS the change. Fading only
      // ever applies when the number of digits changes (100 -> 1000), which is exactly
      // when a new column genuinely appears.
      opacityTiming={{ duration: 120, easing: "ease-out" }}
      className={className}
    />
  );
}
