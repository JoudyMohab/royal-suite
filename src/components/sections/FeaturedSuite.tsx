import Link from "next/link";
import { rooms } from "@/data/rooms";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedSuite() {
  const suite = rooms.find((room) => room.featured) ?? rooms[0];

  return (
    <section className="relative">
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] md:aspect-[21/9]" data-cursor="view">
        <PlaceholderImage
          label={suite.imageLabel}
          tone="deep"
          corner="none"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent sm:bg-gradient-to-r" />
      </div>

      <Reveal className="absolute inset-x-0 bottom-0 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2">
        <div className="mx-6 max-w-lg pb-10 sm:mx-10 sm:pb-0 md:mx-16 lg:mx-24">
          <span className="font-display text-2xl italic text-champagne">01</span>
          <p className="mt-2 flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.24em] text-ivory/70">
            <span aria-hidden className="h-px w-6 bg-champagne" />
            Featured Suite
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-ivory sm:text-5xl">
            Your own corner
            <br />
            of Cairo.
          </h2>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[12px] uppercase tracking-[0.12em] text-ivory/75">
            {suite.features.map((feature, i) => (
              <span key={feature} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-champagne">·</span>}
                {feature}
              </span>
            ))}
          </p>

          <Link
            href={`/rooms#${suite.slug}`}
            className="group/link mt-8 inline-flex items-center gap-2 border border-ivory/50 px-7 py-3.5 font-body text-[12px] font-medium uppercase tracking-[0.16em] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            Discover the Suite
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
