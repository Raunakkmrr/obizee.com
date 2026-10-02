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
import { MessageCircle, Phone, Check } from "lucide-react";
import {
  whatsappLink,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/contact";
import { NON_REPORTING_HOSTS, trackEvent } from "@/lib/analytics";
import { BUSINESS_NEEDS, fitReady, fitMessage, fitEvent } from "@/lib/buyerFit";
import { submitLead } from "@/lib/leads";
import {
  LEAD_CATEGORIES as CATEGORIES,
  LEAD_VOLUMES as VOLUMES,
  LEAD_CHANNELS as CHANNELS,
} from "@/lib/leadOptions";

/**
 * Qualifying lead form — category, volume and need; no required typing.
 *
 * Design constraint from the owner: the visitor must not have to type unless they
 * want to. So every question is a tap (one dropdown for the long list, chips for
 * the short ones) and the only text input is an optional name.
 *
 * The existing lead POST stays unchanged. Additional priority is shown in the
 * WhatsApp draft, not added to an unsupported backend field. A handoff is not
 * proof of a sent message, signup or paid customer.
 */

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
                ? "border-orange-700 bg-orange-700 text-white shadow-md shadow-orange-500/25"
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
  const [need, setNeed] = useState<string | null>(null);
  const [name, setName] = useState("");
  /**
   * Honeypot. Positioned off-screen and hidden from assistive tech, so a real
   * visitor can neither see nor tab into it — anything here means a bot, and the
   * backend silently discards the submission.
   */
  const [honeypot, setHoneypot] = useState("");

  const ready = fitReady({category, volume, channel, need});

  const message = useMemo(() => {
    return fitMessage({name, category, volume, channel, need});
  }, [name, category, volume, channel, need]);

  return (
    <div className="max-w-xl mx-auto text-left">
      <div className="rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-500/5 overflow-hidden">
        <div className="bg-gradient-to-br from-orange-50 to-white px-6 sm:px-8 py-6 border-b border-orange-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Start with the work you want to simplify
          </h2>
          <p className="text-sm text-gray-600 mt-1.5">
            Choose your category, order volume and main priority. No typing required.
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
            legend="How many orders do you receive a month?"
            options={VOLUMES}
            value={volume}
            onChange={setVolume}
          />

          <ChipGroup
            legend="What would you like to organise first?"
            options={BUSINESS_NEEDS}
            value={need}
            onChange={setNeed}
          />

          {(volume === 'Just starting out' || need === 'Preparing to start selling') && <div className="rounded-xl bg-orange-50 p-4 text-sm text-gray-700" role="status">
            Preparing your business? You can still talk to us. Our <a className="font-semibold text-orange-700 underline" href="/guides/selling-online/">practical selling guides</a> help you shape an offer while you explore your management workflow.
          </div>}

          <ChipGroup
            legend="Where do you sell today? — optional"
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
                Your WhatsApp draft — you choose when to send
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
            tabIndex={ready ? 0 : -1}
            onClick={(event) => {
              if (!ready) {
                event.preventDefault();
                return;
              }
              if (!NON_REPORTING_HOSTS.includes(window.location.hostname)) {
                trackEvent("business_fit_handoff", fitEvent({category, volume, channel, need}));
                trackEvent("lead_form_submit", {
                category: category ?? "",
                volume: volume ?? "",
                channel: channel ?? "",
                named: Boolean(name.trim()),
              });
              }
              // Not awaited: the WhatsApp hand-off must not wait on our API.
              submitLead({
                category: category as string,
                monthlyOrders: volume ?? undefined,
                sellingChannel: channel ?? undefined,
                name: name.trim() || undefined,
                companyWebsite: honeypot,
                whatsappOpened: true,
              });
            }}
            className={`flex items-center justify-center w-full min-h-[56px] px-4 rounded-2xl text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 ${ready ? "bg-[#16794c] hover:bg-[#11633e] text-white" : "pointer-events-none bg-gray-200 text-gray-600"}`}
          >
              <MessageCircle className="mr-3 h-5 w-5" aria-hidden="true" />
              {ready ? "Discuss my workflow on WhatsApp" : "Choose category, volume and priority"}
          </a>
          <p className="text-xs leading-relaxed text-gray-600">Opening WhatsApp prepares your draft; it does not send the message. The category, order volume, sales channel and optional name are also sent to oBizee as an enquiry when you continue. Your priority is included in the WhatsApp draft.</p>

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
