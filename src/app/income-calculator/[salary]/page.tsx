import EmployeeCalculatorContent from "@/app/components/EmployeeCalculator";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import { formatWithCurrency } from "@/helpers/money";
import {SALARIES} from "@/helpers/salaries";

type IncomeCalculatorWithSalaryProps = {
  params: {
    salary: number;
  };
};

export async function generateMetadata({
  params,
}: IncomeCalculatorWithSalaryProps): Promise<Metadata> {
  return {
    title: `Cyprus Tax Calculator | Taxes With ${params.salary} Euro Annual Salary`,
    description: `How much should I pay with ${params.salary} annual salary on Cyprus? Use our Cyprus Tax Calculator for estimating your taxes!`,
  };
}

const IncomeCalculatorWithSalary = ({
  params: { salary },
}: IncomeCalculatorWithSalaryProps) => {
  salary = Number(salary);
  if (!SALARIES.includes(salary)) notFound();
  return (
    <main>
      <EmployeeCalculatorContent initialSalary={salary} />
      <div className="p-4 rounded-2xl bg-white mt-14 flex flex-col gap-4 shadow-xl indent-4 text-justify">
        <h1 className="text-center text-2xl indent-0 font-bold">
          You Can Calculate Taxes For Your {salary} EUR Annual Salary with Our
          Cyprus Employee Tax Calculator
        </h1>
        <p>
          As an employee in Cyprus earning €{salary} annually, understanding and
          estimating your tax liabilities can be overwhelming. Our
          state-of-the-art Employee Tax Calculator is here to simplify the
          process and provide accurate results.
        </p>
        <p>
          Tailored for residents, non-residents, and expatriates, our
          user-friendly interface ensures effortless navigation through the
          complexities of Cyprus tax laws. Our Cyprus Employee Tax Calculator
          caters to the specific tax needs of different individuals, ensuring a
          hassle-free tax calculation process.
        </p>
        <p>
          With regular updates to reflect the latest tax regulations, our
          algorithm guarantees precise estimates, empowering you to make
          informed financial decisions based on the most current information.
        </p>
        <p>
          Replace manual calculations and tedious spreadsheets with our tax
          planning tool that offers smart strategies to optimize your tax
          savings effectively. Explore various deductions and credits available
          on a €{salary} annual salary.
        </p>
        <p>
          Your financial information is safe with us. Our top-notch security
          measures ensure the confidentiality of your data throughout the tax
          calculation process.
        </p>
        <p>
          Our Employee Tax Calculator remains neutral and unbiased, without
          promoting any specific products or services, allowing you to explore
          financial planning with an open mind.
        </p>
        <p>
          Accessible from any device with an internet connection, you can
          calculate your taxes on the go, granting you the flexibility to manage
          your finances with ease and convenience.
        </p>
        <p>
          Empower yourself financially with our Employee Tax Calculator today.
          Say hello to accurate, efficient, and unbiased tax estimations,
          securing a brighter financial future. Experience the convenience of
          our Cyprus Tax Calculator - try it now and unlock a world of financial
          possibilities.
        </p>
      </div>
    </main>
  );
};

export default IncomeCalculatorWithSalary;
