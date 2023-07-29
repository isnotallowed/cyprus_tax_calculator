import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { formatWithCurrency, formatWithPercent } from "@/helpers/money";
import { Breakdown } from "@/services/taxCalculator";

interface EmployeeCalculatorBreakdownsProps {
  breakdowns?: Breakdown[];
}
const EmployeeCalculatorBreakdowns = ({
  breakdowns,
}: EmployeeCalculatorBreakdownsProps) => {
  return (
    <DataTable
      className="bg-white md:col-span-9 rounded-2xl shadow-xl whitespace-nowrap overflow-hidden"
      scrollable
      tableClassName="overflow-auto"
      headerColumnGroup={
        <ColumnGroup>
          <Row>
            <Column header="Tax Bracket" colSpan={3} />
            <Column header="Tax Deducted" colSpan={1} />
          </Row>
          <Row>
            <Column header="Start" />
            <Column header="End" />
            <Column header="Rate" />
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
        header="Start"
      />
      <Column
        body={(rowData) => {
          return `${formatWithCurrency(rowData.rate.max)}`;
        }}
        header="End"
      />
      <Column
        body={(rowData) => {
          return `${formatWithPercent(rowData.rate.pct)}`;
        }}
        header="Rate"
      />
      <Column
        header="Tax Deducted"
        body={(rowData) => {
          return `${formatWithCurrency(rowData.taxDeducted)}`;
        }}
      />
    </DataTable>
  );
};

export default EmployeeCalculatorBreakdowns;
