import Link from "next/link";
import { Star } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function TrustBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { reviews, address } = siteConfig;

  return (
    <div className="border-b border-line bg-cream">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <p className="flex items-baseline gap-2">
            <span className="font-display text-[1.55rem] leading-none">{reviews.score.toFixed(1)}</span>
            <span className="font-sans text-[11px] text-taupe">{t.trust.outOf}</span>
            <span className="font-display text-[1.05rem] italic">{reviews.label}</span>
          </p>
          <p className="font-sans text-[12px] text-taupe">{t.trust.reviews}</p>
          <p className="hidden items-center gap-0.5 text-gold sm:flex" aria-label={t.trust.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </p>
          <p className="font-sans text-[12px] text-espresso/80">
            {address.line1} · {address.line2}
          </p>
        </div>
        <Link
          href={localePath(locale, "/reviews")}
          className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-walnut hover:text-walnut-deep"
        >
          {t.trust.viewReviews}
        </Link>
      </div>
    </div>
  );
}
