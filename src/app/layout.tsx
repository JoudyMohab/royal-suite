import type { Metadata } from "next";
import { Bodoni_Moda, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { siteConfig, type Locale } from "@/lib/site-config";
import { SiteShell } from "@/components/layout/SiteShell";
import { hotelJsonLd, JsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";

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

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const locale = (headerList.get("x-locale") === "ar" ? "ar" : "en") as Locale;
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t.meta.homeTitle,
      template: "%s",
    },
    description: t.meta.homeDescription,
    alternates: {
      canonical: "/",
      languages: { en: "/", ar: "/ar" },
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : siteConfig.locale,
      alternateLocale: locale === "ar" ? [siteConfig.locale] : ["ar_EG"],
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      images: [
        {
          url: "/images/royal-suite-family-suite.webp",
          width: 1152,
          height: 864,
          alt: "Royal Suite Hotel — family suite with kitchenette in Nasr City, Cairo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      images: ["/images/royal-suite-family-suite.webp"],
    },
    icons: { icon: "/favicon.ico" },
  };
}

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
