import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { photos } from "@/data/photos";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section>
      <div className="relative min-h-[78vh]">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 max-w-[640px] border-t border-champagne bg-ivory p-6 sm:p-8 lg:start-10 lg:bottom-10 lg:end-auto lg:border">
          <p className="label">{t.hero.kicker}</p>
          <h1 className="mt-3 font-display text-[2.35rem] font-medium leading-[1.08] text-espresso sm:text-5xl">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-espresso/75">
            {t.hero.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#availability"
              className="bg-walnut px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep"
            >
              {t.hero.cta}
            </a>
            <Link
              href={localePath(locale, "/rooms")}
              className="border border-champagne px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-espresso hover:bg-cream"
            >
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-y border-champagne bg-cream">
        <div className="mx-auto max-w-[1280px] sm:px-6">
          <AvailabilitySearch locale={locale} variant="hero" />
        </div>
      </div>
    </section>
  );
}
