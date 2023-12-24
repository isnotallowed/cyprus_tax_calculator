import EmployeeCalculatorContent from "@/app/components/EmployeeCalculator";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { formatWithCurrency } from "@/helpers/money";
import { SALARIES } from "@/helpers/salaries";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { renderLongText } from "@/helpers/renderLongText";

type IncomeCalculatorWithSalaryProps = {
  params: {
    salary: number;
    locale: any;
  };
};

export async function generateMetadata({
  params,
}: IncomeCalculatorWithSalaryProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
  });
  return {
    title: t("metadata.income-calculator.title", {
      salary: params.salary,
    }),
    description: t("metadata.income-calculator.description", {
      salary: params.salary,
    }),
  };
}

const IncomeCalculatorWithSalary = ({
  params: { salary },
}: IncomeCalculatorWithSalaryProps) => {
  const t = useTranslations();
  salary = Number(salary);
  if (!SALARIES.includes(salary)) notFound();
  return (
    <main>
      <EmployeeCalculatorContent initialSalary={salary} />
      <div className="p-4 rounded-2xl bg-white mt-14 flex flex-col gap-4 shadow-xl indent-4 text-justify">
        <h1 className="text-center text-2xl indent-0 font-bold">
          {t("metadata.income-calculator.seo_h1", { salary })}
        </h1>
        {renderLongText(t("metadata.income-calculator.seo_text", { salary }))}
      </div>
    </main>
  );
};

export default IncomeCalculatorWithSalary;
