import createMiddleware from "next-intl/middleware";
import { LOCALES } from "@/helpers/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales: LOCALES,

  defaultLocale: "en",
  localeDetection: false,
  // Used when no locale matches
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
