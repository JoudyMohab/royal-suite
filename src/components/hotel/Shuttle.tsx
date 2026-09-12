import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import { photos } from "@/data/photos";

export function Shuttle({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <section className="border-y border-line bg-cream py-12 md:py-16">
      <div className="mx-auto grid max-w-[1280px] lg:grid-cols-2">
        <HotelPhoto
          photo={photos.balcony}
          className="min-h-[280px] border-0 p-0 lg:min-h-[420px]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="flex flex-col justify-center px-5 py-8 sm:px-10">
          <p className="label">{t.shuttle.eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
            {t.shuttle.title}
          </h2>
          <p className="mt-4 max-w-xl font-sans text-[15px] leading-relaxed text-espresso/80">
            {t.shuttle.body}
          </p>
          <a
            href={localePath(locale, "/contact") + "?subject=shuttle"}
            className="mt-6 inline-flex w-max bg-walnut px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep"
          >
            {t.shuttle.request}
          </a>
          <ul className="mt-8 space-y-4 border-t border-line pt-6">
            <li>
              <p className="label">{t.shuttle.paid}</p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-espresso/80">
                {t.shuttle.advance}
              </p>
            </li>
            <li className="font-sans text-sm leading-relaxed text-espresso/80">{t.shuttle.how}</li>
            <li className="font-sans text-sm leading-relaxed text-espresso/80">
              {t.shuttle.vehicle}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
