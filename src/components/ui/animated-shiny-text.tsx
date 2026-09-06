/**
 * AnimatedShinyText — IMPORTED, unmodified body, via
 *   npx shadcn@latest add "https://magicui.design/r/animated-shiny-text.json"
 *
 * WHY THIS REGISTRY. `API_KEY_21ST` has no value, so the 21st.dev shimmer the design
 * brief names 401s. shadcn's own keyless registry ships no text-shimmer of any kind
 * (`skeleton` is an `animate-pulse` block and nothing else), so rather than hand-roll a
 * lookalike this is Magic UI's published component from ITS keyless registry — one of
 * the three registries design-brief.md §3.1 already sources from.
 *
 * THREE EDITS, all to the one `cn()` call, none to the component's logic.
 *
 * 1. TAILWIND 3, NOT 4 — new in this repo, not inherited from the port. Magic UI
 *    publishes v4 utilities: `bg-size-[…]`, `bg-position-[…]` and `bg-linear-to-r` do
 *    not exist in Tailwind 3.4 and are dropped silently, which leaves the sweep with no
 *    background size, no start position and no gradient — i.e. no sweep. Rewritten as
 *    the v3 equivalents: two arbitrary properties and `bg-gradient-to-r`.
 *
 * 2. `animate-shiny-text` DOES NOT EXIST unless someone declares it. The registry item
 *    carries its keyframes under `cssVars.theme`; the CLI wrote them into src/index.css
 *    as an `@theme inline` block, which Tailwind 3 does not read at all. That edit was
 *    reverted and the real class is declared in the `[data-portal="import"]` scope in
 *    src/index.css instead — otherwise the component renders and the shimmer that is
 *    its whole reason for existing does not (V3).
 *
 * 3. ITS DEFAULT COLOURS ARE FOR A LIGHT GROUND, AND ITS `dark:` HALVES ARE A BUG HERE.
 *    `text-neutral-600/70` and `via-black/80` assume white behind them, and the `dark:`
 *    overrides fire on the OS setting rather than on the ground the component is
 *    actually sitting on — which here is always the dark slab. Worse, tailwind-merge
 *    does not treat `dark:text-*` as conflicting with a caller's `text-*`, so on a phone
 *    in dark mode the caller's colour silently loses. Both variants are removed and the
 *    slab tokens are the defaults. (This edit is NOT a storefront workaround — it is a
 *    dark-ground correction and is still required in this repo.)
 *
 *    The ALPHA in `--slab-shimmer-base` is load-bearing, not a contrast dodge:
 *    `background-clip: text` paints the sweep BEHIND the glyphs, so an opaque colour
 *    hides it completely. The composite still measures 8.94:1 on the slab.
 */
import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FC,
} from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        // EDIT 3 — published default is
        //   "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70"
        "mx-auto max-w-md text-[color:var(--slab-shimmer-base)]",

        // Shine effect. EDIT 1 — published default is
        //   "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] …"
        // `bg-size-*` and `bg-position-*` are Tailwind 4 utilities and do not exist here.
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shine gradient. EDIT 1 + EDIT 3 — published default is
        //   "bg-linear-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80"
        // `bg-linear-to-r` is the Tailwind 4 spelling of `bg-gradient-to-r`.
        "bg-gradient-to-r from-transparent via-white via-50% to-transparent",

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
