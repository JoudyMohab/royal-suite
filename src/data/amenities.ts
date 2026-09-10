export type Amenity = {
  meta: string;
  label: string;
};

export const amenities: Amenity[] = [
  { meta: "24/7", label: "Front Desk" },
  { meta: "FREE", label: "Wi-Fi" },
  { meta: "FREE", label: "Parking" },
  { meta: "DAILY", label: "Housekeeping" },
  { meta: "ON REQUEST", label: "Airport Transfer" },
  { meta: "EVERY MORNING", label: "Breakfast" },
];
