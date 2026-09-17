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

/**
 * CHAPTER 03 — ROOMS & SUITES
 *
 * A hotel catalogue, browsed by accommodation type — never by room
 * number. One composition per room type, each with its own proportion:
 *
 *   Double Room   — photo left, text beside it
 *   Triple Room   — same composition mirrored
 *   Family Suite  — THE ROYAL STAY: full-bleed feature with a
 *                   champagne information panel, the visual peak
 */
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
   * Room numbers are operational identifiers. On the homepage they are
   * never shown; on the full /rooms page they remain as quiet links
   * beneath each category, because deep links already exist.
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
        <div className="mx-auto max-w-[1280px] px-6 pb-10 pt-16 sm:px-10 lg:px-14 lg:pt-20">
          <Reveal>
            {/*
             * Homepage: the chapter reads label → heading → note, with
             * the one outbound link sharing the label's baseline.
             * Full page: the page header carries the H1, so the single
             * descriptive heading stands alone.
             */}
            {variant === "home" ? (
              <>
                <div
                  className={`flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <p className="label">{t.rooms.homeTitle}</p>
                  <Link
                    href={localePath(locale, "/rooms")}
                    className="shrink-0 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/70 underline decoration-champagne underline-offset-8 transition-colors hover:text-espresso"
                  >
                    {t.rooms.seeAll} →
                  </Link>
                </div>
                <Heading
                  className={`display-heading mt-4 max-w-[22ch] text-[1.8rem] leading-[1.14] text-espresso sm:text-[2.2rem] ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t.rooms.homeHeading}
                </Heading>
                <p
                  className={`mt-4 max-w-[52ch] font-sans text-[13px] leading-relaxed text-espresso/55 ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t.rooms.homeIntro}
                </p>
              </>
            ) : (
              <Heading
                className={`display-heading max-w-[24ch] text-[1.8rem] leading-[1.14] text-espresso sm:text-[2.2rem] ${
                  isRtl ? "text-right" : ""
                }`}
              >
                {t.rooms.title}
              </Heading>
            )}
          </Reveal>
        </div>
      )}

      {/* ─── Catalogue ─────────────────────────────────────── */}
      {groups.map((group) => {
        const photo = categoryPhoto[group.id];
        const isFeatured = group.weight === "full";
        const isReversed =
          isRtl ? group.weight === "primary" : group.weight === "secondary";

        /* ── THE ROYAL STAY — full-bleed walnut feature ── */
        if (isFeatured) {
          const familyRoom = group.list[0];
          return (
            <article key={group.id}>
              <div
                className={`grid lg:grid-cols-[1.5fr_1fr] ${isRtl ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Photograph — walnut behind the image while it loads */}
                <div className="relative min-h-[420px] bg-walnut-deep md:min-h-[560px] lg:min-h-[680px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Information panel */}
                {/* Information panel — champagne, espresso type */}
                <div
                  className={`flex flex-col justify-center bg-champagne px-6 py-14 text-espresso sm:px-10 lg:px-14 xl:px-16 lg:py-20 ${
                    isRtl ? "lg:col-start-1 lg:row-start-1 text-right" : ""
                  }`}
                >
                  <Reveal>
                    <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-espresso/70">
                      {t.rooms.featuredKicker}
                    </p>
                    <h3 className="display-heading mt-4 text-[2.2rem] leading-[1.08] text-espresso sm:text-[2.7rem] lg:text-[3.1rem]">
                      {t.rooms.featured}
                    </h3>
                    <p className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso/70">
                      {t.rooms.featuredLabel}
                    </p>
                    <p className="mt-7 font-sans text-[13px] leading-[1.8] text-espresso/90">
                      {t.rooms.featuredBody}
                    </p>
                    <p className="mt-4 font-sans text-[11px] text-espresso/70">
                      {t.rooms.featuredMeta(familyRoom.maxGuests)}
                    </p>

                    <div
                      className={`mt-9 flex flex-wrap gap-3 ${isRtl ? "flex-row-reverse" : ""}`}
                    >
                      <Link
                        href={localePath(locale, `/rooms/${familyRoom.slug}`)}
                        className="inline-block bg-espresso px-6 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-paper transition-colors hover:bg-walnut-deep"
                      >
                        {t.rooms.viewRoom} →
                      </Link>
                      <Link
                        href={`${localePath(locale, "/rooms")}#availability`}
                        className="inline-block border border-espresso/40 px-6 py-3 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso"
                      >
                        {t.rooms.bookNow}
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </article>
          );
        }

        /* ── Double / Triple Room — mirrored editorial split ── */
        return (
          <Reveal key={group.id}>
            <article
              className={`grid border-t border-line lg:grid-cols-2 ${
                isReversed ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/*
               * Photograph — one shared container for every category so
               * the alternating rhythm keeps a single, consistent scale.
               * object-cover fills it without distortion.
               */}
              <div
                className={`relative min-h-[340px] overflow-hidden md:min-h-[480px] lg:min-h-[560px] ${
                  isReversed ? "lg:col-start-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Editorial text — no card, no panel */}
              <div
                className={`flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16 ${
                  isReversed ? "lg:col-start-1 lg:row-start-1" : ""
                } ${isRtl ? "text-right" : ""}`}
              >
                {/* Capacity as the eyebrow, room name as the display heading */}
                <p className="label">{t.rooms.guests(group.list[0].maxGuests)}</p>
                <h3
                  className="display-heading mt-3 text-[1.7rem] leading-[1.12] text-espresso sm:text-[2.1rem]"
                >
                  {group.title}
                </h3>
                <div className="mt-5 h-px w-10 bg-champagne" aria-hidden />
                <p className="mt-5 max-w-[38ch] font-sans text-[13px] leading-relaxed text-espresso/60">
                  {group.body}
                </p>
                <p className="mt-2 font-sans text-[11px] text-taupe/60">
                  {t.rooms.availabilityUnknown}
                </p>

                {/* Room numbers — only on /rooms, as quiet deep links */}
                {showRoomNumbers && (
                  <div
                    className={`mt-5 flex flex-wrap gap-x-3 gap-y-1 ${isRtl ? "justify-end" : ""}`}
                  >
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

                <div className={`mt-8 flex gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                  <Link
                    href={localePath(locale, `/rooms/${group.list[0].slug}`)}
                    className="inline-block border border-espresso/30 px-5 py-2.5 font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-espresso transition-colors hover:border-espresso hover:bg-espresso hover:text-paper"
                  >
                    {t.rooms.viewRoom} →
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}

      {variant !== "home" && (
        <div className="mx-auto max-w-[1280px] px-6 py-8 sm:px-10 lg:px-14">
          <p className="max-w-3xl font-sans text-[11px] leading-relaxed text-taupe/65">
            {t.rooms.verifiedNote}
          </p>
        </div>
      )}
    </section>
  );
}
