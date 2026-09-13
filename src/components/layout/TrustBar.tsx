import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

/**
 * Ultra-thin utility strip above the navigation.
 * Communicates rating, address, and a single link.
 * Nothing here should draw the eye before the hotel photograph.
 */
export function TrustBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { reviews, address } = siteConfig;
  const isRtl = locale === "ar";

  return (
    <div className="border-b border-line/50 bg-ivory">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-1.5 sm:px-6 ${isRtl ? "flex-row-reverse" : ""}`}
      >
        {/* Rating + address — left side */}
        <div
          className={`flex flex-wrap items-center gap-x-4 gap-y-0 ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <p className="font-sans text-[10px] text-taupe/90">
            <span className="font-semibold text-espresso/80">
              {reviews.score.toFixed(1)} / 10
            </span>
            {" · "}
            <span>{reviews.label}</span>
            {" · "}
            <span className="text-taupe/65">{t.trust.reviews}</span>
          </p>
          <span className="hidden h-2.5 w-px bg-line sm:block" aria-hidden />
          <p className="hidden font-sans text-[10px] text-taupe/60 sm:block">
            {address.line1} · {address.line2}
          </p>
        </div>

        {/* View reviews — right side */}
        <Link
          href={localePath(locale, "/reviews")}
          className="shrink-0 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-taupe/70 hover:text-espresso"
        >
          {t.trust.viewReviews}
        </Link>
      </div>
    </div>
  );
}
