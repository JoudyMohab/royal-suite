import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

export function FaqBlock({
  locale,
  headingLevel = "h2",
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const t = getDictionary(locale);
  const Heading = headingLevel;

  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="label">{t.faq.eyebrow}</p>
          <Heading className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
            {t.faq.title}
          </Heading>
        </div>
        <div className="border-y border-line">
          {t.faq.items.map((item) => (
            <details key={item.q} className="hotel-details group border-b border-line last:border-b-0">
              <summary className="flex items-start justify-between gap-4 py-4 font-sans text-[15px] font-medium text-espresso">
                {item.q}
                <span className="text-gold group-open:hidden">+</span>
                <span className="hidden text-gold group-open:inline">–</span>
              </summary>
              <p className="max-w-3xl pb-4 font-sans text-sm leading-relaxed text-espresso/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
