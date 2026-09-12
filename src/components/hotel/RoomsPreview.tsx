import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site-config";
import { rooms, type Room, type RoomCategory } from "@/data/rooms";
import { getDictionary, localePath } from "@/lib/i18n";
import { roomPhotos } from "@/data/photos";
import { Reveal } from "@/components/ui/Reveal";

const categoryPhoto = {
  "two-guest": roomPhotos("two-guest")[0],
  "three-guest": roomPhotos("three-guest")[0],
  family: roomPhotos("family")[0],
};

type RowVariant = "photo-left" | "photo-right" | "full";

const categoryLayout: Record<RoomCategory, RowVariant> = {
  "two-guest": "photo-left",
  "three-guest": "photo-right",
  family: "full",
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
  const isRtl = locale === "ar";

  const groups: {
    id: RoomCategory;
    title: string;
    body: string;
    list: Room[];
    layout: RowVariant;
  }[] = [
    {
      id: "two-guest",
      title: t.rooms.twoGuest,
      body: t.rooms.twoGuestBody,
      list: rooms.filter((r) => r.category === "two-guest"),
      layout: categoryLayout["two-guest"],
    },
    {
      id: "three-guest",
      title: t.rooms.threeGuest,
      body: t.rooms.threeGuestBody,
      list: rooms.filter((r) => r.category === "three-guest"),
      layout: categoryLayout["three-guest"],
    },
    {
      id: "family",
      title: t.rooms.family,
      body: t.rooms.familyBody,
      list: rooms.filter((r) => r.category === "family"),
      layout: categoryLayout.family,
    },
  ];

  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        {!hideHeader ? (
          <Reveal>
            <p className="label">{t.rooms.eyebrow}</p>
            <Heading className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
              {variant === "home" ? t.rooms.homeTitle : t.rooms.title}
            </Heading>
            <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-espresso/70">
              {t.rooms.intro}
            </p>
          </Reveal>
        ) : null}

        <div className={hideHeader ? "space-y-0" : "mt-14 space-y-0"}>
          {groups.map((group, i) => {
            const photo = categoryPhoto[group.id];
            const isReversed =
              isRtl
                ? group.layout === "photo-left"
                : group.layout === "photo-right";
            const isFull = group.layout === "full";

            if (isFull) {
              /* ── Family Suite: dramatic full-width overlay ─── */
              return (
                <article
                  key={group.id}
                  className="room-row-divider pt-12 md:pt-16"
                >
                  <Reveal>
                    <div className="relative overflow-hidden">
                      <div className="relative min-h-[440px] md:min-h-[520px]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="100vw"
                          className="object-cover object-center"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/20 to-transparent" />
                        {/* Text overlay */}
                        <div
                          className={`absolute bottom-0 p-6 sm:p-10 lg:p-14 max-w-2xl ${isRtl ? "right-0 text-right" : "left-0"}`}
                        >
                          <p className="label text-champagne/90">
                            {t.rooms.family}
                          </p>
                          <h3 className="mt-3 font-display text-[2rem] font-medium leading-tight text-paper sm:text-[2.75rem]">
                            {group.title}
                          </h3>
                          <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-paper/75">
                            {group.body}
                          </p>
                          <p className="mt-2 font-sans text-sm text-paper/60">
                            {t.rooms.guests(group.list[0].maxGuests)}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                              href={localePath(
                                locale,
                                `/rooms/${group.list[0].slug}`,
                              )}
                              className="inline-block bg-champagne px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-espresso hover:bg-champagne/85 transition-colors"
                            >
                              {t.rooms.viewRoom}
                            </Link>
                            <Link
                              href={`${localePath(locale, "/rooms")}#availability`}
                              className="inline-block border border-paper/40 px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/85 hover:border-paper/70 transition-colors"
                            >
                              {t.rooms.bookNow}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </article>
              );
            }

            /* ── Double / Triple Room: alternating photo-text ── */
            return (
              <article
                key={group.id}
                className={`room-row-divider ${i > 0 ? "pt-12 md:pt-16" : ""}`}
              >
                <Reveal>
                  <div
                    className={`flex flex-col gap-0 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] ${isReversed ? "lg:grid-flow-dense" : ""}`}
                  >
                    {/* Photo */}
                    <div
                      className={`relative min-h-[300px] md:min-h-[420px] ${isReversed ? "lg:col-start-2" : ""}`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div
                      className={`flex flex-col justify-center bg-paper px-6 py-8 sm:px-10 lg:px-12 lg:py-14 ${isReversed ? "lg:col-start-1 lg:row-start-1" : ""} ${isRtl ? "text-right" : ""}`}
                    >
                      <p className="label">{t.rooms.eyebrow}</p>
                      <h3 className="mt-3 font-display text-[2rem] font-medium leading-tight text-espresso sm:text-[2.4rem]">
                        {group.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-taupe">
                        {t.rooms.guests(group.list[0].maxGuests)}
                      </p>
                      <p className="mt-4 font-sans text-[14px] leading-relaxed text-espresso/70">
                        {group.body}
                      </p>
                      <p className="mt-2 font-sans text-[13px] text-taupe">
                        {t.rooms.availabilityUnknown}
                      </p>

                      {/* Room number links */}
                      <ul
                        className={`mt-5 flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}
                      >
                        {group.list.map((room) => (
                          <li key={room.number}>
                            <Link
                              href={localePath(locale, `/rooms/${room.slug}`)}
                              className="inline-block border border-line px-3 py-1.5 font-sans text-[12px] text-espresso/70 hover:border-champagne hover:text-espresso transition-colors"
                            >
                              {t.rooms.room(room.number)}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-8 flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`}
                      >
                        <Link
                          href={localePath(
                            locale,
                            `/rooms/${group.list[0].slug}`,
                          )}
                          className="border border-champagne px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso hover:bg-cream transition-colors"
                        >
                          {t.rooms.viewRoom}
                        </Link>
                        <Link
                          href={`${localePath(locale, "/rooms")}#availability`}
                          className="bg-walnut px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-paper hover:bg-walnut-deep transition-colors"
                        >
                          {t.rooms.bookNow}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        {variant === "home" ? (
          <Reveal className="mt-10">
            <p className="border-t border-line pt-8">
              <Link
                href={localePath(locale, "/rooms")}
                className="font-sans text-sm text-walnut underline decoration-champagne underline-offset-4 hover:text-walnut-deep"
              >
                {t.rooms.seeAll} →
              </Link>
            </p>
          </Reveal>
        ) : (
          <p className="mt-10 max-w-3xl font-sans text-[13px] leading-relaxed text-taupe">
            {t.rooms.verifiedNote}
          </p>
        )}
      </div>
    </section>
  );
}
