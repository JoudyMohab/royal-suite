import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

export function HotelIntroduction({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const { reviews } = siteConfig;
  const isRtl = locale === "ar";

  return (
    <section className="bg-ivory overflow-hidden">
      <div
        className={`mx-auto grid max-w-none lg:grid-cols-[1fr_1fr] ${isRtl ? "lg:grid-flow-dense" : ""}`}
      >
        {/* ─── Photograph — fills its column ───────────────── */}
        <div
          className={`relative min-h-[420px] md:min-h-[560px] lg:min-h-[680px] ${isRtl ? "lg:col-start-2" : ""}`}
        >
          <Image
            src={photos.living.src}
            alt={photos.living.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Editorial copy ───────────────────────────────── */}
        <div
          className={`flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-20 lg:py-20 ${isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""}`}
        >
          <Reveal>
            <p className="label">{t.hotelIntro.eyebrow}</p>
            {/*
             * Headline reduced from 4.25rem to 2.75rem max.
             * The large hotel photograph on the left is the statement.
             * The headline is a specific, quiet caption — not a slogan.
             * Bodoni italic at 2.75rem is refined. At 4.25rem it becomes
             * the same "giant serif luxury" pattern we are avoiding.
             */}
            <h2
              className={`mt-4 font-display font-medium italic leading-[1.1] text-espresso
                text-[1.85rem]
                sm:text-[2.25rem]
                lg:text-[2.75rem]`}
            >
              {t.hotelIntro.title1}
              <br />
              {t.hotelIntro.title2}
            </h2>
            <p className="mt-5 max-w-[38ch] font-sans text-[14px] leading-[1.75] text-espresso/65">
              {t.hotelIntro.body}
            </p>
          </Reveal>

          {/* Facts strip */}
          <Reveal delay={100}>
            <dl className="mt-9 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
              {t.hotelIntro.facts.map((fact) => (
                <div key={fact.label} className="bg-ivory px-5 py-5">
                  <dt className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-taupe">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.5rem] leading-none text-espresso">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ─── Trust signal ──────────────────────────────── */}
          {/* Presented as hotel credibility, not a dashboard. */}
          <Reveal delay={140}>
            <div
              className={`mt-8 border-t border-line pt-6 flex items-baseline gap-3 ${isRtl ? "flex-row-reverse justify-end" : ""}`}
            >
              <span className="font-display font-medium leading-none text-espresso text-[2rem]">
                {reviews.score.toFixed(1)}
              </span>
              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-taupe">
                / 10 · {reviews.label}
              </span>
              <span className="font-sans text-[11px] text-taupe/60">
                · {t.trust.reviews}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
