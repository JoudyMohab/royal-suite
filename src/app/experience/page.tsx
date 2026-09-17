import type { Metadata } from "next";
import { FeaturedAmenities } from "@/components/hotel/FeaturedAmenities";
import { HotelInformation } from "@/components/hotel/HotelInformation";
import { PropertyDetails } from "@/components/hotel/PropertyDetails";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import { photos } from "@/data/photos";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.experienceTitle,
    description: t.meta.experienceDescription,
    alternates: {
      canonical: localePath(locale, "/experience"),
      languages: { en: "/experience", ar: "/ar/experience" },
    },
  };
}

export default async function ExperiencePage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.experience, path: "/experience" },
          ],
          locale,
        )}
      />
      <section className="grid border-b border-line lg:grid-cols-[1.1fr_0.9fr]">
        <HotelPhoto photo={photos.frontDesk} className="min-h-[240px] border-0 p-0 lg:min-h-[300px]" />
        <div className="bg-cream px-4 py-10 sm:px-8">
          <p className="label">{t.nav.experience}</p>
          <h1 className="display-heading mt-3 max-w-[22ch] text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.3rem]">
            {t.experience.title}
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-[14px] leading-relaxed text-espresso/70">
            {t.experience.body}
          </p>
        </div>
      </section>
      <FeaturedAmenities locale={locale} />
      <HotelInformation locale={locale} />
      <PropertyDetails locale={locale} />
      <BookingCta locale={locale} />
    </>
  );
}
