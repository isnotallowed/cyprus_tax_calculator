import { Metadata } from "next";
import EmployeeCalculatorContent from "@/app/components/EmployeeCalculator";

export const metadata: Metadata = {
  title: "Cyprus Tax Calculator | Calculate Your Income Taxes with Ease",
  description:
    "Discover the most efficient way to calculate your income taxes as an employee with our free tax calculator. Simplify the complex tax process and accurately estimate your tax liabilities. Optimize your finances and make informed financial decisions. Try our Cyprus tax calculator now!",
  keywords: [
    "cyprus",
    "tax",
    "calculator",
    "tax calculator for employees",
    "employee",
    "employer",
    "income",
    "rates",
    "salary",
    "Cyprus Tax Calculator",
    "Tax Optimization Tool",
  ],
};

export default function Home() {
  return (
    <main>
      <EmployeeCalculatorContent />
      <div className="p-4 rounded-2xl bg-white mt-14 flex flex-col gap-4 shadow-xl indent-4 text-justify">
        <h1 className="text-center text-2xl indent-0 font-bold">
          Simplify Your Tax Calculations with Our Cyprus Employee Tax Calculator
        </h1>
        <p>
          Unlock the power of seamless tax calculations in Cyprus with our
          state-of-the-art Employee Tax Calculator. As an employee,
          understanding and estimating your tax liabilities can be overwhelming,
          but fret not, for our advanced tool is here to simplify the process.
        </p>
        <p>
          Tailored to accommodate residents, non-residents, and expatriates, our
          user-friendly interface ensures effortless navigation through the
          complexities of Cyprus tax laws. Experience the convenience of
          instant, precise estimates, allowing you to take charge of your
          financial planning with confidence.
        </p>
        <p>
          Our algorithm, constantly updated to reflect the latest tax
          regulations, guarantees accurate results, empowering you to make
          informed financial decisions. Dive into comprehensive tax overviews,
          including income tax and social security contributions, giving you a
          clear understanding of your financial obligations.
        </p>
        <p>
          Gone are the days of laborious manual calculations and tedious
          spreadsheets. Our tax planning tool equips you with smart strategies,
          exploring various deductions and credits, and optimizing your tax
          savings.
        </p>
        <p>
          Data security is paramount, and we assure you that your financial
          information is protected by top-notch security measures, ensuring
          confidentiality at every step.
        </p>
        <p>
          With unbiased results, our calculator remains neutral, devoid of
          promoting any specific products or services, empowering you to explore
          financial planning without bias.
        </p>
        <p>
          Accessible from any device with an internet connection, you can
          calculate taxes on the go, granting you the flexibility to manage your
          finances with ease.
        </p>
        <p>
          Don&apos;t let the complexities of Cyprus tax calculations hold you
          back. Embrace financial empowerment today with our Employee Tax
          Calculator. Say hello to accurate, efficient, and unbiased tax
          estimations and secure a brighter financial future. Experience the
          convenience of our Cyprus Tax Calculator - try it now and unlock a
          world of financial possibilities.
        </p>
      </div>
    </main>
  );
}
