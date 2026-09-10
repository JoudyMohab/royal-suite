import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function SageMoment() {
  return (
    <section className="relative overflow-visible bg-sage py-24 md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <Reveal>
          <SectionNumber value="VIII" tone="espresso" />
          <span aria-hidden className="mb-6 block h-px w-10 bg-espresso/40" />
          <h2 className="font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
            The comfort
            <br />
            of having your own space.
          </h2>
          <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-espresso/70">
            Between the balcony, the kitchenette and a living room that
            actually feels lived in, Royal Suite is built for guests who
            want more than a bed for the night.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative -my-14 md:-my-20">
          <div className="aspect-[4/5]" data-cursor="view">
            <PlaceholderImage
              label="Balcony seating area"
              tone="deep"
              corner="tl"
              frame="white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
