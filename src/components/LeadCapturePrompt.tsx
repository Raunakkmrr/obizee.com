"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Loader2, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LEAD_CATEGORIES } from "@/lib/leadOptions";
import { postLead, isValidIndianPhone } from "@/lib/leads";
import { whatsappLink } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/**
 * Site-wide lead prompt.
 *
 * Exists because the qualifying form only lived on /signup, a page almost nobody
 * clicks through to — the best converting asset on the site sat behind a door
 * that went unopened. This surfaces it to visitors who have shown they are
 * actually reading.
 *
 * Two deliberately different treatments:
 *
 *  - Desktop: a slide-in card in the bottom-right. Non-blocking, the page stays
 *    fully usable behind it.
 *  - Mobile: a slim sticky bar that never covers content, which only expands into
 *    the form when the visitor taps it. Google penalises interstitials that cover
 *    content on mobile for search visitors, and this site is actively investing in
 *    organic traffic. A user-initiated expansion is not an interstitial; an
 *    auto-opening sheet would be.
 */

const STORAGE_KEY = "obizee_lead_prompt";
const SNOOZE_DAYS = 30;
const TIME_TRIGGER_MS = 30_000;
const SCROLL_TRIGGER = 0.5;

/** Paths where the prompt is redundant — the full form is already on screen. */
const SUPPRESSED_PATHS = ["/signup", "/signin"];

type Step = "category" | "contact" | "done";

function isSnoozed(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    if (raw === "submitted") return true;
    const ts = Number(raw);
    if (!Number.isFinite(ts)) return false;
    return Date.now() - ts < SNOOZE_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    // Private browsing or storage disabled — show the prompt rather than
    // suppress it. Worst case is one repeat view.
    return false;
  }
}

function remember(value: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Nothing to do; the prompt simply reappears next visit.
  }
}

export default function LeadCapturePrompt() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState<Step>("category");
  const [category, setCategory] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const firedRef = useRef(false);

  const reveal = useCallback(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    setVisible(true);
    trackEvent("lead_prompt_shown", { path: window.location.pathname });
  }, []);

  useEffect(() => {
    // Pathname is read from window rather than usePathname() on purpose: this
    // component mounts in the root layout, and next/navigation hooks are what
    // de-opted the homepage out of prerendering in the first place. Reading it
    // here keeps every page statically rendered.
    if (SUPPRESSED_PATHS.some((p) => window.location.pathname.startsWith(p))) return;
    if (isSnoozed()) return;

    const timer = window.setTimeout(reveal, TIME_TRIGGER_MS);

    // Scroll depth is the better signal of the two — it means someone is reading,
    // where a timer alone also fires on a tab left open in the background.
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_TRIGGER) reveal();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reveal]);

  const dismiss = () => {
    setVisible(false);
    remember(String(Date.now()));
    trackEvent("lead_prompt_dismissed", { step });
  };

  const chooseCategory = (value: string) => {
    setCategory(value);
    setStep("contact");
    setExpanded(true);
    trackEvent("lead_prompt_category", { category: value });
  };

  const submit = async () => {
    if (!category) return;
    if (!name.trim()) {
      setError("Please add your name");
      return;
    }
    if (!isValidIndianPhone(phone)) {
      setError("Enter a 10-digit mobile number");
      return;
    }
    setError(null);
    setSubmitting(true);

    const ok = await postLead({
      category,
      name: name.trim(),
      phone: phone.trim(),
      companyWebsite: honeypot,
      whatsappOpened: false,
    });

    setSubmitting(false);

    if (!ok) {
      // The visitor handed over their number and is waiting on an answer, so a
      // failure has to be said out loud with a way through — silently dropping it
      // would lose the lead and leave them thinking they had been contacted.
      setError("Could not send that. Please try WhatsApp below.");
      return;
    }

    remember("submitted");
    setStep("done");
    trackEvent("lead_prompt_submitted", { category });
  };

  if (!visible) return null;

  const waHref = whatsappLink(
    `Hi oBizee, I sell ${category ?? "online"} and I'd like to set up my store.`,
  );

  const panel = (
    <div className="rounded-2xl bg-white shadow-2xl shadow-black/10 ring-1 ring-orange-100 overflow-hidden">
      <div className="flex items-start justify-between gap-3 bg-gradient-to-br from-orange-50 to-white px-5 py-4 border-b border-orange-100">
        <div>
          <p className="text-base font-bold text-gray-900">
            {step === "done" ? "Thanks — we'll call you" : "Set up your online store"}
          </p>
          <p className="mt-0.5 text-sm text-gray-600">
            {step === "category" && "What do you sell?"}
            {step === "contact" && "Where can we reach you?"}
            {step === "done" && "We usually reply the same day."}
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="shrink-0 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="px-5 py-4">
        {step === "category" && (
          <div className="flex flex-wrap gap-2">
            {LEAD_CATEGORIES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => chooseCategory(option)}
                className="min-h-[40px] rounded-xl border-2 border-gray-200 bg-white px-3 text-[13px] font-medium text-gray-700 transition-all hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {step === "contact" && (
          <div className="space-y-3">
            <p className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 px-2.5 py-1 text-[12px] font-semibold text-orange-700">
              <Check className="h-3.5 w-3.5" />
              {category}
            </p>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
              className="min-h-[46px] rounded-xl border-2 border-gray-200"
            />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp number"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              className="min-h-[46px] rounded-xl border-2 border-gray-200"
            />
            <input
              type="text"
              name="companyWebsite"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            {error && <p className="text-[13px] font-medium text-red-600">{error}</p>}
            <Button
              onClick={submit}
              disabled={submitting}
              className="min-h-[46px] w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-base font-semibold text-white hover:from-orange-600 hover:to-orange-700"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Request a call back"
              )}
            </Button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("lead_prompt_whatsapp", { category: category ?? "" })}
              className="flex min-h-[40px] items-center justify-center gap-2 text-[13px] font-semibold text-[#128C7E] hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              Or message us on WhatsApp
            </a>
          </div>
        )}

        {step === "done" && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              We have your number and someone will call you about setting up your store.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white hover:bg-[#1ea952]"
            >
              <MessageCircle className="h-4 w-4" />
              Message us now instead
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Collapsed mobile bar. Covers no content, so it is not an interstitial —
          the panel only opens when the visitor taps Start. */}
      {!expanded && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="flex items-center gap-2 border-t border-orange-100 bg-white px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
            <Phone className="h-4 w-4 shrink-0 text-orange-500" />
            <p className="min-w-0 flex-1 truncate text-[13px] font-medium text-gray-700">
              Selling online? Get set up free.
            </p>
            <Button
              onClick={() => {
                setExpanded(true);
                trackEvent("lead_prompt_expanded", { path: window.location.pathname });
              }}
              className="min-h-[36px] shrink-0 rounded-lg bg-orange-500 px-3 text-[13px] font-semibold text-white hover:bg-orange-600"
            >
              Start
            </Button>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss"
              className="shrink-0 rounded-lg p-1.5 text-gray-400"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* The panel is rendered exactly once. Duplicating it per breakpoint would
          put two copies of every input in the DOM, which confuses autofill and
          screen readers even when one copy is hidden. Placement is CSS-only:
          full-width above the mobile bar, a slide-in card on desktop. */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 p-3 md:inset-x-auto md:bottom-5 md:right-5 md:w-[360px] md:p-0 ${
          expanded ? "block" : "hidden md:block"
        }`}
      >
        {panel}
      </div>
    </>
  );
}
