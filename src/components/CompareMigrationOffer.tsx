"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Link2, PackageCheck, Eye, Rocket } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { migrationSteps, migrationKeeps } from "@/data/migrationOffer";

const stepIcons = [Link2, PackageCheck, Eye, Rocket];

interface CompareMigrationOfferProps {
  /** The competitor being switched from, e.g. "DM2Buy", "Shopify". */
  competitorName: string;
}

/**
 * Compact migration offer, embedded on compare pages per R10/R5 — the same
 * mechanic as the full /move-my-store page (shared step/keep data so the two
 * can't drift), condensed to fit inline instead of sending the reader away.
 */
const CompareMigrationOffer = ({ competitorName }: CompareMigrationOfferProps) => {
  return (
    <section className="py-10 sm:py-14 bg-gray-900" aria-labelledby="migration-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-400">
            Already selling on {competitorName}
          </p>
          <h2 id="migration-heading" className="text-2xl sm:text-3xl font-bold text-white mb-3">
            We move your store across. You do not re-upload anything.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Send your {competitorName} store link on WhatsApp. We move the products, images,
            prices and categories ourselves, and your existing store keeps running until
            you are happy with the new one. There is no charge for the move.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {migrationSteps.map(({ title, body }, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={title} className="rounded-2xl border-t-2 border-orange-500 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/20">
                    <Icon className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-gray-500">0{i + 1}</span>
                </div>
                <h3 className="mb-1.5 font-bold text-white text-sm">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{body}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-white/5 p-6 mb-8">
          <p className="mb-4 text-sm font-bold text-white">What you keep when you switch:</p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {migrationKeeps.map((k) => (
              <li key={k} className="flex items-start gap-2.5 text-sm text-gray-300">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                {k}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppCTA
            source={`compare_${competitorName.toLowerCase()}_migration`}
            label={`Move my ${competitorName} store`}
            trailingIcon={<ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
            icon={null}
            className="!rounded-xl !px-6 !py-3"
            message={`Hi oBizee, I'd like to move my store from ${competitorName}. Here is my store link: `}
          />
          <Link
            href="/move-my-store"
            className="text-sm font-semibold text-gray-300 hover:text-white underline underline-offset-4"
          >
            See the full migration walkthrough →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompareMigrationOffer;
