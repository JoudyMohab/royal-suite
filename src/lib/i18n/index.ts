import { ar } from "./ar";
import { en } from "./en";
import type { Locale } from "@/lib/site-config";

export const dictionaries = { en, ar };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localePath(locale: Locale, path: string) {
  const normalized = path === "/" ? "" : path;
  if (locale === "en") return normalized || "/";
  return `/ar${normalized || ""}` || "/ar";
}
