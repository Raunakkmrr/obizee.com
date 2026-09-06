"use client";

import { useCallback, useId, useMemo, useState } from "react";
import { Check, IndianRupee, Loader2 } from "lucide-react";

import { DEFAULT_PRICE_RUPEES, saveProductEdits, type ProductEdit } from "@/lib/import/report";
import type { ImportJobView, ImportProductView } from "@/lib/import/job";

/**
 * THE PRODUCT CHECKLIST — her rows, hers to correct, asked once and never enforced.
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

export default function ProductChecklist({
  job,
  onPriced,
}: {
  job: ImportJobView;
  /** The save response IS the poll shape, so the report re-renders from the server. */
  onPriced: (job: ImportJobView) => void;
}) {
  const products = useMemo(() => (Array.isArray(job.products) ? job.products : []), [job.products]);
  const unpriced = useMemo(() => products.filter((product) => product.priceRupees == null), [products]);
  /**
   * Rows WE named. Since every post is a product, a caption that named nothing still
   * produces one — with a title taken from the caption's opening words. That is a
   * guess, and she is the only one who can confirm it.
   */
  const guessed = useMemo(() => products.filter((product) => product.titleSource === "guessed"), [products]);
  /** The list she opens: anything we could not read for certain, priced or not. */
  const needsCheck = useMemo(
    () => products.filter((product) => product.priceRupees == null || product.titleSource === "guessed"),
    [products],
  );
  const defaulted = useMemo(
    () => products.filter((product) => product.priceSource === "default"),
    [products],
  );

  const [open, setOpen] = useState(false);
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  const [titleDrafts, setTitleDrafts] = useState<Record<number, string>>({});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const headingId = useId();

  const submit = useCallback(
    async (payload: { rows?: ProductEdit[]; applyDefaultToUnpriced?: boolean }) => {
      setSaving(true);
      setError(null);
      const result = await saveProductEdits(job.jobId, payload);
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
    const byIndex = new Map<number, ProductEdit>();
    for (const [index, raw] of Object.entries(drafts)) {
      byIndex.set(Number(index), { index: Number(index), priceRupees: raw.trim() === "" ? null : Number(raw) });
    }
    for (const [index, raw] of Object.entries(titleDrafts)) {
      if (raw.trim() === "") continue;
      const key = Number(index);
      byIndex.set(key, { ...(byIndex.get(key) ?? { index: key }), title: raw.trim() });
    }
    void submit({ rows: [...byIndex.values()], applyDefaultToUnpriced: false });
  }, [drafts, titleDrafts, submit]);

  const skip = useCallback(() => void submit({ applyDefaultToUnpriced: true }), [submit]);

  // Nothing left to ask. Say what happened only if the placeholder was used — otherwise
  // a screen full of prices she wrote needs no commentary.
  if (needsCheck.length === 0) {
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
          <span className="text-[color:var(--violet-on-dark)]">{formatRupees(needsCheck.length)}</span> of your
          products could use a look.
        </h2>
        <p className="max-w-2xl text-[14px] leading-5 text-[color:var(--slab-text-muted)]">
          {guessed.length > 0 ? (
            <>
              We named {formatRupees(guessed.length)} of them from your captions, and{" "}
              {formatRupees(unpriced.length)} have no price yet.{" "}
            </>
          ) : (
            <>Your captions did not name a price for {formatRupees(unpriced.length)} of them. </>
          )}
          Fix them now, or we&apos;ll put ₹{formatRupees(DEFAULT_PRICE_RUPEES)} on anything unpriced so your
          shop can take orders today — everything stays editable.
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
          {open ? "Hide the list" : "Check them now"}
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
            {needsCheck.map((product) => (
              <ChecklistRow
                key={product.index}
                product={product}
                price={drafts[product.index] ?? ""}
                title={titleDrafts[product.index] ?? ""}
                onPrice={(value) => setDrafts((was) => ({ ...was, [product.index]: value }))}
                onTitle={(value) => setTitleDrafts((was) => ({ ...was, [product.index]: value }))}
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
              disabled={saving || (Object.keys(drafts).length === 0 && Object.keys(titleDrafts).length === 0)}
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] bg-[color:var(--obz-cta)] px-4 text-[14px] font-bold text-white disabled:opacity-60"
            >
              {saving ? <Loader2 aria-hidden className="mr-2 size-4 animate-spin" /> : null}
              Save changes
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

/** One row: the photo, its name (ours or hers), and the price. */
function ChecklistRow({
  product,
  price,
  title,
  onPrice,
  onTitle,
}: {
  product: ImportProductView;
  price: string;
  title: string;
  onPrice: (value: string) => void;
  onTitle: (value: string) => void;
}) {
  const priceId = `price-${product.index}`;
  const titleId = `title-${product.index}`;
  const guessed = product.titleSource === "guessed";

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

      {/* min-w-0 so a long name truncates instead of shoving the price field off a
          390px screen. */}
      <div className="min-w-0 flex-1">
        {guessed ? (
          // WE named this one, so it is a field, not a label. The caption's own words
          // are the placeholder — she overwrites them rather than starting from empty.
          <>
            <label htmlFor={titleId} className="sr-only">
              Name for this product
            </label>
            <input
              id={titleId}
              type="text"
              value={title}
              onChange={(event) => onTitle(event.target.value)}
              placeholder={product.title}
              className="h-9 w-full rounded-[var(--radius-sm)] border border-[color:var(--slab-chip-border)] bg-[color:var(--choice-ground)] px-2 text-[14px] font-semibold text-white outline-none focus-visible:border-[color:var(--obz-cta)]"
            />
            <span className="mt-0.5 block text-[12px] text-[color:var(--slab-text-muted)]">
              We named this one from your caption.
            </span>
          </>
        ) : (
          <>
            <span className="block truncate text-[14px] font-semibold text-white">{product.title}</span>
            {product.priceSourceText ? (
              <span className="block truncate text-[12.5px] text-[color:var(--slab-text-muted)]">
                Your caption said &ldquo;{product.priceSourceText}&rdquo;
              </span>
            ) : null}
          </>
        )}
      </div>

      <div className="relative shrink-0">
        <label htmlFor={priceId} className="sr-only">
          Price for {product.title} in rupees
        </label>
        <IndianRupee
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-[color:var(--slab-text-muted)]"
        />
        <input
          id={priceId}
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={price}
          onChange={(event) => onPrice(event.target.value)}
          placeholder={product.priceRupees == null ? String(DEFAULT_PRICE_RUPEES) : String(product.priceRupees)}
          className="h-11 w-24 rounded-[var(--radius-sm)] border border-[color:var(--slab-chip-border)] bg-[color:var(--choice-ground)] pl-7 text-[14px] font-semibold text-white outline-none focus-visible:border-[color:var(--obz-cta)]"
        />
      </div>
    </li>
  );
}
