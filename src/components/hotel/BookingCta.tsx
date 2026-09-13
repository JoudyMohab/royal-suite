import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Final call-to-action.
 * The photograph remains the dominant element.
 * Text and booking form are layered subtly over a localized gradient.
 * No flat gold rectangles. No generic "Book Now" banner.
 */
export function BookingCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="relative overflow-hidden">
      {/* ─── Background photograph ─────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={photos.balcony.src}
          alt={photos.balcony.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay — localized to the left/right where text sits */}
        <div
          className="absolute inset-0"
          style={{
            background: isRtl
              ? "linear-gradient(to left, rgba(46,37,33,0.82) 0%, rgba(46,37,33,0.55) 45%, rgba(46,37,33,0.18) 75%, transparent 100%)"
              : "linear-gradient(to right, rgba(46,37,33,0.82) 0%, rgba(46,37,33,0.55) 45%, rgba(46,37,33,0.18) 75%, transparent 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* ─── Content ──────────────────────────────────────────── */}
      <div
        className={`relative mx-auto max-w-[1280px] px-5 py-18 sm:px-8 sm:py-22 lg:px-14 lg:py-28 ${
          isRtl ? "text-right" : ""
        }`}
      >
        <Reveal>
          <h2
            className={`mt-4 font-display font-medium italic leading-[1.1] text-paper
              text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem]
              max-w-[20ch]`}
          >
            {t.cta.title}
          </h2>
          <p className="mt-3 max-w-[38ch] font-sans text-[13px] leading-relaxed text-paper/55">
            {t.cta.body}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 max-w-3xl">
            <AvailabilitySearch locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
