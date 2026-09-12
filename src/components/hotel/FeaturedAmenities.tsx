import {
  Ban,
  Bell,
  Briefcase,
  Car,
  Clock,
  Coffee,
  Plane,
  Sparkles,
  Trees,
  Users,
  Utensils,
  WashingMachine,
  Wifi,
} from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { featuredAmenities } from "@/data/amenities";
import { getDictionary } from "@/lib/i18n";
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
  trees: Trees,
  briefcase: Briefcase,
  users: Users,
  ban: Ban,
  coffee: Coffee,
};

export function FeaturedAmenities({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section id="amenities" className="border-y border-line bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <p className={`label ${isRtl ? "text-right" : ""}`}>{t.amenities.eyebrow}</p>
          <h2
            className={`mt-2 font-display text-3xl text-espresso md:text-[2.5rem] ${isRtl ? "text-right" : ""}`}
          >
            {t.amenities.title}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-2 border-s border-t border-line sm:grid-cols-3 lg:grid-cols-4">
            {featuredAmenities.map((item) => {
              const Icon = icons[item.icon];
              const copy = t.amenities.items[item.id];
              return (
                <li
                  key={item.id}
                  className={`border-b border-e border-line bg-paper p-5 ${isRtl ? "text-right" : ""}`}
                >
                  <Icon className="h-5 w-5 text-walnut" strokeWidth={1.35} aria-hidden />
                  <p className="mt-3 font-sans text-sm font-medium text-espresso">
                    {copy.title}
                  </p>
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-taupe">
                    {copy.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
