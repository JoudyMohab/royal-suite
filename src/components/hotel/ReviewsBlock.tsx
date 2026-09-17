import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { ElfsightReviews } from "@/components/hotel/ElfsightReviews";

/**
 * CHAPTER 06 — GUESTS
 *
 * Credibility through typography: one very large 9.4, a fine-ruled
 * score table — no progress bars, no per-category cards — and an
 * honest note that quotations live on Booking.com. No review is ever
 * invented.
 */
export function ReviewsBlock({
  locale,
  showLink = true,
}: {
  locale: Locale;
  showLink?: boolean;
}) {
  const t = getDictionary(locale);
  const { reviews } = siteConfig;
  const isRtl = locale === "ar";

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* ─── The score ───────────────────────────────────── */}
        <Reveal>
          <div
            className={`flex flex-wrap items-end gap-x-12 gap-y-6 border-b border-line pb-10 ${
              isRtl ? "flex-row-reverse text-right" : ""
            }`}
          >
            <div>
              {/*
               * A real heading for this chapter: the score below is a
               * figure, not a title, so the section would otherwise sit
               * outside the document outline entirely.
               */}
              <h2 className="label">{t.reviews.eyebrow}</h2>
              <p className="mt-4 flex items-start gap-2">
                <span className="font-display text-[5.5rem] font-medium leading-[0.85] text-espresso sm:text-[7.5rem]">
                  {reviews.score.toFixed(1)}
                </span>
                <span className="mt-2 font-display text-[1.3rem] font-medium text-taupe/70">
                  /10
                </span>
              </p>
            </div>
            <div className={isRtl ? "text-right" : ""}>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-espresso">
                {reviews.label}
              </p>
              <p className="mt-2 font-sans text-[14px] text-espresso/70">
                {t.trust.reviews}
              </p>
              <p className="mt-1 font-sans text-[12px] text-taupe">
                {t.reviews.source}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─── Score table — fine rules, no cards ──────────── */}
        <Reveal delay={80}>
          <dl className="mt-4">
            {reviews.categories.map((cat, i) => (
              <div
                key={cat.id}
                className={`flex items-baseline justify-between gap-4 py-3.5 ${
                  i < reviews.categories.length - 1 ? "border-b border-line/60" : ""
                } ${isRtl ? "flex-row-reverse" : ""}`}
              >
                <dt className="font-sans text-[12px] uppercase tracking-[0.14em] text-espresso/70">
                  {t.reviewCats[cat.id as keyof typeof t.reviewCats]}
                </dt>
                <dd className="flex items-baseline gap-3">
                  <span
                    className="h-px w-10 bg-champagne/50 sm:w-16"
                    aria-hidden
                  />
                  <span className="font-display text-[1.35rem] font-medium leading-none text-espresso">
                    {cat.score.toFixed(1)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ─── Verified reviews — live widget ─────────────── */}
        <Reveal delay={100}>
          <div className="mt-14 md:mt-20">
            <p className="label">{t.reviews.widgetLabel}</p>
            {/**
             * A min-height reserve: the widget paints after the Elfsight
             * script hydrates, so without this everything below it jumps
             * ~700px on load (layout shift that search engines measure).
             */}
            <div className="mt-8 min-h-[480px] md:min-h-[600px]">
              <ElfsightReviews />
            </div>
          </div>
        </Reveal>

        {/* ─── Links ───────────────────────────────────────── */}
        <Reveal delay={140}>
          <div
            className={`mt-14 flex flex-wrap items-center gap-6 border-t border-line pt-8 md:mt-20 ${
              isRtl ? "flex-row-reverse text-right" : ""
            }`}
          >
            {showLink ? (
              <Link
                href={localePath(locale, "/reviews")}
                className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso underline decoration-champagne underline-offset-8 hover:text-walnut"
              >
                {t.reviews.readAll} →
              </Link>
            ) : null}
            <a
              href={reviews.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-[12px] text-taupe hover:text-espresso"
            >
              {t.reviews.link}
            </a>
          </div>
          <p
            className={`mt-5 max-w-2xl font-sans text-[11px] leading-relaxed text-taupe/80 ${
              isRtl ? "text-right" : ""
            }`}
          >
            {t.reviews.legal}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
