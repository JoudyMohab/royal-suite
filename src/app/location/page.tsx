import type { Metadata } from "next";
import { LocationBlock } from "@/components/hotel/LocationBlock";
import { Shuttle } from "@/components/hotel/Shuttle";
import { BookingCta } from "@/components/hotel/BookingCta";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.locationTitle,
    description: t.meta.locationDescription,
    alternates: {
      canonical: localePath(locale, "/location"),
      languages: { en: "/location", ar: "/ar/location" },
    },
  };
}

function PageHeader({ eyebrow, title, locale }: { eyebrow: string; title: string; locale: Locale }) {
  const isRtl = locale === "ar";
  return (
    <section className="bg-cream px-6 pb-10 pt-14 sm:px-10 lg:px-14">
      <div className={`mx-auto max-w-[1280px] ${isRtl ? "text-right" : ""}`}>
        <p className="label">{eyebrow}</p>
        <h1 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default async function LocationPage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.location, path: "/location" },
          ],
          locale,
        )}
      />
      <PageHeader eyebrow={t.location.eyebrow} title={t.location.title} locale={locale} />
      <LocationBlock locale={locale} />
      <Shuttle locale={locale} />
      <BookingCta locale={locale} />
    </>
  );
}
