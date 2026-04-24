"use client";

import { useState, useMemo } from "react";
import {
  Globe, Truck, Package, ShoppingBag, BarChart3, CreditCard,
  Smartphone, Users, MapPin, Clock, Shield, Zap, FileText, Tag,
  Receipt, Bell, Share2, Palette, Star, Heart, TrendingUp, Box,
  Layers, Settings, CheckCircle, QrCode, IndianRupee, Store,
  PackageCheck, PieChart, ShoppingCart, BadgeCheck, Lock,
  type LucideIcon,
} from "lucide-react";

// Reduced to 30 icons — still looks full, but dramatically less JS execution
const featureItems: { icon: LucideIcon; text: string }[] = [
  { icon: Globe, text: "Auto-generated website" },
  { icon: Truck, text: "Delhivery integration" },
  { icon: Package, text: "DTDC shipping built-in" },
  { icon: ShoppingBag, text: "Instagram selling" },
  { icon: BarChart3, text: "Revenue analytics" },
  { icon: CreditCard, text: "UPI + card payments" },
  { icon: Smartphone, text: "100% mobile app" },
  { icon: Users, text: "Employee management" },
  { icon: MapPin, text: "Live order tracking" },
  { icon: Clock, text: "2-minute setup" },
  { icon: Shield, text: "Secure payments" },
  { icon: Zap, text: "Instant AWB generation" },
  { icon: FileText, text: "Custom order forms" },
  { icon: Tag, text: "1% fee, max ₹10" },
  { icon: Receipt, text: "Invoice generation" },
  { icon: Bell, text: "Order notifications" },
  { icon: Share2, text: "WhatsApp selling" },
  { icon: Palette, text: "Brand customization" },
  { icon: Star, text: "No monthly fees" },
  { icon: Heart, text: "Built for India" },
  { icon: TrendingUp, text: "Growth insights" },
  { icon: Box, text: "Inventory tracking" },
  { icon: Layers, text: "Multi-link forms" },
  { icon: Settings, text: "Easy configuration" },
  { icon: CheckCircle, text: "Order lifecycle" },
  { icon: QrCode, text: "QR code sharing" },
  { icon: IndianRupee, text: "₹0 setup cost" },
  { icon: Store, text: "Your own storefront" },
  { icon: PackageCheck, text: "Pickup scheduling" },
  { icon: PieChart, text: "Expense tracking" },
  { icon: ShoppingCart, text: "Product variants" },
  { icon: BadgeCheck, text: "3 months free trial" },
  { icon: Lock, text: "Data security" },
];

// Seeded pseudo-random number generator for deterministic positions
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function FloatingItem({
  icon: Icon,
  text,
  index,
}: {
  icon: LucideIcon;
  text: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const style = useMemo(() => {
    const left = seededRandom(index * 3 + 1) * 92 + 2;
    const top = seededRandom(index * 3 + 2) * 88 + 4;
    const duration = 5 + seededRandom(index * 7) * 8;
    const delay = seededRandom(index * 13) * 5;
    const opacity = 0.2 + seededRandom(index * 23) * 0.15;

    return {
      left: `${left}%`,
      top: `${top}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      opacity,
      "--float-x": `${(seededRandom(index * 17) - 0.5) * 30}px`,
      "--float-y": `${10 + seededRandom(index * 19) * 15}px`,
    } as React.CSSProperties;
  }, [index]);

  const iconSize = seededRandom(index * 29) > 0.7 ? "w-5 h-5" : seededRandom(index * 31) > 0.4 ? "w-4 h-4" : "w-3.5 h-3.5";

  return (
    <div
      className="absolute z-10 cursor-pointer floating-icon"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30 whitespace-nowrap text-xs font-medium animate-fade-in">
          <Icon className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{text}</span>
        </div>
      ) : (
        <div className="p-1.5 sm:p-2 rounded-lg bg-orange-100/80 border border-orange-200/60">
          <Icon className={`${iconSize} text-orange-500`} />
        </div>
      )}
    </div>
  );
}

export default function FloatingFeatures() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatIcon {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(var(--float-x, 10px), calc(-1 * var(--float-y, 15px))); }
          66% { transform: translate(calc(-0.5 * var(--float-x, 10px)), 0); }
        }
        .floating-icon {
          animation: floatIcon var(--duration, 8s) ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .floating-icon { animation: none; }
        }
      `}} />
      <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        {featureItems.map((item, i) => (
          <FloatingItem key={i} icon={item.icon} text={item.text} index={i} />
        ))}
      </div>
    </>
  );
}
