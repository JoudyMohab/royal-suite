"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/site-config";
import { navItems } from "@/lib/site-config";
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
  const isRtl = locale === "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ivory">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-4 py-3.5 sm:px-6 ${isRtl ? "flex-row-reverse" : ""}`}
      >
        {/* ─── Hotel identity — left ───────────────────────── */}
        <Link
          href={localePath(locale, "/")}
          className="min-w-0 shrink-0"
          aria-label={t.brand.name}
        >
          <span className="block font-display text-[1.15rem] font-medium leading-none tracking-tight text-espresso">
            {t.brand.name}
          </span>
          <span
            className={`mt-1 block font-sans text-[8px] font-medium uppercase tracking-[0.22em] text-taupe/70 ${isRtl ? "text-right" : ""}`}
          >
            {t.brand.city}
          </span>
        </Link>

        {/* ─── Primary navigation — center ────────────────── */}
        <nav
          aria-label="Primary"
          className={`hidden items-center gap-5 lg:flex xl:gap-7 ${isRtl ? "flex-row-reverse" : ""}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={localePath(locale, item.href)}
              className={cn(
                "font-sans text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors",
                current === item.href || current.startsWith(`${item.href}/`)
                  ? "text-espresso"
                  : "text-espresso/55 hover:text-espresso",
              )}
            >
              {t.nav[navKeys[item.id]]}
            </Link>
          ))}
        </nav>

        {/* ─── Utility — right ────────────────────────────── */}
        <div
          className={`hidden items-center gap-5 lg:flex ${isRtl ? "flex-row-reverse" : ""}`}
        >
          <Link
            href={langHref}
            hrefLang={otherLocale}
            className="font-sans text-[10px] font-medium tracking-[0.1em] text-taupe/75 hover:text-espresso"
          >
            {locale === "en" ? "EN / AR" : "ع / EN"}
          </Link>
          <Link
            href={`${localePath(locale, "/rooms")}#availability`}
            className="border border-espresso/30 bg-ivory px-4 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
          >
            {t.nav.checkAvailability}
          </Link>
        </div>

        {/* ─── Mobile hamburger ───────────────────────────── */}
        <button
          type="button"
          className="lg:hidden text-espresso/70 hover:text-espresso"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ─── Mobile drawer ──────────────────────────────── */}
      {open && (
        <div className="border-t border-line/60 bg-ivory px-4 py-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={localePath(locale, item.href)}
                onClick={() => setOpen(false)}
                className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  isRtl ? "text-right" : ""
                } text-espresso/80 hover:text-espresso`}
              >
                {t.nav[navKeys[item.id]]}
              </Link>
            ))}
          </nav>
          <div
            className={`mt-6 flex items-center justify-between border-t border-line/60 pt-5 ${isRtl ? "flex-row-reverse" : ""}`}
          >
            <Link
              href={langHref}
              className="font-sans text-[10px] font-medium tracking-[0.1em] text-taupe/80"
            >
              {locale === "en" ? "العربية" : "English"}
            </Link>
            <Link
              href={`${localePath(locale, "/rooms")}#availability`}
              onClick={() => setOpen(false)}
              className="border border-espresso/30 px-4 py-2 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso"
            >
              {t.nav.checkAvailability}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function LocaleFromPath() {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
