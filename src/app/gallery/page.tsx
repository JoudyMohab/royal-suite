import type { Metadata } from "next";
import { GalleryBlock } from "@/components/hotel/GalleryBlock";
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
      <GalleryBlock locale={locale} headingLevel="h1" />
      <BookingCta locale={locale} />
    </>
  );
}
