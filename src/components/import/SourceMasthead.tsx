"use client";

import { ImageOff, Package, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCount, type ImportProfileView } from "@/lib/import/job";

/**
 * W0 — THE SOURCE MASTHEAD, and it is this screen's first named wow mechanic.
 *
 * PROVENANCE — IMPORTED. `npx shadcn@latest add avatar` for the ringed logo (its
 * `AvatarImage`/`AvatarFallback` pair is the whole mechanism behind AC-8: Radix swaps to
 * the fallback on a load error, so a 403'd Meta CDN URL becomes a designed tile rather
 * than a browser's broken-image glyph) and `npx shadcn@latest add skeleton` for the
 * pre-profile state. UI-008's ticket names `ravikatiyar162/card-3` (7093) on 21st.dev;
 * `API_KEY_21ST` has no value so that registry 401s — declared, not silently hand-rolled.
 * The card body itself is DERIVED from `components/import/HandleChip.tsx:100-140`
 * (880e1d9), this route's shipped "mark, value, trailing facts" row: same chip ground,
 * same border token, same radius.
 *
 * WHY IT IS THE WOW (V4 mechanic 1). `publicCapturePersistence.appendPage` `$set`s
 * `profile` from the FIRST fetched page, and page one measured ~900ms. So her logo, her
 * name, her follower count and her post count are on this screen about a second in —
 * and they STAY there for the nine minutes that caption extraction takes underneath.
 * She never looks at a blank bar wondering whether we found the right shop. AC-1 is
 * exactly this: the masthead populated while the rail still shows `reading_products`.
 *
 * AND IT IS V2's TENANT IDENTITY. The strongest colour on this screen is not ours — it
 * is hers. Two sellers produce visibly different screenshots of the same route, from her
 * own logo, with no stock imagery anywhere.
 *
 * THE HARDEST CASE (D6, §8.1). A 64-character account name and a 30-character handle
 * both land here. `min-w-0` on the flex child plus `break-words` is what stops the name
 * pushing the follower count off the row; the stats WRAP under the name rather than
 * truncating, because a truncated follower count is a number she cannot check.
 */
export default function SourceMasthead({
  profile,
  handle,
}: {
  profile: ImportProfileView | null;
  /** The handle she typed. Shown while `profile` is still null so the row is never empty. */
  handle: string | null;
}) {
  const username = profile?.username ?? handle ?? null;

  return (
    <div
      data-testid="source-masthead"
      data-populated={profile ? "yes" : "no"}
      className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] p-3 sm:gap-5 sm:p-4"
    >
      {/* I-3 — her profile picture, ringed in the brand accent. 56px at 390, 64 from
          sm (§6.2). The RING is the second place --obz-cta does real work on this
          screen (V2), and it is also what makes her logo read as the subject of the
          screen rather than as a favicon. */}
      <Avatar className="size-14 shrink-0 rounded-full ring-2 ring-[color:var(--obz-cta)] ring-offset-2 ring-offset-[color:var(--slab-chip-ground)] sm:size-16">
        {profile?.profilePictureUrl ? (
          <AvatarImage
            src={profile.profilePictureUrl}
            alt={username ? `@${username} profile picture` : "Instagram profile picture"}
            className="object-cover"
          />
        ) : null}
        {/* AC-8's mechanism at masthead scale: Radix renders this the moment the image
            errors, so an expired signed CDN URL degrades to a designed mark. `delayMs`
            is deliberately absent — a fallback that waits 600ms to appear is a 600ms
            hole where the ring is empty. */}
        <AvatarFallback className="rounded-full">
          <ImageOff aria-hidden className="size-5 text-[color:var(--slab-text-muted)]" />
          <span className="sr-only">Profile picture unavailable</span>
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        {profile ? (
          <>
            {/* `line-clamp-2`, never `truncate`: §8.1's hardest real case is a
                64-character account name, and one that ends in an ellipsis after four
                words is a name she cannot recognise as hers. Two lines, then clamp. */}
            <p className="line-clamp-2 text-[17px] leading-6 font-bold break-words text-white sm:text-[20px]">
              {profile.name ?? (username ? `@${username}` : "Your Instagram")}
            </p>
            {username ? (
              <p className="mt-0.5 text-[13px] break-all text-[color:var(--slab-text-muted)]">@{username}</p>
            ) : null}
            {/* THE FIGURES SIT BELOW THE NAME ON A PHONE AND AT THE FAR RIGHT OF THE ROW
                FROM `md`, which is the masthead layout every real one uses — identity
                left, numbers right. It is also a measured density fix: at 1440 the row
                is 1152px wide and the name and handle use about 500 of it, so keeping
                the figures under the name left ~650px of empty masthead and dragged the
                first viewport's coverage under V5's floor. Every row that OrderCard
                would give an icon gets one (§6.3). */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[color:var(--slab-text-muted)] md:hidden">
              <Figures profile={profile} />
            </div>
          </>
        ) : (
          // AT THE EXACT FINAL HEIGHTS (§2.8). The masthead arrives ~1s in, and a
          // skeleton that is a different height from the row it becomes makes the whole
          // screen jump under her at the exact moment she is reading it.
          <>
            <Skeleton className="h-6 w-40 max-w-full sm:h-7" />
            <Skeleton className="mt-1.5 h-4 w-28 max-w-full" />
            <Skeleton className="mt-2 h-4 w-52 max-w-full" />
            <span className="sr-only">Reading your Instagram profile</span>
          </>
        )}
      </div>

      {/* The same two facts, from `md` up, at the right edge. Rendered ONCE per
          breakpoint (the mobile copy above is `md:hidden`, this one is `hidden md:flex`)
          so a screen reader never hears the follower count twice. */}
      {profile ? (
        <div className="hidden shrink-0 flex-col items-end gap-1 pr-1 text-[14px] text-[color:var(--slab-text-muted)] md:flex">
          <Figures profile={profile} />
        </div>
      ) : null}
    </div>
  );
}

/** One definition of the two figures, so the phone row and the desktop column cannot drift. */
function Figures({ profile }: { profile: ImportProfileView }) {
  return (
    <>
      {typeof profile.followersCount === "number" ? (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <Users aria-hidden className="size-3.5 shrink-0 text-[color:var(--brand-warm-on-dark)]" />
          <span className="font-semibold text-white">{formatCount(profile.followersCount)}</span> followers
        </span>
      ) : null}
      {typeof profile.mediaCount === "number" ? (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <Package aria-hidden className="size-3.5 shrink-0 text-[color:var(--brand-warm-on-dark)]" />
          <span className="font-semibold text-white">{formatCount(profile.mediaCount)}</span> posts
        </span>
      ) : null}
    </>
  );
}
