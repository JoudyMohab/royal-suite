import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

export function Shuttle({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  return (
    <section className="bg-ivory overflow-hidden">
      <div
        className={`mx-auto grid max-w-[1280px] lg:grid-cols-2 ${isRtl ? "lg:grid-flow-dense" : ""}`}
      >
        {/* ─── Photo ─────────────────────────────────────────── */}
        <div
          className={`relative min-h-[300px] md:min-h-[480px] ${isRtl ? "lg:col-start-2" : ""}`}
        >
          <Image
            src={photos.balcony.src}
            alt={photos.balcony.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* ─── Text panel ────────────────────────────────────── */}
        <div
          className={`flex flex-col justify-center border-t border-line bg-paper px-6 py-12 sm:px-10 lg:border-t-0 lg:border-s lg:px-14 lg:py-20 ${isRtl ? "lg:col-start-1 lg:row-start-1 lg:border-s-0 lg:border-e text-right" : ""}`}
        >
          <Reveal>
            <p className="label">{t.shuttle.eyebrow}</p>
            <h2 className="mt-3 font-display text-[2rem] font-medium leading-tight text-espresso md:text-[2.75rem]">
              {t.shuttle.title}
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-espresso/70">
              {t.shuttle.body}
            </p>
            <a
              href={localePath(locale, "/contact") + "?subject=shuttle"}
              className="mt-7 inline-block w-max bg-walnut px-7 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep transition-colors"
            >
              {t.shuttle.request}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 space-y-5 border-t border-line pt-8">
              <li>
                <p className="label">{t.shuttle.paid}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/70">
                  {t.shuttle.advance}
                </p>
              </li>
              <li className="font-sans text-sm leading-relaxed text-espresso/70">
                {t.shuttle.how}
              </li>
              <li className="font-sans text-sm leading-relaxed text-espresso/70">
                {t.shuttle.vehicle}
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
