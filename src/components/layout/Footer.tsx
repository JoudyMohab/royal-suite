import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();

  const explore = [
    { href: "/rooms", label: t.nav.rooms },
    { href: "/experience", label: t.nav.amenities },
    { href: "/location", label: t.nav.location },
    { href: "/reviews", label: t.nav.reviews },
    { href: "/faq", label: t.nav.faq },
    { href: "/gallery", label: t.nav.gallery },
  ];

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">{t.brand.full}</p>
          <address className="mt-4 font-sans text-sm not-italic leading-relaxed text-espresso/75">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.country}
          </address>
        </div>

        <div>
          <p className="label">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2 font-sans text-sm text-espresso/80">
            <li>
              {t.footer.phone}:{" "}
              <a href={siteConfig.contact.phoneHref} className="hover:text-espresso">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              {t.footer.whatsapp}: {t.footer.pending}
            </li>
            <li>
              {t.footer.email}: {t.footer.pending}
            </li>
          </ul>
        </div>

        <div>
          <p className="label">{t.footer.explore}</p>
          <nav className="mt-4 flex flex-col gap-2 font-sans text-sm">
            {explore.map((item) => (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                className="w-max text-espresso/80 hover:text-espresso"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="label">{t.footer.book}</p>
          <Link
            href={`${localePath(locale, "/rooms")}#availability`}
            className="mt-4 inline-flex bg-walnut px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep"
          >
            {t.nav.checkAvailability}
          </Link>
          <p className="mt-6 label">{t.footer.social}</p>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-3 inline-block font-sans text-sm text-espresso/80 hover:text-espresso"
          >
            {siteConfig.social.instagram}
          </a>
          <p className="mt-6 font-sans text-sm text-taupe">
            <Link
              href={localePath(locale === "en" ? "ar" : "en", "/")}
              className="hover:text-espresso"
            >
              EN / AR
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-[1280px] font-sans text-xs text-taupe">
          © {year} {siteConfig.name}, {siteConfig.address.line2}.
        </p>
      </div>
    </footer>
  );
}
