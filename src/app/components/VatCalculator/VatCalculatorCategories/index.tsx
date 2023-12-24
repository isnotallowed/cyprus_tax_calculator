"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useTranslations } from "next-intl";
const VAT_CATEGORIES = [
  { category: "foodstuff", vatRate: "5%" },
  { category: "water_supplies", vatRate: "5%" },
  { category: "pharmaceutical_products", vatRate: "5%" },
  { category: "medical_equipment_for_disabled_persons", vatRate: "5%" },
  { category: "children_car_seats", vatRate: "5%" },
  { category: "passenger_transport", vatRate: "5%, 9%" },
  { category: "books", vatRate: "5%" },
  { category: "books_on_other_physical_means_of_support", vatRate: "5%" },
  { category: "newspapers", vatRate: "5%" },
  { category: "periodicals", vatRate: "5%" },
  { category: "admission_to_cultural_services", vatRate: "5%" },
  { category: "admission_to_amusement_parks", vatRate: "5%" },
  { category: "pay_tv_cable", vatRate: "19%" },
  { category: "tv_licenses", vatRate: "19%" },
  { category: "writers_composers", vatRate: "5%" },
  { category: "hotel_accommodation", vatRate: "9%" },
  { category: "restaurant_and_catering_services", vatRate: "9%" },
  { category: "restaurants", vatRate: "9%" },
  { category: "medical_and_dental_care", vatRate: "Exempt" },
  { category: "repair_of_shoes_and_leather_goods", vatRate: "19%" },
  { category: "repair_of_clothing_and_household_linen", vatRate: "19%" },
  { category: "hairdressing", vatRate: "5%, 19%" },
];
const VatCalculatorCategories = () => {
  const t = useTranslations();

  return (
    <DataTable
      className="bg-white md:col-span-9 rounded-2xl shadow-xl overflow-hidden"
      value={VAT_CATEGORIES}
    >
      <Column
        body={(rowData) => t(`vat_categories.${rowData.category}`)}
        header={t("common.category")}
      />
      <Column body={(rowData) => rowData.vatRate} header={t("common.vat")} />
    </DataTable>
  );
};

export default VatCalculatorCategories;
