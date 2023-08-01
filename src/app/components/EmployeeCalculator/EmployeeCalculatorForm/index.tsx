import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { InputSwitch } from "primereact/inputswitch";

const PERIODS = [
  { title: "Annual", value: "annual" },
  { title: "Monthly", value: "monthly" },
];

interface EmployeeCalculatorFormProps {
  salary?: number | null;
  onSalaryChange: (value: number | null) => void;
  onSetPeriod: (value: "annual" | "monthly") => void;
  period: "annual" | "monthly";
  onSetHasThirteenSalary: (value: boolean) => void;
  hasThirteenSalary: boolean;
  className?: string;
}
const EmployeeCalculatorForm = ({
  salary,
  onSalaryChange,
  onSetPeriod,
  period,
  onSetHasThirteenSalary,
  hasThirteenSalary,
  className,
}: EmployeeCalculatorFormProps) => {
  return (
    <div className={className}>
      <div>
        <label className="flex flex-col gap-2">
          <span className="text-lg">Salary</span>
          <InputNumber
            id="salary"
            aria-describedby="salary"
            placeholder="€2,500"
            mode="currency"
            currency="EUR"
            value={salary}
            onChange={(e) => onSalaryChange(e.value)}
          />
        </label>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <span className="text-lg">Period</span>
        {PERIODS.map((p) => {
          return (
            <div key={p.value} className="flex items-center">
              <RadioButton
                inputId={p.value}
                name={p.value}
                value={p.value}
                onChange={(e) => onSetPeriod(e.value)}
                checked={p.value === period}
              />
              <label htmlFor={p.value} className="ml-2 text-sm">
                {p.title}
              </label>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center">
          <InputSwitch
            role="switch"
            checked={hasThirteenSalary}
            onChange={(e) => onSetHasThirteenSalary(!!e.value)}
          />
          <label htmlFor="ingredient1" className="ml-2 text-sm">
            13th salary
          </label>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCalculatorForm;
