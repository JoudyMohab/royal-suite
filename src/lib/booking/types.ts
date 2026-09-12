export type AvailabilityQuery = {
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
};

export type RateStatus = "live" | "select_dates" | "provider_unavailable";

export type RoomAvailability = {
  roomNumber: string;
  slug: string;
  maxGuests: number;
  occupancyFit: boolean;
  available: boolean | null;
  nightlyRate: number | null;
  currency: "EGP" | "USD" | null;
  rateName: string | null;
  cancellation: string | null;
  breakfastIncluded: boolean | null;
};

export type AvailabilityResult = {
  status: RateStatus;
  query: AvailabilityQuery | null;
  message: string;
  rooms: RoomAvailability[];
};

export interface BookingProvider {
  search(query: AvailabilityQuery): Promise<AvailabilityResult>;
}
