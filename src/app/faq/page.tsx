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
      <FaqBlock locale={locale} headingLevel="h1" />
      <BookingCta locale={locale} />
    </>
  );
}
