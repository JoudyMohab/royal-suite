import type { Locale } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

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
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.018}%2C${lat - 0.011}%2C${lng + 0.018}%2C${lat + 0.011}&layer=mapnik&marker=${lat}%2C${lng}`;
  const isRtl = locale === "ar";

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">

        {/* ─── Heading + editorial copy ─────────────────────── */}
        <Reveal>
          <div
            className={`grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16 ${isRtl ? "text-right" : ""}`}
          >
            <div>
              <p className="label">{t.location.eyebrow}</p>
              <Heading className="mt-3 font-display text-[2.5rem] font-medium leading-[1.06] text-espresso md:text-[3rem]">
                {t.location.title}
              </Heading>
            </div>
            <div>
              <p className="font-sans text-[15px] leading-relaxed text-espresso/70">
                {t.location.body}
              </p>
              <p className="mt-3 font-sans text-sm text-taupe">
                {t.location.addressLabel}:{" "}
                <span className="text-espresso/80">
                  {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                  {siteConfig.address.country}
                </span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* ─── Map ─────────────────────────────────────────── */}
        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden border border-line">
            <iframe
              title={t.location.mapTitle}
              src={mapSrc}
              className="h-[340px] w-full md:h-[440px]"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* ─── Distance strip ──────────────────────────────── */}
        <Reveal delay={140}>
          <ul className="mt-0 grid border-x border-b border-line sm:grid-cols-3">
            {siteConfig.nearby.map((place, i) => (
              <li
                key={place.id}
                className={`px-6 py-7 ${i < siteConfig.nearby.length - 1 ? "border-b border-line sm:border-b-0 sm:border-e" : ""} ${isRtl ? "text-right" : ""}`}
              >
                <p className="label">
                  {t.location.nearby[place.id as keyof typeof t.location.nearby]}
                </p>
                <p className="mt-3 font-display text-[2.75rem] leading-none text-espresso">
                  {place.distance}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
