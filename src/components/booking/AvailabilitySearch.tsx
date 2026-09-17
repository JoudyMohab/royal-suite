"use client";

import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";

type AvailabilitySearchProps = {
  locale: Locale;
  defaultValues?: {
    checkIn?: string;
    checkOut?: string;
    rooms?: string;
    guests?: string;
  };
};

/**
 * The reservation desk.
 *
 * Flat fields separated by hairlines, quiet uppercase labels, square
 * corners. No pills, no shadows, no glass. Guests is a single field —
 * internal occupancy math (adults/children) stays in the data layer.
 *
 * The desk deliberately carries no element id: several pages render
 * more than one of these, and `#availability` is placed by each page on
 * the wrapper of its own primary desk so the anchor is never duplicated.
 */
export function AvailabilitySearch({
  locale,
  defaultValues,
}: AvailabilitySearchProps) {
  const t = getDictionary(locale);
  const router = useRouter();

  /**
   * Server render and hydration must agree, so "today" is read from an
   * external store: empty on the server, the real date on the client.
   */
  const emptyDate = "";
  const today = useSyncExternalStore(
    () => () => {},
    () => new Date().toISOString().slice(0, 10),
    () => emptyDate,
  );

  return (
    <form
      className="w-full border border-line bg-ivory"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const params = new URLSearchParams();
        for (const key of ["checkIn", "checkOut", "rooms", "guests"]) {
          const value = String(data.get(key) ?? "");
          if (value) params.set(key, value);
        }
        router.push(`${localePath(locale, "/rooms")}?${params.toString()}#availability`);
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-5">
        {/* Check-in */}
        <label className="border-b border-e border-line px-4 py-3.5 md:border-b-0">
          <span className="label block">{t.booking.checkIn}</span>
          <input
            type="date"
            name="checkIn"
            required
            min={today}
            defaultValue={defaultValues?.checkIn}
            className="mt-1.5 w-full bg-transparent font-sans text-sm text-espresso outline-none"
          />
        </label>

        {/* Check-out */}
        <label className="border-b border-line px-4 py-3.5 md:border-b-0 md:border-e">
          <span className="label block">{t.booking.checkOut}</span>
          <input
            type="date"
            name="checkOut"
            required
            min={today}
            defaultValue={defaultValues?.checkOut}
            className="mt-1.5 w-full bg-transparent font-sans text-sm text-espresso outline-none"
          />
        </label>

        {/* Rooms */}
        <label className="border-b border-e border-line px-4 py-3.5 md:border-b-0 rtl:border-e-0 rtl:border-s">
          <span className="label block">{t.booking.rooms}</span>
          <select
            name="rooms"
            defaultValue={defaultValues?.rooms ?? "1"}
            className="mt-1.5 w-full bg-transparent font-sans text-sm text-espresso outline-none"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        {/* Guests */}
        <label className="border-b border-line px-4 py-3.5 md:border-b-0">
          <span className="label block">{t.booking.guests}</span>
          <select
            name="guests"
            defaultValue={defaultValues?.guests ?? "2"}
            className="mt-1.5 w-full bg-transparent font-sans text-sm text-espresso outline-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="col-span-2 bg-espresso px-4 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-walnut md:col-span-1"
        >
          {t.booking.submit}
        </button>
      </div>
    </form>
  );
}
