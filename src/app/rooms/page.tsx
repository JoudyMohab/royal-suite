import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { RoomsShowcase } from "@/components/sections/RoomsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Rooms & Suites | Royal Suite Hotel Cairo",
  description:
    "Explore suite categories at Royal Suite Hotel in Nasr City, Cairo, each with a kitchenette, living space and balcony designed for comfortable stays.",
  alternates: { canonical: "/rooms" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Rooms & Suites", path: "/rooms" },
]);

export default function RoomsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Rooms & Suites"
        title="Suites for every kind of stay."
        description="Each suite at Royal Suite Hotel is built around a kitchenette, a living space and a balcony — the practical layer of a stay in Nasr City, whatever brings you to Cairo."
      />
      <div className="mx-auto max-w-[1400px] px-6 pt-8 md:px-10">
        <RoomsShowcase headingLevel="h2" />
      </div>
      <FinalCTA />
    </>
  );
}
