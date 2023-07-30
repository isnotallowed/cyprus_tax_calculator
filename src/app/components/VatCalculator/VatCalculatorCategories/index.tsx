"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
const VAT_CATEGORIES = [
  { category: "Foodstuff", vatRate: "5%" },
  { category: "Water supplies", vatRate: "5%" },
  { category: "Pharmaceutical products", vatRate: "5%" },
  { category: "Medical equipment for disabled persons", vatRate: "5%" },
  { category: "Children´s car seats", vatRate: "5%" },
  { category: "Passenger transport", vatRate: "5%, 9%" },
  { category: "Books", vatRate: "5%" },
  { category: "Books on other physical means of support", vatRate: "5%" },
  { category: "Newspapers", vatRate: "5%" },
  { category: "Periodicals", vatRate: "5%" },
  { category: "Admission to cultural services (theatre, etc)", vatRate: "5%" },
  { category: "Admission to amusement parks", vatRate: "5%" },
  { category: "Pay TV / cable", vatRate: "19%" },
  { category: "TV licenses", vatRate: "19%" },
  { category: "Writers / composers", vatRate: "5%" },
  { category: "Hotel Accommodation", vatRate: "9%" },
  { category: "Restaurant and catering services", vatRate: "9%" },
  { category: "Restaurants", vatRate: "9%" },
  { category: "Medical and dental care", vatRate: "Exempt" },
  { category: "Repair of shoes and leather goods", vatRate: "19%" },
  { category: "Repair of clothing and household linen", vatRate: "19%" },
  { category: "Hairdressing", vatRate: "5%, 19%" },
];
const VatCalculatorCategories = () => {
  return (
    <DataTable
      className="bg-white md:col-span-9 rounded-2xl shadow-xl overflow-hidden"
      value={VAT_CATEGORIES}
    >
      <Column body={(rowData) => rowData.category} header="Category" />
      <Column body={(rowData) => rowData.vatRate} header="VAT" />
    </DataTable>
  );
};

export default VatCalculatorCategories;
