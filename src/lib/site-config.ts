export const siteConfig = {
  name: "Royal Suite Hotel",
  shortName: "Royal Suite",
  tagline: "A private space in the heart of Cairo.",
  description:
    "Stay at Royal Suite Hotel in Nasr City, Cairo. Comfortable suites with modern amenities, convenient access to Cairo attractions, and the privacy and flexibility of a suite.",
  url: "https://www.royalsuitehotel.com",
  locale: "en_US",

  address: {
    line1: "37 Abbas El-Akkad",
    line2: "Nasr City, Cairo",
    country: "Egypt",
    // Coordinates are approximate for the Abbas El-Akkad / Nasr City area and
    // should be replaced with the hotel's verified geocoordinates.
    lat: 30.0731,
    lng: 31.3436,
  },

  contact: {
    phone: null as string | null,
    whatsapp: null as string | null,
    email: null as string | null,
    bookingUrl: null as string | null,
    googleBusinessUrl: null as string | null,
  },

  social: {
    instagram: "@royal_suite_hotel",
    instagramUrl: "https://www.instagram.com/royal_suite_hotel",
  },

  nav: [
    { label: "Suites", href: "/rooms" },
    { label: "Experience", href: "/experience" },
    { label: "Location", href: "/location" },
  ],
} as const;

export const nearbyPlaces = [
  { name: "City Stars", distance: "Nearby" },
  { name: "Cairo International Airport", distance: "Short drive" },
  { name: "Cairo International Conference Centre", distance: "Nearby" },
  { name: "Central Cairo", distance: "Short drive" },
] as const;
