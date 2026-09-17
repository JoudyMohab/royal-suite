import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

/**
 * CHAPTER 02 — THE HOTEL
 *
 * Editorial spread: the living-room photograph fills the left column
 * edge to edge; the right column carries label, Bodoni heading, real
 * description, verified facts, and the 9.4 rating presented like a
 * printed credential — not a dashboard.
 */
export function HotelIntroduction({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { reviews } = siteConfig;
  const isRtl = locale === "ar";

  return (
    <section className="bg-ivory">
      <div
        className={`grid lg:grid-cols-2 ${isRtl ? "lg:grid-flow-dense" : ""}`}
      >
        {/* ─── Photograph — full bleed within its column ─────────── */}
        <div
          className={`relative min-h-[420px] md:min-h-[560px] lg:min-h-[680px] ${
            isRtl ? "lg:col-start-2" : ""
          }`}
        >
          <Image
            src={photos.living.src}
            alt={photos.living.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Copy ──────────────────────────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-20 lg:py-24 ${
            isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""
          }`}
        >
          <Reveal>
            <p className="label">{t.hotelIntro.eyebrow}</p>
            <h2 className="display-heading mt-4 max-w-[16ch] text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.3rem] lg:text-[2.6rem]">
              {t.hotelIntro.title}
            </h2>
            <p className="mt-6 max-w-[42ch] font-sans text-[14px] leading-[1.8] text-espresso/65">
              {t.hotelIntro.body}
            </p>
          </Reveal>

          {/* Verified facts — typographic, no cards */}
          <Reveal delay={80}>
            <dl className={`mt-10 space-y-3 border-t border-line pt-6 ${isRtl ? "text-right" : ""}`}>
              {t.hotelIntro.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-4">
                  <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-taupe">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-[13px] text-espresso/85">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Trust — a printed credential, not a widget */}
          <Reveal delay={140}>
            <Link
              href={localePath(locale, "/reviews")}
              className={`mt-10 flex items-center gap-6 border-t border-line pt-7 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <span className="font-display text-[3.4rem] font-medium leading-none text-espresso">
                {reviews.score.toFixed(1)}
              </span>
              <span className={isRtl ? "text-right" : ""}>
                <span className="block font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-taupe">
                  / 10 · {reviews.label}
                </span>
                <span className="mt-1 block font-sans text-[11px] text-taupe/70">
                  {t.trust.reviews}
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
