"use client";
import { useEffect, useState } from "react";
import { CalculationResults, calculateResults } from "@/services/taxCalculator";
import EmployeeCalculatorBreakdowns from "@/app/components/EmployeeCalculator/EmployeeCalculatorBreakdowns";
import EmployeeCalculatorForm from "@/app/components/EmployeeCalculator/EmployeeCalculatorForm";
import EmployeeCalculatorResult from "@/app/components/EmployeeCalculator/EmployeeCalculatorResult";

const CalculatorContent = () => {
  const [salary, setSalary] = useState<number | undefined | null>(null);
  const [period, setPeriod] = useState<"annual" | "monthly">("annual");
  const [hasThirteenSalary, setHasThirteenSalary] = useState(false);
  const [results, setResults] = useState<CalculationResults | undefined>();

  useEffect(() => {
    if (!salary) {
      setResults(() => {
        return undefined;
      });
      return;
    }
    setResults(() => {
      return calculateResults(
        period === "monthly"
          ? hasThirteenSalary
            ? salary * 13
            : salary * 12
          : salary,
        hasThirteenSalary,
      );
    });
  }, [hasThirteenSalary, period, salary]);

  return (
    <div>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-12">
        <EmployeeCalculatorForm
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
      </div>
    </div>
  );
};

export default CalculatorContent;
