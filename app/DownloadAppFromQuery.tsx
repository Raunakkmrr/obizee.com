"use client";

import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const AppDownloadModal = lazy(() => import("@/components/AppDownloadModal"));

/**
 * Opens the app-download modal when the page is visited with ?download_app=1.
 *
 * This is deliberately its own leaf component. `useSearchParams` opts a subtree
 * out of prerendering, and while it lived in HomePageClient it took the whole
 * homepage with it — the exported HTML carried 93 characters and no section at
 * all. Isolated here, only this sliver defers; every section still renders into
 * the HTML that Google and the AI crawlers read.
 *
 * Keep the `useSearchParams` call inside this file. Lifting it back up to the
 * page reintroduces the bailout.
 */
export default function DownloadAppFromQuery() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") === "1") setOpen(true);
  }, [searchParams]);

  if (!open) return null;

  return (
    <Suspense fallback={null}>
      <AppDownloadModal open={open} onOpenChange={setOpen} />
    </Suspense>
  );
}
