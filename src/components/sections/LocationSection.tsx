import { nearbyPlaces, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";

const mapQuery = encodeURIComponent(
  `${siteConfig.address.line1}, ${siteConfig.address.line2}, Egypt`,
);

export function LocationSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          {showHeading && (
            <>
              <SectionNumber value="IX" />
              <Eyebrow>Location</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
                Cairo, right outside
                <br />
                your door.
              </h2>
            </>
          )}
          <address
            className={`font-body text-base not-italic leading-relaxed text-espresso/65 ${showHeading ? "mt-6" : ""}`}
          >
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </address>

          <ul className="mt-10 flex flex-col gap-3 border-t border-champagne/40 pt-6">
            {nearbyPlaces.map((place) => (
              <li
                key={place.name}
                className="flex items-baseline justify-between gap-4 font-body text-sm text-espresso/80"
              >
                <span>{place.name}</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-espresso/45">
                  {place.distance}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative aspect-[4/5] md:aspect-auto">
          <div className="h-full min-h-[420px] border border-champagne/50 p-2">
            <iframe
              title={`Map showing ${siteConfig.name} in Nasr City, Cairo`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full grayscale-[35%] sepia-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <span
            aria-hidden
            className="absolute left-3 top-3 h-8 w-8 border-l border-t border-champagne/70"
          />
        </Reveal>
      </div>
    </section>
  );
}
