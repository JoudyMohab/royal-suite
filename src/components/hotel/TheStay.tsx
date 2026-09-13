/**
 * THE STAY — Chapter 4 of the homepage.
 *
 * This component replaces two separate homepage sections:
 *   MoreThanARoom  (dark espresso background)
 *   FeaturedAmenities  (dark espresso background)
 *
 * Both existed independently and created a double-dark block in the
 * middle of the page — the "dark luxury template" pattern. They are
 * now a single editorial chapter on a warm ivory background.
 *
 * Composition:
 *   Left:  room photograph — daylight suite, different from the
 *          living room photo used in HotelIntroduction.
 *   Right: what's included — short description, hotel stats,
 *          numbered service index.
 *
 * The numbered list ("01 Free Wi-Fi") was carried over from
 * FeaturedAmenities. It is simple, editorial, and functional.
 * No icons. No cards. No colourful grid.
 *
 * Non-smoking rooms is not in the amenities list. See amenities.ts.
 */
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { featuredAmenities } from "@/data/amenities";
import { Reveal } from "@/components/ui/Reveal";

export function TheStay({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section id="amenities" className="bg-ivory overflow-hidden">
      <div className={`grid lg:grid-cols-2 ${isRtl ? "lg:grid-flow-dense" : ""}`}>

        {/* ─── Photograph ────────────────────────────────────── */}
        {/* Using daylight suite — different from the living room */}
        {/* photo in HotelIntroduction. Each section has its own  */}
        {/* visual character.                                      */}
        <div
          className={`relative min-h-[360px] md:min-h-[520px] lg:min-h-0 ${
            isRtl ? "lg:col-start-2" : ""
          }`}
        >
          <Image
            src={photos.daylight.src}
            alt={photos.daylight.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Content ─────────────────────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-18 lg:py-20 ${
            isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""
          }`}
        >
          <Reveal>
            <p className="label">{t.moreThanRoom.eyebrow}</p>
            <h2
              className={`mt-4 font-display font-medium italic leading-[1.1] text-espresso
                text-[1.85rem] sm:text-[2.2rem] lg:text-[2.5rem]`}
            >
              {t.moreThanRoom.title}
            </h2>
            <p className="mt-4 max-w-[40ch] font-sans text-[13px] leading-relaxed text-espresso/62">
              {t.moreThanRoom.body}
            </p>
          </Reveal>

          {/* ─── Hotel stats ─────────────────────────────────── */}
          <Reveal delay={80}>
            <dl
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px bg-line border border-line"
              aria-label="Key hotel facts"
            >
              {t.moreThanRoom.stats.map((stat, i) => (
                <div key={i} className="bg-ivory px-4 py-4">
                  <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-taupe">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display font-medium leading-none text-espresso text-[1.35rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ─── Numbered service list ───────────────────────── */}
          {/* No icons. No cards. A simple typographic index.    */}
          <Reveal delay={120}>
            <ol
              className={`mt-8 ${isRtl ? "text-right" : ""}`}
              aria-label={t.amenities.eyebrow}
            >
              {featuredAmenities.map((item, idx) => {
                const copy = t.amenities.items[item.id];
                return (
                  <li
                    key={item.id}
                    className={`flex gap-4 border-t border-line/50 py-3 first:border-t-0 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className="shrink-0 font-sans text-[10px] font-medium tabular-nums text-taupe/35 mt-0.5"
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-sans text-[12px] font-medium text-espresso/80 leading-snug">
                        {copy.title}
                      </p>
                      <p className="mt-0.5 font-sans text-[11px] text-taupe/60 leading-snug">
                        {copy.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
