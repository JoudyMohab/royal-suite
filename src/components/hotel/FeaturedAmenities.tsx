import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { featuredAmenities } from "@/data/amenities";
import { amenityIcons } from "@/components/hotel/amenity-icons";
import { getDictionary } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Amenities as an editorial numbered index alongside a room photograph.
 *
 * A numbered list reads as a considered curation.
 * An icon grid reads as a checklist.
 *
 * "Non-smoking rooms" has been removed from featuredAmenities — it is a
 * property condition, not a guest-facing amenity.
 */
export function FeaturedAmenities({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section id="amenities" className="bg-ivory overflow-hidden">
      <div className={`grid lg:grid-cols-[1fr_1fr] ${isRtl ? "lg:grid-flow-dense" : ""}`}>

        {/* ─── Photograph ──────────────────────────────────── */}
        <div
          className={`relative min-h-[320px] md:min-h-[500px] lg:min-h-0 ${isRtl ? "lg:col-start-2" : ""}`}
        >
          <Image
            src={photos.linen.src}
            alt={photos.linen.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Numbered index ──────────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-20 lg:py-20 ${
            isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""
          }`}
        >
          <Reveal>
            <p className="label">{t.amenities.eyebrow}</p>
            <h2 className="display-heading mt-4 text-[1.8rem] leading-[1.14] text-espresso sm:text-[2.2rem]">
              {t.amenities.title}
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <ol
              className={`mt-9 ${isRtl ? "text-right" : ""}`}
              aria-label={t.amenities.eyebrow}
            >
              {featuredAmenities.map((item, idx) => {
                const copy = t.amenities.items[item.id];
                const number = String(idx + 1).padStart(2, "0");
                const Icon = amenityIcons[item.id];
                return (
                  <li
                    key={item.id}
                    className={`flex items-center gap-4 border-t border-line/70 py-4 first:border-t-0 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Number */}
                    <span
                      className="shrink-0 font-sans text-[10px] font-medium tabular-nums text-taupe/45"
                      aria-hidden
                    >
                      {number}
                    </span>
                    {/* Icon */}
                    <Icon
                      className="h-[18px] w-[18px] shrink-0 text-walnut/70"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    {/* Text */}
                    <div>
                      <p className="font-sans text-[13px] font-medium leading-none text-espresso/85">
                        {copy.title}
                      </p>
                      <p className="mt-1 font-sans text-[11px] leading-relaxed text-taupe/65">
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
