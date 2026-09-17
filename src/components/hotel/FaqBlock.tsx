import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

/**
 * CHAPTER 08 — QUESTIONS
 *
 * A quiet editorial accordion on ivory. answers only from verified
 * property data. Fine rules, no cards, no decoration.
 */
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
    <section className="bg-ivory py-16 md:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-6 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14">
        <div>
          <p className="label">{t.faq.eyebrow}</p>
          <Heading className="display-heading mt-3 text-[1.7rem] leading-[1.14] text-espresso sm:text-[2rem]">
            {t.faq.title}
          </Heading>
        </div>
        <div className="border-t border-line">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="hotel-details group border-b border-line last:border-b-0"
            >
              <summary className="flex items-start justify-between gap-4 py-4 font-sans text-[14px] font-medium text-espresso transition-colors hover:text-walnut">
                {item.q}
                <span
                  className="mt-0.5 shrink-0 font-sans text-[14px] font-normal text-gold transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-5 font-sans text-[13px] leading-[1.8] text-espresso/72">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
