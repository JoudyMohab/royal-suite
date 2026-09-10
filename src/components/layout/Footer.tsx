import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-champagne/40 bg-cream text-espresso">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-body text-sm font-semibold tracking-[0.28em]">
            ROYAL SUITE
          </p>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-espresso/60">
            {siteConfig.tagline}
          </p>
          <button
            type="button"
            className="mt-6 font-body text-[12px] uppercase tracking-[0.14em] text-espresso/60 hover:text-espresso"
          >
            EN / AR
          </button>
        </div>

        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.16em] text-gold">
            Explore
          </p>
          <nav className="mt-4 flex flex-col gap-3 font-body text-sm text-espresso/75">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="w-max hover:text-espresso">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="w-max hover:text-espresso">
              Contact
            </Link>
          </nav>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-[2px] bg-sage-deep px-5 py-2.5 font-body text-[12px] font-medium uppercase tracking-[0.14em] text-ivory hover:bg-[#566153]"
          >
            Book Now
          </Link>
        </div>

        <div>
          <p className="font-body text-[11px] uppercase tracking-[0.16em] text-gold">
            Visit
          </p>
          <address className="mt-4 font-body text-sm not-italic leading-relaxed text-espresso/75">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
          </address>
          <dl className="mt-4 space-y-1 font-body text-sm text-espresso/75">
            <div className="flex gap-2">
              <dt className="text-espresso/45">Phone —</dt>
              <dd>To be confirmed</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-espresso/45">WhatsApp —</dt>
              <dd>To be confirmed</dd>
            </div>
          </dl>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block font-body text-sm text-espresso/75 hover:text-espresso"
          >
            {siteConfig.social.instagram}
          </a>
        </div>
      </div>

      <div className="border-t border-champagne/40 px-6 py-6 md:px-10">
        <p className="font-body text-xs text-espresso/45">
          © {new Date().getFullYear()} {siteConfig.name}, Nasr City, Cairo.
        </p>
      </div>
    </footer>
  );
}
