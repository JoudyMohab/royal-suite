import { siteConfig, type Locale } from "@/lib/site-config";
import { localePath } from "@/lib/i18n";

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale = "en",
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${localePath(locale, item.path)}`,
    })),
  };
}
