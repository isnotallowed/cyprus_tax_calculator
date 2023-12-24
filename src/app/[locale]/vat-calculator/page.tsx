import React from "react";
import VatCalculator from "@/app/components/VatCalculator";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { renderLongText } from "@/helpers/renderLongText";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations({
    locale: params.locale,
  });

  console.log(t);

  return {
    title: t("metadata.vat-calculator.title"),
    description: t("metadata.vat-calculator.description"),
    keywords: t("metadata.vat-calculator.keywords"),
  };
}

const VatRateCalculator = () => {
  const t = useTranslations();
  return (
    <div>
      <VatCalculator />
      <div className="p-4 rounded-2xl bg-white mt-14 flex flex-col gap-4 shadow-xl indent-4 text-justify">
        <h1 className="text-center text-2xl indent-0 font-bold">
          {t("metadata.vat-calculator.seo_h1")}
        </h1>
        {renderLongText(t("metadata.vat-calculator.seo_text"))}
      </div>
    </div>
  );
};

export default VatRateCalculator;
