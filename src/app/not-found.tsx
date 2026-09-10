import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[1400px] flex-col items-start justify-center px-6 py-32 md:px-10">
      <p className="font-body text-[12px] uppercase tracking-[0.2em] text-gold">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] text-espresso sm:text-6xl">
        This page has stepped out.
      </h1>
      <p className="mt-6 max-w-md font-body text-base leading-relaxed text-espresso/65">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Head back to explore Royal Suite Hotel.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Return Home
      </Button>
    </section>
  );
}
