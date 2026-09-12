import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { GalleryLightbox } from "@/components/hotel/GalleryLightbox";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import { photos } from "@/data/photos";

export function GalleryBlock({
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
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="label">{t.gallery.eyebrow}</p>
        <Heading className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
          {t.gallery.title}
        </Heading>
        <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-espresso/75">
          {t.gallery.intro}
        </p>
        <GalleryLightbox locale={locale} />
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4"
          >
            {t.gallery.instagram} · {siteConfig.social.instagram}
          </a>
          <Link
            href={localePath(locale, "/gallery")}
            className="font-sans text-sm text-espresso/70 hover:text-espresso"
          >
            {t.nav.gallery}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InstagramStrip({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const strip = [photos.twoGuest, photos.kitchenette, photos.balcony, photos.bathroom, photos.linen];

  return (
    <section className="border-y border-line bg-cream py-10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <p className="font-sans text-sm text-espresso/80">{t.gallery.instagram}</p>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="font-sans text-sm font-medium text-walnut"
          >
            {siteConfig.social.instagram}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {strip.map((photo) => (
            <a
              key={photo.src}
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <HotelPhoto photo={photo} className="aspect-square min-h-0" sizes="20vw" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
