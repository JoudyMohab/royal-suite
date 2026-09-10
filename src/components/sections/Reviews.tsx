import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function Reviews() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
      <div className="grid gap-16 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
        <Reveal>
          <SectionNumber value="X" />
          <Eyebrow>Guest Reviews</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
            Loved by our guests.
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="flex items-baseline gap-4 border-t border-champagne/50 pt-6 md:border-t-0 md:pt-0">
          <span className="font-display text-7xl font-medium text-walnut sm:text-8xl">
            9.4
          </span>
          <span className="flex flex-col gap-1">
            <span className="font-body text-sm text-espresso/50">/ 10</span>
            <span className="font-body text-[11px] uppercase tracking-[0.14em] text-gold">
              32 Reviews
            </span>
          </span>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-16 border-t border-champagne/50 pt-14">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 -top-6 font-display text-[7rem] leading-none text-champagne/25 sm:text-[9rem]"
        >
          &ldquo;
        </span>
        <p className="relative max-w-lg font-body text-sm leading-relaxed text-espresso/55">
          Individual guest reviews will appear here once approved by Royal
          Suite Hotel.
        </p>
      </Reveal>
    </section>
  );
}
