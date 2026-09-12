import type { Metadata } from "next";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { AvailabilitySearch } from "@/components/booking/AvailabilitySearch";
import { BookingCta } from "@/components/hotel/BookingCta";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { getAvailability } from "@/lib/booking/placeholder-provider";
import { roomsMatchingGuests } from "@/data/rooms";
import Link from "next/link";
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
  adults?: string;
  children?: string;
};

export default async function RoomsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const locale = await getRequestLocale();
  const t = getDictionary(locale);
  const query = await searchParams;
  const adults = Number(query.adults ?? 2);
  const children = Number(query.children ?? 0);
  const result = await getAvailability({
    checkIn: query.checkIn ?? "",
    checkOut: query.checkOut ?? "",
    rooms: Number(query.rooms ?? 1),
    adults,
    children,
  });
  const matches = roomsMatchingGuests(adults + children);

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
          <h1 className="font-display text-3xl leading-tight text-espresso md:text-4xl">{t.rooms.title}</h1>
          <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-espresso/75">
            {t.rooms.intro}
          </p>
        </div>
      </section>
      <section className="bg-ivory px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-[1280px]">
          <AvailabilitySearch locale={locale} defaultValues={query} formId="availability" />
          {query.checkIn ? (
            <div className="mt-6 border border-line bg-paper p-4 font-sans text-sm text-espresso/80">
              <p>{result.status === "select_dates" ? t.booking.selectDates : t.booking.providerUnavailable}</p>
              <p className="mt-2">
                {t.booking.occupancyNote}:{" "}
                {matches.map((room) => room.number).join(", ") || t.booking.noMatch}
              </p>
            </div>
          ) : null}
        </div>
      </section>
      <RoomsPreview locale={locale} headingLevel="h2" hideHeader />
      <BookingCta locale={locale} />
      <p className="sr-only">
        <Link href={localePath(locale, "/rooms/101")}>Room 101</Link>
      </p>
    </>
  );
}
