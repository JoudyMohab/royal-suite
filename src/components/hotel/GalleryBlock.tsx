import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { GalleryLightbox } from "@/components/hotel/GalleryLightbox";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

/**
 * CHAPTER 07 — DISCOVER
 *
 * Editorial mosaic: tall hero image left, stacked details, wide
 * balcony view. Clicking any photograph opens the full lightbox with
 * the whole gallery — the strip is an entrance, not a container.
 */
export function GalleryDiscover({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  /*
   * Mosaic — ordered to mirror the lightbox indices it opens.
   *
   * The proportion changes deliberately across the strip: a dominant
   * interior over two rows, one wide detail, then three small square
   * details beneath. Phone: a full-width lead with a two-column tail.
   */
  const mosaic = [
    { photo: photos.living, class: "col-span-2 aspect-[4/3] sm:col-span-3 sm:row-span-2 sm:aspect-auto" },
    { photo: photos.kitchenette, class: "aspect-[4/3] sm:col-span-3 sm:aspect-auto" },
    { photo: photos.linen, class: "aspect-[4/3] sm:col-span-1 sm:aspect-auto" },
    { photo: photos.balcony, class: "aspect-[4/3] sm:col-span-1 sm:aspect-auto" },
    { photo: photos.bathroom, class: "aspect-[4/3] sm:col-span-1 sm:aspect-auto" },
  ];

  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <Reveal>
          <div
            className={`flex flex-wrap items-end justify-between gap-4 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <div className={isRtl ? "text-right" : ""}>
              <p className="label">{t.discover.eyebrow}</p>
              <h2 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
                {t.discover.title}
              </h2>
            </div>
            <Link
              href={localePath(locale, "/gallery")}
              className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/70 underline decoration-champagne underline-offset-8 transition-colors hover:text-espresso"
            >
              {t.discover.viewGallery} →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <GalleryLightbox locale={locale} mosaic={mosaic} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
