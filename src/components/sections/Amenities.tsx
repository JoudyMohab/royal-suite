import { amenities } from "@/data/amenities";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function Amenities() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 right-6 hidden select-none font-display text-[9rem] leading-none text-walnut/5 md:right-10 md:block lg:text-[12rem]"
      >
        06
      </span>

      <Reveal className="relative max-w-xl">
        <SectionNumber value="VI" />
        <Eyebrow>Amenities</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
          Comfort,
          <br />
          considered.
        </h2>
      </Reveal>

      <div className="relative mt-14 border-t border-champagne/50 sm:columns-2">
        {amenities.map((amenity, index) => (
          <Reveal key={amenity.label} delay={index * 0.05} className="break-inside-avoid-column">
            <div className="flex items-baseline gap-5 border-b border-champagne/50 py-6">
              <span className="font-body text-[12px] uppercase tracking-[0.14em] text-gold">
                {amenity.meta}
              </span>
              <span className="font-display text-2xl text-espresso">
                {amenity.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
