import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Amenities } from "@/components/sections/Amenities";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Experience | Royal Suite Hotel Cairo",
  description:
    "What a stay at Royal Suite Hotel looks like day to day — daily housekeeping, breakfast each morning, and a Nasr City address close to Cairo's main routes.",
  alternates: { canonical: "/experience" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
]);

export default function ExperiencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Experience"
        title="The rhythm of a stay in Nasr City."
        description="Royal Suite Hotel is designed to fade into the background of your day — quiet service, a morning routine that's taken care of, and a location that puts the rest of Cairo within easy reach."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="order-2 md:order-1 flex flex-col justify-center">
            <Eyebrow>Every Morning</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.15] text-espresso sm:text-4xl">
              Breakfast, housekeeping,
              <br />
              and quiet service.
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-espresso/65">
              Breakfast is served every morning, housekeeping visits daily,
              and the front desk is on hand around the clock — the kind of
              service that lets a stay settle into routine rather than
              feeling like a checklist.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2 aspect-[4/5]" >
            <div className="h-full" data-cursor="view">
              <PlaceholderImage
                label="Breakfast setting"
                tone="warm"
                corner="tl"
                className="h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Amenities />
      <FinalCTA />
    </>
  );
}
