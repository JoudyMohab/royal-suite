/**
 * THE STAY — Chapter 04 of the homepage.
 *
 * Replaces MoreThanARoom + FeaturedAmenities (two consecutive dark
 * sections) with one warm chapter:
 *
 *   Top:    kitchenette photograph + in-room features from verified
 *           room data, as a typographic list with fine rules.
 *   Bottom: services index beside the linen detail photograph —
 *           numbered, no icons, no cards.
 *
 * "Non-smoking rooms" is a property condition, not an amenity — it is
 * not in the featured list. See amenities.ts.
 */
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { featuredAmenities } from "@/data/amenities";
import { amenityIcons, inRoomIcons } from "@/components/hotel/amenity-icons";
import { Reveal } from "@/components/ui/Reveal";

const inRoomFeatures = [
  "kitchenette",
  "washing-machine",
  "bathroom",
  "ac",
  "wifi",
  "tv",
  "tea-coffee",
] as const;

export function TheStay({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section id="amenities" className="bg-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
        {/* ─── In-room photograph + features ──────────────────── */}
        <div
          className={`grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16 ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          <Reveal
            className={`relative min-h-[300px] overflow-hidden md:min-h-[440px] lg:min-h-[520px] ${
              isRtl ? "lg:col-start-2" : ""
            }`}
          >
            <Image
              src={photos.kitchenette.src}
              alt={photos.kitchenette.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={80} className={isRtl ? "lg:col-start-1 lg:row-start-1" : ""}>
            <p className={`label ${isRtl ? "text-right" : ""}`}>{t.theStay.eyebrow}</p>
            <h2
              className={`display-heading mt-4 text-[1.8rem] leading-[1.14] text-espresso sm:text-[2.2rem] ${
                isRtl ? "text-right" : ""
              }`}
            >
              {t.theStay.inRoomTitle}
            </h2>
            <p
              className={`mt-5 max-w-[44ch] font-sans text-[13px] leading-[1.8] text-espresso/62 ${
                isRtl ? "text-right" : ""
              }`}
            >
              {t.theStay.body}
            </p>
            <ul className={`mt-8 ${isRtl ? "text-right" : ""}`} aria-label={t.theStay.inRoom}>
              {inRoomFeatures.map((feature) => {
                const FeatureIcon = inRoomIcons[feature];
                return (
                  <li
                    key={feature}
                    className="flex items-center gap-4 border-t border-line/70 py-3 last:border-b"
                  >
                    <FeatureIcon
                      className="h-[18px] w-[18px] shrink-0 text-walnut/70"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <span className="font-sans text-[13px] text-espresso/80">
                      {t.theStay.features[feature]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        {/* ─── Services — the numbered index ──────────────────── */}
        <div
          className={`mt-16 grid items-center gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 ${
            isRtl ? "lg:grid-flow-dense" : ""
          }`}
        >
          <Reveal className={`relative min-h-[300px] overflow-hidden md:min-h-[400px] lg:min-h-[480px]`}>
            <Image
              src={photos.linen.src}
              alt={photos.linen.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal delay={80} className={isRtl ? "lg:col-start-1 lg:row-start-1" : ""}>
            <p className={`label ${isRtl ? "text-right" : ""}`}>{t.amenities.eyebrow}</p>
            <h2
              className={`display-heading mt-4 text-[1.8rem] leading-[1.14] text-espresso sm:text-[2.2rem] ${
                isRtl ? "text-right" : ""
              }`}
            >
              {t.amenities.title}
            </h2>
            <ol
              className={`mt-8 ${isRtl ? "text-right" : ""}`}
              aria-label={t.amenities.eyebrow}
            >
              {featuredAmenities.map((item, idx) => {
                const copy = t.amenities.items[item.id];
                const Icon = amenityIcons[item.id];
                return (
                  <li
                    key={item.id}
                    className={`flex items-center gap-4 border-t border-line/70 py-3.5 last:border-b ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className="shrink-0 font-sans text-[10px] font-medium tabular-nums text-taupe/45"
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-[18px] w-[18px] shrink-0 text-walnut/70"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <div>
                      <p className="font-sans text-[13px] font-medium leading-snug text-espresso/85">
                        {copy.title}
                      </p>
                      <p className="mt-0.5 font-sans text-[11px] leading-snug text-taupe/65">
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
