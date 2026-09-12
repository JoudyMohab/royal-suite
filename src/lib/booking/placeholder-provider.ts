import { rooms, roomsMatchingGuests } from "@/data/rooms";
import type {
  AvailabilityQuery,
  AvailabilityResult,
  BookingProvider,
} from "@/lib/booking/types";

function isValidDateRange(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return false;
  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);
  return !Number.isNaN(start.getTime()) && !Number.isNaN(end.getTime()) && end > start;
}

/**
 * No live booking provider is connected. This adapter never invents rates
 * or date-specific availability. It only maps inventory and occupancy.
 */
export const placeholderProvider: BookingProvider = {
  async search(query: AvailabilityQuery): Promise<AvailabilityResult> {
    const guests = query.adults + query.children;
    const eligible = roomsMatchingGuests(Math.max(guests, 1));

    const roomsPayload = rooms.map((room) => ({
      roomNumber: room.number,
      slug: room.slug,
      maxGuests: room.maxGuests,
      occupancyFit: eligible.some((item) => item.number === room.number),
      available: null,
      nightlyRate: null,
      currency: null,
      rateName: null,
      cancellation: null,
      breakfastIncluded: null,
    }));

    if (!isValidDateRange(query.checkIn, query.checkOut)) {
      return {
        status: "select_dates",
        query,
        message: "Select your dates to view rates",
        rooms: roomsPayload,
      };
    }

    return {
      status: "provider_unavailable",
      query,
      message:
        "Live rates are not connected yet. Rooms below match your party size; pricing will appear here once a booking provider is integrated.",
      rooms: roomsPayload,
    };
  },
};

export async function getAvailability(
  query: AvailabilityQuery,
): Promise<AvailabilityResult> {
  const provider = placeholderProvider;
  return provider.search(query);
}
