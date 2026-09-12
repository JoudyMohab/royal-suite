"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n/paths";
import { getDictionary } from "@/lib/i18n";
import { TrustBar } from "@/components/layout/TrustBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBookBar } from "@/components/layout/MobileBookBar";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-walnut focus:px-4 focus:py-2 focus:text-paper"
      >
        {t.skip}
      </a>
      <TrustBar locale={locale} />
      <Navbar locale={locale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <MobileBookBar locale={locale} />
    </>
  );
}
