"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const hasPhotoHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLangNote, setShowLangNote] = useState(false);

  const announceLang = () => {
    setShowLangNote(true);
    window.setTimeout(() => setShowLangNote(false), 2200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !hasPhotoHero || scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "border-b border-champagne/30 bg-ivory/95 backdrop-blur"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={cn(
            "font-body text-sm font-semibold tracking-[0.28em] transition-colors duration-500",
            solid ? "text-espresso" : "text-ivory",
          )}
        >
          ROYAL SUITE
        </Link>

        <nav
          aria-label="Primary"
          className={cn(
            "hidden items-center gap-9 font-body text-[13px] uppercase tracking-[0.14em] transition-colors duration-500 md:flex",
            solid ? "text-espresso" : "text-ivory",
          )}
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={announceLang}
              aria-label="Switch language"
              className={cn(
                "font-body text-[13px] tracking-[0.14em] transition-colors duration-500",
                solid ? "text-espresso/70 hover:text-espresso" : "text-ivory/80 hover:text-ivory",
              )}
            >
              EN / AR
            </button>
            {showLangNote && (
              <p
                role="status"
                className="absolute right-0 top-full mt-3 w-max border border-champagne/40 bg-white px-3 py-2 font-body text-[11px] uppercase tracking-[0.1em] text-espresso/70 shadow-sm"
              >
                Arabic version coming soon
              </p>
            )}
          </div>
          <Link
            href="/contact"
            className={cn(
              "rounded-[2px] px-6 py-2.5 font-body text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-500",
              solid
                ? "bg-sage-deep text-ivory hover:bg-[#566153]"
                : "border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory/10",
            )}
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className={cn("md:hidden", solid ? "text-espresso" : "text-ivory")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-champagne/30 bg-ivory px-6 pb-10 pt-6 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex items-center justify-between border-t border-champagne/30 pt-6">
            <div>
              <button
                type="button"
                onClick={announceLang}
                className="font-body text-[13px] uppercase tracking-[0.14em] text-espresso/70"
              >
                EN / AR
              </button>
              {showLangNote && (
                <p
                  role="status"
                  className="mt-2 font-body text-[11px] uppercase tracking-[0.1em] text-espresso/50"
                >
                  Arabic version coming soon
                </p>
              )}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-[2px] bg-sage-deep px-6 py-3 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-ivory"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
