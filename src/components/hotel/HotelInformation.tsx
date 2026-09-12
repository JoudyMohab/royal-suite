import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

export function HotelInformation({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const rows = [
    { label: t.info.checkIn, value: t.info.checkInValue, note: t.info.checkInNote },
    { label: t.info.checkOut, value: t.info.checkOutValue },
    { label: t.info.frontDesk, value: t.info.frontDeskValue },
    { label: t.info.parking, value: t.info.parkingValue },
    { label: t.info.shuttle, value: t.info.shuttleValue },
    { label: t.info.breakfast, value: t.info.breakfastValue },
  ];

  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="label">{t.info.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">{t.info.title}</h2>
        <dl className="mt-8 grid grid-cols-2 border-s border-t border-line lg:grid-cols-6">
          {rows.map((row) => (
            <div key={row.label} className="border-b border-e border-line p-5">
              <dt className="label">{row.label}</dt>
              <dd className="mt-3 font-display text-[1.45rem] leading-tight text-espresso">
                {row.value}
              </dd>
              {row.note ? (
                <p className="mt-2 hidden font-sans text-[12px] leading-relaxed text-taupe lg:block">
                  {row.note}
                </p>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
