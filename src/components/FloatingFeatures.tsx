"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Truck, Package, ShoppingBag, BarChart3, CreditCard,
  Smartphone, Users, MapPin, Clock, Shield, Zap, FileText, Tag,
  Receipt, Bell, Share2, Palette, Star, Heart, TrendingUp, Box,
  Layers, Settings, CheckCircle, Clipboard, Calculator, Mail,
  Image, QrCode, Link2, Percent, IndianRupee, Store, Warehouse,
  PackageCheck, Handshake, Megaphone, PieChart, ShoppingCart,
  BadgeCheck, Bookmark, Filter, Repeat, UserCheck, Wifi, Lock,
  ThumbsUp, MessageCircle, Search, Award, Gem, UtensilsCrossed,
  Paintbrush, Camera, Shirt, Scissors, Gift, Flame, Coffee,
  Bike, Home, Target, Lightbulb, Rocket, Gauge, CircleDollarSign,
  FileCheck, FolderOpen, Binary, Headphones, SquareStack, Coins,
  ArrowUpDown, MonitorSmartphone, RefreshCw, ScanLine, Wallet,
  type LucideIcon,
} from "lucide-react";

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
  { icon: Clipboard, text: "Vendor management" },
  { icon: Calculator, text: "Fare calculator" },
  { icon: Mail, text: "Customer updates" },
  { icon: Image, text: "Product gallery" },
  { icon: QrCode, text: "QR code sharing" },
  { icon: Link2, text: "Shareable store link" },
  { icon: Percent, text: "No hidden charges" },
  { icon: IndianRupee, text: "₹0 setup cost" },
  { icon: Store, text: "Your own storefront" },
  { icon: Warehouse, text: "Stock management" },
  { icon: PackageCheck, text: "Pickup scheduling" },
  { icon: Handshake, text: "Supplier tracking" },
  { icon: Megaphone, text: "Multi-channel reach" },
  { icon: PieChart, text: "Expense tracking" },
  { icon: ShoppingCart, text: "Product variants" },
  { icon: BadgeCheck, text: "3 months free trial" },
  { icon: Bookmark, text: "Category management" },
  { icon: Filter, text: "Order filtering" },
  { icon: Repeat, text: "Repeat customers" },
  { icon: UserCheck, text: "Customer profiles" },
  { icon: Wifi, text: "Works on any network" },
  { icon: Lock, text: "Data security" },
  { icon: ThumbsUp, text: "No coding needed" },
  { icon: MessageCircle, text: "Customer chat" },
  { icon: Search, text: "Product search" },
  { icon: Award, text: "Trusted by 50K+" },
  { icon: Gem, text: "Jewellery seller ready" },
  { icon: UtensilsCrossed, text: "Food business tools" },
  { icon: Paintbrush, text: "Handicraft store" },
  { icon: Camera, text: "Product photography" },
  { icon: Shirt, text: "Clothing store ready" },
  { icon: Scissors, text: "Custom tailoring forms" },
  { icon: Gift, text: "Gift wrapping option" },
  { icon: Flame, text: "Trending products" },
  { icon: Coffee, text: "Cafe & bakery orders" },
  { icon: Bike, text: "Local delivery support" },
  { icon: Home, text: "Home business friendly" },
  { icon: Target, text: "Targeted marketing" },
  { icon: Lightbulb, text: "Smart suggestions" },
  { icon: Rocket, text: "Fast onboarding" },
  { icon: Gauge, text: "Performance dashboard" },
  { icon: CircleDollarSign, text: "Profit margins visible" },
  { icon: FileCheck, text: "Order confirmation" },
  { icon: FolderOpen, text: "Document storage" },
  { icon: Binary, text: "Zero technical skills" },
  { icon: Headphones, text: "24/7 support" },
  { icon: SquareStack, text: "Bulk product upload" },
  { icon: Coins, text: "Cheapest in India" },
  { icon: ArrowUpDown, text: "Sort by anything" },
  { icon: MonitorSmartphone, text: "Web + mobile sync" },
  { icon: RefreshCw, text: "Auto stock updates" },
  { icon: ScanLine, text: "Barcode scanning" },
  { icon: Wallet, text: "Payment reconciliation" },
  { icon: Truck, text: "Free shipping setup" },
  { icon: IndianRupee, text: "Transparent pricing" },
  { icon: Globe, text: "yourname.obizee.com" },
  { icon: Star, text: "No subscription ever" },
  { icon: Package, text: "Pan-India shipping" },
  { icon: Heart, text: "Made in India" },
  { icon: Receipt, text: "GST-ready invoices" },
  { icon: Share2, text: "One-tap sharing" },
  { icon: Shield, text: "Hosted checkout" },
  { icon: Bell, text: "Real-time alerts" },
  { icon: CheckCircle, text: "Delivered status" },
  { icon: Clock, text: "Prep time tracking" },
];

// Seeded pseudo-random number generator for deterministic but random-looking positions
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

  // Use seeded random for truly scattered positions
  const pos = useMemo(() => ({
    left: `${seededRandom(index * 3 + 1) * 92 + 2}%`,
    top: `${seededRandom(index * 3 + 2) * 88 + 4}%`,
  }), [index]);

  // Randomized animation params
  const floatDuration = 5 + seededRandom(index * 7) * 8; // 5-13s
  const floatDelay = seededRandom(index * 13) * 5; // 0-5s stagger
  const xDrift = (seededRandom(index * 17) - 0.5) * 30; // -15 to +15px horizontal
  const yDrift = 10 + seededRandom(index * 19) * 15; // 10-25px vertical
  const baseOpacity = 0.2 + seededRandom(index * 23) * 0.15; // 0.20-0.35
  const iconSize = seededRandom(index * 29) > 0.7 ? "w-5 h-5" : seededRandom(index * 31) > 0.4 ? "w-4 h-4" : "w-3.5 h-3.5";

  return (
    <motion.div
      className="absolute z-10 cursor-pointer"
      style={{ left: pos.left, top: pos.top }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isHovered ? 1 : baseOpacity,
        scale: 1,
        x: isHovered ? 0 : [0, xDrift, -xDrift * 0.5, 0],
        y: isHovered ? 0 : [0, -yDrift, 0],
      }}
      transition={
        isHovered
          ? { duration: 0.2 }
          : {
              opacity: { duration: 1, delay: floatDelay * 0.3 },
              scale: { duration: 0.6, delay: floatDelay * 0.3 },
              x: { duration: floatDuration * 1.3, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
              y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay },
            }
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isHovered ? (
          <motion.div
            key="text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2 bg-orange-500 text-white px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30 whitespace-nowrap text-xs font-medium"
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{text}</span>
          </motion.div>
        ) : (
          <motion.div
            key="icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="p-1.5 sm:p-2 rounded-lg bg-orange-100/80 border border-orange-200/60"
          >
            <Icon className={`${iconSize} text-orange-500`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FloatingFeatures() {
  return (
    <div className="absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
      {featureItems.map((item, i) => (
        <FloatingItem key={i} icon={item.icon} text={item.text} index={i} />
      ))}
    </div>
  );
}
