import {whatsappLink} from '@/lib/contact';

/**
 * End-of-article conversion block.
 *
 * Measured 2026-10-12: across the whole content library a reader's strongest
 * available action was /contact — no signup, WhatsApp or app link existed on
 * any of the 348 article pages, while ChatGPT and Google AI referrals were
 * already landing on them. This block is the bridge from reading to the
 * site's real funnel, which is WhatsApp-first (see src/lib/contact.ts).
 *
 * The WhatsApp draft carries the article title so the conversation opens with
 * context — the same no-analytics attribution trick the homepage CTAs use.
 * Clicks are tracked by ContentEvents through the data-content-cta attribute,
 * keeping this a server component.
 */
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.obizeee';

export default function ArticleCTA({title}: {title: string}) {
  const message = `Hi oBizee, I was reading "${title}" on your site. I want to set this up for my own shop.`;
  return (
    <aside className="ed-cta" aria-label="Set this up with oBizee">
      <p className="ed-eyebrow">PUT IT TO WORK</p>
      <h2>Run this workflow in oBizee</h2>
      <p>
        oBizee is the order-management app for sellers who run their business on
        Instagram and WhatsApp — orders, catalogue, stock and delivery
        follow-ups in one place. Starting is free, and a real person answers.
      </p>
      <div className="ed-cta-actions">
        <a
          data-content-cta="whatsapp"
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <a
          data-content-cta="playstore"
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the Android app ↗
        </a>
      </div>
    </aside>
  );
}
