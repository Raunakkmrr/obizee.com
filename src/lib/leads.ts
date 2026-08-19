/**
 * Sends qualifying-form enquiries to OM-backend so they appear in the admin
 * portal's Website Leads tab.
 *
 * The base URL is committed as a fallback for the same reason as the analytics
 * IDs: it is a public endpoint, not a credential, and hosting-console access
 * isn't always available. NEXT_PUBLIC_OBIZEE_API_URL overrides it.
 */
const API_BASE =
  process.env.NEXT_PUBLIC_OBIZEE_API_URL || "https://prod.obizee.com";

export interface LeadPayload {
  category: string;
  monthlyOrders?: string;
  sellingChannel?: string;
  name?: string;
  phone?: string;
  /** True only when the visitor was handed off to WhatsApp. */
  whatsappOpened?: boolean;
  /** Honeypot. Must stay empty — only bots fill a hidden field. */
  companyWebsite?: string;
}

/** Reads campaign attribution off the current URL, when present. */
function readUtm() {
  if (typeof window === "undefined") return undefined;
  const q = new URLSearchParams(window.location.search);
  const source = q.get("utm_source") ?? undefined;
  const medium = q.get("utm_medium") ?? undefined;
  const campaign = q.get("utm_campaign") ?? undefined;
  if (!source && !medium && !campaign) return undefined;
  return { source, medium, campaign };
}

function buildBody(payload: LeadPayload) {
  return JSON.stringify({
    ...payload,
    sourcePage: window.location.pathname,
    utm: readUtm(),
  });
}

/**
 * Awaited submit. Used where the visitor handed over contact details and is
 * waiting to be told it worked — they need a real success or failure, because
 * nothing else confirms the enquiry reached us.
 *
 * Resolves true on success. Never throws; the caller renders the failure state.
 */
export async function postLead(payload: LeadPayload): Promise<boolean> {
  if (typeof window === "undefined") return false;
  try {
    const res = await fetch(`${API_BASE}/website/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Fire-and-forget submit, for the WhatsApp hand-off path.
 *
 * Deliberately never awaited and never throws. WhatsApp is the conversion there,
 * and a slow or failed API call must not delay it or surface an error to someone
 * who has already done their part: a lead missing from the dashboard is
 * recoverable because the message still arrives, a blocked hand-off is not.
 *
 * `keepalive` lets the request outlive the page if the browser navigates away
 * rather than opening WhatsApp in a new tab.
 */
export function submitLead(payload: LeadPayload): void {
  if (typeof window === "undefined") return;
  try {
    void fetch(`${API_BASE}/website/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: buildBody(payload),
      keepalive: true,
    }).catch(() => {
      // Swallowed on purpose — see the note above.
    });
  } catch {
    // Same.
  }
}

/** Accepts Indian mobile numbers: 10 digits starting 6-9, with optional +91/0. */
export function isValidIndianPhone(raw: string): boolean {
  const digits = raw.replace(/\D/g, "");
  const local = digits.replace(/^91/, "").replace(/^0/, "");
  return /^[6-9]\d{9}$/.test(local);
}
