// Placeholder suite categories. Replace names, occupancy, feature lists and
// imagery with confirmed information and photography from the hotel before
// launch — nothing here is a fabricated price, policy, or claim, only a
// structural placeholder for the editorial showcase.
export type Room = {
  slug: string;
  name: string;
  tagline: string;
  occupancy: string;
  size: string;
  features: string[];
  description: string;
  imageLabel: string;
  featured?: boolean;
};

export const rooms: Room[] = [
  {
    slug: "studio-suite",
    name: "Studio Suite",
    tagline: "Your space in Cairo.",
    occupancy: "To be confirmed",
    size: "To be confirmed",
    features: ["Kitchenette", "Living Area", "Balcony"],
    description:
      "A compact suite designed around a single open living space, with a kitchenette for longer stays and a balcony onto Nasr City.",
    imageLabel: "Studio Suite — living area",
  },
  {
    slug: "one-bedroom-suite",
    name: "One-Bedroom Suite",
    tagline: "Room to settle in.",
    occupancy: "To be confirmed",
    size: "To be confirmed",
    features: ["Kitchenette", "Washing Machine", "Separate Living Room", "Balcony"],
    description:
      "A separate bedroom and living room, a full kitchenette and an in-suite washing machine — built for stays that need more room to settle in.",
    imageLabel: "One-Bedroom Suite — bedroom",
    featured: true,
  },
  {
    slug: "two-bedroom-suite",
    name: "Two-Bedroom Suite",
    tagline: "Space for the whole stay.",
    occupancy: "To be confirmed",
    size: "To be confirmed",
    features: ["Kitchenette", "Washing Machine", "Two Bedrooms", "Living Space", "Balcony"],
    description:
      "The largest of the suites, with two bedrooms around a shared living space — suited to families or guests travelling together.",
    imageLabel: "Two-Bedroom Suite — living space",
  },
];
