"use client";
import React, { useState } from "react";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { useTranslations } from "next-intl";

interface VatCalculatorFormProps {
  className?: string;
}

const VAT_RATES = [
  { value: 0.05, label: "5%" },
  { value: 0.09, label: "9%" },
  { value: 0.19, label: "19%" },
];

const VatCalculatorForm = ({ className }: VatCalculatorFormProps) => {
  const t = useTranslations();

  const [priceExcludingVat, setPriceExcludingVat] = useState<number | null>(
    null,
  );
  const [selectedVatRate, setSelectedVatRate] = useState<number>(
    VAT_RATES[2].value,
  );
  const [priceIncludingVat, setPriceIncludingVat] = useState<number | null>(
    null,
  );

  const handlePriceExcludingVatChange = (event: InputNumberChangeEvent) => {
    const newValue = event.value;
    setPriceExcludingVat(newValue);
    calculatePriceIncludingVat(newValue, selectedVatRate);
  };

  const handleSelectedVatRateChange = (event: { value: number }) => {
    const newValue = event.value;
    setSelectedVatRate(newValue);
    calculatePriceIncludingVat(priceExcludingVat, newValue);
  };

  const handlePriceIncludingVatChange = (event: InputNumberChangeEvent) => {
    const newValue = event.value;
    setPriceIncludingVat(newValue);
    calculatePriceExcludingVat(newValue, selectedVatRate);
  };

  const calculatePriceIncludingVat = (
    priceExcludingVat: number | null,
    vatRate: number,
  ) => {
    if (priceExcludingVat === null) return;
    const vat = priceExcludingVat * vatRate;
    const totalPrice = priceExcludingVat + vat;
    setPriceIncludingVat(totalPrice);
  };

  const calculatePriceExcludingVat = (
    priceIncludingVat: number | null,
    vatRate: number,
  ) => {
    if (priceIncludingVat !== null) {
      const priceExcludingVat = priceIncludingVat / (1 + vatRate);
      setPriceExcludingVat(priceExcludingVat);
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <label className="flex flex-col gap-2 w-full">
        <span className="text-lg">{t("common.price_excluding_vat")}</span>
        <InputNumber
          value={priceExcludingVat}
          onChange={handlePriceExcludingVatChange}
          mode="currency"
          currency="EUR"
          locale="en-US"
          className={"w-full"}
        />
      </label>
      <label className="flex flex-col gap-2 w-max">
        <span className="text-lg">{t("common.vat_rate")}</span>
        <Dropdown
          options={VAT_RATES}
          value={selectedVatRate}
          onChange={handleSelectedVatRateChange}
          optionLabel="label"
        />
      </label>
      <label className="flex flex-col gap-2 w-full">
        <span className="text-lg">{t("common.price_including_vat")}</span>
        <InputNumber
          value={priceIncludingVat}
          onChange={handlePriceIncludingVatChange}
          mode="currency"
          currency="EUR"
          locale="en-US"
        />
      </label>
    </div>
  );
};

export default VatCalculatorForm;
