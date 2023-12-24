"use client";
import { Menubar } from "primereact/menubar";
import { useMessages, useTranslations, useLocale } from "next-intl";
import { Link as CustomLink, usePathname } from "@/navigation";
import Link from "next/link";

const LOCALES = [
  { label: "English", code: "en", uri: "" },
  { label: "Ελληνική", code: "el", uri: "/el" },
  { label: "Русский", code: "ru", uri: "/ru" },
];

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const getUriByCode = (code: string) => {
    if (code === "en") return pathname;
    return `/${code}${pathname}`;
  };

  const LINKS = [
    {
      label: t("common.income_tax_calculator"),
      template: () => {
        return (
          <CustomLink
            className="text-blue-700 lg:text-white py-2 px-4"
            href={"/"}
          >
            {t("common.income_tax_calculator")}
          </CustomLink>
        );
      },
    },
    {
      label: t("common.vat_calculator"),
      template: () => {
        return (
          <CustomLink
            className="text-blue-700 lg:text-white py-2 px-4"
            href={"/vat-calculator"}
          >
            {t("common.vat_calculator")}
          </CustomLink>
        );
      },
    },
  ];
  return (
    <header className="bg-blue-700">
      <div className="container mx-auto px-4 py-4">
        <Menubar
          model={LINKS}
          start={
            <div className="flex items-center">
              <CustomLink
                className="text-2xl md:text-3xl text-white"
                href={"/"}
              >
                Cyprus Tax Calculator
              </CustomLink>
              <div className="group ml-2 pr-3 relative">
                <span>
                  <img
                    src={`/images/flags/${locale}.png`}
                    className="w-6"
                    alt="Ελληνική"
                  />
                </span>
                <ul className="absolute z-30 w-max right-0 hidden group-hover:block bg-blue-100 shadow-xl rounded-xl !px-4 !py-4 hover:block">
                  {LOCALES.map((c) => (
                    <li key={c.code} className="mb-3 last:mb-0">
                      <Link
                        href={getUriByCode(c.code)}
                        className={`text-black flex gap-2 ${
                          locale === c.code ? "font-bold" : "font-normal"
                        }`}
                      >
                        <img
                          src={`/images/flags/${c.code}.png`}
                          className="w-6"
                          alt="Ελληνική"
                        />
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          }
          className="bg-blue-700 text-white flex justify-between"
        />
      </div>
    </header>
  );
};

export default Header;
