import {
  Bell,
  Car,
  Clock,
  Plane,
  Sparkles,
  Utensils,
  WashingMachine,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { featuredAmenities } from "@/data/amenities";
import { getDictionary } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  wifi: Wifi,
  car: Car,
  plane: Plane,
  clock: Clock,
  utensils: Utensils,
  sparkles: Sparkles,
  "washing-machine": WashingMachine,
  bell: Bell,
} as const;

export function FeaturedAmenities({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section id="amenities" className="bg-espresso overflow-hidden">
      <div
        className={`grid lg:grid-cols-[1fr_1fr] ${isRtl ? "lg:grid-flow-dense" : ""}`}
      >
        {/* ─── Photograph ─────────────────────────────────────── */}
        <div
          className={`relative min-h-[320px] md:min-h-[480px] lg:min-h-0 ${isRtl ? "lg:col-start-2" : ""}`}
        >
          <Image
            src={photos.linen.src}
            alt={photos.linen.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Amenity list ────────────────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-20 lg:py-20 ${
            isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""
          }`}
        >
          <Reveal>
            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne/65">
              {t.amenities.eyebrow}
            </p>
            <h2
              className={`mt-4 font-display font-medium leading-[1.05] text-paper
                text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem]`}
            >
              {t.amenities.title}
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <ul
              className={`mt-8 divide-y divide-paper/10 ${isRtl ? "text-right" : ""}`}
            >
              {featuredAmenities.map((item) => {
                const iconKey = item.icon as keyof typeof icons;
                const Icon = icons[iconKey];
                if (!Icon) return null;
                const copy = t.amenities.items[item.id];
                return (
                  <li
                    key={item.id}
                    className={`flex items-center gap-4 py-4 ${isRtl ? "flex-row-reverse" : ""}`}
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-champagne/60"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <p className="font-sans text-[13px] font-medium text-paper/90">
                        {copy.title}
                      </p>
                      <p className="font-sans text-[12px] text-paper/45">
                        {copy.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
