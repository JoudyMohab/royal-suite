import { Hero } from "@/components/hotel/Hero";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { MoreThanARoom } from "@/components/hotel/MoreThanARoom";
import { FeaturedAmenities } from "@/components/hotel/FeaturedAmenities";
import { HotelInformation } from "@/components/hotel/HotelInformation";
import { PropertyDetails } from "@/components/hotel/PropertyDetails";
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
      <Hero locale={locale} />
      <RoomsPreview locale={locale} variant="home" />
      <MoreThanARoom locale={locale} />
      <FeaturedAmenities locale={locale} />
      <HotelInformation locale={locale} />
      <Shuttle locale={locale} />
      <LocationBlock locale={locale} />
      <ReviewsBlock locale={locale} />
      <FaqBlock locale={locale} />
      <InstagramStrip locale={locale} />
      <BookingCta locale={locale} />
    </>
  );
}
