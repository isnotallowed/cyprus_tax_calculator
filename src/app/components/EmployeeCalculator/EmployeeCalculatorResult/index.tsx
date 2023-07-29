import { CalculationResult } from "@/services/taxCalculator";
import TaxItem from "@/app/components/EmployeeCalculator/EmployeeCalculatorResult/TaxItem";

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
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex flex-col gap-4 mt-4">
        <TaxItem title={"Gross"} value={results?.gross} />
        <TaxItem title={"Tax"} value={results?.tax} />
        <TaxItem title={"Social"} value={results?.social} />
        <TaxItem title={"NHIS (GESI)"} value={results?.gesi} />
        <TaxItem title={"Net"} value={results?.net} />
      </div>
    </div>
  );
};

export default EmployeeCalculatorResult;
