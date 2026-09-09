/**
 * WHERE HER SHOP IS NOW — the one place a source's rule and its words live.
 *
 * WHY THIS FILE EXISTS. Before it, "Instagram" was hard-coded in six places on the
 * import route: the `?h=` parse in `app/import/page.tsx`, the chip's mark, its `@`
 * prefix, its edit rule, its accessible name, and the body `startImport` posts. Adding
 * a second source by editing all six is how the two halves drift — a gate that says
 * Instagram over a job the server is running against a Shopify feed.
 *
 * THE SHAPE MIRRORS THE SERVER. `OM-backend/import/registry.js` holds the same set as
 * descriptors, and `ImportController.js:356` defaults an unknown or absent `sourceType`
 * to Instagram rather than refusing it — because every client already in the field posts
 * `{handle}` with no source at all. `parseSourceId` defaults the same way for the same
 * reason: a `?src=` this build does not know is a link from a newer deploy, not an
 * attack, and Instagram is the answer that was true before the parameter existed.
 *
 * THE RULES ARE NOT RE-DERIVED. Instagram's is `parseHandle` — imported, not copied,
 * so the provenance chain back to `normaliseHandle` stays one link long. The website
 * rule checks SHAPE ONLY; whether a domain is a store we can read is
 * `WebsiteAdapter.validateRef`'s question, and answering it in a text field would mean
 * a network call per keystroke.
 */

import { HANDLE_ERROR_COPY, parseHandle } from "@/lib/import/handle";

/** Every source the route can carry. Ordered as the picker shows them. */
export const IMPORT_SOURCE_IDS = ["instagram", "website", "linktree"] as const;

export type ImportSourceId = (typeof IMPORT_SOURCE_IDS)[number];

export type SourceRefResult = { ok: true; ref: string } | { ok: false; message: string };

/**
 * Read `?src=`. Anything unknown, absent or malformed is Instagram — see the header.
 */
export function parseSourceId(raw: string | null | undefined): ImportSourceId {
  const cleaned = String(raw ?? "")
    .trim()
    .toLowerCase();
  return (IMPORT_SOURCE_IDS as readonly string[]).includes(cleaned)
    ? (cleaned as ImportSourceId)
    : "instagram";
}

/**
 * A hostname, with the parts a seller pastes stripped off.
 *
 * She copies out of her address bar, so `https://phuljhadi.com/collections/all?page=2`
 * is the commonest input by a wide margin. The scheme, the path and the query are all
 * removed before the shape is checked; `www.` is NOT, because the server normalises to
 * an origin and a client that also normalises is a second rule to keep in step.
 */
export function normaliseWebsiteRef(raw: string | null | undefined): string {
  return String(raw ?? "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/[/?#].*$/, "")
    .replace(/\.$/, "")
    .toLowerCase();
}

/** Two labels at minimum, each 1–63 chars of the LDH set. Shape only. */
const HOSTNAME_PATTERN = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$/;

/** DNS's own ceiling. A longer string is not a hostname anyone can visit. */
const HOSTNAME_MAX = 253;

/**
 * Prove a typed value is usable as this source's ref, or say why not in her words.
 *
 * The failure is a MESSAGE rather than a reason code because both callers — the picker
 * on obizee.com and the chip on the gate — want the sentence, and Instagram's three
 * reasons already have their sentences in `HANDLE_ERROR_COPY`.
 */
export function parseSourceRef(
  source: ImportSourceId,
  raw: string | null | undefined,
): SourceRefResult {
  if (source === "linktree") {
    // THE PATH IS THE WHOLE POINT HERE, which is why this cannot reuse the website rule:
    // `normaliseWebsiteRef` keeps the host and drops everything after it, so
    // `linktr.ee/hershop` would arrive at the server as `linktr.ee` — a page that
    // identifies nobody. A link page is identified by its username.
    const cleaned = String(raw ?? "")
      .trim()
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .replace(/[?#].*$/, "")
      .replace(/\/+$/, "");
    if (cleaned.length === 0) return { ok: false, message: LINK_PAGE_ERROR_COPY.empty };
    if (!LINK_PAGE_PATTERN.test(cleaned)) return { ok: false, message: LINK_PAGE_ERROR_COPY.bad_shape };
    return { ok: true, ref: cleaned.toLowerCase() };
  }

  if (source === "website") {
    const address = normaliseWebsiteRef(raw);
    if (address.length === 0) return { ok: false, message: WEBSITE_ERROR_COPY.empty };
    if (address.length > HOSTNAME_MAX) return { ok: false, message: WEBSITE_ERROR_COPY.too_long };
    if (!HOSTNAME_PATTERN.test(address)) return { ok: false, message: WEBSITE_ERROR_COPY.bad_shape };
    return { ok: true, ref: address };
  }

  const parsed = parseHandle(raw);
  if (parsed.ok === false) return { ok: false, message: HANDLE_ERROR_COPY[parsed.reason] };
  return { ok: true, ref: parsed.handle };
}

/**
 * A link page, as `linktr.ee/username` — the hosts the server's resolver knows.
 *
 * Mirrored from `LINK_PAGE_HOSTS` in `OM-backend/import/adapters/linktree/resolve.js`.
 * A host missing here is simply refused on the gate rather than resolved, which is a
 * visible no rather than a silent one.
 */
const LINK_PAGE_PATTERN =
  /^(linktr\.ee|link\.tree|bio\.link|linkin\.bio|beacons\.ai|taplink\.cc)\/[A-Za-z0-9._-]{1,60}$/i;

/** Word budget ≤ 12 (design-in-context D4). */
export const LINK_PAGE_ERROR_COPY = {
  empty: "Paste your link page address.",
  bad_shape: "That does not look like a link page — try linktr.ee/yourname.",
} as const;

/** Word budget ≤ 12 (design-in-context D4), same as `HANDLE_ERROR_COPY`. */
export const WEBSITE_ERROR_COPY = {
  empty: "Type your shop's web address.",
  too_long: "That address is too long to be a website.",
  bad_shape: "That does not look like a website address.",
} as const;

/**
 * The words the gate says about a source, in one row per source.
 *
 * `prefix` is rendered as decoration BESIDE the value, never stored in it: `@` belongs
 * to how Instagram writes a handle, not to the handle, and the server would reject it.
 */
export const SOURCE_UI: Record<
  ImportSourceId,
  {
    /** How she named it in the picker. */
    label: string;
    /** Decoration shown before the value. Empty for sources that have none. */
    prefix: string;
    /** The chip when she arrived with no ref at all. */
    chipEmpty: string;
    /** Accessible name for the chip's edit affordance, with the ref filled in. */
    chipLabel: (display: string) => string;
    /** The `<label>` on the chip's input while editing. */
    editLabel: string;
    /** Placeholder inside that input. */
    editPlaceholder: string;
    /** `maxLength` on that input — the source's own ceiling, not a guess. */
    maxLength: number;
  }
> = {
  instagram: {
    label: "Instagram",
    prefix: "@",
    chipEmpty: "Add your Instagram handle",
    chipLabel: (display) => `Your Instagram handle, ${display}. Edit it.`,
    editLabel: "Your Instagram handle",
    editPlaceholder: "yourshop",
    maxLength: 30,
  },
  website: {
    label: "My website",
    prefix: "",
    chipEmpty: "Add your web address",
    chipLabel: (display) => `Your web address, ${display}. Edit it.`,
    editLabel: "Your web address",
    editPlaceholder: "yourshop.com",
    maxLength: HOSTNAME_MAX,
  },
  linktree: {
    label: "Link page",
    prefix: "",
    chipEmpty: "Add your link page",
    chipLabel: (display) => `Your link page, ${display}. Edit it.`,
    editLabel: "Your link page",
    editPlaceholder: "linktr.ee/yourname",
    maxLength: 80,
  },
};

/** The ref as she reads it — `@izeljewels`, `phuljhadi.com`. */
export function formatRef(source: ImportSourceId, ref: string): string {
  return `${SOURCE_UI[source].prefix}${ref}`;
}
