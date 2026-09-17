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
      <section className="bg-cream px-6 pb-10 pt-14 sm:px-10 lg:px-14">
        <div className={`mx-auto max-w-[1280px] ${locale === "ar" ? "text-right" : ""}`}>
          <p className="label">{t.reviews.eyebrow}</p>
          <h1 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
            {t.reviews.title}
          </h1>
        </div>
      </section>
      <ReviewsBlock locale={locale} showLink={false} />
      <BookingCta locale={locale} />
    </>
  );
}
