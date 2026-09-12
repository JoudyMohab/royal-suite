import type { Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

export function PropertyDetails({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const groups = [
    {
      title: t.property.general,
      items: [
        t.property.items.check,
        t.property.items.reception,
        t.property.items.elevator,
        t.property.items.nonsmoking,
        t.property.items.parking,
        t.property.items.payments,
      ],
    },
    {
      title: t.property.rooms,
      items: [
        t.property.items.ac,
        t.property.items.kitchenette,
        t.property.items.washer,
        t.property.items.tv,
        t.property.items.wifi,
        t.property.items.tea,
      ],
    },
    {
      title: t.property.services,
      items: [
        t.property.items.house,
        t.property.items.roomService,
        t.property.items.shuttle,
        t.property.items.bags,
      ],
    },
  ];

  return (
    <section className="bg-ivory pb-12 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="label">{t.property.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
          {t.property.title}
        </h2>
        <div className="mt-8 border border-line bg-paper">
          {groups.map((group) => (
            <details key={group.title} className="hotel-details group border-b border-line last:border-b-0">
              <summary className="flex items-center justify-between px-5 py-4 font-sans text-sm font-medium text-espresso">
                {group.title}
                <span className="text-gold group-open:hidden">+</span>
                <span className="hidden text-gold group-open:inline">–</span>
              </summary>
              <ul className="grid gap-2 px-5 pb-5 font-sans text-sm text-espresso/80 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item} className="border-s-2 border-champagne ps-3">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
