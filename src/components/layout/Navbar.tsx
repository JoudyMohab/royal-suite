"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { navItems, siteConfig } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { getLocaleFromPathname, stripLocale } from "@/lib/i18n/paths";
import { cn } from "@/lib/cn";

const navKeys = {
  rooms: "rooms",
  experience: "experience",
  amenities: "amenities",
  location: "location",
  reviews: "reviews",
  faq: "faq",
} as const;

export function Navbar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = stripLocale(pathname);
  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const langHref = localePath(otherLocale, current);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={localePath(locale, "/")} className="min-w-0">
          <span className="block font-display text-[1.35rem] leading-none text-espresso">
            {t.brand.name}
          </span>
          <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.18em] text-gold">
            {t.brand.city}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={localePath(locale, item.href)}
              className={cn(
                "font-sans text-[13px] text-espresso/70 hover:text-espresso",
                current === item.href || current.startsWith(`${item.href}/`)
                  ? "text-espresso"
                  : "",
              )}
            >
              {t.nav[navKeys[item.id]]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden font-sans text-[13px] text-espresso/75 hover:text-espresso xl:inline"
          >
            {siteConfig.contact.phone}
          </a>
          <Link
            href={langHref}
            hrefLang={otherLocale}
            className="font-sans text-[12px] tracking-[0.08em] text-taupe hover:text-espresso"
          >
            {locale === "en" ? "EN / AR" : "ع / EN"}
          </Link>
          <Link
            href={`${localePath(locale, "/rooms")}#availability`}
            className="bg-walnut px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep"
          >
            {t.nav.checkAvailability}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-ivory px-4 py-5 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={localePath(locale, item.href)}
                onClick={() => setOpen(false)}
                className="font-sans text-lg text-espresso"
              >
                {t.nav[navKeys[item.id]]}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <Link href={langHref} className="font-sans text-sm text-taupe">
              {locale === "en" ? "العربية" : "English"}
            </Link>
            <Link
              href={`${localePath(locale, "/rooms")}#availability`}
              onClick={() => setOpen(false)}
              className="bg-walnut px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper"
            >
              {t.nav.checkAvailability}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function LocaleFromPath() {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
