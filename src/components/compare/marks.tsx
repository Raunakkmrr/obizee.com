"use client";
import React from "react";
import { Check, X, Minus } from "lucide-react";

/**
 * Shared marks for the comparison pages (/compare/obizee-vs-*-2).
 *
 * ONE OWNER: this file is the only place these two pieces are defined. Every
 * comparison page imports them rather than re-declaring, so a change to how the
 * ₹50,000 goal is drawn — or to what a "partial" tick looks like — lands on all
 * of them at once instead of drifting page by page.
 */

export type CellState = "yes" | "partial" | "no";
export type Cell = { s: CellState; t: string };
export type ComparisonGroup = {
  group: string;
  rows: { feature: string; obizee: Cell; rival: Cell }[];
};

/**
 * The ₹50,000 goal mark — a hand-drawn circle round the number, with the
 * milestone read out beneath it. Used anywhere the goal is stated, so
 * "nothing to pay until here" reads in one glance.
 *
 * The drawing is a real PNG (R18), not a CSS shape: the strokes overlap and
 * overshoot the way a pen does, which no border-radius will ever fake. Because
 * the number lives inside the image, the same figure is repeated as
 * screen-reader-only text so crawlers and assistants still read ₹50,000 here.
 *
 * Says nothing about HOW the threshold is funded internally. The published
 * claim is only the outcome.
 */
export const GoalMark = ({ tone = "light" }: { tone?: "light" | "dark" }) => {
  const ink = tone === "dark" ? "text-white" : "text-gray-900";
  const note = tone === "dark" ? "text-gray-400" : "text-gray-500";
  return (
    <div className="flex flex-col items-center">
      <img
        src={tone === "dark" ? "/sketches/goal-sketch-dark.png" : "/sketches/goal-sketch-light.png"}
        alt="Hand-drawn note: ₹50,000 — first goal completed for free"
        width={963}
        height={511}
        className="w-[290px] select-none sm:w-[390px]"
      />
      <span className="sr-only">
        ₹50,000 in orders — the first goal, completed for free. Nothing is charged before it.
      </span>
      <p className={`mt-1 text-[12.5px] ${note}`}>
        Nothing charged before it. <span className={ink}>Not a rupee.</span>
      </p>
    </div>
  );
};

/**
 * One cell of the feature comparison. Never a bare tick — the tick is the
 * glance and the sentence beside it is the reason, on both sides of the table.
 */
export const Mark = ({ cell }: { cell: Cell }) => {
  const chip =
    cell.s === "yes"
      ? { bg: "bg-orange-600", icon: <Check className="h-3 w-3 text-white" strokeWidth={3} />, label: "Included" }
      : cell.s === "partial"
      ? { bg: "bg-amber-200", icon: <Minus className="h-3 w-3 text-amber-800" strokeWidth={3} />, label: "Partly" }
      : { bg: "bg-gray-200", icon: <X className="h-3 w-3 text-gray-500" strokeWidth={3} />, label: "Not included" };
  return (
    <span className="flex items-start gap-2">
      <span className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${chip.bg}`}>
        {chip.icon}
        <span className="sr-only">{chip.label}</span>
      </span>
      <span className="text-[12.5px] leading-snug text-gray-700">{cell.t}</span>
    </span>
  );
};
