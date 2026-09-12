import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section>
      {/* ─── Full-bleed photograph ─────────────────────────── */}
      <div className="relative min-h-[88vh]">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradient overlay — dark at bottom, fades to transparent */}
        <div className="hero-gradient absolute inset-0" aria-hidden />

        {/* Editorial headline — positioned at bottom of photo */}
        <div
          className={`absolute bottom-0 px-5 pb-10 sm:px-8 sm:pb-14 lg:px-14 lg:pb-16 ${isRtl ? "right-0 text-right" : "left-0"} max-w-3xl`}
        >
          <p className="label tracking-[0.15em] text-champagne/90">
            {t.hero.kicker}
          </p>
          <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.04] text-paper sm:text-[3.5rem] lg:text-[4.75rem]">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="mt-4 max-w-lg font-sans text-[14px] leading-relaxed text-paper/70 sm:text-[15px]">
            {t.hero.body}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#availability"
              className="inline-block bg-champagne px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-espresso hover:bg-champagne/85 transition-colors"
            >
              {t.hero.cta}
            </a>
            <Link
              href={localePath(locale, "/rooms")}
              className="inline-block border border-paper/40 px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-paper/90 hover:border-paper/70 hover:text-paper transition-colors"
            >
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Availability bar ──────────────────────────────── */}
      <div id="availability" className="border-y border-champagne bg-cream">
        <div className="mx-auto max-w-[1280px] sm:px-6">
          <AvailabilitySearch locale={locale} variant="hero" />
        </div>
      </div>
    </section>
  );
}
