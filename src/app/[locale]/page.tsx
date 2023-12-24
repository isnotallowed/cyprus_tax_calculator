import { Metadata } from "next";
import EmployeeCalculatorContent from "@/app/components/EmployeeCalculator";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { renderLongText } from "@/helpers/renderLongText";

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
  const t = useTranslations("");
  return (
    <main>
      <EmployeeCalculatorContent />
      <div className="p-4 rounded-2xl bg-white mt-14 flex flex-col gap-4 shadow-xl indent-4 text-justify">
        <h1 className="text-center text-2xl indent-0 font-bold">
          {t("metadata.main.seo_h1")}
        </h1>
        {renderLongText(t("metadata.main.seo_text"))}
      </div>
    </main>
  );
}
