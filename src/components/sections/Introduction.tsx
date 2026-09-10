import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";

const characteristics = [
  "Living spaces",
  "Kitchenettes",
  "Washing machines",
  "Balconies",
];

export function Introduction() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <Reveal className="relative">
          <div className="aspect-[4/5]" data-cursor="view">
            <PlaceholderImage label="Suite living space" tone="warm" corner="tl" />
          </div>
          <div className="absolute -bottom-10 -right-6 w-[58%] border-4 border-white shadow-[0_20px_45px_-20px_rgba(51,40,33,0.4)] sm:-right-10 sm:w-[55%]">
            <div className="aspect-[4/5]" data-cursor="view">
              <PlaceholderImage
                label="Suite kitchenette detail"
                tone="deep"
                corner="none"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center pt-6 sm:pt-0 md:pl-6">
          <SectionNumber value="III" />
          <Eyebrow>The Royal Suite Experience</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
            More than a room.
            <br />A place to settle in.
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-espresso/65">
            Royal Suite combines the privacy of a suite with the comforts of
            home — a kitchenette to cook your own meals, a washing machine
            for longer stays, and a living space and balcony to spread out
            in. It is a stay built around how you actually live, not just
            where you sleep.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-champagne/40 pt-6 font-body text-sm text-espresso/75 sm:max-w-sm">
            {characteristics.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="h-px w-3 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
