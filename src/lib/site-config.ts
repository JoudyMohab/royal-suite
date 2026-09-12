export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const siteConfig = {
  name: "Royal Suite Hotel",
  shortName: "Royal Suite",
  url: "https://www.royalsuitehotel.com",
  locale: "en_US",
  bookingComUrl: "https://www.booking.com/hotel/eg/royal-suit.html",

  address: {
    line1: "37 Abbas El-Akkad",
    line2: "Nasr City, Cairo",
    country: "Egypt",
    postalCode: "4450220",
    extra: "Above Costa Coffee, Al Manteqah Al Oula",
    lat: 30.0628,
    lng: 31.3448,
    coordinatesApproximate: true,
  },

  contact: {
    phone: "+20 11 17777841",
    phoneHref: "tel:+201117777841",
    whatsapp: null as string | null,
    email: null as string | null,
    bookingUrl: null as string | null,
  },

  social: {
    instagram: "@royal_suite_hotel",
    instagramUrl: "https://www.instagram.com/royal_suite_hotel",
  },

  policies: {
    checkInFrom: "14:00",
    checkInUntil: "17:00",
    checkOutUntil: "12:00",
    frontDesk: "24 hours",
    arrivalNotice:
      "Please inform the hotel of your expected arrival time in advance.",
    petsAllowed: false,
    minCheckInAge: 18,
    parking: "Free on-site parking",
    wifi: "Free Wi-Fi throughout the property",
    shuttle: "Airport shuttle available at an additional charge",
    breakfast: "American breakfast available",
    children: "Family rooms are available. The person checking in must be at least 18.",
  },

  reviews: {
    source: "Booking.com",
    sourceUrl: "https://www.booking.com/hotel/eg/royal-suit.html",
    score: 9.4,
    scale: 10,
    count: 32,
    label: "Excellent",
    categories: [
      { id: "staff", label: "Staff", score: 9.8 },
      { id: "comfort", label: "Comfort", score: 9.6 },
      { id: "cleanliness", label: "Cleanliness", score: 9.5 },
      { id: "facilities", label: "Facilities", score: 9.3 },
      { id: "value", label: "Value", score: 9.2 },
      { id: "location", label: "Location", score: 8.9 },
      { id: "wifi", label: "Free Wi-Fi", score: 10.0 },
    ],
    themes: [
      "Friendly, helpful staff",
      "Comfortable rooms",
      "Cleanliness",
      "Convenient Nasr City location",
      "24-hour reception",
      "Clear communication before check-in",
    ],
  },

  nearby: [
    {
      id: "city-stars",
      distance: "4.6 km",
    },
    {
      id: "airport",
      distance: "~10 km",
    },
    {
      id: "cicc",
      distance: "~4.1 km",
    },
  ],
} as const;

export const navItems = [
  { id: "rooms", href: "/rooms" },
  { id: "experience", href: "/experience" },
  { id: "amenities", href: "/experience#amenities" },
  { id: "location", href: "/location" },
  { id: "reviews", href: "/reviews" },
  { id: "faq", href: "/faq" },
] as const;
