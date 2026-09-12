import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { LocationBlock } from "@/components/hotel/LocationBlock";
import { getRequestLocale } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
    alternates: {
      canonical: localePath(locale, "/contact"),
      languages: { en: "/contact", ar: "/ar/contact" },
    },
  };
}

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.contact, path: "/contact" },
          ],
          locale,
        )}
      />
      <section className="bg-ivory px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl text-espresso">{t.contact.title}</h1>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-espresso/75">
              {t.contact.body}
            </p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <div className="flex justify-between gap-4 py-4 font-sans text-sm">
                <dt className="text-taupe">{t.footer.phone}</dt>
                <dd>
                  <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-4 font-sans text-sm">
                <dt className="text-taupe">{t.footer.whatsapp}</dt>
                <dd>{t.footer.pending}</dd>
              </div>
              <div className="flex justify-between gap-4 py-4 font-sans text-sm">
                <dt className="text-taupe">{t.footer.email}</dt>
                <dd>{t.footer.pending}</dd>
              </div>
              <div className="flex justify-between gap-4 py-4 font-sans text-sm">
                <dt className="text-taupe">Instagram</dt>
                <dd>
                  <a href={siteConfig.social.instagramUrl}>{siteConfig.social.instagram}</a>
                </dd>
              </div>
            </dl>
          </div>
          <form className="border border-line bg-cream p-6">
            <label className="block">
              <span className="label">{t.contact.formName}</span>
              <input
                name="name"
                className="mt-2 w-full border border-line bg-ivory px-3 py-2 font-sans text-sm text-espresso outline-none"
              />
            </label>
            <label className="mt-4 block">
              <span className="label">{t.contact.formEmail}</span>
              <input
                type="email"
                name="email"
                className="mt-2 w-full border border-line bg-ivory px-3 py-2 font-sans text-sm text-espresso outline-none"
              />
            </label>
            <label className="mt-4 block">
              <span className="label">{t.contact.formDates}</span>
              <input
                name="dates"
                className="mt-2 w-full border border-line bg-ivory px-3 py-2 font-sans text-sm text-espresso outline-none"
              />
            </label>
            <label className="mt-4 block">
              <span className="label">{t.contact.formMessage}</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full border border-line bg-ivory px-3 py-2 font-sans text-sm text-espresso outline-none"
              />
            </label>
            <p className="mt-4 font-sans text-[13px] text-taupe">{t.contact.formNote}</p>
            <button
              type="submit"
              className="mt-6 bg-walnut px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper"
            >
              {t.contact.formSubmit}
            </button>
          </form>
        </div>
        <div className="mx-auto mt-12 max-w-[1280px]">
          <AvailabilitySearch locale={locale} />
        </div>
      </section>
      <LocationBlock locale={locale} />
    </>
  );
}
