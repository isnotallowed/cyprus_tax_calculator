"use client";
import { Menubar } from "primereact/menubar";
import { useMessages, useTranslations, useLocale } from "next-intl";
import { Link as CustomLink } from "@/navigation";
import Link from "next/link";

const Header = () => {
  const t = useTranslations();
  const locale = useLocale();

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
              <div className="group ml-2">
                <span>
                  <img
                    src={`/images/flags/${locale}.png`}
                    className="w-6"
                    alt="Ελληνική"
                  />
                </span>
                <ul className="absolute z-30 hidden group-hover:block bg-white shadow-xl rounded-xl !px-4 !py-4 hover:block">
                  <li className="mb-3">
                    <Link href="/el" className="text-black flex gap-2">
                      <img
                        src="/images/flags/el.png"
                        className="w-6"
                        alt="Ελληνική"
                      />
                      Ελληνική
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-black flex gap-2">
                      <img
                        src="/images/flags/en.png"
                        className="w-6"
                        alt="Ελληνική"
                      />
                      English
                    </Link>
                  </li>
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
