interface TaxItemProps {
  title: string;
  value?: string;
}
const TaxItem = ({ title, value }: TaxItemProps) => {
  return (
    <div className="flex items-center justify-between border-b-2">
      <p className="text-gray-700">{title}</p>
      <p className="text-lg lg:text-2xl">€ {value || "-"}</p>
    </div>
  );
};

export default TaxItem;
