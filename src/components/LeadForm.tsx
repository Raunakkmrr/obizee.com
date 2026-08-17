"use client";

import React, { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Check } from "lucide-react";
import {
  whatsappLink,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import { submitLead } from "@/lib/leads";

/**
 * Qualifying lead form — three taps, no required typing.
 *
 * Design constraint from the owner: the visitor must not have to type unless they
 * want to. So every question is a tap (one dropdown for the long list, chips for
 * the short ones) and the only text input is an optional name.
 *
 * Transport is WhatsApp rather than a POST. That is deliberate for now: the site
 * has no API routes, and WhatsApp supplies the visitor's phone number and name
 * automatically — which is the contact detail a form would have had to ask them
 * to type. When the OM-backend lead endpoint lands, this component gains a POST
 * alongside the WhatsApp hand-off; the question set does not change.
 */

const CATEGORIES = [
  "Crochet & handmade",
  "Jewellery & accessories",
  "Clothing & fashion",
  "Food, snacks & bakery",
  "Beauty & skincare",
  "Home decor & gifting",
  "Art & prints",
  "Something else",
] as const;

const VOLUMES = [
  "Just starting out",
  "Under 25",
  "25 – 100",
  "100 – 500",
  "500+",
] as const;

const CHANNELS = [
  "Instagram",
  "WhatsApp",
  "Both",
  "Offline shop",
  "Own website",
] as const;

interface ChipGroupProps {
  legend: string;
  options: readonly string[];
  value: string | null;
  onChange: (value: string) => void;
}

/**
 * Chips rather than a second dropdown for the short option sets: one tap instead
 * of the open-scan-tap a native select costs, and every choice stays visible so
 * the visitor can see how little is being asked of them.
 */
const ChipGroup = ({ legend, options, value, onChange }: ChipGroupProps) => (
  <fieldset>
    <legend className="block text-sm font-semibold text-gray-900 mb-3">{legend}</legend>
    <div className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={selected}
            className={`min-h-[44px] px-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${
              selected
                ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/25"
                : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50"
            }`}
          >
            {selected && <Check className="inline-block w-4 h-4 mr-1.5 -mt-0.5" aria-hidden="true" />}
            {option}
          </button>
        );
      })}
    </div>
  </fieldset>
);

const LeadForm = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [volume, setVolume] = useState<string | null>(null);
  const [channel, setChannel] = useState<string | null>(null);
  const [name, setName] = useState("");
  /**
   * Honeypot. Positioned off-screen and hidden from assistive tech, so a real
   * visitor can neither see nor tab into it — anything here means a bot, and the
   * backend silently discards the submission.
   */
  const [honeypot, setHoneypot] = useState("");

  /** Only the category is required — the rest sharpens the conversation, not gates it. */
  const ready = Boolean(category);

  const message = useMemo(() => {
    const lines = ["Hi oBizee, I'd like to set up my online store."];
    if (name.trim()) lines.push(`I'm ${name.trim()}.`);
    if (category) lines.push(`I sell: ${category}`);
    if (volume) lines.push(`Orders a month: ${volume}`);
    if (channel) lines.push(`I sell on: ${channel}`);
    return lines.join("\n");
  }, [name, category, volume, channel]);

  return (
    <div className="max-w-xl mx-auto text-left">
      <div className="rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-500/5 overflow-hidden">
        <div className="bg-gradient-to-br from-orange-50 to-white px-6 sm:px-8 py-6 border-b border-orange-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Tell us what you sell
          </h2>
          <p className="text-sm text-gray-600 mt-1.5">
            Three taps. No typing needed — we&apos;ll pick it up on WhatsApp.
          </p>
        </div>

        <div className="px-6 sm:px-8 py-7 space-y-7">
          <div>
            <label
              htmlFor="lead-category"
              className="block text-sm font-semibold text-gray-900 mb-3"
            >
              What do you sell?
            </label>
            <Select value={category ?? undefined} onValueChange={setCategory}>
              <SelectTrigger
                id="lead-category"
                className="min-h-[52px] rounded-xl border-2 border-gray-200 text-base data-[placeholder]:text-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-400"
              >
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {CATEGORIES.map((option) => (
                  <SelectItem key={option} value={option} className="py-3 text-base">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <ChipGroup
            legend="How many orders a month?"
            options={VOLUMES}
            value={volume}
            onChange={setVolume}
          />

          <ChipGroup
            legend="Where do you sell today?"
            options={CHANNELS}
            value={channel}
            onChange={setChannel}
          />

          <div>
            <label htmlFor="lead-name" className="block text-sm font-semibold text-gray-900 mb-3">
              Your name{" "}
              <span className="font-normal text-gray-400">— optional</span>
            </label>
            <Input
              id="lead-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Only if you'd like us to use it"
              autoComplete="name"
              className="min-h-[52px] rounded-xl border-2 border-gray-200 text-base focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:border-orange-400"
            />
          </div>

          <input
            type="text"
            name="companyWebsite"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          {/* Live preview removes the blank-box hesitation that kills WhatsApp CTAs:
              the visitor sees exactly what they are about to send. */}
          {ready && (
            <div className="rounded-2xl bg-[#E7FFDB] border border-[#25D366]/30 px-4 py-3.5">
              <p className="text-xs font-semibold text-[#0f7a54] uppercase tracking-wider mb-2">
                We&apos;ll send this for you
              </p>
              <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">
                {message}
              </p>
            </div>
          )}
        </div>

        <div className="px-6 sm:px-8 pb-7 space-y-3">
          <a
            href={ready ? whatsappLink(message) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            onClick={(event) => {
              if (!ready) {
                event.preventDefault();
                return;
              }
              trackEvent("lead_form_submit", {
                category: category ?? "",
                volume: volume ?? "",
                channel: channel ?? "",
                named: Boolean(name.trim()),
              });
              // Not awaited: the WhatsApp hand-off must not wait on our API.
              submitLead({
                category: category as string,
                monthlyOrders: volume ?? undefined,
                sellingChannel: channel ?? undefined,
                name: name.trim() || undefined,
                companyWebsite: honeypot,
              });
            }}
            className={`block ${ready ? "" : "pointer-events-none"}`}
          >
            <Button
              size="lg"
              disabled={!ready}
              className="w-full min-h-[56px] rounded-2xl text-lg font-semibold bg-[#25D366] hover:bg-[#1ea952] text-white shadow-lg shadow-[#25D366]/25 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none transition-all duration-300"
            >
              <MessageCircle className="mr-3 h-5 w-5" aria-hidden="true" />
              {ready ? "Continue on WhatsApp" : "Choose what you sell"}
            </Button>
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            onClick={() => trackEvent("lead_form_call", { source: "lead_form" })}
            className="flex items-center justify-center gap-2 min-h-[44px] text-gray-600 hover:text-orange-600 font-medium transition-colors duration-200"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Or call us on {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
