"use client";

import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { InstagramMark } from "@/components/import/marks";

/**
 * THE ONE DEAD-END PANEL. Every ending this feature can reach renders through this
 * component — UI-008's four (D-1/D-2 merged, D-5, D-6) and UI-009's two.
 *
 * PROVENANCE — the panel body is the IMPORTED shadcn `Empty` primitive
 * (`npx shadcn@latest add empty`), which ships exactly the anatomy design-brief.md §2.7
 * specifies: a mark, a heading, a body, and a content slot for **two** actions.
 * UI-008's ticket names `serafimcloud/empty-state` (1435) on 21st.dev; `API_KEY_21ST`
 * has no value so that registry 401s, and this is the shadcn equivalent — declared,
 * never a silently hand-rolled lookalike. Its theme-trap corrections are in the file
 * header of `components/ui/empty.tsx`.
 *
 * THE GROUND RULE, and it is the whole design (§2.7, and UI-008's ticket restates it):
 * **NONE of these is her fault, so NONE of them takes the danger colour.** A personal
 * Instagram account is a setting she has not changed yet; a rate limit is oBizee's
 * quota, not hers; an unapproved app is Meta's review queue. Red would accuse her of
 * something she did not do. The two grounds are info and warning, both lifted for the
 * slab in `app/merchant/styles.css` (§UI-008 token block), and both carry an ICON AND A
 * WORD so colour is never the only carrier (WCAG 1.4.1).
 *
 * TWO REAL NEXT STEPS, ALWAYS. §2.7: *"Every one offers a way to still get the job
 * done."* A panel with one action is a dead end; a panel with two is a fork. The type
 * below makes `primary` and `secondary` both required so a later ending cannot quietly
 * ship with one.
 *
 * IT RENDERS ON THE SLAB. `ImportRoute` puts every state inside `ImportSlab`, so the
 * seam that carried her from obizee.com holds through the ending too: the rectangle she
 * has been looking at since the marketing page does not become a white error card.
 */

export type OutcomeAction = {
  /** ≤ 5 words (D4). A verb she can act on, never "OK". */
  label: string;
  icon: LucideIcon;
  /** An external destination. Mutually exclusive with `onClick`. */
  href?: string;
  onClick?: () => void;
  /** Disables the button and swaps the label — used by D-6's one-tap notify. */
  done?: boolean;
  doneLabel?: string;
};

export type ImportOutcomeSpec = {
  id: string;
  /** Never "danger". See the header. */
  tone: "info" | "warning";
  /** The badge riding the Instagram mark: `ArrowRightLeft` for a switch, `Clock` for a wait. */
  badge: LucideIcon;
  /** The WORD beside the badge. Colour alone never carries a state here (SC 1.4.1). */
  badgeLabel: string;
  /** ≤ 8 words (D4). */
  heading: string;
  body: string;
  /** The second sentence, when the first one leaves a fear unanswered. */
  detail?: string;
  primary: OutcomeAction;
  secondary: OutcomeAction;
};

const TONE = {
  info: {
    ground: "bg-[color:var(--info-on-dark-bg)]",
    border: "border-[color:var(--info-on-dark-border)]",
    ink: "text-[color:var(--info-on-dark)]",
  },
  warning: {
    ground: "bg-[color:var(--warning-on-dark-bg)]",
    border: "border-[color:var(--warning-on-dark-border)]",
    ink: "text-[color:var(--warning-on-dark)]",
  },
} as const;

export default function ImportOutcome({ spec }: { spec: ImportOutcomeSpec }) {
  const tone = TONE[spec.tone];
  const Badge = spec.badge;

  return (
    <Empty
      data-outcome={spec.id}
      /* THE PRIMITIVE'S OWN DEFAULTS ARE OVERRIDDEN HERE, and both overrides came out
         of looking at the render rather than out of taste.
         `items-center justify-center text-center` -> LEFT. Rendered at 1440x900 the
         centred block sat as a ~620px column floating in the middle of a 1216px slab,
         with a hard left edge in the middle of the panel: it read as an accident, and
         it read as a different product from the working screen and the gate, both of
         which are left-aligned editorial columns. `md:p-12` -> `sm:p-8`, because this
         sits INSIDE the slab's own `sm:px-12 sm:py-16` and the two paddings together
         were what pushed the content into that island.
         `border-dashed` -> solid: dashed reads as "nothing here yet", and this panel is
         the opposite of that — it is a definite answer. */
      className={`w-full items-start justify-start border-solid text-left ${tone.ground} ${tone.border} gap-6 p-6 sm:p-8 md:p-8`}
    >
      <EmptyHeader className="max-w-3xl items-start gap-3 text-left">
        {/* I-7 — the Instagram glyph, DESATURATED, with a state badge, ON ONE ROW WITH
            THE WORD. §2.7 is explicit that the mark must read as a SWITCH or a WAIT, not
            as an error: a red cross here would be the design telling her she broke
            something. The glyph keeps its shape so she recognises the source; `grayscale`
            takes the celebration out of it. Mark and word together rather than stacked,
            because the pair IS the classification and splitting them left the mark
            floating above the text with nothing to belong to. */}
        <div className="flex items-center gap-3">
          <EmptyMedia
            variant="icon"
            className="relative mb-0 size-12 shrink-0 rounded-[var(--radius-lg)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)]"
          >
            <InstagramMark size={26} className="opacity-90 grayscale" />
            <span
              className={`absolute -right-1.5 -bottom-1.5 flex size-6 items-center justify-center rounded-full border-2 border-[color:var(--slab-ground)] ${tone.ground}`}
            >
              <Badge aria-hidden className={`size-3 ${tone.ink}`} />
            </span>
          </EmptyMedia>
          {/* THE WORD, beside the colour. WCAG 1.4.1 — a merchant who cannot tell the
              amber panel from the blue one still reads "A switch, not an error" or
              "Please wait". */}
          <p className={`text-[12px] font-bold tracking-[0.16em] uppercase ${tone.ink}`}>{spec.badgeLabel}</p>
        </div>

        {/* One `<h1>` per screen state (§8.3). This IS the screen once it renders, so
            the heading is a real `<h1>` rather than the primitive's styled `<div>` —
            nested inside the slot rather than replacing it, because `EmptyTitle` ships
            no `asChild` and swapping the element by hand would fork the import.
            It takes the DISPLAY step from 1024 up, the same ramp the gate's question
            uses (`typo-gate-question`, styles.css): on a 1216px slab the h1 step left a
            wide empty band across the middle, and on an ending the sentence IS the
            screen, so it should be the loudest thing on it. */}
        <EmptyTitle className="w-full">
          <h1 className="typo-h1-xl typo-gate-question text-left text-balance text-white">{spec.heading}</h1>
        </EmptyTitle>

        {/* A readable measure, not the full 1216px: a 15-word line across the whole slab
            is a line nobody finishes (D4/D5). */}
        <EmptyDescription className="max-w-2xl text-left text-[15px] leading-6 text-[color:var(--slab-text-muted)]">
          <span className="block">{spec.body}</span>
          {spec.detail ? (
            <span className="mt-2 block break-words text-[color:var(--slab-text-muted)]">{spec.detail}</span>
          ) : null}
        </EmptyDescription>
      </EmptyHeader>

      {/* TWO actions, stacked and full-width at 390 (§8.2), at their natural width from
          640 — `flex-1` across a 1216px panel made each button 570px wide, which reads as
          a banner rather than as a choice. */}
      <EmptyContent className="w-full max-w-none flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-start">
        <OutcomeButton action={spec.primary} variant="primary" />
        <OutcomeButton action={spec.secondary} variant="ghost" />
      </EmptyContent>
    </Empty>
  );
}

/**
 * 48px tall, never 44 — §8.3 sets the floor at 44 and every other primary control on
 * this route is already 48, so matching it is what stops the endings looking like a
 * different product from the gate.
 */
function OutcomeButton({
  action,
  variant,
}: {
  action: OutcomeAction;
  variant: "primary" | "ghost";
}) {
  const Icon = action.icon;
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 text-[14px] font-semibold transition-colors [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] disabled:cursor-default";
  const skin =
    variant === "primary"
      ? // White on --obz-cta measures 5.01:1 (§4.2). The one "you can act here" fill,
        // and the third place the brand accent does real work on this screen (V2).
        "bg-[color:var(--obz-cta)] text-white hover:bg-[color:var(--obz-cta-hover)] disabled:bg-[color:var(--slab-chip-ground)] disabled:text-[color:var(--slab-text-muted)]"
      : // A real border, not a bare text link: two next steps that look like one button
        // and one afterthought is not two next steps.
        "border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] text-white hover:border-[color:var(--slab-text-muted)]";

  const label = action.done && action.doneLabel ? action.doneLabel : action.label;
  const body = (
    <>
      <Icon aria-hidden className="size-4 shrink-0" />
      <span className="min-w-0 break-words">{label}</span>
      {action.href ? <ExternalLink aria-hidden className="size-3.5 shrink-0 opacity-70" /> : null}
    </>
  );

  if (action.href) {
    return (
      <a className={`${base} ${skin}`} href={action.href} target="_blank" rel="noreferrer">
        {body}
      </a>
    );
  }
  return (
    <button type="button" className={`${base} ${skin}`} onClick={action.onClick} disabled={action.done}>
      {body}
    </button>
  );
}
