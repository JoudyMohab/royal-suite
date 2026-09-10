"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? undefined : { opacity: 0, y: 24 };
  const animate = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <section className="relative flex min-h-[640px] w-full flex-col bg-ivory md:h-[100svh] md:block">
      <div
        className="relative h-[58vh] min-h-[380px] w-full md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[76%]"
        data-cursor="view"
      >
        <PlaceholderImage
          label="Hero photograph — Royal Suite Hotel interior"
          tone="deep"
          corner="tl"
          className="h-full w-full"
        />
      </div>

      <motion.div
        initial={initial}
        animate={animate}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mt-10 border border-champagne/50 bg-white px-7 py-10 shadow-[0_18px_50px_-25px_rgba(51,40,33,0.35)] sm:px-10 sm:py-12 md:absolute md:bottom-14 md:left-8 md:mt-0 md:w-[46%] md:max-w-lg lg:left-14"
      >
        <p className="flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.24em] text-gold">
          <span aria-hidden className="h-px w-6 bg-champagne" />
          Royal Suite Hotel
        </p>

        <h1 className="mt-5 font-display text-[2.6rem] font-medium leading-[1.05] text-espresso sm:text-6xl">
          A stay
          <br />
          made beautiful.
        </h1>

        <p className="mt-6 max-w-sm font-body text-[15px] leading-relaxed text-espresso/70">
          Contemporary suites designed around comfort, privacy and the
          feeling of home in the heart of Cairo.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Book Your Stay
          </Button>
          <Button href="/rooms" variant="secondary">
            Explore Suites
          </Button>
        </div>

        <p className="mt-8 flex items-center gap-2 border-t border-champagne/30 pt-5 font-body text-[11px] uppercase tracking-[0.18em] text-espresso/45">
          <span aria-hidden className="h-1.5 w-1.5 bg-sage-deep" />
          Nasr City · Cairo
        </p>
      </motion.div>
    </section>
  );
}
