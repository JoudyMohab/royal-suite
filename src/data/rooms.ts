export type RoomCategory = "two-guest" | "three-guest" | "family";

export type Room = {
  number: string;
  slug: string;
  category: RoomCategory;
  maxGuests: number;
  floor: 1 | 2;
  /** Internal Booking.com unit id — never display. */
  bookingUnitId: string;
  features: string[];
};

/**
 * Inventory supplied for the property. Guest-facing names use room numbers.
 * Bed size, square metres and balcony per room are omitted until verified.
 */
export const rooms: Room[] = [
  {
    number: "101",
    slug: "101",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086801",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "102",
    slug: "102",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086802",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "103",
    slug: "103",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086809",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "104",
    slug: "104",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086803",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "105",
    slug: "105",
    category: "three-guest",
    maxGuests: 3,
    floor: 1,
    bookingUnitId: "1445086804",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "107",
    slug: "107",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086807",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "108",
    slug: "108",
    category: "two-guest",
    maxGuests: 2,
    floor: 1,
    bookingUnitId: "1445086808",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "201",
    slug: "201",
    category: "two-guest",
    maxGuests: 2,
    floor: 2,
    bookingUnitId: "1445086810",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "202",
    slug: "202",
    category: "two-guest",
    maxGuests: 2,
    floor: 2,
    bookingUnitId: "1445086811",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "203",
    slug: "203",
    category: "three-guest",
    maxGuests: 3,
    floor: 2,
    bookingUnitId: "1445086812",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
  {
    number: "204",
    slug: "204",
    category: "family",
    maxGuests: 5,
    floor: 2,
    bookingUnitId: "1445086813",
    features: ["kitchenette", "washing-machine", "bathroom", "ac", "wifi", "tv", "tea-coffee"],
  },
];

export const roomCategories: { id: RoomCategory; maxGuests: number }[] = [
  { id: "two-guest", maxGuests: 2 },
  { id: "three-guest", maxGuests: 3 },
  { id: "family", maxGuests: 5 },
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}

export function roomsMatchingGuests(guestCount: number) {
  return rooms.filter((room) => room.maxGuests >= guestCount);
}
