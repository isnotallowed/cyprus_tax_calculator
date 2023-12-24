import { formatMoney } from "@/services/taxCalculator";

export const formatWithCurrency = (value: number | string, hasSpace = true) => {
  if (value === Number.MAX_SAFE_INTEGER) return "-";
  return `€${hasSpace ? " " : ""}${formatMoney(value)}`;
};
export const formatWithPercent = (value: number | string) => {
  return `${value}%`;
};
