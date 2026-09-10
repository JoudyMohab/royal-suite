import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Suites in Nasr City, Cairo`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Suites in Nasr City, Cairo`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Suites in Nasr City, Cairo`,
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.ico" },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: siteConfig.name,
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Nasr City",
    addressRegion: "Cairo",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.address.lat,
    longitude: siteConfig.address.lng,
  },
  sameAs: [siteConfig.social.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${manrope.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-espresso">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
        <CustomCursor />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-espresso focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
