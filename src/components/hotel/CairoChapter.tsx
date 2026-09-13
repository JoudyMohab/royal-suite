/**
 * CAIRO CHAPTER — Chapter 5 of the homepage.
 *
 * This component replaces two separate homepage sections:
 *   LocationBlock  (cream, map + distances)
 *   Shuttle        (ivory, airport transfer)
 *
 * Both are the same story: "how to get to and around Cairo."
 * Telling it in two separate sections is redundant.
 *
 * This chapter tells it as one geographic narrative:
 *   1. Where we are in Cairo (headline + address)
 *   2. The map — the visual anchor
 *   3. What is nearby (distances)
 *   4. How to arrive (shuttle, integrated below the map)
 *
 * The original LocationBlock and Shuttle components are kept
 * for use on dedicated /location and /experience pages.
 */
import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function CairoChapter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { address } = siteConfig;
  const { lat, lng } = address;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.018
  }%2C${lat - 0.011}%2C${lng + 0.018}%2C${lat + 0.011}&layer=mapnik&marker=${lat}%2C${lng}`;
  const isRtl = locale === "ar";

  return (
    <section className="bg-cream" id="location">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-14">

        {/* ─── Section heading ─────────────────────────────── */}
        <Reveal>
          <div
            className={`flex flex-wrap items-end justify-between gap-5 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <div className={isRtl ? "text-right" : ""}>
              <p className="label">{t.location.eyebrow}</p>
              <h2
                className={`mt-3 font-display font-medium italic leading-tight text-espresso
                  text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem]`}
              >
                {t.location.title}
              </h2>
            </div>
            <address
              className={`not-italic font-sans text-[12px] text-taupe leading-relaxed ${
                isRtl ? "text-right" : ""
              }`}
            >
              {address.line1}
              <br />
              {address.line2}, {address.country}
            </address>
          </div>
        </Reveal>

        {/* ─── Map ─────────────────────────────────────────── */}
        <Reveal delay={60}>
          <div className="mt-8 overflow-hidden border border-line">
            <iframe
              title={t.location.mapTitle}
              src={mapSrc}
              className="h-[280px] w-full sm:h-[360px] md:h-[420px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* ─── Distances ───────────────────────────────────── */}
        <Reveal delay={80}>
          <ul className="mt-0 grid border-x border-b border-line sm:grid-cols-3">
            {siteConfig.nearby.map((place, i) => (
              <li
                key={place.id}
                className={`px-6 py-6 ${
                  i < siteConfig.nearby.length - 1
                    ? "border-b border-line sm:border-b-0 sm:border-e"
                    : ""
                } ${isRtl ? "text-right" : ""}`}
              >
                <p className="label">
                  {t.location.nearby[place.id as keyof typeof t.location.nearby]}
                </p>
                <p className="mt-2 font-display font-medium leading-none text-espresso text-[2rem] sm:text-[2.25rem]">
                  {place.distance}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ─── Airport transfer — integrated, not a separate section ── */}
        {/* The shuttle is part of the arrival story, not a standalone  */}
        {/* product. It belongs here, below the map and distances.      */}
        <Reveal delay={100}>
          <div
            className={`mt-12 border-t border-line pt-10 ${isRtl ? "text-right" : ""}`}
          >
            <p className="label">{t.shuttle.eyebrow}</p>

            <div
              className={`mt-4 flex flex-wrap items-start justify-between gap-8 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div className="max-w-[44ch]">
                <h3
                  className={`font-display font-medium italic leading-tight text-espresso
                    text-[1.5rem] sm:text-[1.85rem]`}
                >
                  {t.shuttle.title}
                </h3>
                <p className="mt-3 font-sans text-[13px] leading-relaxed text-espresso/60">
                  {t.shuttle.body}
                </p>
              </div>

              <Link
                href={localePath(locale, "/contact") + "?subject=shuttle"}
                className="shrink-0 border border-espresso/25 px-6 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
              >
                {t.shuttle.request}
              </Link>
            </div>

            {/* Quick facts — brief, no cards */}
            <ul
              className={`mt-7 space-y-1.5 border-t border-line/50 pt-6 ${isRtl ? "text-right" : ""}`}
            >
              <li>
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-taupe">
                  {t.shuttle.paid}
                </span>
                <span className="ml-3 font-sans text-[13px] text-espresso/62">
                  {t.shuttle.advance}
                </span>
              </li>
              <li className="font-sans text-[13px] text-espresso/55">
                {t.shuttle.vehicle}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
