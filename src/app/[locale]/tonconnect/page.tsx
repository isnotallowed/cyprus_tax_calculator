import { Metadata } from "next";
import EmployeeCalculatorContent from "@/app/components/EmployeeCalculator";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { renderLongText } from "@/helpers/renderLongText";
import { TonConnect } from "@/app/components/TonConnect/TonConnect";

export async function generateMetadata({ params }: any) {
  const t = await getTranslations({
    locale: params.locale,
  });

  return {
    title: t("metadata.main.title"),
    description: t("metadata.main.description"),
    keywords: t("metadata.main.keywords"),
  };
}

export default function Home() {
  return (
    <main>
      <TonConnect />
    </main>
  );
}
