import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function MoreThanARoom({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div
          className={`grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20 ${isRtl ? "text-right" : ""}`}
        >
          {/* Left: editorial headline + body */}
          <Reveal>
            <p
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne/70"
              aria-hidden
            >
              {t.moreThanRoom.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[2.75rem] font-medium leading-[1.05] text-paper sm:text-[3.5rem] lg:text-[4rem]">
              {t.moreThanRoom.title}
            </h2>
            <p className="mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-paper/65">
              {t.moreThanRoom.body}
            </p>
          </Reveal>

          {/* Right: stat grid */}
          <Reveal delay={120} className="shrink-0">
            <dl
              className={`grid grid-cols-2 gap-px bg-paper/10 sm:grid-cols-4 lg:grid-cols-2 ${isRtl ? "text-right" : ""}`}
            >
              {t.moreThanRoom.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-espresso px-6 py-5 sm:px-8 lg:px-6"
                >
                  <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne/60">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-[2.25rem] leading-none text-paper">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
