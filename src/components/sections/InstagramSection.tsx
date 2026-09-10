import { siteConfig } from "@/lib/site-config";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionNumber } from "@/components/ui/SectionNumber";

const tiles = [
  { label: "Suite interior", aspect: "aspect-[3/4]", tone: "warm" as const },
  { label: "Breakfast", aspect: "aspect-square", tone: "sage" as const },
  { label: "Balcony view", aspect: "aspect-[4/5]", tone: "deep" as const },
  { label: "Lobby detail", aspect: "aspect-[3/4]", tone: "deep" as const },
  { label: "Nasr City street", aspect: "aspect-square", tone: "warm" as const },
  { label: "Living space", aspect: "aspect-[4/5]", tone: "sage" as const },
];

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionNumber value="XI" />
          <Eyebrow>Follow Along</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl">
            Follow the stay.
          </h2>
        </div>
        <a
          href={siteConfig.social.instagramUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="font-body text-sm text-espresso/60 underline decoration-champagne underline-offset-4 hover:text-walnut"
        >
          {siteConfig.social.instagram}
        </a>
      </Reveal>

      <div className="mt-12 columns-2 gap-2 sm:columns-3 md:gap-3">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            data-cursor="view"
            className={`group relative mb-2 block break-inside-avoid overflow-hidden md:mb-3 ${tile.aspect}`}
          >
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]">
              <PlaceholderImage
                label={`Instagram — ${tile.label}`}
                tone={tile.tone}
                corner="none"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="p-4 font-body text-[11px] uppercase tracking-[0.14em] text-ivory">
                {tile.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
