import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { GalleryLightbox } from "@/components/hotel/GalleryLightbox";
import { photos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

export function GalleryBlock({
  locale,
  headingLevel = "h2",
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const t = getDictionary(locale);
  const Heading = headingLevel;
  const isRtl = locale === "ar";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <p className={`label ${isRtl ? "text-right" : ""}`}>{t.gallery.eyebrow}</p>
          <Heading
            className={`mt-2 font-display text-3xl text-espresso md:text-[2.5rem] ${isRtl ? "text-right" : ""}`}
          >
            {t.gallery.title}
          </Heading>
        </Reveal>

        <Reveal delay={80}>
          <GalleryLightbox locale={locale} />
        </Reveal>

        <Reveal delay={120}>
          <div
            className={`mt-8 flex flex-wrap items-center gap-5 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4 hover:text-walnut-deep"
            >
              {t.gallery.instagram} · {siteConfig.social.instagram}
            </a>
            <Link
              href={localePath(locale, "/gallery")}
              className="font-sans text-sm text-espresso/60 hover:text-espresso"
            >
              {t.nav.gallery}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Asymmetric editorial photo strip — used on the homepage.
 * 5 photos in a mixed-aspect mosaic: one tall left, three stacked middle, one wide right.
 */
export function InstagramStrip({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const isRtl = locale === "ar";

  /* Photos for the mosaic */
  const mosaic = [
    { photo: photos.living, span: "row-span-2", aspect: "aspect-[3/4]" },   // tall left
    { photo: photos.kitchenette, span: "", aspect: "aspect-square" },        // top-middle
    { photo: photos.linen, span: "", aspect: "aspect-square" },              // bottom-middle
    { photo: photos.balcony, span: "col-span-1 row-span-2", aspect: "aspect-[4/3]" }, // right top (wide)
    { photo: photos.bathroom, span: "", aspect: "aspect-square" },           // right bottom
  ];

  return (
    <section className="border-y border-line bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <Reveal>
          <div
            className={`mb-7 flex flex-wrap items-end justify-between gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <div className={isRtl ? "text-right" : ""}>
              <p className="label">{t.gallery.instagram}</p>
              <p className="mt-1 font-sans text-sm text-taupe">
                {siteConfig.social.instagram}
              </p>
            </div>
            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-sm font-medium text-walnut hover:text-walnut-deep underline decoration-champagne underline-offset-4"
            >
              {t.gallery.instagram} →
            </a>
          </div>
        </Reveal>

        {/* Asymmetric mosaic */}
        <Reveal delay={80}>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:grid-rows-2 sm:gap-2">
            {/* Mobile: just a uniform 2-col grid */}
            {mosaic.map(({ photo }, i) => (
              <a
                key={photo.src + i}
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`relative overflow-hidden bg-cream ${
                  i === 0
                    ? "sm:row-span-2"
                    : i === 3
                      ? "col-span-1 hidden sm:block"
                      : ""
                } aspect-square`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
