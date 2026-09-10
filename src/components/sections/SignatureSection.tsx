import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function SignatureSection() {
  return (
    <section className="relative flex min-h-[560px] w-full items-stretch overflow-hidden">
      <div className="absolute inset-0" data-cursor="view">
        <PlaceholderImage
          label="Suite entrance and unpacked luggage"
          tone="warm"
          corner="none"
          className="h-full w-full"
        />
      </div>

      <Reveal className="relative z-10 flex w-full items-center justify-start py-20 md:py-0">
        <div className="mx-6 max-w-md border border-champagne/40 bg-ivory px-8 py-12 sm:mx-10 sm:px-12 md:ml-16 lg:ml-24">
          <span aria-hidden className="mb-6 block h-px w-10 bg-champagne" />
          <p className="font-body text-[11px] uppercase tracking-[0.24em] text-gold">
            Stay Awhile
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.15] text-espresso sm:text-5xl">
            Arrive.
            <br />
            Unpack.
            <br />
            Feel at home.
          </h2>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-espresso/60">
            Everything you need for a comfortable stay in Cairo.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
