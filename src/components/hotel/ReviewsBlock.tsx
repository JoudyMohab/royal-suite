import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";

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

  return (
    <section className="border-y border-line bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="label">{t.reviews.eyebrow}</p>
        <Heading className="mt-2 max-w-2xl font-display text-3xl text-espresso md:text-[2.5rem]">
          {t.reviews.title}
        </Heading>

        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="border border-line bg-ivory p-6">
            <p className="font-display text-7xl leading-none">{reviews.score.toFixed(1)}</p>
            <p className="mt-2 font-display text-xl italic">{reviews.label}</p>
            <p className="mt-2 font-sans text-sm text-taupe">
              {t.trust.outOf} · {t.trust.reviews}
            </p>
            <p className="mt-4 font-sans text-[13px] text-taupe">{t.reviews.source}</p>
          </div>
          <ul className="space-y-4">
            {reviews.categories.map((cat) => (
              <li key={cat.id}>
                <div className="flex items-baseline justify-between gap-4 font-sans text-sm">
                  <span>{t.reviewCats[cat.id as keyof typeof t.reviewCats]}</span>
                  <span className="font-display text-2xl">{cat.score.toFixed(1)}</span>
                </div>
                <div className="mt-1.5 h-[2px] bg-line">
                  <div className="h-full bg-gold" style={{ width: `${(cat.score / 10) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="label">{t.reviews.themesTitle}</p>
          <ul className="mt-4 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.reviews.themes.map((theme) => (
              <li key={theme} className="bg-cream px-4 py-3 font-sans text-[13px] text-espresso/80">
                {theme}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {showLink ? (
            <Link
              href={localePath(locale, "/reviews")}
              className="border border-champagne px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-espresso hover:bg-ivory"
            >
              {t.reviews.readAll}
            </Link>
          ) : null}
          <a
            href={reviews.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4"
          >
            {t.reviews.link}
          </a>
        </div>
        <p className="mt-6 max-w-2xl font-sans text-[13px] leading-relaxed text-taupe">
          {t.reviews.legal}
        </p>
      </div>
    </section>
  );
}
