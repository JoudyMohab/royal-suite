import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoom, rooms } from "@/data/rooms";
import { RoomDetail } from "@/components/hotel/RoomDetail";
import { getDictionary, localePath } from "@/lib/i18n";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { roomPhotos } from "@/data/photos";
import { getRequestLocale } from "@/lib/locale";

export function generateStaticParams() {
  return rooms.map((room) => ({ room: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ room: string }>;
}): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { room: slug } = await params;
  const room = getRoom(slug);
  const t = getDictionary(locale);
  if (!room) return { title: "Room" };
  return {
    title: t.meta.roomTitle(room.number),
    description: t.meta.roomDescription(room.number, room.maxGuests),
    alternates: {
      canonical: localePath(locale, `/rooms/${room.slug}`),
      languages: {
        en: `/rooms/${room.slug}`,
        ar: `/ar/rooms/${room.slug}`,
      },
    },
  };
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const locale = await getRequestLocale();
  const { room: slug } = await params;
  const room = getRoom(slug);
  const t = getDictionary(locale);
  if (!room) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: t.rooms.room(room.number),
    url: `${siteConfig.url}${localePath(locale, `/rooms/${room.slug}`)}`,
    image: `${siteConfig.url}${roomPhotos(room.category)[0].src}`,
    occupancy: { "@type": "QuantitativeValue", maxValue: room.maxGuests },
    amenityFeature: room.features.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: t.rooms.featureLabels[feature as keyof typeof t.rooms.featureLabels],
      value: true,
    })),
    containedInPlace: { "@type": "Hotel", name: siteConfig.name },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.rooms, path: "/rooms" },
            { name: t.rooms.room(room.number), path: `/rooms/${room.slug}` },
          ],
          locale,
        )}
      />
      <JsonLd data={jsonLd} />
      <RoomDetail locale={locale} room={room} />
    </>
  );
}
