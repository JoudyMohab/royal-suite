import { siteConfig, type Locale } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const HOTEL_IMAGES = [
  "/images/royal-suite-family-suite.webp",
  "/images/royal-suite-living-room.webp",
  "/images/royal-suite-two-guest-bedroom.webp",
  "/images/royal-suite-bathroom.webp",
  "/images/royal-suite-balcony-nasr-city.webp",
].map((src) => `${siteConfig.url}${src}`);

/**
 * Hotel structured data.
 *
 * Only verifiable facts: name, address, phone, geo, images, policies
 * and amenities. Ratings/review counts are deliberately NOT marked up
 * here — the score is third-party (Booking.com) data, and self-serving
 * aggregate-rating markup on our own pages is not eligible for Google
 * review rich results. The rating is shown to humans on the site and
 * by Booking.com itself in search.
 */
export function hotelJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: siteConfig.name,
    url: locale === "ar" ? `${siteConfig.url}/ar` : siteConfig.url,
    description: getDictionary(locale).meta.homeDescription,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: "Nasr City",
      addressRegion: "Cairo",
      postalCode: siteConfig.address.postalCode,
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    hasMap: `https://www.openstreetmap.org/?mlat=${siteConfig.address.lat}&mlon=${siteConfig.address.lng}#map=17/${siteConfig.address.lat}/${siteConfig.address.lng}`,
    image: HOTEL_IMAGES,
    sameAs: [siteConfig.social.instagramUrl, siteConfig.bookingComUrl],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport shuttle", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-hour front desk", value: true },
      { "@type": "LocationFeatureSpecification", name: "Breakfast", value: true },
      { "@type": "LocationFeatureSpecification", name: "Daily housekeeping", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laundry", value: true },
      { "@type": "LocationFeatureSpecification", name: "Room service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Non-smoking rooms", value: true },
    ],
    checkinTime: siteConfig.policies.checkInFrom,
    checkoutTime: siteConfig.policies.checkOutUntil,
    petsAllowed: siteConfig.policies.petsAllowed,
    numRooms: 11,
  };
}

export { breadcrumbJsonLd };
