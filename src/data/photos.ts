export type Photo = {
  src: string;
  alt: string;
  /**
   * Intrinsic pixel size of the file in /public/images — the lightbox
   * renders at these dimensions, so they must match the assets exactly
   * rather than describe a notional larger original.
   */
  width: number;
  height: number;
};

export const photos = {
  hero: {
    src: "/images/royal-suite-family-suite.webp",
    alt: "Suite living space at Royal Suite Hotel in Nasr City, with a seating area, walnut furniture and a kitchenette",
    width: 1152,
    height: 864,
  },
  living: {
    src: "/images/royal-suite-living-room.webp",
    alt: "Living area at Royal Suite Hotel with cream seating, walnut tables and warm ivory walls",
    width: 1280,
    height: 720,
  },
  daylight: {
    src: "/images/royal-suite-daylight-suite.webp",
    alt: "Bright suite interior at Royal Suite Hotel with ivory walls and a seating area",
    width: 1280,
    height: 720,
  },
  twoGuest: {
    src: "/images/royal-suite-two-guest-bedroom.webp",
    alt: "Two-guest bedroom at Royal Suite Hotel with cream bedding and walnut bedside tables",
    width: 1152,
    height: 864,
  },
  family: {
    src: "/images/royal-suite-family-suite.webp",
    alt: "Family suite at Royal Suite Hotel with a sitting area, bedroom and kitchenette",
    width: 1152,
    height: 864,
  },
  bathroom: {
    src: "/images/royal-suite-bathroom.webp",
    alt: "Private bathroom at Royal Suite Hotel with walk-in shower and champagne fittings",
    width: 1152,
    height: 864,
  },
  balcony: {
    src: "/images/royal-suite-balcony-nasr-city.webp",
    alt: "Terrace seating at Royal Suite Hotel overlooking Nasr City, Cairo",
    width: 1152,
    height: 864,
  },
  kitchenette: {
    src: "/images/royal-suite-kitchenette.webp",
    alt: "In-room kitchenette at Royal Suite Hotel with walnut cabinets, kettle and dining table",
    width: 1152,
    height: 864,
  },
  frontDesk: {
    src: "/images/royal-suite-front-desk.webp",
    alt: "Front desk at Royal Suite Hotel in Nasr City, staffed 24 hours",
    width: 1152,
    height: 864,
  },
  linen: {
    src: "/images/royal-suite-linen-detail.webp",
    alt: "Bed linen and a bedside tea setting in a Royal Suite Hotel room",
    width: 864,
    height: 1152,
  },
} as const satisfies Record<string, Photo>;

export const galleryPhotos: {
  id: string;
  category: "rooms" | "interiors" | "balconies" | "bathrooms" | "hotel" | "details";
  photo: Photo;
}[] = [
  { id: "family-suite", category: "rooms", photo: photos.family },
  { id: "two-guest", category: "rooms", photo: photos.twoGuest },
  { id: "living", category: "interiors", photo: photos.living },
  { id: "balcony", category: "balconies", photo: photos.balcony },
  { id: "bathroom", category: "bathrooms", photo: photos.bathroom },
  { id: "front-desk", category: "hotel", photo: photos.frontDesk },
  { id: "kitchenette", category: "details", photo: photos.kitchenette },
  { id: "linen", category: "details", photo: photos.linen },
];

export function roomPhotos(category: "two-guest" | "three-guest" | "family"): Photo[] {
  if (category === "family") {
    return [photos.family, photos.kitchenette, photos.bathroom, photos.balcony];
  }
  if (category === "three-guest") {
    return [photos.daylight, photos.kitchenette, photos.bathroom, photos.balcony];
  }
  return [photos.twoGuest, photos.kitchenette, photos.bathroom, photos.linen];
}
