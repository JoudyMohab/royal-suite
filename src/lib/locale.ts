import { cache } from "react";
import { headers } from "next/headers";
import type { Locale } from "@/lib/site-config";

export const getRequestLocale = cache(async (): Promise<Locale> => {
  const headerList = await headers();
  return headerList.get("x-locale") === "ar" ? "ar" : "en";
});
