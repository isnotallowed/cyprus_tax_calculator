import { CalculationResult } from "@/services/taxCalculator";
import TaxItem from "@/app/components/EmployeeCalculator/EmployeeCalculatorResult/TaxItem";
import { useTranslations } from "next-intl";

interface EmployeeCalculatorResultProps {
  title: string;
  results?: CalculationResult;
  className?: string;
}
const EmployeeCalculatorResult = ({
  title,
  results,
  className,
}: EmployeeCalculatorResultProps) => {
  const t = useTranslations();
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-col gap-4 mt-4">
        <TaxItem title={t("common.gross")} value={results?.gross} />
        <TaxItem title={t("common.tax")} value={results?.tax} />
        <TaxItem title={t("common.social")} value={results?.social} />
        <TaxItem title={t("common.nhis_gesi")} value={results?.gesi} />
        <TaxItem title={t("common.net")} value={results?.net} />
      </div>
    </div>
  );
};

export default EmployeeCalculatorResult;
