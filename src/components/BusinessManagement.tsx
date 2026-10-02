import Link from 'next/link';

/** Additive positioning: the approved homepage hero remains unchanged. */
export default function BusinessManagement() {
  return (
    <section aria-labelledby="business-management-title" className="bg-orange-50/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-700">The work behind every sale</p>
          <h2 id="business-management-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Manage your orders. Stay on top of your business.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">Already selling through Instagram, WhatsApp or your own shop? oBizee helps manage your customers, employees, catalogue, orders, stock and financial records. Keep the daily work of your business moving in one place.</p>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-gray-900">Find the right fit for your workflow</h3>
          <p className="mt-3 leading-relaxed text-gray-700">Start with the work you want to organise: customer follow-ups, accurate stock, payment records or the next dispatch.</p>
          <Link href="/signup/" className="mt-5 inline-flex rounded-xl bg-orange-700 px-5 py-3 font-semibold text-white hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">Check it for my business</Link>
          <Link href="/guides/choose-order-management-software/" className="mt-4 block font-semibold text-orange-700 underline underline-offset-4">Read the practical software-selection checklist →</Link>
        </div>
      </div>
    </section>
  );
}
