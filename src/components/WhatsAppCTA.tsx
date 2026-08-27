"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppCTAProps {
  /** Pre-filled opening message. Falls back to the generic opener. */
  message?: string;
  /** Where on the site this CTA sits — recorded as an analytics event. */
  source: string;
  label?: string;
  variant?: "solid" | "outline" | "light";
  /** Leading icon. Defaults to the chat bubble; pass null to suppress it. */
  icon?: React.ReactNode;
  /** Rendered after the label — the hero uses an arrow, where the button reads
   *  as a next step rather than as a chat. */
  trailingIcon?: React.ReactNode;
  className?: string;
}

const variantClasses: Record<NonNullable<WhatsAppCTAProps["variant"]>, string> = {
  solid:
    "bg-[#25D366] hover:bg-[#1ea952] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30",
  outline:
    "bg-transparent border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366] hover:text-white",
  light:
    "bg-white text-[#128C7E] hover:bg-green-50 shadow-xl hover:shadow-2xl",
};

/**
 * Primary lead-capture control.
 *
 * The site previously had no way to receive a lead at all — every CTA opened an
 * app-store modal, so desktop visitors had no path forward and no contact detail
 * was ever captured. WhatsApp is the lowest-friction channel for Indian SMB
 * buyers and needs no backend, so it carries the funnel until the form endpoint
 * lands.
 */
const WhatsAppCTA = ({
  message,
  source,
  label = "Chat on WhatsApp",
  variant = "solid",
  icon,
  trailingIcon,
  className = "",
}: WhatsAppCTAProps) => {
  const href = whatsappLink(message ?? WHATSAPP_DEFAULT_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { source })}
      aria-label={`${label} — opens WhatsApp in a new tab`}
      className="inline-block w-full sm:w-auto"
    >
      <Button
        size="lg"
        className={`w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg font-semibold rounded-2xl transition-all duration-300 ${variantClasses[variant]} ${className}`}
      >
        {icon === undefined ? <MessageCircle className="mr-3 h-5 w-5" aria-hidden="true" /> : icon}
        {label}
        {trailingIcon}
      </Button>
    </a>
  );
};

export default WhatsAppCTA;
