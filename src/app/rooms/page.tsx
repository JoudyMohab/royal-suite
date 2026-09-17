import type { Metadata } from "next";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getAvailability } from "@/lib/booking/placeholder-provider";
import { roomsMatchingGuests } from "@/data/rooms";
import { getRequestLocale } from "@/lib/locale";
import { HotelPhoto } from "@/components/hotel/HotelPhoto";
import { photos } from "@/data/photos";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  return {
    title: t.meta.roomsTitle,
    description: t.meta.roomsDescription,
    alternates: {
      canonical: localePath(locale, "/rooms"),
      languages: { en: "/rooms", ar: "/ar/rooms" },
    },
  };
}

type Search = {
  checkIn?: string;
  checkOut?: string;
  rooms?: string;
  guests?: string;
};

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  const query = await searchParams;
  const guests = Math.max(Number(query.guests ?? 2), 1);
  const result = await getAvailability({
    checkIn: query.checkIn ?? "",
    checkOut: query.checkOut ?? "",
    rooms: Number(query.rooms ?? 1),
    adults: guests,
    children: 0,
  });
  const matches = roomsMatchingGuests(guests);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.rooms, path: "/rooms" },
          ],
          locale,
        )}
      />
      <section className="grid border-b border-line lg:grid-cols-[1.1fr_0.9fr]">
        <HotelPhoto
          photo={photos.twoGuest}
          className="min-h-[240px] border-0 p-0 lg:min-h-[320px]"
          priority
        />
        <div className="bg-cream px-4 py-10 sm:px-8">
          <h1 className="display-heading max-w-[22ch] text-[1.9rem] leading-[1.12] text-espresso sm:text-[2.3rem]">
            {t.rooms.title}
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-[14px] leading-relaxed text-espresso/70">
            {t.rooms.intro}
          </p>
        </div>
      </section>
      {/* The page's own anchor — the closing desk lower down carries none. */}
      <section id="availability" className="scroll-mt-24 bg-ivory px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <AvailabilitySearch locale={locale} defaultValues={query} />
          {query.checkIn ? (
            <div className="mt-4">
              <p className="font-sans text-[13px] leading-relaxed text-espresso/75">
                {result.status === "select_dates" ? t.booking.selectDates : t.booking.providerUnavailable}
              </p>
              <p className="mt-2 font-sans text-[12px] text-taupe">
                {t.booking.occupancyNote}:{" "}
                {matches.map((room) => room.number).join(", ") || t.booking.noMatch}
              </p>
            </div>
          ) : (
            <p className="mt-4 font-sans text-[12px] text-taupe">{t.booking.selectDates}</p>
          )}
        </div>
      </section>
      <RoomsPreview locale={locale} headingLevel="h2" hideHeader />
      <BookingCta locale={locale} />
    </>
  );
}
