import type { Locale } from "@/lib/site-config";
import { getDictionary, localePath } from "@/lib/i18n";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import type { Room } from "@/data/rooms";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { roomPhotos } from "@/data/photos";

export function RoomDetail({ locale, room }: { locale: Locale; room: Room }) {
  const t = getDictionary(locale);
  const gallery = roomPhotos(room.category);

  return (
    <article className="bg-ivory pb-16">
      <div className="grid lg:grid-cols-[1.45fr_1fr]">
        <HotelPhoto
          photo={gallery[0]}
          alt={t.rooms.room(room.number)}
          className="min-h-[46vh] border-0 p-0 lg:min-h-[620px]"
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <div className="flex flex-col justify-end bg-cream px-5 py-10 sm:px-8 lg:px-10">
          <p className="label">{t.rooms.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            {t.rooms.room(room.number)}
          </h1>
          <p className="mt-3 font-sans text-sm text-taupe">
            {t.rooms.guests(room.maxGuests)} · {t.rooms.floor(room.floor)}
          </p>
          <p className="mt-6 font-sans text-[15px] text-espresso/80">{t.rooms.availabilityUnknown}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#availability"
              className="inline-flex bg-walnut px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper hover:bg-walnut-deep"
            >
              {t.rooms.bookThis}
            </a>
            <a
              href={localePath(locale, "/contact")}
              className="inline-flex border border-champagne px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.14em]"
            >
              {t.booking.enquire}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1280px] gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-espresso">{t.rooms.features}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {room.features.map((feature) => (
              <li
                key={feature}
                className="border border-line bg-paper px-4 py-3 font-sans text-sm text-espresso/80"
              >
                {t.rooms.featureLabels[feature as keyof typeof t.rooms.featureLabels]}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-sans text-[13px] leading-relaxed text-taupe">
            {t.rooms.verifiedNote}
          </p>
        </div>
        <div className="border border-line bg-paper p-6">
          <h2 className="font-display text-2xl text-espresso">{t.rooms.rateOptions}</h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-espresso/80">
            {t.rooms.availabilityUnknown}
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/80">
            {t.rooms.cancellation}
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-espresso/80">
            {t.rooms.breakfast}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1280px] px-4 sm:px-6">
        <h2 className="font-display text-2xl text-espresso">{t.rooms.gallery}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo) => (
            <HotelPhoto
              key={photo.src}
              photo={photo}
              alt={`${t.rooms.room(room.number)}`}
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          ))}
        </div>
        <div className="mt-10">
          <AvailabilitySearch locale={locale} formId="availability" />
        </div>
      </div>
    </article>
  );
}
