export type AmenityId =
  | "wifi"
  | "parking"
  | "shuttle"
  | "front-desk"
  | "breakfast"
  | "housekeeping"
  | "laundry"
  | "room-service"
  | "terrace"
  | "baggage"
  | "family"
  | "nonsmoking"
  | "tea-coffee";

export type Amenity = {
  id: AmenityId;
  icon:
    | "wifi"
    | "car"
    | "plane"
    | "clock"
    | "utensils"
    | "sparkles"
    | "washing-machine"
    | "bell"
    | "trees"
    | "briefcase"
    | "users"
    | "ban"
    | "coffee";
};

/**
 * Eight genuinely useful guest amenities.
 * "Non-smoking rooms" removed — it is a property condition, not a selling point.
 * "Tea & coffee" and "Family rooms" removed — they are already communicated
 * via the room descriptions and features.
 */
export const featuredAmenities: Amenity[] = [
  { id: "wifi", icon: "wifi" },
  { id: "parking", icon: "car" },
  { id: "shuttle", icon: "plane" },
  { id: "front-desk", icon: "clock" },
  { id: "breakfast", icon: "utensils" },
  { id: "housekeeping", icon: "sparkles" },
  { id: "laundry", icon: "washing-machine" },
  { id: "room-service", icon: "bell" },
];
