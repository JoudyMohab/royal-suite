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
      {/* ─── Full-bleed cinematic photograph ────────────────── */}
      <div className="relative min-h-[92vh]">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Deep gradient — strong at bottom-left where text sits */}
        <div className="hero-gradient absolute inset-0" aria-hidden />

        {/* Editorial text composition */}
        <div
          className={`absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20 ${isRtl ? "text-right" : ""}`}
        >
          {/* Hotel name — small label */}
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/80">
            {t.hero.kicker}
          </p>
          <p className="mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.18em] text-paper/45">
            {t.hero.place}
          </p>

          {/* Main editorial headline — truly large */}
          <h1
            className={`mt-5 font-display font-medium leading-[0.97] text-paper
              text-[2.8rem]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[6.5rem]
              xl:text-[7.5rem]
              max-w-[20ch] lg:max-w-none`}
          >
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>

          {/* Sub-line + CTAs */}
          <div
            className={`mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 ${isRtl ? "items-end sm:flex-row-reverse sm:justify-end" : ""}`}
          >
            <div className={`flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
              <a
                href="#availability"
                className="inline-block bg-champagne px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-champagne/85"
              >
                {t.hero.cta}
              </a>
              <Link
                href={localePath(locale, "/rooms")}
                className="inline-block border border-paper/35 px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-paper/85 transition-colors hover:border-paper/65 hover:text-paper"
              >
                {t.hero.secondary}
              </Link>
            </div>
            <p className="font-sans text-[12px] leading-relaxed text-paper/55 sm:max-w-[280px]">
              {t.hero.body}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Availability bar — refined hotel reservation form ── */}
      <div id="availability" className="border-b border-champagne/40 bg-ivory">
        <div className="mx-auto max-w-[1280px]">
          <AvailabilitySearch locale={locale} variant="hero" />
        </div>
      </div>
    </section>
  );
}
