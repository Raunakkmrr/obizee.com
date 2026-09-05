"use client";

import { useCallback, useId, useRef, useState } from "react";
import { Check, ImageOff } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GROUPINGS, setGrouping, type Grouping } from "@/lib/import/report";
import type { ImportJobView } from "@/lib/import/job";

/**
 * UI-010 — THE ONE QUESTION, in her language.
 *
 * PROVENANCE — IMPORTED. `npx shadcn@4.21.0 add radio-group` (components/ui/
 * radio-group.tsx). The ticket names `shugar/choicebox-1` (3944) on 21st.dev;
 * `API_KEY_21ST` has no value, that registry 401s, and the instruction for this ticket
 * was explicit that a lookalike may not be hand-rolled — so the CARD BEHAVIOUR is
 * DERIVED from the registry's own `RadioGroup` primitive rather than from a blank file.
 *
 * VISIBLE ARTEFACT — the radio group is the entire control: the dot that says which
 * option is chosen, and, more importantly, THE ROVING TABINDEX (AC-4). Radix's
 * `RadioGroup` gives arrow-key movement between the two options and a single Tab stop
 * for the group, which is exactly the browser's own radio semantics and exactly what a
 * hand-written pair of clickable divs would have broken. Remove it and the control
 * still looks identical and is unusable from a keyboard.
 * ONE-LINE DIFF from a plain radio group: the `<label>` is the whole card — 44px+ tap
 * target by construction, and it carries a DIAGRAM, which is what the ticket's chosen
 * component was chosen for.
 *
 * THE THEME TRAP. `RadioGroupItem` shipped `border-input`, `text-primary` and
 * `ring-ring/50`; none of those exist in this project's @theme, so the dot's ring had no
 * colour and the dot itself had no fill. `fill-primary` is inside the Indicator and was
 * edited in `radio-group.tsx` (diff recorded there); the two reachable ones are
 * re-pointed on the item below.
 *
 * THE DIAGRAMS ARE HERS (AC-2). Both are built from `posts[]`'s real carousel covers —
 * `carouselThumbs`, three of them — so option 1 shows those pictures stacked in ONE
 * frame and option 2 shows the same pictures in THREE frames. The difference between
 * the two options is a thing she can see, not a sentence she has to parse. There is no
 * generic placeholder anywhere in this component (R4/R12): with no usable thumbnail the
 * frames render as designed empty tiles, and the sentences still carry the question.
 *
 * IT NEVER BLOCKS HER. `resolveGrouping` on the server treats no answer, and anything
 * unrecognised, as `one_post_one_product` (`ImportController.js:421`) — so option 1 is
 * pre-selected here to MIRROR a decision that is already made, not to make one. There is
 * no "confirm", no required field, and no path through this screen that needs her to
 * touch it.
 *
 * OPTIMISTIC, AND THAT IS SAFE HERE SPECIFICALLY. The endpoint is documented as always
 * succeeding or falling back to the default (UI-004 AC-6), and it re-derives from stored
 * posts with NO CALL TO META — so the selection moves the instant she clicks and the
 * counts catch up when the response lands. A failed request rolls the selection back to
 * what the server last confirmed rather than leaving a lie on screen.
 */
export default function GroupingChoice({
  jobId,
  carousels,
  thumbs,
  selected,
  onAssembled,
}: {
  jobId: string;
  /** `captureSummary.carousels`. The caller renders nothing at all when this is 0. */
  carousels: number;
  /** Her own carousel covers, up to three. */
  thumbs: string[];
  /** What the server currently holds — `assembly.grouping`, resolved. */
  selected: Grouping;
  /** The assembly response IS the poll shape, so the whole report re-renders from it. */
  onAssembled: (job: ImportJobView) => void;
}) {
  const groupId = useId();
  // The optimistic value. `null` means "no divergence — show what the server holds".
  const [pending, setPending] = useState<Grouping | null>(null);
  // AC-3 — a double-click must not fire two requests. A ref, not state, because the
  // guard has to be true on the SAME tick as the second click, before any re-render.
  const inFlight = useRef(false);

  const shown = pending ?? selected;

  const choose = useCallback(
    async (next: string) => {
      const grouping = next as Grouping;
      if (inFlight.current || grouping === shown) return;
      inFlight.current = true;
      setPending(grouping);

      const result = await setGrouping(jobId, grouping);
      inFlight.current = false;

      if (result.ok === true) {
        onAssembled(result.job);
        // Cleared only AFTER the parent holds the new job, so the selection never
        // flashes back through the old value between the two renders.
        setPending(null);
        return;
      }
      // The request did not land. Say so by moving the dot back rather than by leaving
      // her looking at a choice we did not record.
      setPending(null);
    },
    [jobId, onAssembled, shown],
  );

  return (
    /* AC-6 — ONE `<fieldset>` with ONE `<legend>` carrying the WHOLE question, so a
       screen reader announces "Some of your posts have several photos… Should each post
       become one product…" as the group's name before either option. Splitting it across
       two `<label>`s is the failure that criterion names. */
    <fieldset
      data-testid="grouping-question"
      className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[color:var(--choice-border)] bg-[color:var(--choice-ground)] p-4 sm:p-5"
    >
      <legend className="sr-only">
        Some of your posts have several photos. Should each post become one product with all its
        photos, or should every photo become its own product?
      </legend>

      <div aria-hidden className="flex flex-col gap-1.5">
        {/* R8 — two-tone. The count is the argument, so it takes the brand colour. */}
        <h2 className="text-[19px] leading-7 font-extrabold text-balance text-white sm:text-[22px] sm:leading-8">
          <span className="text-[color:var(--violet-on-dark)]">{carousels.toLocaleString("en-IN")}</span>{" "}
          of your posts have several photos.
        </h2>
        <p className="max-w-2xl text-[14px] leading-5 text-[color:var(--slab-text-muted)]">
          Should each post become one product with all its photos, or should every photo become its own
          product?
        </p>
      </div>

      <RadioGroup
        value={shown}
        onValueChange={choose}
        aria-label="How posts with several photos become products"
        className="grid gap-3 sm:grid-cols-2 sm:gap-4"
      >
        <Option
          id={`${groupId}-one`}
          value={GROUPINGS.onePostOneProduct}
          checked={shown === GROUPINGS.onePostOneProduct}
          title="One post, one product"
          body="All the photos belong to that one product."
          diagram={<TogetherDiagram thumbs={thumbs} />}
        />
        <Option
          id={`${groupId}-many`}
          value={GROUPINGS.oneImageOneProduct}
          checked={shown === GROUPINGS.oneImageOneProduct}
          title="Every photo, its own product"
          body="Same name and price on each."
          diagram={<ApartDiagram thumbs={thumbs} />}
        />
      </RadioGroup>

      <p className="text-[13px] leading-5 text-[color:var(--slab-text-muted)]">
        You can change this later. Nothing is fetched again — we already have your photos.
      </p>
    </fieldset>
  );
}

function Option({
  id,
  value,
  checked,
  title,
  body,
  diagram,
}: {
  id: string;
  value: string;
  checked: boolean;
  title: string;
  body: string;
  diagram: React.ReactNode;
}) {
  return (
    /* THE LABEL IS THE CARD. That is what makes the whole 200px-tall surface the tap
       target, not a 16px dot beside it — and `htmlFor` is what keeps the click native
       rather than a synthetic handler fighting Radix's own. */
    <label
      htmlFor={id}
      data-selected={checked ? "yes" : "no"}
      /* M18 — the border and ground change on selection, 120ms (`--motion-fast`). It
         explains exactly one state change: which answer is currently recorded. */
      className="flex cursor-pointer flex-col gap-3 rounded-[var(--radius-md)] border p-3 transition-[background-color,border-color] [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] sm:p-4"
      style={{
        borderColor: checked ? "var(--choice-border-selected)" : "var(--choice-border)",
        background: checked ? "var(--choice-ground-selected)" : "var(--slab-chip-ground)",
      }}
    >
      <div className="flex items-start gap-3">
        <RadioGroupItem
          id={id}
          value={value}
          /* Re-pointed: `border-input` and `text-primary` resolve to nothing here. */
          className="mt-0.5 size-5 shrink-0 border-[color:var(--wall-tile-border)] text-[color:var(--obz-cta-on-dark)] data-[state=checked]:border-[color:var(--obz-cta-on-dark)]"
        />
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-[15px] leading-5 font-bold break-words text-white">{title}</span>
            {checked ? (
              /* SELECTION IS A WORD AND A MARK, not only a colour (SC 1.4.1). */
              <span className="inline-flex shrink-0 items-center gap-1 rounded-[var(--radius-pill)] px-1.5 py-0.5 text-[11px] font-bold tracking-wide text-[color:var(--obz-cta-on-dark)] uppercase">
                <Check aria-hidden className="size-3" />
                Chosen
              </span>
            ) : null}
          </span>
          <span className="mt-0.5 block text-[13px] leading-[18px] text-[color:var(--slab-text-muted)]">
            {body}
          </span>
        </span>
      </div>

      {/* I-6 — 160x110 on a phone, 240x160 from `sm`. The diagram is the argument; the
          two sentences above it are the caption. */}
      <span aria-hidden className="block h-[110px] w-full sm:h-[160px]">
        {diagram}
      </span>
    </label>
  );
}

/** Option 1 — her three photographs stacked inside ONE product frame. */
function TogetherDiagram({ thumbs }: { thumbs: string[] }) {
  return (
    <span className="flex size-full items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[color:var(--obz-cta-on-dark)] bg-[color:var(--slab-ground)] p-2">
      <span className="relative block h-full w-[86%]">
        {[0, 1, 2].map((index) => (
          <Shot
            key={index}
            src={thumbs[index] ?? null}
            /* Same measured correction as MediaMixStrip's fan: at 74%/13% the three
               frames read as one photograph, so the diagram said nothing. */
            className="absolute h-full w-[52%]"
            style={{ left: `${index * 24}%`, zIndex: 3 - index, transform: `rotate(${(index - 1) * 5}deg)` }}
          />
        ))}
      </span>
    </span>
  );
}

/** Option 2 — the same photographs, each in a frame of its own. */
function ApartDiagram({ thumbs }: { thumbs: string[] }) {
  return (
    <span className="grid size-full grid-cols-3 gap-1.5">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="flex items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[color:var(--violet-on-dark)] bg-[color:var(--slab-ground)] p-1.5"
        >
          <Shot src={thumbs[index] ?? null} className="size-full" />
        </span>
      ))}
    </span>
  );
}

function Shot({
  src,
  className,
  style,
}: {
  src: string | null;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`block overflow-hidden rounded-[var(--radius-sm)] border border-[color:var(--wall-tile-border)] bg-[color:var(--wall-tile-ground)] ${className ?? ""}`}
      style={style}
    >
      {src ? (
        // A signed, short-lived Meta CDN url. `next/image` would cache a URL that
        // expires, and this repo's `images.unoptimized` makes the optimizer a no-op
        // anyway. (The source carried an `@next/next/no-img-element` disable here; this
        // repo's flat eslint config does not load the Next plugin, so the directive was
        // an unresolved-rule ERROR. The reason it documented is kept as prose.)
        <img
          src={src}
          alt=""
          loading="lazy"
          className="size-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <span className="flex size-full items-center justify-center">
          <ImageOff aria-hidden className="size-4 text-[color:var(--slab-text-muted)]" />
        </span>
      )}
    </span>
  );
}
