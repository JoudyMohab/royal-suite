import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { siteConfig, type Locale } from "@/lib/site-config";
import { SiteShell } from "@/components/layout/SiteShell";
import { hotelJsonLd, JsonLd } from "@/lib/seo";

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
  title: {
    default: `${siteConfig.name} | Nasr City, Cairo`,
    template: "%s",
  },
  description:
    "Stay at Royal Suite Hotel in Nasr City, Cairo. Comfortable suites, free Wi-Fi, free parking, and a 24-hour front desk near City Stars and Cairo International Airport.",
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/royal-suite-family-suite.webp",
        width: 1600,
        height: 1200,
        alt: "Royal Suite Hotel suite in Nasr City, Cairo",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerList = await headers();
  const locale = (headerList.get("x-locale") === "ar" ? "ar" : "en") as Locale;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${bodoni.variable} ${manrope.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-espresso">
        <JsonLd data={hotelJsonLd(locale)} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
