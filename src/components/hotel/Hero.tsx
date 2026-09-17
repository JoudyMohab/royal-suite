import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";

/**
 * CHAPTER 01 — ARRIVAL
 *
 * An opening spread, not a photograph with a slogan laid over it.
 *
 *   right — the photograph, full-bleed and untouched. No scrim, no
 *           band, no type across the room. It is the first thing seen
 *           and the largest element on the screen.
 *   left  — the hotel's stationery: wordmark set as the page's single
 *           H1, the city beneath it, a champagne hairline, one plain
 *           sentence, and the booking action.
 *
 * The reservation desk sits directly beneath the spread and spans both
 * columns — the way a desk sits at the end of a lobby. Nothing here is
 * wrapped in a scroll reveal: this is the first screen and must render
 * with or without JavaScript.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="border-b border-line">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        {/* ─── The photograph — untouched ───────────────────────────── */}
        <div className="relative min-h-[52vh] overflow-hidden bg-cream lg:col-start-2 lg:row-start-1 lg:min-h-[clamp(500px,72vh,780px)]">
          <Image
            src={photos.hero.src}
            alt={photos.hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ─── The hotel's stationery ──────────────────────────────── */}
        <div
          className={`flex flex-col justify-center bg-ivory px-6 py-12 sm:px-10 lg:col-start-1 lg:row-start-1 lg:px-14 lg:py-16 xl:px-20 ${
            isRtl ? "text-right" : ""
          }`}
        >
          <h1>
            <span className="display-heading block text-[2.1rem] leading-[1.04] text-espresso sm:text-[2.6rem] lg:text-[2.7rem] xl:text-[3.1rem]">
              {t.brand.full}
            </span>
            <span className="mt-4 block font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-taupe">
              {t.hero.place}
            </span>
          </h1>

          <div
            className={`mt-8 h-px w-14 bg-champagne ${isRtl ? "ms-auto" : ""}`}
            aria-hidden
          />

          <p className="mt-7 max-w-[32ch] font-sans text-[14px] leading-[1.85] text-espresso/65">
            {t.hero.statement}
          </p>

          {/*
           * The booking action is the reservation desk directly below,
           * and the header carries its own. This column therefore offers
           * the other path a guest wants — the rooms themselves — so the
           * first screen never shows the same label twice.
           */}
          <Link
            href={localePath(locale, "/rooms")}
            className="mt-9 inline-block w-max border border-espresso/35 px-6 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
          >
            {t.rooms.seeAll}
          </Link>
        </div>
      </div>

      {/* ─── Reservation desk ───────────────────────────────────────── */}
      <div id="availability" className="scroll-mt-24 border-t border-line bg-cream">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
          <AvailabilitySearch locale={locale} />
          <p
            className={`mt-3 font-sans text-[11px] text-taupe ${isRtl ? "text-right" : ""}`}
          >
            {t.booking.selectDates}
          </p>
        </div>
      </div>
    </section>
  );
}
