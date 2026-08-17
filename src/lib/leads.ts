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

/**
 * Fire-and-forget submit.
 *
 * Deliberately never awaited by the caller and never throws. The WhatsApp
 * hand-off is the primary conversion path, and a slow or failed API call must
 * not delay it or surface an error to someone who has already done their part.
 * A lead lost from the dashboard is recoverable — the WhatsApp message still
 * arrives. A blocked hand-off is not.
 *
 * `keepalive` lets the request outlive the page if the browser navigates away
 * rather than opening WhatsApp in a new tab.
 */
export function submitLead(payload: LeadPayload): void {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    ...payload,
    sourcePage: window.location.pathname,
    utm: readUtm(),
    whatsappOpened: true,
  });

  try {
    void fetch(`${API_BASE}/website/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // Swallowed on purpose — see the note above.
    });
  } catch {
    // Same.
  }
}
