/**
 * HOMEPAGE COMPOSITION — 7 chapters
 *
 * Previous structure (12 independent sections):
 *   Hero → Hotel Intro → Rooms → MoreThanARoom → Amenities →
 *   Hotel Info → Shuttle → Location → Reviews → FAQ → Gallery → CTA
 *
 * The problem: each section behaved as an independent UI component.
 * The result: a stack of unrelated sections, not a hotel experience.
 *
 * New structure (7 intentional chapters):
 *
 *   CHAPTER 01 · ARRIVAL
 *     Hero — photograph as primary visual, editorial caption below it
 *
 *   CHAPTER 02 · THE HOTEL
 *     HotelIntroduction — editorial spread, trust signal integrated
 *
 *   CHAPTER 03 · ROOMS & SUITES
 *     RoomsPreview — asymmetric catalogue, no equal cards
 *
 *   CHAPTER 04 · THE STAY
 *     TheStay — merges MoreThanARoom + FeaturedAmenities
 *     Ivory background (previously two consecutive dark sections)
 *
 *   CHAPTER 05 · CAIRO
 *     CairoChapter — merges LocationBlock + Shuttle
 *     One geographic narrative: where we are, how to arrive
 *
 *   CHAPTER 06 · GUEST REVIEWS
 *     ReviewsBlock — credibility, not a dashboard
 *
 *   CHAPTER 07 · GALLERY + FINAL BOOKING
 *     Gallery strip → BookingCta (photographic close)
 *
 *   FAQ — quiet, near the bottom, not a visual chapter
 *
 * Section backgrounds:
 *   Hero:              none (photograph)
 *   Caption strip:     ivory
 *   HotelIntro:        ivory
 *   Rooms:             paper
 *   TheStay:           ivory  ← previously espresso
 *   CairoChapter:      cream
 *   Reviews:           paper
 *   Gallery:           paper
 *   CTA:               photograph
 *   FAQ:               ivory
 *
 * Light → Light → Light/paper → IVORY → cream → Light → Light → photo
 *
 * The dark espresso block is gone. The page lives in warm ivory and
 * cream, with the photography providing the visual drama.
 */

import { Hero } from "@/components/hotel/Hero";
import { HotelIntroduction } from "@/components/hotel/HotelIntroduction";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { TheStay } from "@/components/hotel/TheStay";
import { CairoChapter } from "@/components/hotel/CairoChapter";
import { ReviewsBlock } from "@/components/hotel/ReviewsBlock";
import { FaqBlock } from "@/components/hotel/FaqBlock";
import { InstagramStrip } from "@/components/hotel/GalleryBlock";
import { BookingCta } from "@/components/hotel/BookingCta";
import type { Locale } from "@/lib/site-config";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* CHAPTER 01 — ARRIVAL */}
      {/* Photograph first. Editorial caption below it. Booking form. */}
      <Hero locale={locale} />

      {/* CHAPTER 02 — THE HOTEL */}
      {/* Editorial spread with trust signal. Headline 2.75rem max.  */}
      <HotelIntroduction locale={locale} />

      {/* CHAPTER 03 — ROOMS & SUITES */}
      {/* Luxury catalogue. Asymmetric proportions. No equal cards.  */}
      <RoomsPreview locale={locale} variant="home" />

      {/* CHAPTER 04 — THE STAY */}
      {/* What's included. Warm ivory. One section, not two.         */}
      {/* Previously: MoreThanARoom (dark) + FeaturedAmenities (dark) */}
      <TheStay locale={locale} />

      {/* CHAPTER 05 — CAIRO */}
      {/* Location + arrival in one geographic narrative.            */}
      {/* Previously: LocationBlock + Shuttle as separate sections.  */}
      <CairoChapter locale={locale} />

      {/* CHAPTER 06 — GUEST REVIEWS */}
      {/* 9.4/10 editorial. Booking.com credibility.                */}
      <ReviewsBlock locale={locale} />

      {/* CHAPTER 07 — GALLERY + FINAL BOOKING */}
      {/* Photography first. Minimal close.                         */}
      <InstagramStrip locale={locale} />
      <BookingCta locale={locale} />

      {/* FAQ — quiet, near the bottom, not a visual chapter */}
      <FaqBlock locale={locale} />
    </>
  );
}
