import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";

export function BookingCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section className="border-t border-line bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <h2 className="font-display text-3xl text-espresso md:text-[2.5rem]">{t.cta.title}</h2>
        <p className="mt-3 max-w-xl font-sans text-[15px] text-espresso/75">{t.cta.body}</p>
        <div className="mt-8">
          <AvailabilitySearch locale={locale} />
        </div>
      </div>
    </section>
  );
}
