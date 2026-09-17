import type { Metadata } from "next";
import { FaqBlock } from "@/components/hotel/FaqBlock";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.faqTitle,
    description: t.meta.faqDescription,
    alternates: {
      canonical: localePath(locale, "/faq"),
      languages: { en: "/faq", ar: "/ar/faq" },
    },
  };
}

export default async function FaqPage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.faq, path: "/faq" },
          ],
          locale,
        )}
      />
      <JsonLd data={faqLd} />
      <section className="bg-cream px-6 pb-10 pt-14 sm:px-10 lg:px-14">
        <div className={`mx-auto max-w-[1280px] ${locale === "ar" ? "text-right" : ""}`}>
          <p className="label">{t.faq.eyebrow}</p>
          <h1 className="display-heading mt-3 text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.35rem]">
            {t.faq.title}
          </h1>
        </div>
      </section>
      <FaqBlock locale={locale} />
      <BookingCta locale={locale} />
    </>
  );
}
