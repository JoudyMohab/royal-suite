import Link from "next/link";
import type { Locale } from "@/lib/site-config";
import { rooms, type Room, type RoomCategory } from "@/data/rooms";
import { getDictionary, localePath } from "@/lib/i18n";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import { roomPhotos } from "@/data/photos";

const categoryPhoto = {
  "two-guest": roomPhotos("two-guest")[0],
  "three-guest": roomPhotos("three-guest")[0],
  family: roomPhotos("family")[0],
};

export function RoomsPreview({
  locale,
  headingLevel = "h2",
  variant = "all",
  hideHeader = false,
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
  variant?: "home" | "all";
  hideHeader?: boolean;
}) {
  const t = getDictionary(locale);
  const Heading = headingLevel;
  const groups: { id: RoomCategory; title: string; body: string; list: Room[] }[] = [
    {
      id: "two-guest",
      title: t.rooms.twoGuest,
      body: t.rooms.twoGuestBody,
      list: rooms.filter((room) => room.category === "two-guest"),
    },
    {
      id: "three-guest",
      title: t.rooms.threeGuest,
      body: t.rooms.threeGuestBody,
      list: rooms.filter((room) => room.category === "three-guest"),
    },
    {
      id: "family",
      title: t.rooms.family,
      body: t.rooms.familyBody,
      list: rooms.filter((room) => room.category === "family"),
    },
  ];

  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {!hideHeader ? (
          <>
            <p className="label">{t.rooms.eyebrow}</p>
            <Heading className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
              {variant === "home" ? t.rooms.homeTitle : t.rooms.title}
            </Heading>
            <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-espresso/75">
              {t.rooms.intro}
            </p>
          </>
        ) : null}

        <div className={hideHeader ? "space-y-8" : "mt-10 space-y-8"}>
          {groups.map((group) => (
            <article
              key={group.id}
              className="grid overflow-hidden border border-line bg-paper lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]"
            >
              <HotelPhoto
                photo={categoryPhoto[group.id]}
                alt={group.title}
                className="min-h-[260px] lg:min-h-[340px]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-3xl text-espresso">{group.title}</h3>
                  <p className="mt-2 font-sans text-sm text-taupe">{group.body}</p>
                  <p className="mt-4 font-sans text-sm text-espresso/80">
                    {t.rooms.guests(group.list[0].maxGuests)} · {t.rooms.availabilityUnknown}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.list.map((room) => (
                      <li key={room.number}>
                        <Link
                          href={localePath(locale, `/rooms/${room.slug}`)}
                          className="inline-block border border-line px-3 py-1.5 font-sans text-[13px] text-espresso hover:border-champagne"
                        >
                          {t.rooms.room(room.number)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                    className="border border-champagne px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso hover:bg-cream"
                  >
                    {t.rooms.viewRoom}
                  </Link>
                  <Link
                    href={`${localePath(locale, "/rooms")}#availability`}
                    className="bg-walnut px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-paper hover:bg-walnut-deep"
                  >
                    {t.rooms.bookNow}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {variant === "home" ? (
          <p className="mt-8">
            <Link
              href={localePath(locale, "/rooms")}
              className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4"
            >
              {t.rooms.seeAll}
            </Link>
          </p>
        ) : (
          <p className="mt-8 max-w-3xl font-sans text-[13px] leading-relaxed text-taupe">
            {t.rooms.verifiedNote}
          </p>
        )}
      </div>
    </section>
  );
}
