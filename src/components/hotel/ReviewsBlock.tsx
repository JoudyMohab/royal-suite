import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function ReviewsBlock({
  locale,
  headingLevel = "h2",
  showLink = true,
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
  showLink?: boolean;
}) {
  const t = getDictionary(locale);
  const Heading = headingLevel;
  const { reviews } = siteConfig;
  const isRtl = locale === "ar";

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* ─── Score + heading ─────────────────────────────── */}
        <Reveal>
          <div
            className={`flex flex-wrap items-end gap-6 border-b border-line pb-10 ${isRtl ? "flex-row-reverse text-right" : ""}`}
          >
            <div className={isRtl ? "text-right" : ""}>
              <p className="label">{t.reviews.eyebrow}</p>
              <Heading className="mt-3 font-display text-[3.5rem] font-medium leading-none text-espresso sm:text-[5rem]">
                {reviews.score.toFixed(1)}
              </Heading>
              <p className="mt-2 font-display text-xl italic text-espresso/70">
                {reviews.label}
              </p>
            </div>
            <div
              className={`mb-2 flex-1 ${isRtl ? "text-right" : ""}`}
            >
              <p className="font-sans text-[15px] leading-relaxed text-espresso/75">
                {t.trust.reviews}
              </p>
              <p className="mt-1 font-sans text-[13px] text-taupe">
                {t.reviews.source}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─── Category scores ─────────────────────────────── */}
        <Reveal delay={80}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.categories.map((cat) => (
              <div key={cat.id} className={isRtl ? "text-right" : ""}>
                <div
                  className={`flex items-baseline justify-between gap-3 font-sans text-[13px] text-espresso/70 ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <span>{t.reviewCats[cat.id as keyof typeof t.reviewCats]}</span>
                  <span className="font-display text-[1.6rem] text-espresso">
                    {cat.score.toFixed(1)}
                  </span>
                </div>
                <div className="mt-2 h-px bg-line">
                  <div
                    className="h-px bg-walnut"
                    style={{ width: `${(cat.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ─── Review themes ───────────────────────────────── */}
        <Reveal delay={160}>
          <div className="mt-14">
            <p className={`label ${isRtl ? "text-right" : ""}`}>
              {t.reviews.themesTitle}
            </p>
            <ul
              className={`mt-5 flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}
            >
              {t.reviews.themes.map((theme) => (
                <li
                  key={theme}
                  className="border border-line bg-paper px-4 py-2.5 font-sans text-[13px] text-espresso/80"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* ─── Links ───────────────────────────────────────── */}
        <Reveal delay={200}>
          <div
            className={`mt-10 flex flex-wrap items-center gap-5 border-t border-line pt-8 ${isRtl ? "flex-row-reverse text-right" : ""}`}
          >
            {showLink ? (
              <Link
                href={localePath(locale, "/reviews")}
                className="border border-champagne px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-espresso hover:bg-cream transition-colors"
              >
                {t.reviews.readAll}
              </Link>
            ) : null}
            <a
              href={reviews.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4 hover:text-walnut-deep"
            >
              {t.reviews.link}
            </a>
          </div>
          <p
            className={`mt-5 max-w-2xl font-sans text-[12px] leading-relaxed text-taupe ${isRtl ? "text-right" : ""}`}
          >
            {t.reviews.legal}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
