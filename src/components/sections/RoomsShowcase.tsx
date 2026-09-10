import Link from "next/link";
import { rooms } from "@/data/rooms";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function RoomsShowcase({
  headingLevel = "h3",
}: {
  headingLevel?: "h2" | "h3";
}) {
  const RoomHeading = headingLevel;

  return (
    <div>
      {rooms.map((room, index) => {
        const reversed = index % 2 === 1;
        const number = String(index + 1).padStart(2, "0");
        return (
          <Reveal key={room.slug}>
            <article
              className={`flex flex-col gap-10 border-t border-champagne/40 py-16 md:flex-row md:items-stretch md:gap-16 md:py-24 ${
                reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden md:w-3/5">
                <Link
                  href={`/rooms#${room.slug}`}
                  aria-label={`View ${room.name}`}
                  className="block h-full w-full"
                  data-cursor="view"
                >
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                    <PlaceholderImage
                      label={room.imageLabel}
                      tone={index % 2 === 0 ? "warm" : "deep"}
                      corner={reversed ? "tl" : "br"}
                    />
                  </div>
                </Link>
              </div>

              <div
                id={room.slug}
                className="flex flex-col justify-center scroll-mt-28 md:w-2/5"
              >
                <span className="font-display text-lg text-gold">{number}</span>
                <p className="mt-1 font-body text-[11px] uppercase tracking-[0.22em] text-espresso/45">
                  Suite
                </p>
                <p className="mt-4 font-display text-4xl font-medium leading-[1.05] text-espresso sm:text-5xl">
                  {room.tagline}
                </p>
                <RoomHeading className="mt-3 font-display text-2xl font-normal text-espresso/70">
                  {room.name}
                </RoomHeading>

                <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-espresso/60">
                  {room.description}
                </p>

                <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-[12px] uppercase tracking-[0.1em] text-espresso/55">
                  {room.features.map((feature, i) => (
                    <span key={feature} className="flex items-center gap-2">
                      {i > 0 && <span aria-hidden className="text-gold">·</span>}
                      {feature}
                    </span>
                  ))}
                </p>
                <p className="mt-2 font-body text-[11px] uppercase tracking-[0.1em] text-espresso/40">
                  Occupancy — {room.occupancy}
                  <span className="mx-2 text-gold">·</span>
                  Size — {room.size}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href={`/rooms#${room.slug}`}
                    className="group/link inline-flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-espresso"
                  >
                    View Suite
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-espresso/50 transition-colors hover:text-walnut"
                  >
                    Book This Room
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
