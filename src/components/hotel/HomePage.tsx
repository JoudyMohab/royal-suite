/**
 * Homepage composition.
 *
 * Visual rhythm intentionally designed as:
 *
 * 1. Hero         — full-bleed photography, massive type  (no background)
 * 2. Booking bar  — ivory                                 (light)
 * 3. Hotel Intro  — ivory, full-bleed split photo+text    (light)
 * 4. Rooms        — paper/off-white, editorial catalogue  (light)
 * 5. "More Than"  — ESPRESSO dark                        (dark)
 * 6. Amenities    — ESPRESSO dark, photo + list           (dark) ← continues dark
 * 7. Shuttle      — ivory, full-bleed split               (light)
 * 8. Location     — cream                                 (light)
 * 9. Reviews      — paper                                 (light)
 * 10. FAQ         — ivory                                 (light)
 * 11. Gallery     — paper                                 (light)
 * 12. CTA         — WALNUT DEEP dark                      (dark)
 *
 * Light → DARK (two-section block) → Light → Light → Light → DARK
 */

import { Hero } from "@/components/hotel/Hero";
import { HotelIntroduction } from "@/components/hotel/HotelIntroduction";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { MoreThanARoom } from "@/components/hotel/MoreThanARoom";
import { FeaturedAmenities } from "@/components/hotel/FeaturedAmenities";
import { HotelInformation } from "@/components/hotel/HotelInformation";
import { Shuttle } from "@/components/hotel/Shuttle";
import { LocationBlock } from "@/components/hotel/LocationBlock";
import { ReviewsBlock } from "@/components/hotel/ReviewsBlock";
import { FaqBlock } from "@/components/hotel/FaqBlock";
import { InstagramStrip } from "@/components/hotel/GalleryBlock";
import { BookingCta } from "@/components/hotel/BookingCta";
import type { Locale } from "@/lib/site-config";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {/* 1 — PHOTOGRAPHY · editorial headline */}
      <Hero locale={locale} />

      {/* 2 — THE HOTEL · photo + copy + facts */}
      <HotelIntroduction locale={locale} />

      {/* 3 — ROOMS · hotel catalogue */}
      <RoomsPreview locale={locale} variant="home" />

      {/* 4 — MORE THAN A ROOM · dark espresso */}
      <MoreThanARoom locale={locale} />

      {/* 5 — AMENITIES · dark espresso + photo list (continues dark) */}
      <FeaturedAmenities locale={locale} />

      {/* 6 — PRACTICAL DETAILS · light information strip */}
      <HotelInformation locale={locale} />

      {/* 7 — ARRIVE WITH EASE · shuttle */}
      <Shuttle locale={locale} />

      {/* 8 — LOCATION · A home in Nasr City */}
      <LocationBlock locale={locale} />

      {/* 9 — REVIEWS · editorial score */}
      <ReviewsBlock locale={locale} />

      {/* 10 — FAQ */}
      <FaqBlock locale={locale} />

      {/* 11 — GALLERY STRIP */}
      <InstagramStrip locale={locale} />

      {/* 12 — CTA · dark walnut close */}
      <BookingCta locale={locale} />
    </>
  );
}
