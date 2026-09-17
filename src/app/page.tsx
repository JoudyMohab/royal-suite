import type { Metadata } from "next";
import { HomePage } from "@/components/hotel/HomePage";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    alternates: { canonical: localePath(locale, "/"), languages: { en: "/", ar: "/ar" } },
  };
}

export default async function Home() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: t.nav.home, path: "/" }], locale)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: t.faq.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <HomePage locale={locale} />
    </>
  );
}
