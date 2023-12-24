"use client";
import { useEffect, useState } from "react";
import {
  CalculationResults,
  calculateResults,
  formatMoney,
} from "@/services/taxCalculator";
import EmployeeCalculatorBreakdowns from "@/app/components/EmployeeCalculator/EmployeeCalculatorBreakdowns";
import EmployeeCalculatorForm from "@/app/components/EmployeeCalculator/EmployeeCalculatorForm";
import EmployeeCalculatorResult from "@/app/components/EmployeeCalculator/EmployeeCalculatorResult";
import Link from "next/link";
import { SALARIES } from "@/helpers/salaries";
import { formatWithCurrency } from "@/helpers/money";

interface CalculatorContentProps {
  initialSalary?: number;
}

const CalculatorContent = ({ initialSalary }: CalculatorContentProps) => {
  const [salary, setSalary] = useState<number | undefined | null>(
    initialSalary,
  );
  const [period, setPeriod] = useState<"annual" | "monthly">("annual");
  const [hasThirteenSalary, setHasThirteenSalary] = useState(false);
  const [results, setResults] = useState<CalculationResults | undefined>(() => {
    return initialSalary
      ? calculateResults(initialSalary, hasThirteenSalary, period === "annual")
      : undefined;
  });

  useEffect(() => {
    if (!salary) {
      setResults(() => {
        return undefined;
      });
      return;
    }
    setResults(() => {
      return calculateResults(salary, hasThirteenSalary, period === "annual");
    });
  }, [hasThirteenSalary, period, salary]);

  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-12">
        <EmployeeCalculatorForm
          salary={salary}
          onSalaryChange={setSalary}
          onSetPeriod={setPeriod}
          period={period}
          onSetHasThirteenSalary={setHasThirteenSalary}
          hasThirteenSalary={hasThirteenSalary}
          className="p-4 md:col-span-5 xl:col-span-3 bg-white rounded-2xl shadow-xl"
        />
        <div className="p-4 bg-white md:col-span-7 xl:col-span-9 rounded-2xl w-full flex flex-col md:flex-row justify-between gap-8 lg:gap-20 shadow-xl">
          <EmployeeCalculatorResult
            title={"Annual"}
            results={results?.annual}
            className="md:w-1/2"
          />
          <EmployeeCalculatorResult
            title={"Monthly"}
            results={results?.monthly}
            className="md:w-1/2"
          />
        </div>
      </div>
      <div className="mt-14 flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-12">
        <EmployeeCalculatorBreakdowns breakdowns={results?.breakdowns} />
        <div className="p-4 bg-white col-span-12 lg:col-span-3 rounded-2xl w-full shadow-xl">
          <h3 className="text-lg font-semibold">Popular salaries</h3>
          <div className="flex flex-wrap gap-4 mt-4">
            {SALARIES.map((salary) => (
              <Link
                key={`salary-${salary}`}
                href={`/income-calculator/${salary}`}
                className={
                  `text-blue-700` +
                  (salary === initialSalary ? " font-bold" : "")
                }
              >
                {formatWithCurrency(salary, false).split(".")[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorContent;
