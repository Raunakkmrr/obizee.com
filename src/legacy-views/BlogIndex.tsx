import {EditorialHeader} from '@/components/seo-drafts/ArticlePage';
import '@/components/seo-drafts/editorial.css';
import editorialDrafts from '@/content/seo-drafts/summaries.json';
import finalEditorialDrafts from '@/content/seo-drafts/acquisition-final-summaries.json';
import ReaderQuestions from '@/components/seo-drafts/ReaderQuestions';
import hubs from '@/content/seo-drafts/hubs.json';

const existingBlogPosts = [
  {
    slug: "how-to-create-online-store-5-minutes",
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    date: "April 23, 2026",
    readTime: "5 min read",
    category: "Getting Started",
  },
  {
    slug: "why-obizee-is-free-until-50000",
    title: "Why oBizee Charges Nothing Until ₹50,000 — And Only 1% After That",
    description: "Understanding oBizee's pricing model: nothing at all until ₹50,000 in orders, then 1% per order capped at ₹10. How it compares to Shopify, Dukaan, and why it's the cheapest option in India.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Pricing",
  },
  {
    slug: "obizee-customer-success-stories",
    title: "oBizee Customer Success Stories: Real Merchants, Real Growth",
    description: "How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee's platform. Real stories from real merchants.",
    date: "April 23, 2026",
    readTime: "7 min read",
    category: "Success Stories",
  },
  {
    slug: "cheapest-ecommerce-platforms-india-2026",
    title: "10 Cheapest Ecommerce Platforms in India [2026 Comparison]",
    description: "Ranked list of the most affordable ecommerce platforms for Indian sellers. Compare pricing, features, and shipping across oBizee, Dukaan, Shopify, and more.",
    date: "April 23, 2026",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "shopify-india-pricing-review",
    title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
    description: "A detailed breakdown of Shopify's real costs for Indian sellers — subscription, transaction fees, app costs, and cheaper alternatives.",
    date: "April 23, 2026",
    readTime: "7 min read",
    category: "Comparison",
  },
  {
    slug: "dukaan-app-review-2026",
    title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "Honest review of Dukaan for Indian sellers. What it does well, what it lacks, and which alternatives offer more value.",
    date: "April 23, 2026",
    readTime: "7 min read",
    category: "Review",
  },
  {
    slug: "dm2buy-vs-obizee-comparison",
    title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "Detailed comparison of DM2buy and oBizee for Indian Instagram sellers. Features, pricing, shipping, and which is better for your business.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Comparison",
  },
  {
    slug: "online-store-vs-whatsapp-business",
    title: "Online Store vs WhatsApp Business: Which Is Better for Selling?",
    description: "Should you sell through WhatsApp alone or create an online store? A practical guide for Indian sellers weighing their options.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Guide",
  },
  {
    slug: "online-dukaan-kaise-khole",
    title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Step-by-step guide.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Hinglish",
  },
  {
    slug: "bina-paisa-online-business-kaise-shuru-kare",
    title: "Bina Paisa Lagaye Online Business Kaise Shuru Kare [2026]",
    description: "Bina koi paisa lagaye online business shuru karne ka tarika. Bilkul free mein apna online store banayein.",
    date: "April 23, 2026",
    readTime: "5 min read",
    category: "Hinglish",
  },
  {
    slug: "mobile-se-online-store-kaise-banaye",
    title: "Mobile Se Online Store Kaise Banaye — Sirf Phone Se [2026]",
    description: "Sirf apne mobile phone se online store banayein. Koi laptop ya computer ki zaroorat nahi.",
    date: "April 23, 2026",
    readTime: "5 min read",
    category: "Hinglish",
  },
  {
    slug: "sabse-sasta-ecommerce-platform-india",
    title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
    description: "India ka sabse sasta ecommerce platform. oBizee vs Shopify vs Dukaan — pricing comparison.",
    date: "April 23, 2026",
    readTime: "6 min read",
    category: "Hinglish",
  },
  {
    slug: "how-to-start-online-business-india-2026",
    title: "How to Start an Online Business in India: Complete Guide [2026]",
    description: "Everything you need to know about starting an online business in India. Product selection, store setup, shipping, payments, and marketing.",
    date: "April 23, 2026",
    readTime: "10 min read",
    category: "Guide",
  },
  {
    slug: "profitable-online-business-ideas-india-2026",
    title: "50 Profitable Online Business Ideas for India in 2026",
    description: "50 proven online business ideas — handmade products, food, fashion, digital services, and more.",
    date: "April 23, 2026",
    readTime: "12 min read",
    category: "Ideas",
  },
  {
    slug: "ecommerce-shipping-india-delhivery-dtdc-bluedart",
    title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026]",
    description: "Compare Delhivery, DTDC, and BlueDart for ecommerce shipping. Pricing, coverage, speed, and integration guide.",
    date: "April 23, 2026",
    readTime: "8 min read",
    category: "Shipping",
  },
  {
    slug: "gst-for-online-sellers-india",
    title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete GST guide for online sellers. Registration, rates, filing, invoicing, and common mistakes.",
    date: "April 23, 2026",
    readTime: "8 min read",
    category: "Legal",
  },
];

const draftPosts = [...editorialDrafts, ...finalEditorialDrafts].filter(a => a.route.startsWith('/blog/')).map(a => ({
  slug: a.route.split('/')[2], title: a.title, description: a.description,
  date: 'Unpublished draft', readTime: `${a.minutes} min read`, category: a.category,
}));
export const blogPosts = [...draftPosts, ...existingBlogPosts.filter(p => !draftPosts.some(d => d.slug === p.slug))];


export const BLOG_PAGE_SIZE = 24;
export const BLOG_PAGE_COUNT = Math.ceil(blogPosts.length / BLOG_PAGE_SIZE);
export const blogPageHref = (page:number) => page === 1 ? '/blog/' : `/blog/page/${page}/`;
export default function BlogIndex({page=1}:{page?:number}) {
 const start=(page-1)*BLOG_PAGE_SIZE;
 const posts=blogPosts.slice(start,start+BLOG_PAGE_SIZE);
 return <div className="ed-shell"><EditorialHeader/><main id="main">
 <section className="ed-hero"><p className="ed-eyebrow">THE INDEPENDENT SELLER’S READING LIST</p><h1>Guides for selling and growing online</h1><p className="ed-deck">Practical articles on selling, stock, shipping, pricing and store design.</p><p>Showing {start+1}–{start+posts.length} of {blogPosts.length} articles · Page {page} of {BLOG_PAGE_COUNT}</p><a href="/guides/">Browse topic hubs →</a><p><a href="/stories/crochetbypriya/">Merchant feedback: crochetByPriya — Priya Yadav →</a></p></section>
 <section className="ed-library" aria-label="Articles">{page===1&&<ReaderQuestions/>}<nav className="ed-topics" aria-label="Browse articles by topic">{hubs.filter(h=>h.categories.length).map(h=><a href={h.route} key={h.key}>{h.title}</a>)}</nav><div className="ed-cards">{posts.map(post=><a key={post.slug} href={`/blog/${post.slug}/`}><span>{post.category} · {post.readTime}</span><h2>{post.title}</h2><p>{post.description}</p><strong>Read guide →</strong></a>)}</div>
 <nav className="ed-pagination" aria-label="Blog pages">{page>1&&<a href={blogPageHref(page-1)} rel="prev">← Previous</a>}{Array.from({length:BLOG_PAGE_COUNT},(_,i)=>i+1).map(n=><a key={n} href={blogPageHref(n)} aria-label={`Page ${n}`} aria-current={n===page?'page':undefined}>{n}</a>)}{page<BLOG_PAGE_COUNT&&<a href={blogPageHref(page+1)} rel="next">Next →</a>}</nav></section></main>
 <footer className="ed-footer"><strong>oBizee / FIELDNOTES</strong><span>Clearer decisions. Better-prepared stores.</span></footer></div>;
}
