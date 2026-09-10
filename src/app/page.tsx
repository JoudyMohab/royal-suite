import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { BookingBar } from "@/components/sections/BookingBar";
import { Introduction } from "@/components/sections/Introduction";
import { RoomsShowcase } from "@/components/sections/RoomsShowcase";
import { FeaturedSuite } from "@/components/sections/FeaturedSuite";
import { Amenities } from "@/components/sections/Amenities";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { SageMoment } from "@/components/sections/SageMoment";
import { LocationSection } from "@/components/sections/LocationSection";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Suites in Nasr City, Cairo`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BookingBar />

      <Introduction />

      <section className="mx-auto max-w-[1400px] px-6 pt-16 md:px-10 md:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionNumber value="IV" />
            <Eyebrow>Rooms &amp; Suites</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
              Choose your suite.
            </h2>
          </div>
          <Button href="/rooms" variant="secondary">
            View All Suites
          </Button>
        </div>
      </section>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <RoomsShowcase />
      </div>

      <FeaturedSuite />
      <Amenities />
      <SignatureSection />
      <SageMoment />
      <LocationSection />
      <Reviews />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}
