/**
 * CAIRO CHAPTER — Chapter 05 of the homepage.
 *
 * Location + airport arrival as one geographic story:
 *   1. "Your base in Cairo" — where we are
 *   2. The map — the visual anchor
 *   3. What is nearby — verified distances only
 *   4. "Arrive with ease" — the airport shuttle, integrated
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
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
        {/* ─── Section heading ─────────────────────────────── */}
        <Reveal>
          <div
            className={`flex flex-wrap items-end justify-between gap-5 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <div className={isRtl ? "text-right" : ""}>
              <p className="label">{t.location.eyebrow}</p>
              <h2 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
                {t.location.title}
              </h2>
            </div>
            <address
              className={`font-sans text-[12px] not-italic leading-relaxed text-taupe ${
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
              className="h-[280px] w-full sm:h-[360px] md:h-[440px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* ─── Verified distances ──────────────────────────── */}
        <Reveal delay={80}>
          <ul className="grid border-x border-b border-line sm:grid-cols-3">
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
                <p className="mt-2 font-display text-[1.9rem] font-medium leading-none text-espresso sm:text-[2.15rem]">
                  {place.distance}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ─── Arrive with ease ────────────────────────────── */}
        <Reveal delay={100}>
          <div className={`mt-14 border-t border-line pt-10 ${isRtl ? "text-right" : ""}`}>
            <p className="label">{t.shuttle.eyebrow}</p>
            <div
              className={`mt-4 flex flex-wrap items-start justify-between gap-8 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div className="max-w-[46ch]">
                <h3 className="display-heading text-[1.5rem] leading-tight text-espresso sm:text-[1.8rem]">
                  {t.shuttle.title}
                </h3>
                <p className="mt-3 font-sans text-[13px] leading-[1.8] text-espresso/60">
                  {t.shuttle.body}
                </p>
              </div>
              <Link
                href={localePath(locale, "/contact") + "?subject=shuttle"}
                className="shrink-0 border border-espresso/30 px-6 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
              >
                {t.shuttle.request}
              </Link>
            </div>

            <ul
              className={`mt-8 space-y-2 border-t border-line/60 pt-6 ${
                isRtl ? "text-right" : ""
              }`}
            >
              <li className="font-sans text-[12px] leading-relaxed text-espresso/60">
                <span className="mr-3 font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-taupe">
                  {t.shuttle.paid}
                </span>
                {t.shuttle.advance}
              </li>
              <li className="font-sans text-[12px] leading-relaxed text-espresso/55">
                {t.shuttle.vehicle}
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
