import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="border-t border-line bg-walnut-deep py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <h2
            className={`font-display text-[2rem] font-medium text-paper md:text-[2.75rem] ${isRtl ? "text-right" : ""}`}
          >
            {t.cta.title}
          </h2>
          <p
            className={`mt-3 max-w-xl font-sans text-[15px] leading-relaxed text-paper/65 ${isRtl ? "text-right" : ""}`}
          >
            {t.cta.body}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8">
            <AvailabilitySearch locale={locale} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
