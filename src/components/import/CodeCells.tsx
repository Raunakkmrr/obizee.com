"use client";

import { useEffect } from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

/**
 * O3 — the six cells. `CodeField` in design-brief.md 4.6.
 *
 * PROVENANCE — the primitives are IMPORTED:
 *   `npx shadcn@latest add input-otp`  (engine: npm `input-otp` 1.5.0, MIT)
 * This file is the WRAPPER the brief's component table names, and it is DERIVED from
 * shadcn's own published `input-otp` demo composition
 * (https://ui.shadcn.com/docs/components/input-otp — `<InputOTP maxLength={6}>` around
 * one `<InputOTPGroup>` of six `<InputOTPSlot>`s).
 *
 * DIFF from that demo, and why each one exists:
 *   - the demo's two groups either side of an `<InputOTPSeparator>` become ONE group.
 *     A separator would say the code has two halves; `ImportAuthController.generateCode`
 *     returns one `randomInt(100000, 1000000)`, which does not.
 *   - four TONES are added (rest / danger / warning / success), because this flow has
 *     four distinct code outcomes and the demo ships one neutral state. That is exactly
 *     the property design-brief.md 3.3 chose the OTP component for.
 *   - a `<fieldset>` + `<legend>` wraps it, from the already-imported
 *     `components/ui/field.tsx` — section 8.3 semantics, and UI-007's AC-7.
 *
 * THE WIDTH ARITHMETIC, RE-MEASURED IN THE BROWSER (R2), because the ticket's is wrong.
 * UI-007 computes the row as `6x48 + 5x8 = 328px` inside `390 - 2x20 = 350px`. There is
 * no viewport at which the row has 350px: at 390 it sits inside `main`'s `px-4` (16 a
 * side), `ImportSlab`'s `px-6` (24 a side) AND this card's `p-5` (20 a side), leaving
 * `390 - 32 - 48 - 40 = 270px`. A fixed 48px cell overflows that by 58px. The slab's
 * padding is the seam (design-brief.md 2.6 S2) and may not be shaved to make an
 * arithmetic error true.
 *
 * So the cells are FLUID — `flex-1` inside a `max-w-[328px]` row. Measured on the
 * production build, 2026-09-05:
 *   1440 -> 48.00 x 56  (the ticket's number, wherever the room exists: >=368px inner)
 *    390 -> 38.00 x 56
 *    360 -> 33.00 x 56
 * Height is the specified 56 at every width, and the TAP TARGET is the field rather
 * than the cell: `input-otp` overlays ONE transparent `<input>` across the whole row,
 * so the target is 270x56 at 390 and 238x56 at 360 — both far past 44x44 (WCAG 2.5.5).
 */

export type CellTone = "rest" | "danger" | "warning" | "success";

const TONE_CLASSES: Record<CellTone, string> = {
  rest: "",
  // WRONG CODE. The border changes and the ground tints — and her digits stay in the
  // cells. Never colour alone: the sentence beneath carries the meaning (section 8.3).
  //
  // THE ACTIVE CELL HAS TO STAY FINDABLE, and this is a defect caught by looking at the
  // render rather than at the code (R1). Painting all six danger-bordered erases the
  // one signal that says WHICH cell the caret is in — and `input-otp` draws its fake
  // caret only in an EMPTY slot, so after a wrong code there is no caret either. Cell 1
  // therefore keeps the card's own white ground while its five neighbours are tinted,
  // and takes the inset outline in the danger hue: "her digits are all still here, and
  // this is the one to change" said in geometry rather than in a sentence. AC-1's focus
  // is then VISIBLE, not merely true in the DOM.
  danger: cn(
    "border-[color:var(--color-danger)] bg-[color:var(--color-danger-bg)]",
    "data-[active=true]:border-[color:var(--color-danger)] data-[active=true]:outline-[color:var(--color-danger)]",
    "data-[active=true]:bg-[color:var(--code-cell-ground)]",
  ),
  // EXPIRED / ALREADY USED / TOO MANY TRIES. A different ground from `danger` on
  // purpose: she did nothing wrong, the code simply stopped working, and painting that
  // the same red as a wrong code teaches her that both mean the same thing.
  warning:
    "border-[color:var(--color-warning-border)] bg-[color:var(--color-warning-bg)] text-[color:var(--color-warning)]",
  success:
    "border-[color:var(--color-success-border)] bg-[color:var(--color-success-bg)] text-[color:var(--color-success)]",
};

export const CODE_LENGTH = 6;

export default function CodeCells({
  value,
  onChange,
  tone,
  disabled,
  shake,
  describedBy,
  inputRef,
}: {
  value: string;
  onChange: (next: string) => void;
  tone: CellTone;
  disabled: boolean;
  /** M9 — one 6px flinch on a wrong code. Keyed by attempt so it re-fires. */
  shake: number;
  describedBy: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  // AUTOFOCUS CELL 1 ON MOUNT (ticket: "autofocus cell 1"). Done here rather than with
  // the `autoFocus` attribute because `input-otp` renders a transparent input the
  // browser will happily focus without scrolling the visible row into view on a phone.
  useEffect(() => {
    if (disabled) return;
    inputRef.current?.focus();
  }, [disabled, inputRef]);

  return (
    <div
      // A CSS animation only plays once per element, so a second wrong code on the same
      // node would not flinch. Keying the wrapper by the attempt number remounts it,
      // which re-arms the keyframes. `shake` is CodeStep's wrong-attempt counter.
      key={`shake-${shake}`}
      className={cn("w-full max-w-[328px]", shake > 0 && "animate-code-shake")}
    >
      <InputOTP
        ref={inputRef}
        maxLength={CODE_LENGTH}
        value={value}
        onChange={onChange}
        disabled={disabled}
        // Both are what make the phone offer the code from the mail app in the
        // keyboard's suggestion bar — the shortest path there is from her inbox.
        inputMode="numeric"
        autoComplete="one-time-code"
        // `input-otp` accepts a regex-ish pattern string; digits only, so a pasted
        // "Your code is 123456" contributes nothing rather than filling cells with text.
        pattern="^\d*$"
        aria-describedby={describedBy}
        aria-invalid={tone === "danger" || tone === "warning" ? true : undefined}
        containerClassName="w-full"
      >
        <InputOTPGroup className="flex w-full gap-2">
          {Array.from({ length: CODE_LENGTH }, (_, index) => (
            <InputOTPSlot key={index} index={index} className={TONE_CLASSES[tone]} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
