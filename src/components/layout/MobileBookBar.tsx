"use client";

import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";

export function MobileBookBar({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory p-3 md:hidden">
      <Link
        href={`${localePath(locale, "/rooms")}#availability`}
        className="flex w-full items-center justify-center bg-espresso py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-walnut"
      >
        {t.mobileBook}
      </Link>
    </div>
  );
}
