"use client";

import { motion } from "framer-motion";

const orders = [
  { name: "Priya Yadav", product: "Crochet Earrings", amount: "₹350", status: "Shipped", statusColor: "text-green-700 bg-green-50 border-green-200" },
  { name: "Seerat K.", product: "Handmade Bag", amount: "₹1,200", status: "In Progress", statusColor: "text-orange-700 bg-orange-50 border-orange-200" },
  { name: "Tanvi P.", product: "Art Print Set", amount: "₹800", status: "New", statusColor: "text-blue-700 bg-blue-50 border-blue-200" },
];

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 via-orange-300/20 to-amber-200/30 rounded-3xl blur-2xl" aria-hidden="true" />

      <motion.div
        className="relative bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 shadow-2xl shadow-gray-200/50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-100 rounded-lg px-4 py-1 text-xs text-gray-500 font-mono">
              yourstore.obizee.com
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-3 sm:p-4 border border-orange-200/50">
            <div className="text-orange-500/70 text-xs mb-1">Revenue</div>
            <div className="text-gray-900 text-lg sm:text-2xl font-bold">₹47,230</div>
            <div className="text-green-600 text-xs mt-1">+12% today</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200/50">
            <div className="text-gray-500 text-xs mb-1">Orders</div>
            <div className="text-gray-900 text-lg sm:text-2xl font-bold">156</div>
            <div className="text-green-600 text-xs mt-1">23 new</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-200/50">
            <div className="text-gray-500 text-xs mb-1">Shipped</div>
            <div className="text-gray-900 text-lg sm:text-2xl font-bold">89</div>
            <div className="text-blue-600 text-xs mt-1">via Delhivery</div>
          </div>
        </div>

        {/* Order rows */}
        <div className="space-y-2">
          {orders.map((order, i) => (
            <motion.div
              key={order.name}
              className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50/50 rounded-xl border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {order.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-gray-900 text-sm font-medium truncate">{order.name}</div>
                  <div className="text-gray-400 text-xs truncate">{order.product}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-gray-900 text-sm font-semibold hidden sm:block">{order.amount}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium border ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
