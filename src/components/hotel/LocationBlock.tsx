import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";

export function LocationBlock({
  locale,
  headingLevel = "h2",
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const t = getDictionary(locale);
  const Heading = headingLevel;
  const { lat, lng } = siteConfig.address;
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02}%2C${lat - 0.012}%2C${lng + 0.02}%2C${lat + 0.012}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <p className="label">{t.location.eyebrow}</p>
        <Heading className="mt-2 font-display text-3xl text-espresso md:text-[2.5rem]">
          {t.location.title}
        </Heading>
        <p className="mt-4 font-sans text-sm text-espresso/80">
          <span className="text-taupe">{t.location.addressLabel}: </span>
          {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.country}
        </p>

        <div className="mt-8 overflow-hidden border border-line">
          <iframe
            title={t.location.mapTitle}
            src={mapSrc}
            className="h-[320px] w-full md:h-[420px]"
            loading="lazy"
          />
        </div>

        <ul className="mt-0 grid border-x border-b border-line sm:grid-cols-3">
          {siteConfig.nearby.map((place) => (
            <li key={place.id} className="border-line px-5 py-6 sm:border-e sm:last:border-e-0">
              <p className="label">
                {t.location.nearby[place.id as keyof typeof t.location.nearby]}
              </p>
              <p className="mt-3 font-display text-4xl text-espresso">{place.distance}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
