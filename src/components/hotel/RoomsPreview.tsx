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

  /**
   * On the homepage, room numbers are never displayed.
   * Room 101, 102, 103 are operational identifiers — not guest-facing
   * browsing categories. Guests choose an accommodation type, not a
   * room number. Numbers appear only on the full /rooms page.
   */
  const showRoomNumbers = variant === "all";

  const groups: {
    id: RoomCategory;
    title: string;
    body: string;
    list: Room[];
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
      {/* ─── Section header ───────────────────────────────── */}
      {!hideHeader && (
        <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 lg:px-14">
          <Reveal>
            <p className={`label ${isRtl ? "text-right" : ""}`}>{t.rooms.eyebrow}</p>
            <div
              className={`mt-3 flex flex-wrap items-end justify-between gap-4 ${isRtl ? "flex-row-reverse" : ""}`}
            >
              <Heading className="font-display text-[1.85rem] font-medium leading-tight text-espresso sm:text-[2.25rem]">
                {variant === "home" ? t.rooms.homeTitle : t.rooms.title}
              </Heading>
              {variant === "home" && (
                <Link
                  href={localePath(locale, "/rooms")}
                  className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-walnut underline decoration-champagne underline-offset-4 hover:text-walnut-deep"
                >
                  {t.rooms.seeAll} →
                </Link>
              )}
            </div>
            <p className={`mt-3 max-w-2xl font-sans text-[13px] leading-relaxed text-espresso/55 ${isRtl ? "text-right" : ""}`}>
              {t.rooms.intro}
            </p>
          </Reveal>
        </div>
      )}

      {/* ─── Room catalogue ───────────────────────────────── */}
      <div>
        {groups.map((group) => {
          const photo = categoryPhoto[group.id];
          const isReversed = isRtl
            ? group.weight === "primary"
            : group.weight === "secondary";

          /* ── Family Suite — cinematic full-width overlay ── */
          if (group.weight === "full") {
            return (
              <Reveal key={group.id}>
                <article className="relative overflow-hidden">
                  <div className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[68vh]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(46,37,33,0.72) 0%, rgba(46,37,33,0.20) 45%, transparent 70%)",
                      }}
                      aria-hidden
                    />
                  </div>

                  <div
                    className={`absolute bottom-0 px-5 pb-10 sm:px-8 sm:pb-14 lg:px-14 lg:pb-16 ${
                      isRtl ? "right-0 text-right" : "left-0"
                    } max-w-2xl`}
                  >
                    <p className="label text-champagne/70">{group.title}</p>
                    <h3 className="mt-3 font-display text-[1.85rem] font-medium italic leading-[1.1] text-paper sm:text-[2.4rem] lg:text-[3rem]">
                      {group.title}
                    </h3>
                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-paper/60">
                      {group.body}
                    </p>
                    <p className="mt-1 font-sans text-[11px] text-paper/45">
                      {t.rooms.guests(group.list[0].maxGuests)}
                      {" · "}
                      {t.rooms.availabilityUnknown}
                    </p>
                    <div className={`mt-7 flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                      <Link
                        href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                        className="inline-block border border-paper/40 px-6 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-paper/85 transition-colors hover:border-paper/80"
                      >
                        {t.rooms.viewRoom}
                      </Link>
                      <Link
                        href={`${localePath(locale, "/rooms")}#availability`}
                        className="inline-block bg-walnut px-6 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-walnut-deep"
                      >
                        {t.rooms.bookNow}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          }

          /* ── Double / Triple Room — editorial split ──────── */
          const isPrimary = group.weight === "primary";

          return (
            <Reveal key={group.id}>
              {/*
               * Column proportions are intentionally asymmetric:
               *
               * Double Room (primary):  3fr : 2fr  — photo 60%, text 40%
               *   The large bedroom photograph is the dominant element.
               *   The narrow editorial text panel beside it creates tension.
               *
               * Triple Room (secondary): 7fr : 5fr reversed — text 58%, photo 42%
               *   A text-heavier treatment creates visual contrast with the
               *   Double Room above. The rhythm shifts from photographic to
               *   editorial, then back to cinematic (Family Suite, full-width).
               */}
              <article
                className={`grid border-t border-line ${
                  isPrimary
                    ? "lg:grid-cols-[3fr_2fr]"
                    : `lg:grid-cols-[7fr_5fr] ${isReversed ? "lg:grid-flow-dense" : ""}`
                }`}
              >
                {/* Photograph — fills its column, no panel/mat/border */}
                <div
                  className={`relative overflow-hidden ${
                    isPrimary
                      ? "min-h-[360px] md:min-h-[500px] lg:min-h-[580px]"
                      : "min-h-[280px] md:min-h-[400px] lg:min-h-[460px]"
                  } ${isReversed ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                {/* Editorial text — page background, no card, no panel */}
                <div
                  className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-18 lg:py-20 ${
                    isReversed ? "lg:col-start-1 lg:row-start-1" : ""
                  } ${isRtl ? "text-right" : ""}`}
                >
                  {/* Small metadata label */}
                  <p className="label">{t.rooms.eyebrow}</p>

                  {/* Room category name */}
                  {/*
                   * Double Room: narrower text column (2fr), so heading is
                   * slightly smaller to avoid feeling cramped.
                   * Triple Room: wider text column (7fr), can accommodate
                   * a more generous heading.
                   */}
                  <h3
                    className={`mt-4 font-display font-medium italic leading-[1.1] text-espresso ${
                      isPrimary
                        ? "text-[1.65rem] sm:text-[2rem] lg:text-[2.4rem]"
                        : "text-[1.65rem] sm:text-[2.1rem] lg:text-[2.65rem]"
                    }`}
                  >
                    {group.title}
                  </h3>

                  {/* Capacity */}
                  <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-taupe/80">
                    {t.rooms.guests(group.list[0].maxGuests)}
                  </p>

                  {/* Thin rule */}
                  <div className="mt-5 h-px w-10 bg-champagne/60" aria-hidden />

                  {/* Description */}
                  <p className="mt-5 max-w-[38ch] font-sans text-[13px] leading-relaxed text-espresso/60">
                    {group.body}
                  </p>

                  {/* Availability note */}
                  <p className="mt-2 font-sans text-[11px] text-taupe/60">
                    {t.rooms.availabilityUnknown}
                  </p>

                  {/*
                   * Room number links — shown only on the /rooms page.
                   * Hidden on the homepage: they are operational identifiers.
                   */}
                  {showRoomNumbers && (
                    <div className={`mt-5 flex flex-wrap gap-x-3 gap-y-1 ${isRtl ? "justify-end" : ""}`}>
                      {group.list.map((room) => (
                        <Link
                          key={room.number}
                          href={localePath(locale, `/rooms/${room.slug}`)}
                          className="font-sans text-[11px] text-taupe/70 underline underline-offset-2 hover:text-walnut"
                        >
                          {t.rooms.room(room.number)}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className={`mt-8 flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <Link
                      href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                      className="border border-champagne/70 px-6 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-cream"
                    >
                      {t.rooms.viewRoom}
                    </Link>
                    <Link
                      href={`${localePath(locale, "/rooms")}#availability`}
                      className="bg-walnut px-6 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-walnut-deep"
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
        <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-14">
          <p className="font-sans text-[11px] leading-relaxed text-taupe/65">
            {t.rooms.verifiedNote}
          </p>
        </div>
      )}
    </section>
  );
}
