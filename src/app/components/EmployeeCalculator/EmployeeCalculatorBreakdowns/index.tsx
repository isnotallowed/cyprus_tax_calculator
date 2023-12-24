import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { formatWithCurrency, formatWithPercent } from "@/helpers/money";
import { Breakdown } from "@/services/taxCalculator";
import { useTranslations } from "next-intl";

interface EmployeeCalculatorBreakdownsProps {
  breakdowns?: Breakdown[];
}
const EmployeeCalculatorBreakdowns = ({
  breakdowns,
}: EmployeeCalculatorBreakdownsProps) => {
  const t = useTranslations();

  return (
    <DataTable
      className="bg-white col-span-12 lg:col-span-9 rounded-2xl shadow-xl whitespace-nowrap overflow-hidden"
      scrollable
      tableClassName="overflow-auto"
      headerColumnGroup={
        <ColumnGroup>
          <Row>
            <Column header={t("common.tax_bracket")} colSpan={3} />
            <Column header={t("common.tax_deducted")} colSpan={1} />
          </Row>
          <Row>
            <Column header={t("common.start")} />
            <Column header={t("common.end")} />
            <Column header={t("common.rate")} />
            <Column header="" />
          </Row>
        </ColumnGroup>
      }
      value={breakdowns}
    >
      <Column
        body={(rowData) => {
          return `${formatWithCurrency(rowData.rate.min)}`;
        }}
        header={t("common.start")}
      />
      <Column
        body={(rowData) => {
          return `${formatWithCurrency(rowData.rate.max)}`;
        }}
        header={t("common.end")}
      />
      <Column
        body={(rowData) => {
          return `${formatWithPercent(rowData.rate.pct)}`;
        }}
        header={t("common.rate")}
      />
      <Column
        header={t("common.tax_deducted")}
        body={(rowData) => {
          return `${formatWithCurrency(rowData.taxDeducted)}`;
        }}
      />
    </DataTable>
  );
};

export default EmployeeCalculatorBreakdowns;
