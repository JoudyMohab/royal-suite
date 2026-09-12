import { NextRequest, NextResponse } from "next/server";
import { getLocaleFromPathname, isSkippedPath, stripLocale } from "@/lib/i18n/paths";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isSkippedPath(pathname)) return NextResponse.next();

  const locale = getLocaleFromPathname(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  if (locale === "ar") {
    const url = request.nextUrl.clone();
    url.pathname = stripLocale(pathname);
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
