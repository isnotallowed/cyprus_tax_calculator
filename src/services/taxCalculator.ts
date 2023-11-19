export interface Breakdown {
  rate: TaxRate;
  taxDeducted: number;
}

export interface CalculationResult {
  gross: string;
  tax: string;
  social: string;
  gesi: string;
  net: string;
}
export interface CalculationResults {
  monthly: CalculationResult;
  annual: CalculationResult;
  breakdowns: Breakdown[];
}

interface TaxRate {
  min: number;
  max: number;
  pct: number;
}

const taxRates: TaxRate[] = [
  { min: 0, max: 19500, pct: 0 },
  { min: 19501, max: 28000, pct: 20 },
  { min: 28001, max: 36300, pct: 25 },
  { min: 36301, max: 60000, pct: 30 },
  { min: 60000, max: Number.MAX_SAFE_INTEGER, pct: 35 },
];

const gesiRate = 2.65;
const socialInsuranceRate = 8.3;
const socialInsuranceCap = 54396.0;

export const formatMoney = (n: string | number): string => {
  n = Number(n);
  if (n === Number.MAX_SAFE_INTEGER) return "-";

  const c = 2;
  const d = ".";
  const t = ",";
  const s = n < 0 ? "-" : "";
  const absoluteN = Math.abs(n);

  const i: string = String(parseInt(absoluteN.toFixed(c), 10));
  const l = i.length;
  const j = l > 3 ? l % 3 : 0;

  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(absoluteN - parseFloat(i))
          .toFixed(c)
          .slice(2)
      : "")
  );
};

const calculateTaxBreakdown = (
  totalTaxableAmount: number,
  taxRates: TaxRate[],
): { tax: number; breakdown: { rate: TaxRate; taxDeducted: number }[] } => {
  let tax = 0.0;
  const breakdown: { rate: TaxRate; taxDeducted: number }[] = [];

  taxRates.forEach((rate) => {
    if (totalTaxableAmount > rate.min) {
      let amountInTaxBracket = totalTaxableAmount;
      if (amountInTaxBracket > rate.max) amountInTaxBracket = rate.max;
      amountInTaxBracket -= rate.min;

      const taxDeducted = (amountInTaxBracket * rate.pct) / 100;
      tax += taxDeducted;
      breakdown.push({ rate, taxDeducted });
    }
  });

  return { tax, breakdown };
};

export const calculateResults = (
  salary: number,
  hasThirteenth: boolean,
  isAnnual: boolean,
): CalculationResults => {
  // Adjust salary based on whether it's annual or monthly
  const adjustedSalary = isAnnual
    ? salary
    : hasThirteenth
    ? salary * 13
    : salary * 12;

  const yearlyGross = parseFloat(adjustedSalary.toString());

  // calculate gesi
  const gesi = (yearlyGross * gesiRate) / 100;

  // calculate social insurance
  let insurableAmount = yearlyGross;
  if (yearlyGross > socialInsuranceCap) {
    insurableAmount = socialInsuranceCap;
  }
  const social = (insurableAmount * socialInsuranceRate) / 100;

  const untaxables = social + gesi;
  const totalTaxableAmount = yearlyGross - untaxables;

  const { tax, breakdown } = calculateTaxBreakdown(
    totalTaxableAmount,
    taxRates,
  );

  const months = hasThirteenth ? 13 : 12;

  return {
    annual: {
      gross: formatMoney(adjustedSalary),
      tax: formatMoney(tax),
      social: formatMoney(social),
      gesi: formatMoney(gesi),
      net: formatMoney(adjustedSalary - tax - social - gesi),
    },
    monthly: {
      gross: formatMoney(adjustedSalary / months),
      tax: formatMoney(tax / months),
      social: formatMoney(social / months),
      gesi: formatMoney(gesi / months),
      net: formatMoney((adjustedSalary - tax - social - gesi) / months),
    },
    breakdowns: breakdown,
  };
};
