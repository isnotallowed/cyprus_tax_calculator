import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { LOCALES } from "@/helpers/locales";

// Can be imported from a shared config
const locales = LOCALES;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});
