import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";

/**
 * ARCHITECTURAL PRINCIPLE:
 *
 * The photograph is not a background for text.
 * It is the photograph — the primary visual experience.
 *
 * The hotel identity label is the ONLY element inside the photograph.
 * It is small (9px), placed in the corner, and barely visible.
 *
 * The editorial headline ("Stay in Cairo, comfortably.") lives BELOW
 * the photograph in a thin ivory caption strip — like a magazine
 * caption. It does not compete with the room imagery.
 *
 * The photograph has only a minimal top gradient (20% of height),
 * purely so the hotel name label reads against the sky/ceiling.
 * The remaining 80% of the photograph is completely unobstructed.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section>
      {/* ─── The photograph ────────────────────────────────────────────── */}
      {/* No overlay in the center. No gradient at the bottom.            */}
      {/* The room light, the furniture, the warm ivory walls — these are */}
      {/* what make a visitor want to stay. Let them be seen.             */}
      <div className="relative h-[78vh] md:h-[83vh]">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Minimal top gradient — sole purpose: hotel label readability */}
        {/* The remaining 80% of the photograph is untouched.           */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[20%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(46,37,33,0.42) 0%, transparent 100%)",
          }}
          aria-hidden
        />

        {/* Hotel identity — corner label only */}
        <div
          className={`absolute top-5 sm:top-7 lg:top-9 ${
            isRtl
              ? "right-5 sm:right-8 lg:right-14 text-right"
              : "left-5 sm:left-8 lg:left-14"
          }`}
        >
          <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-paper/60">
            {t.hero.kicker}
          </p>
          <p className="mt-0.5 font-sans text-[8px] uppercase tracking-[0.20em] text-paper/35">
            {t.hero.place}
          </p>
        </div>
      </div>

      {/* ─── Caption strip — OUTSIDE and BELOW the photograph ─────────── */}
      {/* This is not a CTA bar. It is an editorial caption, like the    */}
      {/* line of text beneath a photograph in a hotel brochure.         */}
      {/* The Bodoni italic at this scale feels like a byline, not       */}
      {/* a slogan. It frames the experience rather than selling it.     */}
      <div
        className={`flex items-center justify-between gap-6 border-b border-line bg-ivory px-5 py-4 sm:px-8 lg:px-14 ${
          isRtl ? "flex-row-reverse" : ""
        }`}
      >
        <h1
          className={`font-display font-medium italic leading-tight text-espresso
            text-[1.15rem] sm:text-[1.35rem]`}
        >
          {t.hero.title}
        </h1>
        <a
          href="#availability"
          className="shrink-0 border border-espresso/25 px-5 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
        >
          {t.hero.cta}
        </a>
      </div>

      {/* ─── Booking form ──────────────────────────────────────────────── */}
      <div id="availability" className="border-b border-line bg-cream">
        <AvailabilitySearch locale={locale} variant="hero" />
      </div>
    </section>
  );
}
