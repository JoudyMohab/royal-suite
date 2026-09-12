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
    image: [`${siteConfig.url}/images/royal-suite-family-suite.webp`],
    sameAs: [siteConfig.social.instagramUrl, siteConfig.bookingComUrl],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Airport shuttle", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-hour front desk", value: true },
    ],
    checkinTime: "14:00",
    checkoutTime: "12:00",
    petsAllowed: false,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviews.score,
      bestRating: siteConfig.reviews.scale,
      ratingCount: siteConfig.reviews.count,
    },
  };
}

export { breadcrumbJsonLd };
