import { formatMoney } from "@/services/taxCalculator";

export const formatWithCurrency = (value: number | string) => {
  if (value === Number.MAX_SAFE_INTEGER) return "-";
  return `€ ${formatMoney(value)}`;
};
export const formatWithPercent = (value: number | string) => {
  return `${value}%`;
};
