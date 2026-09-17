"use client";

import Script from "next/script";

/**
 * Elfsight — Booking.com Reviews widget.
 *
 * The embed is used exactly as supplied by Elfsight: the platform
 * loader plus the app div. The loader runs afterInteractive — injected
 * once hydration completes, always async so it never blocks first
 * paint — and next/script dedupes by id, so one platform.js per page
 * even if the section were ever rendered twice.
 */
export function ElfsightReviews() {
  return (
    <>
      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-a235d7d8-ce21-449c-a094-32793f06f2a9"
        data-elfsight-app-lazy
      />
    </>
  );
}
