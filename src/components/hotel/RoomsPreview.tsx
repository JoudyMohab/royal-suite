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
    /** proportional weight on desktop — first room dominates */
    weight: "primary" | "secondary" | "full";
  }[] = [
    {
      id: "two-guest",
      title: t.rooms.twoGuest,
      body: t.rooms.twoGuestBody,
      list: rooms.filter((r) => r.category === "two-guest"),
      weight: "primary",
    },
    {
      id: "three-guest",
      title: t.rooms.threeGuest,
      body: t.rooms.threeGuestBody,
      list: rooms.filter((r) => r.category === "three-guest"),
      weight: "secondary",
    },
    {
      id: "family",
      title: t.rooms.family,
      body: t.rooms.familyBody,
      list: rooms.filter((r) => r.category === "family"),
      weight: "full",
    },
  ];

  return (
    <section className="bg-paper">
      {/* Section heading */}
      {!hideHeader && (
        <div className="mx-auto max-w-[1280px] px-5 pt-16 pb-10 sm:px-8 lg:px-14">
          <Reveal>
            <p className={`label ${isRtl ? "text-right" : ""}`}>{t.rooms.eyebrow}</p>
            <div
              className={`mt-3 flex flex-wrap items-end justify-between gap-4 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <Heading className="font-display text-[2rem] font-medium leading-tight text-espresso sm:text-[2.5rem]">
                {variant === "home" ? t.rooms.homeTitle : t.rooms.title}
              </Heading>
              {variant === "home" && (
                <Link
                  href={localePath(locale, "/rooms")}
                  className="shrink-0 font-sans text-[11px] uppercase tracking-[0.14em] text-walnut underline decoration-champagne underline-offset-4 hover:text-walnut-deep"
                >
                  {t.rooms.seeAll} →
                </Link>
              )}
            </div>
            <p className={`mt-3 max-w-2xl font-sans text-[14px] leading-relaxed text-espresso/60 ${isRtl ? "text-right" : ""}`}>
              {t.rooms.intro}
            </p>
          </Reveal>
        </div>
      )}

      {/* Room catalogue rows */}
      <div>
        {groups.map((group, idx) => {
          const photo = categoryPhoto[group.id];
          const isReversed = isRtl
            ? group.weight === "primary"
            : group.weight === "secondary";

          if (group.weight === "full") {
            /* ── Family Suite — cinematic full-width with overlay ── */
            return (
              <Reveal key={group.id}>
                <article className="relative overflow-hidden">
                  {/* Full-width image */}
                  <div className="relative min-h-[480px] md:min-h-[600px] lg:min-h-[70vh]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                    {/* Strong gradient so text reads clearly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent" />
                  </div>

                  {/* Text overlay — bottom of image */}
                  <div
                    className={`absolute bottom-0 px-5 pb-10 sm:px-8 sm:pb-14 lg:px-14 lg:pb-16 ${isRtl ? "right-0 text-right" : "left-0"} max-w-2xl`}
                  >
                    <p className="label text-champagne/80">{t.rooms.eyebrow}</p>
                    <h3 className="mt-3 font-display text-[2.2rem] font-medium leading-tight text-paper sm:text-[3rem] lg:text-[3.75rem]">
                      {group.title}
                    </h3>
                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-paper/65">
                      {group.body}
                    </p>
                    <p className="mt-1 font-sans text-[12px] text-paper/50">
                      {t.rooms.guests(group.list[0].maxGuests)} · {t.rooms.availabilityUnknown}
                    </p>
                    <div className={`mt-7 flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <Link
                        href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                        className="inline-block bg-champagne px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-espresso transition-colors hover:bg-champagne/85"
                      >
                        {t.rooms.viewRoom}
                      </Link>
                      <Link
                        href={`${localePath(locale, "/rooms")}#availability`}
                        className="inline-block border border-paper/35 px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-paper/65"
                      >
                        {t.rooms.bookNow}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          }

          /* ── Double / Triple Room — editorial split ── */
          const isPrimary = group.weight === "primary";

          return (
            <Reveal key={group.id}>
              <article
                className={`grid lg:grid-cols-2 ${isReversed ? "lg:grid-flow-dense" : ""} border-t border-line`}
              >
                {/* Photograph — fills its column, no mat/border */}
                <div
                  className={`relative overflow-hidden ${
                    isPrimary
                      ? "min-h-[340px] md:min-h-[500px] lg:min-h-[580px]"
                      : "min-h-[300px] md:min-h-[440px] lg:min-h-[520px]"
                  } ${isReversed ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>

                {/* Editorial text — sits on the page background, no card */}
                <div
                  className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20 lg:py-20 ${
                    isReversed ? "lg:col-start-1 lg:row-start-1" : ""
                  } ${isRtl ? "text-right" : ""}`}
                >
                  <p className="label">{t.rooms.eyebrow}</p>
                  <h3
                    className={`mt-4 font-display font-medium leading-tight text-espresso ${
                      isPrimary
                        ? "text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem]"
                        : "text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem]"
                    }`}
                  >
                    {group.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-taupe">
                    {t.rooms.guests(group.list[0].maxGuests)}
                  </p>
                  <div className="mt-5 h-px w-12 bg-champagne" aria-hidden />
                  <p className="mt-5 font-sans text-[14px] leading-relaxed text-espresso/65">
                    {group.body}
                  </p>
                  <p className="mt-2 font-sans text-[12px] text-taupe">
                    {t.rooms.availabilityUnknown}
                  </p>

                  {/* Room number links — secondary, smaller */}
                  <div
                    className={`mt-6 flex flex-wrap gap-2 ${isRtl ? "justify-end" : ""}`}
                  >
                    {group.list.map((room) => (
                      <Link
                        key={room.number}
                        href={localePath(locale, `/rooms/${room.slug}`)}
                        className="font-sans text-[11px] text-taupe hover:text-walnut underline underline-offset-2 decoration-line"
                      >
                        {t.rooms.room(room.number)}
                      </Link>
                    ))}
                  </div>

                  <div className={`mt-8 flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Link
                      href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                      className="border border-champagne px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-espresso transition-colors hover:bg-cream"
                    >
                      {t.rooms.viewRoom}
                    </Link>
                    <Link
                      href={`${localePath(locale, "/rooms")}#availability`}
                      className="bg-walnut px-6 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-paper transition-colors hover:bg-walnut-deep"
                    >
                      {t.rooms.bookNow}
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {variant !== "home" && (
        <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-14">
          <p className="font-sans text-[12px] leading-relaxed text-taupe">
            {t.rooms.verifiedNote}
          </p>
        </div>
      )}
    </section>
  );
}
