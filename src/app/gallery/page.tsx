import type { Metadata } from "next";
import { GalleryLightbox } from "@/components/hotel/GalleryLightbox";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.galleryTitle,
    description: t.meta.galleryDescription,
    alternates: {
      canonical: localePath(locale, "/gallery"),
      languages: { en: "/gallery", ar: "/ar/gallery" },
    },
  };
}

export default async function GalleryPage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.gallery, path: "/gallery" },
          ],
          locale,
        )}
      />
      <section className="bg-cream px-6 pb-12 pt-14 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <p className="label">{t.gallery.eyebrow}</p>
          <h1 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
            {t.gallery.title}
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-[13px] leading-relaxed text-espresso/60">
            {t.gallery.intro}
          </p>
        </div>
      </section>
      <section className="bg-paper px-6 py-12 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <GalleryLightbox locale={locale} />
        </div>
      </section>
      <BookingCta locale={locale} />
    </>
  );
}
