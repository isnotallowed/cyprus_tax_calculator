"use client";
import VatCalculatorForm from "@/app/components/VatCalculator/VatCalculatorForm";
import VatCalculatorCategories from "@/app/components/VatCalculator/VatCalculatorCategories";

const VatCalculator = () => {
  return (
    <div className="flex flex-col gap-12 md:grid md:grid-cols-12">
      <VatCalculatorForm className="p-4 md:col-span-5 xl:col-span-3 bg-white rounded-2xl shadow-xl h-max" />
      <div className="md:col-span-7 xl:col-span-9">
        <VatCalculatorCategories />
      </div>
    </div>
  );
};

export default VatCalculator;
