import type { Locale } from "@/lib/site-config";

const publicFile = /\.[^/]+$/;

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return "en";
}

export function stripLocale(pathname: string) {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  return pathname;
}

export function isSkippedPath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    publicFile.test(pathname)
  );
}
