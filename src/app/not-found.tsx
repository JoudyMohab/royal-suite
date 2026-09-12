import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getRequestLocale } from "@/lib/locale";
import { getDictionary, localePath } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1280px] flex-col items-start justify-center px-6 py-20">
      <p className="label">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium text-espresso sm:text-5xl">
        {t.notFound.title}
      </h1>
      <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-espresso/70">
        {t.notFound.body}
      </p>
      <Button href={localePath(locale, "/")} variant="primary" className="mt-8">
        {t.notFound.back}
      </Button>
    </section>
  );
}
