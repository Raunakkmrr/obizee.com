"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { Check, IndianRupee, Loader2 } from "lucide-react";

import { DEFAULT_PRICE_RUPEES, savePrices, type PriceEntry } from "@/lib/import/report";
import type { ImportJobView, ImportProductView } from "@/lib/import/job";

/**
 * THE PRICING STEP — what her products cost, asked once, never enforced.
 *
 * PRICE IS NOT A GATE, AND THIS SCREEN MUST NOT BECOME ONE. Nothing in this flow has
 * ever set a post aside for lacking a price, and plenty of these sellers never put one
 * in a caption at all — "DM for price" is how half of Instagram commerce works. So this
 * is an OFFER, and skipping it is a first-class answer that still produces a complete,
 * orderable shop.
 *
 * WHY THE LIST IS CLOSED BY DEFAULT. A seller who imported 148 products should not meet
 * 148 empty text fields. The question is one sentence and two buttons; the list opens
 * only if she says yes.
 *
 * WHY THE SKIP BUTTON SAYS THE NUMBER. She is agreeing to ₹499 on every unpriced row,
 * and a bare "Later" would hide that. ₹499 is right for a scrunchie and wrong for a
 * silver necklace, and if a buyer orders at the wrong price she is expected to honour
 * it — so the consequence goes on the button, not in a tooltip. Every row it touches is
 * stamped `priceSource: "default"` so those rows can be found again afterwards.
 */

/** Indian digit grouping. Her prices, her convention. */
const formatRupees = (rupees: number) => rupees.toLocaleString("en-IN");

export default function PricingStep({
  job,
  onPriced,
}: {
  job: ImportJobView;
  /** The save response IS the poll shape, so the report re-renders from the server. */
  onPriced: (job: ImportJobView) => void;
}) {
  const products = useMemo(() => (Array.isArray(job.products) ? job.products : []), [job.products]);
  const unpriced = useMemo(() => products.filter((product) => product.priceRupees == null), [products]);
  const defaulted = useMemo(
    () => products.filter((product) => product.priceSource === "default"),
    [products],
  );

  const [open, setOpen] = useState(false);
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const headingId = useId();

  const submit = useCallback(
    async (payload: { prices?: PriceEntry[]; applyDefaultToUnpriced?: boolean }) => {
      setSaving(true);
      setError(null);
      const result = await savePrices(job.jobId, payload);
      setSaving(false);
      if (result.ok === false) {
        setError(result.message);
        return;
      }
      setDrafts({});
      setOpen(false);
      onPriced(result.job);
    },
    [job.jobId, onPriced],
  );

  /** Only rows she actually typed into are sent. An untouched field is not a decision. */
  const saveTyped = useCallback(() => {
    const prices: PriceEntry[] = Object.entries(drafts).map(([index, raw]) => ({
      index: Number(index),
      priceRupees: raw.trim() === "" ? null : Number(raw),
    }));
    void submit({ prices, applyDefaultToUnpriced: false });
  }, [drafts, submit]);

  const skip = useCallback(() => void submit({ applyDefaultToUnpriced: true }), [submit]);

  // Nothing left to ask. Say what happened only if the placeholder was used — otherwise
  // a screen full of prices she wrote needs no commentary.
  if (unpriced.length === 0) {
    if (defaulted.length === 0) return null;
    return (
      <p
        data-testid="pricing-settled"
        className="flex items-start gap-2 rounded-[var(--radius-lg)] border border-[color:var(--choice-border)] bg-[color:var(--choice-ground)] p-4 text-[14px] leading-5 text-[color:var(--slab-text-muted)] sm:p-5"
      >
        <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
        <span>
          <span className="font-bold text-white">
            {formatRupees(defaulted.length)} {defaulted.length === 1 ? "product is" : "products are"} at
            ₹{formatRupees(DEFAULT_PRICE_RUPEES)}.
          </span>{" "}
          You can change any of them from your shop, any time.
        </span>
      </p>
    );
  }

  return (
    <section
      aria-labelledby={headingId}
      data-testid="pricing-step"
      className="flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[color:var(--choice-border)] bg-[color:var(--choice-ground)] p-4 sm:p-5"
    >
      <div className="flex flex-col gap-1.5">
        {/* Same two-tone rule as the grouping question: the count is the argument. */}
        <h2
          id={headingId}
          className="text-[19px] leading-7 font-extrabold text-balance text-white sm:text-[22px] sm:leading-8"
        >
          <span className="text-[color:var(--violet-on-dark)]">{formatRupees(unpriced.length)}</span> of your
          products have no price yet.
        </h2>
        <p className="max-w-2xl text-[14px] leading-5 text-[color:var(--slab-text-muted)]">
          Your captions did not name one. Set them now, or we&apos;ll put ₹
          {formatRupees(DEFAULT_PRICE_RUPEES)} on each so your shop is ready to take orders — you can change
          them whenever you like.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => setOpen((was) => !was)}
          disabled={saving}
          aria-expanded={open}
          className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--obz-cta)] px-4 text-[14px] font-bold text-white transition-[background-color,box-shadow,transform] [transition-duration:var(--motion-fast)] hover:shadow-[var(--shadow-2)] active:translate-y-px disabled:opacity-60"
        >
          {open ? "Hide the list" : "Set prices now"}
        </button>
        <button
          type="button"
          onClick={skip}
          disabled={saving}
          className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--slab-chip-border)] px-4 text-[14px] font-semibold text-white transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--slab-chip-ground)] disabled:opacity-60"
        >
          {saving ? (
            <Loader2 aria-hidden className="mr-2 size-4 animate-spin" />
          ) : null}
          Skip — price everything at ₹{formatRupees(DEFAULT_PRICE_RUPEES)}
        </button>
      </div>

      {open ? (
        <div className="flex flex-col gap-3">
          <ul className="flex max-h-[26rem] flex-col gap-2 overflow-y-auto pr-1">
            {unpriced.map((product) => (
              <PriceRow
                key={product.index}
                product={product}
                value={drafts[product.index] ?? ""}
                onChange={(value) => setDrafts((was) => ({ ...was, [product.index]: value }))}
              />
            ))}
          </ul>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] leading-5 text-[color:var(--slab-text-muted)]">
              Leave any of them blank — blanks get ₹{formatRupees(DEFAULT_PRICE_RUPEES)} when you skip.
            </p>
            <button
              type="button"
              onClick={saveTyped}
              disabled={saving || Object.keys(drafts).length === 0}
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--obz-cta)] px-4 text-[14px] font-bold text-white disabled:opacity-60"
            >
              {saving ? <Loader2 aria-hidden className="mr-2 size-4 animate-spin" /> : null}
              Save prices
            </button>
          </div>
        </div>
      ) : null}

      {error ? (
        <p role="status" className="text-[13.5px] leading-5 text-[color:var(--color-error)]">
          {error}
        </p>
      ) : null}
    </section>
  );
}

/** One row: what it is, what her caption said, and the field. */
function PriceRow({
  product,
  value,
  onChange,
}: {
  product: ImportProductView;
  value: string;
  onChange: (value: string) => void;
}) {
  const fieldId = `price-${product.index}`;
  return (
    <li className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] p-2.5">
      {product.thumbUrl ? (
        /* A plain <img>, not next/image: this is a remote S3 thumbnail on a statically
           exported site, where the optimiser has no server to run on. */
        <img
          src={product.thumbUrl}
          alt=""
          className="size-12 shrink-0 rounded-[var(--radius-sm)] object-cover"
          loading="lazy"
        />
      ) : (
        <span aria-hidden className="size-12 shrink-0 rounded-[var(--radius-sm)] bg-[color:var(--choice-ground)]" />
      )}

      {/* min-w-0 so a long title truncates instead of shoving the field off a 390px screen. */}
      <div className="min-w-0 flex-1">
        <label htmlFor={fieldId} className="block truncate text-[14px] font-semibold text-white">
          {product.title}
        </label>
        {product.priceSourceText ? (
          <span className="block truncate text-[12.5px] text-[color:var(--slab-text-muted)]">
            Your caption said “{product.priceSourceText}”
          </span>
        ) : null}
      </div>

      <div className="relative shrink-0">
        <IndianRupee
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-[color:var(--slab-text-muted)]"
        />
        <input
          id={fieldId}
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={String(DEFAULT_PRICE_RUPEES)}
          aria-label={`Price for ${product.title} in rupees`}
          className="h-11 w-24 rounded-[var(--radius-sm)] border border-[color:var(--slab-chip-border)] bg-[color:var(--choice-ground)] pl-7 text-[14px] font-semibold text-white outline-none focus-visible:border-[color:var(--obz-cta)]"
        />
      </div>
    </li>
  );
}
