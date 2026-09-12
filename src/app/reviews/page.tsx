import type { Metadata } from "next";
import { ReviewsBlock } from "@/components/hotel/ReviewsBlock";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.reviewsTitle,
    description: t.meta.reviewsDescription,
    alternates: {
      canonical: localePath(locale, "/reviews"),
      languages: { en: "/reviews", ar: "/ar/reviews" },
    },
  };
}

export default async function ReviewsPage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.reviews, path: "/reviews" },
          ],
          locale,
        )}
      />
      <ReviewsBlock locale={locale} headingLevel="h1" showLink={false} />
      <BookingCta locale={locale} />
    </>
  );
}
