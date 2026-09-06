"use client";

import { Check, Images, Palette, ScanSearch } from "lucide-react";

import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import { IMPORT_STEPS, type ImportStep } from "@/lib/import/job";

/**
 * W1 — THE STAGE RAIL.
 *
 * PROVENANCE — IMPORTED. `npx shadcn@latest add item` supplies the row anatomy
 * (`ItemMedia` / `ItemContent` / `ItemTitle` / `ItemDescription` — an icon tile, a
 * label, and a sub-line, at a fixed rhythm) and `npx shadcn@latest add spinner` supplies
 * the in-flight `Loader2` with its `role="status"` already on it. UI-008's ticket names
 * `ddoemonn/task-steps` (23569) on 21st.dev, chosen in design-brief.md §3.3 for its
 * **per-step error state**; `API_KEY_21ST` has no value so that registry 401s. The
 * per-step error state is the one thing `Item` does not ship, so it is built here — as
 * a fourth tone on the same three-part row, not as a second component. Declared in the
 * dev report; not a silent substitution.
 *
 * ITS THEME TRAP IS REAL AND IS FIXED IN `components/ui/item.tsx`: the published
 * `Item` focus ring is `focus-visible:border-ring` + `ring-ring/50`, and this repo's
 * Tailwind theme declares no `--color-ring`, so BOTH utilities are dropped and the ring
 * simply does not exist. See that file's header.
 *
 * THREE ROWS, NOT FOUR — and this is the ticket's own correction to the brief.
 * design-brief.md §2.5 W1 lists four merchant-language steps including "Saving your
 * photos", taken from `architecture.md:668`. That step (`rehosting_images`) is NOT in
 * `IMPORT_JOB_STEPS` in the shipped entity and no code path can ever set it, so the
 * fourth row would be permanently pending on every SUCCESSFUL import — a rail that
 * tells a seller her import is unfinished when it is finished. The enum is the truth.
 *
 * `<ol>` WITH `aria-current="step"` (§8.3). A rail is an ordered list of steps, and a
 * screen reader user gets the order and the position from the semantics rather than from
 * the colour of a dot.
 */

/** The enum, in merchant language. One entry per REAL step; see the header. */
const STEP_COPY: Record<(typeof IMPORT_STEPS)[number], { label: string; done: string; icon: typeof Images }> = {
  fetching: {
    label: "Reading your Instagram",
    // The past tense is not decoration: a completed row that still says "Reading" reads
    // as stuck, which is the exact ambiguity a nine-minute screen cannot afford.
    done: "Read your Instagram",
    icon: Images,
  },
  reading_products: {
    label: "Finding the products",
    done: "Found the products",
    icon: ScanSearch,
  },
  reading_brand: {
    label: "Picking up your logo and colours",
    done: "Picked up your logo and colours",
    icon: Palette,
  },
};

type RowState = "done" | "active" | "pending" | "stopped";

function stateOf(step: (typeof IMPORT_STEPS)[number], current: ImportStep | null, stopped: boolean): RowState {
  const index = IMPORT_STEPS.indexOf(step);
  const currentIndex = current && current !== "awaiting_confirmation" ? IMPORT_STEPS.indexOf(current) : -1;
  if (current === "awaiting_confirmation") return "done";
  if (currentIndex < 0) return index === 0 && stopped ? "stopped" : "pending";
  if (index < currentIndex) return "done";
  if (index > currentIndex) return "pending";
  return stopped ? "stopped" : "active";
}

export default function StageRail({
  step,
  /** The job reached a terminal status. The row it died on carries the mark, not row 1. */
  stopped = false,
  /** `progress.current` of `progress.total`, rendered as the active row's sub-line. */
  detail,
}: {
  step: ImportStep | null;
  stopped?: boolean;
  detail?: string | null;
}) {
  return (
    <ol className="flex flex-col gap-1" aria-label="Import steps">
      {IMPORT_STEPS.map((key) => {
        const state = stateOf(key, step, stopped);
        const copy = STEP_COPY[key];
        const Icon = copy.icon;
        return (
          <li key={key}>
            <Item
              size="sm"
              data-state={state}
              // M11 — `pending -> active -> done` at --motion-base. The state change it
              // explains is "the job moved on", which on a nine-minute screen is the
              // single most reassuring event there is.
              className={[
                "gap-3 transition-colors [transition-duration:var(--motion-base)] [transition-timing-function:var(--motion-ease)]",
                state === "active"
                  ? "border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)]"
                  : "border-transparent bg-transparent",
              ].join(" ")}
              aria-current={state === "active" ? "step" : undefined}
            >
              <ItemMedia
                variant="icon"
                className={[
                  "size-8 shrink-0 rounded-full border transition-colors [transition-duration:var(--motion-base)] [transition-timing-function:var(--motion-ease)]",
                  state === "done"
                    ? "border-[color:var(--kept-green-on-dark)] bg-transparent text-[color:var(--kept-green-on-dark)]"
                    : state === "active"
                      ? "border-[color:var(--obz-cta-on-dark)] bg-transparent text-[color:var(--obz-cta-on-dark)]"
                      : state === "stopped"
                        ? "border-[color:var(--warning-on-dark)] bg-transparent text-[color:var(--warning-on-dark)]"
                        : "border-[color:var(--slab-chip-border)] bg-transparent text-[color:var(--slab-text-muted)]",
                ].join(" ")}
              >
                {/* ICON AND WORD, never colour alone (SC 1.4.1). A done row is a tick,
                    an active row is a moving spinner, a pending row is its own subject
                    icon — three different SHAPES, so the rail reads in greyscale. */}
                {state === "done" ? (
                  <Check aria-hidden className="size-4" />
                ) : state === "active" ? (
                  // M19 — the one proof the request is out. `Spinner` is shadcn's own
                  // `Loader2Icon` with `role="status"` already attached.
                  <Spinner className="size-4" />
                ) : (
                  <Icon aria-hidden className="size-4" />
                )}
              </ItemMedia>

              <ItemContent className="gap-0.5">
                <ItemTitle
                  className={[
                    "text-[14px] font-semibold",
                    state === "pending" ? "text-[color:var(--slab-text-muted)]" : "text-white",
                  ].join(" ")}
                >
                  {state === "done" ? copy.done : copy.label}
                </ItemTitle>
                {state === "active" && detail ? (
                  <ItemDescription className="line-clamp-1 text-[12.5px] text-[color:var(--slab-text-muted)]">
                    {detail}
                  </ItemDescription>
                ) : null}
              </ItemContent>
            </Item>
          </li>
        );
      })}
    </ol>
  );
}
