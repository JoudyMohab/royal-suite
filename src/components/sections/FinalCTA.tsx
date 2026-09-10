import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionNumber } from "@/components/ui/SectionNumber";

export function FinalCTA() {
  return (
    <section className="bg-sage-deep px-6 py-24 text-ivory md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionNumber value="XII" tone="ivory" />
          <span aria-hidden className="mb-6 block h-px w-10 bg-champagne" />
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.1] sm:text-6xl">
            Make yourself
            <br />
            at home in Cairo.
          </h2>
          <Button href="/contact" variant="inverse" className="mt-10">
            Book Your Stay →
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 grid gap-8 border-t border-ivory/20 pt-10 font-body text-sm text-ivory/75 sm:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-champagne/80">
                Address
              </p>
              <address className="mt-2 not-italic leading-relaxed">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </address>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-champagne/80">
                Phone &amp; WhatsApp
              </p>
              <p className="mt-2 leading-relaxed">To be confirmed</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-champagne/80">
                Instagram
              </p>
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 block leading-relaxed hover:text-ivory"
              >
                {siteConfig.social.instagram}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
