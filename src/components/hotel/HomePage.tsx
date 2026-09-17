/**
 * HOMEPAGE COMPOSITION — nine chapters
 *
 *   01 ARRIVAL    Hero + reservation desk
 *   02 THE HOTEL  Editorial introduction + trust
 *   03 ROOMS      Catalogue + THE ROYAL STAY feature (walnut)
 *   04 THE STAY   In-room features + amenities index
 *   05 CAIRO      Location + distances + arrival
 *   06 GUESTS     9.4 score table
 *   07 DISCOVER   Photography mosaic
 *   08 QUESTIONS  FAQ — quiet close before the footer
 *
 * Background rhythm (no two adjacent chapters share a container):
 *   photo → ivory → paper → walnut (one intentional dark) → ivory →
 *   cream → ivory → paper → ivory → footer
 */
import { Hero } from "@/components/hotel/Hero";
import { HotelIntroduction } from "@/components/hotel/HotelIntroduction";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { TheStay } from "@/components/hotel/TheStay";
import { CairoChapter } from "@/components/hotel/CairoChapter";
import { ReviewsBlock } from "@/components/hotel/ReviewsBlock";
import { FaqBlock } from "@/components/hotel/FaqBlock";
import { GalleryDiscover } from "@/components/hotel/GalleryBlock";
import type { Locale } from "@/lib/site-config";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* 01 — ARRIVAL */}
      <Hero locale={locale} />

      {/* 02 — THE HOTEL */}
      <HotelIntroduction locale={locale} />

      {/* 03 — ROOMS & SUITES */}
      <RoomsPreview locale={locale} variant="home" />

      {/* 04 — THE STAY */}
      <TheStay locale={locale} />

      {/* 05 — CAIRO */}
      <CairoChapter locale={locale} />

      {/* 06 — GUESTS */}
      <ReviewsBlock locale={locale} />

      {/* 07 — DISCOVER */}
      <GalleryDiscover locale={locale} />

      {/* 08 — QUESTIONS */}
      <FaqBlock locale={locale} />
    </>
  );
}
