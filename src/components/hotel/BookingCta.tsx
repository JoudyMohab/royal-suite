import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

/**
 * CHAPTER 09 — BOOK
 *
 * The close: the balcony photograph over Nasr City, one small
 * typographic moment, then the reservation desk. The vignette touches
 * only the bottom fifth of the image; the view stays visible.
 */
export function BookingCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="relative">
      <div className="relative flex min-h-[62vh] items-end md:min-h-[72vh]">
        <Image
          src={photos.balcony.src}
          alt={photos.balcony.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Vignette localized to the bottom fifth only */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5"
          style={{
            background:
              "linear-gradient(to top, rgba(46,37,33,0.45) 0%, transparent 100%)",
          }}
          aria-hidden
        />

        <div
          className={`relative mx-auto w-full max-w-[1280px] px-6 pb-10 sm:px-10 lg:px-14 ${
            isRtl ? "text-right" : ""
          }`}
        >
          <Reveal>
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-paper/70">
              {t.hero.kicker}
            </p>
            <h2 className="display-heading mt-3 text-[1.9rem] leading-[1.1] text-paper sm:text-[2.4rem]">
              {t.cta.title}
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Reservation desk under the photograph */}
      <div className="bg-cream">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8">
          <AvailabilitySearch locale={locale} />
          <p
            className={`mt-3 font-sans text-[11px] text-taupe ${isRtl ? "text-right" : ""}`}
          >
            {t.cta.body}
          </p>
        </div>
      </div>
    </section>
  );
}
