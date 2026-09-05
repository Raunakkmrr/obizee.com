"use client";

import { ExternalLink, ImageOff, Layers, Play } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { formatCount } from "@/lib/import/job";
import type { ImportPostView } from "@/lib/import/job";
import type { SkippedGroup } from "@/lib/import/report";

/**
 * R5 — THE POSTS WE SET ASIDE, grouped by reason.
 *
 * PROVENANCE — IMPORTED, two components, both from shadcn's keyless registry because
 * `API_KEY_21ST` has no value and the 21st.dev registry the ticket names (`ddoemonn/
 * accordion` 23530, `originui/table` 95) 401s. Declared, not silently hand-rolled.
 *   `npx shadcn@4.21.0 add accordion`  → components/ui/accordion.tsx
 *   `npx shadcn@4.21.0 add table`      → components/ui/table.tsx
 *
 * VISIBLE ARTEFACT — accordion: the whole disclosure. Three group heads that open and
 * close, and the SMOOTH height transition AC-3 asks for at any row count, which is
 * Radix's `--radix-accordion-content-height` measuring the content and our keyframes
 * consuming it. Remove it and the list is 156 rows dumped flat with no way to close
 * them. VISIBLE ARTEFACT — table: the row grid inside a group, its hover row highlight,
 * and the `overflow-x-auto` wrapper that keeps a long permalink from widening the slab.
 *
 * THE THEME TRAP (fourth ticket running). Both arrived using `border-*` with no colour,
 * `text-foreground`, `text-muted-foreground` and `hover:bg-muted/50` — none of which
 * this project's @theme declares, so on the slab the group heads had no rule between
 * them, the rows had no hover, and the chevron was invisible. Every one of those is
 * re-pointed below at an import-scope token, and the chevron (unreachable from a
 * className) was edited inside `accordion.tsx` with the diff recorded there.
 *
 * A SET-ASIDE POST IS NOT AN ERROR. The whole region takes the amber family, never
 * danger red: §2.5 is explicit that a partial result is still a result, and a seller
 * looking at "12 posts only asked for a DM" is looking at a correct refusal, not a bug.
 *
 * AC-8 — AT 390px THE TABLE IS NOT A TABLE. `max-sm:` turns every row into a stacked
 * card (the row becomes a block, the cells become rows inside it) rather than a
 * horizontally scrolling grid, which is the shape a phone can actually read. One DOM,
 * not two: a duplicated mobile list is two lists that drift apart.
 *
 * WHAT IS NOT HERE, AND WHY — this is the one place the ticket asks for something the
 * contract does not carry. `projectPost()` (`OM-backend/controllers/ImportController.js
 * :181`) sends `sourceUrl`, `mediaType`, `isCarousel`, `isReel`, `thumbUrl`,
 * `dropReason` and `hasProducts`. IT DOES NOT SEND THE CAPTION. So the ticket's
 * "caption first line, expand to the full caption" cannot be built from the shipped
 * poll shape, and inventing a caption would be worse than not showing one (R12). Each
 * row therefore identifies the post by her own photograph and links OUT to the real
 * post on Instagram, which is the thing she would go and check anyway. Recorded as an
 * open item with the one-line server fix.
 */
export default function SkippedGroups({
  groups,
  /** D-3 opens this list, already expanded on its largest group. */
  defaultOpen,
  handle,
}: {
  groups: SkippedGroup[];
  defaultOpen?: boolean;
  handle: string | null;
}) {
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="skipped-heading" data-testid="skipped-groups" className="flex flex-col gap-3">
      <h2 id="skipped-heading" className="text-[15px] leading-6 font-bold text-white">
        The posts we set aside
      </h2>
      <p className="text-[13.5px] leading-5 text-[color:var(--slab-text-muted)]">
        Nothing was thrown away. These posts had no product and price we could read — open a group to
        see which.
      </p>

      <Accordion
        type="multiple"
        defaultValue={defaultOpen ? [groups[0].reason] : []}
        className="rounded-[var(--radius-lg)] border border-[color:var(--skipped-chip-border)] bg-[color:var(--slab-chip-ground)] px-3 sm:px-4"
      >
        {groups.map((group) => (
          <AccordionItem
            key={group.reason}
            value={group.reason}
            data-testid={`skipped-group-${group.reason}`}
            /* Re-points `border-b`, which arrived with no colour at all. */
            className="border-[color:var(--skipped-row-border)]"
          >
            <AccordionTrigger className="py-3.5 text-white hover:no-underline">
              <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1 pr-2">
                {/* THE COUNT LEADS. She scans for the big group; the reason explains it. */}
                <span className="text-[17px] leading-6 font-extrabold tabular-nums text-[color:var(--warning-on-dark)]">
                  {formatCount(group.count)}
                </span>
                <span className="min-w-0 text-[14px] leading-5 font-semibold break-words text-white">
                  {group.label}
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="pb-4">
              {/* `max-h-80 overflow-auto` — 156 rows inside a group must not push the
                  exit button off the bottom of the page. The accordion animates the
                  BOX; this scrolls inside it. */}
              <div className="max-h-80 overflow-auto rounded-[var(--radius-md)] border border-[color:var(--skipped-row-border)]">
                <Table className="text-white">
                  <TableBody>
                    {group.posts.map((post, index) => (
                      <SkippedRow
                        key={`${post.sourceUrl}-${index}`}
                        post={post}
                        label={group.label}
                        handle={handle}
                      />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function SkippedRow({
  post,
  label,
  handle,
}: {
  post: ImportPostView;
  label: string;
  handle: string | null;
}) {
  const Shape = post.isCarousel ? Layers : post.isReel ? Play : null;

  return (
    <TableRow
      /* `hover:bg-muted/50` resolved to nothing; this is the same affordance on a token
         that exists. `max-sm:` is AC-8 — the row stops being a row. */
      className="border-[color:var(--skipped-row-border)] hover:bg-[color:var(--wall-tile-ground)] max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:p-3"
    >
      <TableCell className="w-14 py-2 pl-2 max-sm:w-full max-sm:p-0">
        <span className="flex items-center gap-3">
          <span className="relative block size-11 shrink-0 overflow-hidden rounded-[var(--radius-sm)] border border-[color:var(--wall-tile-border)] bg-[color:var(--wall-tile-ground)]">
            {post.thumbUrl ? (
              // A signed, short-lived Meta CDN url — see this file's siblings for why the
              // Next optimizer is skipped. (The source's `@next/next/no-img-element`
              // disable is dropped: this repo's eslint config never loads that plugin, so
              // the directive was an unresolved-rule ERROR.)
              <img
                src={post.thumbUrl}
                alt={handle ? `A post from @${handle} we set aside` : "A post we set aside"}
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
          {/* The shape mark, so a reel in the "video with no price" group is visibly a
              reel. Every row that OrderCard would give an icon gets one (§6.3). */}
          {Shape ? (
            <Shape
              aria-hidden
              className="size-4 shrink-0 text-[color:var(--slab-text-muted)] sm:hidden"
            />
          ) : null}
        </span>
      </TableCell>

      <TableCell className="py-2 whitespace-normal max-sm:p-0">
        {/* THE REASON, AS A WORD AND A HUE — never the hue alone (SC 1.4.1). It repeats
            the group head on purpose: a row copied out of a scrolled list has to still
            say why it is here. */}
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-[var(--radius-pill)] border border-[color:var(--skipped-chip-border)] bg-[color:var(--skipped-chip-bg)] px-2.5 py-1 text-[12.5px] leading-4 font-semibold break-words text-[color:var(--warning-on-dark)]">
          {label}
        </span>
      </TableCell>

      <TableCell className="py-2 pr-2 text-right whitespace-normal max-sm:p-0 max-sm:text-left">
        <a
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          /* 44px minimum target, on a row that is 44px tall anyway. */
          className="inline-flex min-h-11 items-center gap-1.5 rounded-[var(--radius-sm)] px-2 text-[13px] font-semibold text-[color:var(--obz-cta-on-dark)] underline-offset-4 hover:underline"
        >
          <ExternalLink aria-hidden className="size-3.5 shrink-0" />
          See the post
        </a>
      </TableCell>
    </TableRow>
  );
}
