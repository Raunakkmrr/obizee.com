"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, Lightbulb, Palette, UtensilsCrossed, Shirt, Home, Monitor, Package, Star } from "lucide-react";

const CategoryHeader = ({ icon: Icon, title, count, color }: { icon: React.ElementType; title: string; count: number; color: string }) => (
  <div className={`not-prose mt-8 mb-4 flex items-center gap-3 bg-gradient-to-r ${color} rounded-xl p-4 border border-gray-200`}>
    <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
      <Icon className="w-5 h-5 text-gray-700" />
    </div>
    <div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <span className="text-xs text-gray-500">{count} ideas</span>
    </div>
  </div>
);

const IdeaItem = ({ number, title, desc }: { number: number; title: string; desc: string }) => (
  <div className="not-prose flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
    <span className="w-7 h-7 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
      {number}
    </span>
    <div>
      <span className="text-sm font-semibold text-gray-900">{title}</span>
      <span className="text-sm text-gray-500"> — {desc}</span>
    </div>
  </div>
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Watch Out" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const TopFunnelPost2 = () => {
  return (
    <BlogPostLayout
      title="50 Profitable Online Business Ideas for India in 2026"
      description="50 proven online business ideas for India in 2026. From handmade products to food delivery, dropshipping to digital services. Find the right business for you."
      date="2026-04-24"
      readTime="12 min read"
      author="Raunak Kumar"
      slug="profitable-online-business-ideas-india-2026"
    >
      <p>
        Looking for an online business idea that actually works in India? We have compiled 50 proven ideas across
        7 categories — each one doable from home with minimal investment. Whether you are a college student, a
        homemaker, or someone looking to start a side hustle, there is something here for you.
      </p>
      <p>
        These are not theoretical ideas. Real Indian sellers are building profitable businesses with each of these
        right now, in 2026.
      </p>

      <Callout type="tip">
        You do not need a big investment to start most of these businesses. Many can be launched with ₹5,000-20,000
        and a smartphone. The key is starting small, testing demand, and scaling what works.
      </Callout>

      {/* Handmade & Creative */}
      <CategoryHeader icon={Palette} title="Handmade & Creative Products" count={10} color="from-purple-50 to-pink-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={1} title="Crochet products" desc="Bags, coasters, amigurumi toys, and home decor. Huge demand on Instagram. Low material cost, high perceived value." />
        <IdeaItem number={2} title="Handmade jewellery" desc="Beaded necklaces, resin earrings, wire-wrapped rings. Start with ₹2,000 in supplies and sell at 5-10x markup." />
        <IdeaItem number={3} title="Scented candles" desc="Soy candles, pillar candles, gift sets. Popular for gifting. Great margins once you master the technique." />
        <IdeaItem number={4} title="Art prints and illustrations" desc="Digital art printed on demand. No inventory needed. Sell on your own store or marketplaces." />
        <IdeaItem number={5} title="Pottery and ceramics" desc="Mugs, planters, bowls. Growing demand for handmade ceramics. Requires some equipment but commands premium pricing." />
        <IdeaItem number={6} title="Custom gifts" desc="Personalized mugs, cushions, photo frames, name plates. Consistently high demand for birthdays, anniversaries, weddings." />
        <IdeaItem number={7} title="Embroidery products" desc="Hand-embroidered hoops, patches, clothing. A traditional skill with modern market appeal." />
        <IdeaItem number={8} title="Macrame decor" desc="Wall hangings, plant hangers, table runners. Trending in home decor. Simple to learn, satisfying margins." />
        <IdeaItem number={9} title="Resin art" desc="Coasters, trays, jewellery, keychains. Eye-catching products that photograph well for social media." />
        <IdeaItem number={10} title="Hand-painted items" desc="Tote bags, shoes, phone cases, denim jackets. Custom art on everyday products commands a premium." />
      </div>

      {/* Food & Beverages */}
      <CategoryHeader icon={UtensilsCrossed} title="Food & Beverages" count={8} color="from-amber-50 to-yellow-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={11} title="Homemade cakes and baked goods" desc="Custom cakes, brownies, cookies. Cloud kitchens are booming. Start from your kitchen with an FSSAI license." />
        <IdeaItem number={12} title="Tiffin service" desc="Subscription-based home-cooked meals. Target working professionals, students, and PG residents in your area." />
        <IdeaItem number={13} title="Pickles and chutneys" desc="Traditional Indian pickles sell incredibly well online. Long shelf life makes shipping easy. Family recipes = unique selling point." />
        <IdeaItem number={14} title="Homemade peanut butter" desc="Health-conscious buyers want natural, preservative-free options. Simple to make, good margins, recurring purchases." />
        <IdeaItem number={15} title="Healthy snacks" desc="Makhana, roasted seeds, trail mix, protein bars. Health food is one of the fastest-growing categories online." />
        <IdeaItem number={16} title="Gourmet cookies" desc="Premium flavors, beautiful packaging. Gift boxes do especially well during festivals and holidays." />
        <IdeaItem number={17} title="Specialty tea blends" desc="Herbal teas, masala chai blends, wellness teas. India loves tea — give them something better than what is on supermarket shelves." />
        <IdeaItem number={18} title="Homemade masalas and spice mixes" desc="Biryani masala, garam masala, regional spice blends. Authentic taste that packaged brands cannot match." />
      </div>

      <Callout type="warning">
        Food businesses require an FSSAI license. The basic registration costs ₹100 and is valid for 5 years. Do not
        skip this — it is legally required and builds customer trust.
      </Callout>

      {/* Fashion & Accessories */}
      <CategoryHeader icon={Shirt} title="Fashion & Accessories" count={8} color="from-pink-50 to-rose-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={19} title="Custom clothing" desc="Customized t-shirts, hoodies, co-ord sets. Print-on-demand keeps inventory costs zero." />
        <IdeaItem number={20} title="Saree business" desc="Curated sarees from weavers. Bridge the gap between artisans and urban buyers. High ticket value." />
        <IdeaItem number={21} title="Kurtis and ethnic wear" desc="Everyday ethnic wear is a massive market. Source from manufacturers in Jaipur, Surat, or Kolkata." />
        <IdeaItem number={22} title="Custom footwear" desc="Juttis, kolhapuris, hand-painted sneakers. Niche footwear with strong margins." />
        <IdeaItem number={23} title="Bags and clutches" desc="Handmade bags, laptop sleeves, tote bags. Practical products with good repeat purchase rates." />
        <IdeaItem number={24} title="Sunglasses" desc="Trendy, affordable sunglasses. Low cost to source, high perceived value. Great for Instagram marketing." />
        <IdeaItem number={25} title="Hair accessories" desc="Scrunchies, clips, headbands, hair pins. Low-cost products with high margins and repeat purchases." />
        <IdeaItem number={26} title="Ethnic wear for men" desc="Nehru jackets, kurta sets, sherwanis. Underserved market online with fewer competitors." />
      </div>

      {/* Home & Living */}
      <CategoryHeader icon={Home} title="Home & Living" count={6} color="from-emerald-50 to-green-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={27} title="Home decor" desc="Wall art, mirrors, decorative items. Curate unique pieces or create your own. Instagram is your showroom." />
        <IdeaItem number={28} title="Cushion covers and soft furnishings" desc="Block-printed, embroidered, or digital-printed cushion covers. Low weight makes shipping cheap." />
        <IdeaItem number={29} title="Indoor plants" desc="Sell plants, planters, and plant care kits. The plant parent trend is strong in Indian metros." />
        <IdeaItem number={30} title="Home organizers" desc="Storage boxes, drawer organizers, wardrobe organizers. Practical products that every home needs." />
        <IdeaItem number={31} title="Kitchen items" desc="Cutting boards, spice racks, utensil holders. Combine functionality with aesthetics." />
        <IdeaItem number={32} title="Bedsheets and linen" desc="Cotton bedsheets, duvet covers, table linen. Source from manufacturers in Panipat or Erode for the best rates." />
      </div>

      {/* Digital & Services */}
      <CategoryHeader icon={Monitor} title="Digital Products & Services" count={8} color="from-blue-50 to-indigo-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={33} title="Graphic design services" desc="Logo design, social media templates, packaging design. Freelance or build a productized service." />
        <IdeaItem number={34} title="Social media management" desc="Manage Instagram and Facebook for small businesses. Charge ₹10,000-30,000/month per client." />
        <IdeaItem number={35} title="Online tutoring" desc="Teach academics, music, art, coding, or languages. Sell course packages or one-on-one sessions." />
        <IdeaItem number={36} title="Content writing" desc="Blog posts, website copy, product descriptions. Every online business needs content. Charge per word or per project." />
        <IdeaItem number={37} title="Photography services" desc="Product photography for ecommerce sellers. Every online seller needs good photos — be the person who provides them." />
        <IdeaItem number={38} title="Web design" desc="Build websites for local businesses. Use no-code tools to deliver quickly. Charge ₹15,000-50,000 per site." />
        <IdeaItem number={39} title="Consulting" desc="Business consulting, nutrition coaching, fitness training. Package your expertise into paid sessions." />
        <IdeaItem number={40} title="Bookkeeping and accounting" desc="Help small businesses manage their finances. Recurring revenue model with high retention." />
      </div>

      {/* Reselling & Dropshipping */}
      <CategoryHeader icon={Package} title="Reselling & Dropshipping" count={5} color="from-orange-50 to-amber-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={41} title="Branded products reselling" desc="Buy from wholesalers, sell at retail. Works well for cosmetics, clothing, and electronics accessories." />
        <IdeaItem number={42} title="Electronics accessories" desc="Phone cases, chargers, earphones, screen protectors. High demand, easy to source, light to ship." />
        <IdeaItem number={43} title="Beauty and skincare products" desc="Curate Korean beauty, organic skincare, or Ayurvedic products. Build a brand around curation." />
        <IdeaItem number={44} title="Stationery" desc="Journals, planners, pens, desk accessories. The stationery community on Instagram is passionate and loyal." />
        <IdeaItem number={45} title="Pet supplies" desc="Pet food, toys, accessories, grooming products. Pet ownership is growing fast in urban India." />
      </div>

      {/* Niche */}
      <CategoryHeader icon={Star} title="Niche & Emerging" count={5} color="from-teal-50 to-cyan-50" />

      <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
        <IdeaItem number={46} title="Pet products" desc="Handmade pet collars, bandanas, beds, treat jars. Pet parents spend generously on their fur babies." />
        <IdeaItem number={47} title="Baby and kids products" desc="Organic baby clothes, milestone cards, sensory toys. Parents pay premium for quality and safety." />
        <IdeaItem number={48} title="Eco-friendly products" desc="Bamboo toothbrushes, reusable bags, sustainable home goods. Growing market as awareness increases." />
        <IdeaItem number={49} title="Fitness gear" desc="Resistance bands, yoga mats, gym accessories. Health consciousness is at an all-time high." />
        <IdeaItem number={50} title="Stickers, journals, and planners" desc="Custom stickers, bullet journal supplies, planner inserts. Low cost to produce, passionate community of buyers." />
      </div>

      <h2>How to Choose the Right Idea for You</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          { title: "Pick what you know", desc: "Your best business idea comes from your existing skills, hobbies, or knowledge. Passion keeps you going when things get tough." },
          { title: "Check the demand", desc: "Search for similar products on Instagram, Amazon, and Google. If people are already buying it, there is proven demand." },
          { title: "Consider the logistics", desc: "Perishable food is harder to ship than jewellery. Heavy furniture costs more to deliver than stickers. Factor in logistics from the start." },
          { title: "Start small, test fast", desc: "Do not invest ₹5 lakh before making your first sale. Start with 5-10 products, get real feedback, and scale what works." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
            <Lightbulb className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Ready to Start?</h2>

      <p>
        Whatever you choose from the 50 ideas above, you need a platform to sell on. oBizee lets you create your
        online store for free — 0 SUBSCRIPTION, 0 SETUP FEE, no technical skills needed, and a FREE mapped
        custom domain.
      </p>
      <p>
        Set up your store in 5 minutes, add your products, and start sharing your link. It is that simple.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          See oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/clothing-stores" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Clothing Stores <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/food-business" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Food Businesses <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/handmade-crafts" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Handmade Crafts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default TopFunnelPost2;
