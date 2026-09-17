import {
  Wifi,
  Car,
  Plane,
  ConciergeBell,
  Utensils,
  Sparkles,
  WashingMachine,
  Bell,
  Trees,
  Briefcase,
  Users,
  Ban,
  Coffee,
  CookingPot,
  Bath,
  AirVent,
  Tv,
} from "lucide-react";
import type { AmenityId } from "@/data/amenities";

/**
 * One line icon per amenity, shared by every list that renders
 * featuredAmenities so size, stroke and alignment stay identical
 * across sections. Line-based only — no colour, no circles.
 */
export const amenityIcons: Record<AmenityId, typeof Wifi> = {
  wifi: Wifi,
  parking: Car,
  shuttle: Plane,
  "front-desk": ConciergeBell,
  breakfast: Utensils,
  housekeeping: Sparkles,
  laundry: WashingMachine,
  "room-service": Bell,
  terrace: Trees,
  baggage: Briefcase,
  family: Users,
  nonsmoking: Ban,
  "tea-coffee": Coffee,
};

/** In-room features (The Stay chapter). */
export const inRoomIcons: Record<
  "kitchenette" | "washing-machine" | "bathroom" | "ac" | "wifi" | "tv" | "tea-coffee",
  typeof Wifi
> = {
  kitchenette: CookingPot,
  "washing-machine": WashingMachine,
  bathroom: Bath,
  ac: AirVent,
  wifi: Wifi,
  tv: Tv,
  "tea-coffee": Coffee,
};
