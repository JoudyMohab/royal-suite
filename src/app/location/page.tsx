import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Location | Royal Suite Hotel Nasr City",
  description:
    "Royal Suite Hotel sits on Abbas El-Akkad in Nasr City, Cairo — close to City Stars, the Cairo International Conference Centre and Cairo International Airport.",
  alternates: { canonical: "/location" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Location", path: "/location" },
]);

export default function LocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Location"
        title="Nasr City, close to everything."
        description="Set on Abbas El-Akkad, the hotel sits within easy reach of Cairo's main commercial and cultural landmarks, with the airport a short drive away."
      />
      <LocationSection showHeading={false} />
      <FinalCTA />
    </>
  );
}
