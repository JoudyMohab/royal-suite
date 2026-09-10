import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LocationSection } from "@/components/sections/LocationSection";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Contact | Royal Suite Hotel Cairo",
  description:
    "Get in touch with Royal Suite Hotel in Nasr City, Cairo, or find the property on the map ahead of your stay.",
  alternates: { canonical: "/contact" },
};

const jsonLd = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const contactRows = [
  { label: "Address", value: `${siteConfig.address.line1}, ${siteConfig.address.line2}` },
  { label: "Phone", value: "To be confirmed" },
  { label: "WhatsApp", value: "To be confirmed" },
  { label: "Email", value: "To be confirmed" },
  { label: "Booking", value: "Online booking link coming soon" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        description="Direct phone, WhatsApp and booking details will appear here as soon as Royal Suite Hotel confirms them. In the meantime, reach the hotel through Instagram."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <dl className="divide-y divide-champagne/40 border-y border-champagne/40">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <dt className="font-body text-[12px] uppercase tracking-[0.16em] text-espresso/50">
                  {row.label}
                </dt>
                <dd className="font-body text-base text-espresso">{row.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
              <dt className="font-body text-[12px] uppercase tracking-[0.16em] text-espresso/50">
                Instagram
              </dt>
              <dd className="font-body text-base text-espresso">
                <a
                  href={siteConfig.social.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline decoration-champagne underline-offset-4 hover:text-walnut"
                >
                  {siteConfig.social.instagram}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <LocationSection showHeading={false} />
    </>
  );
}
