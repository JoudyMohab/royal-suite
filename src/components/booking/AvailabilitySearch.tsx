"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";

type AvailabilitySearchProps = {
  locale: Locale;
  variant?: "hero" | "page";
  formId?: string;
  defaultValues?: {
    checkIn?: string;
    checkOut?: string;
    rooms?: string;
    adults?: string;
    children?: string;
  };
};

const fieldWrap = "px-4 py-3";
const labelClass = "label block";
const inputClass =
  "mt-1.5 w-full bg-transparent font-sans text-sm text-espresso outline-none";

export function AvailabilitySearch({
  locale,
  variant = "page",
  formId,
  defaultValues,
}: AvailabilitySearchProps) {
  const t = getDictionary(locale);
  const router = useRouter();
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  return (
    <form
      id={formId ?? (variant === "hero" ? "availability" : undefined)}
      className={
        variant === "hero"
          ? "w-full bg-ivory sm:my-0 sm:border sm:border-champagne"
          : "w-full border border-champagne bg-ivory"
      }
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const params = new URLSearchParams();
        for (const key of ["checkIn", "checkOut", "rooms", "adults", "children"]) {
          const value = String(data.get(key) ?? "");
          if (value) params.set(key, value);
        }
        router.push(`${localePath(locale, "/rooms")}?${params.toString()}#availability`);
      }}
    >
      <div className="grid grid-cols-2 divide-x divide-y divide-line md:grid-cols-6 md:divide-y-0 rtl:divide-x-reverse">
        <label className={fieldWrap}>
          <span className={labelClass}>{t.booking.checkIn}</span>
          <input
            type="date"
            name="checkIn"
            required
            min={today}
            defaultValue={defaultValues?.checkIn}
            className={inputClass}
          />
        </label>
        <label className={fieldWrap}>
          <span className={labelClass}>{t.booking.checkOut}</span>
          <input
            type="date"
            name="checkOut"
            required
            min={today}
            defaultValue={defaultValues?.checkOut}
            className={inputClass}
          />
        </label>
        <label className={fieldWrap}>
          <span className={labelClass}>{t.booking.rooms}</span>
          <select name="rooms" defaultValue={defaultValues?.rooms ?? "1"} className={inputClass}>
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className={fieldWrap}>
          <span className={labelClass}>{t.booking.adults}</span>
          <select name="adults" defaultValue={defaultValues?.adults ?? "2"} className={inputClass}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className={fieldWrap}>
          <span className={labelClass}>{t.booking.children}</span>
          <select name="children" defaultValue={defaultValues?.children ?? "0"} className={inputClass}>
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="col-span-2 bg-walnut px-4 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep md:col-span-1"
        >
          {t.booking.submit}
        </button>
      </div>
    </form>
  );
}
