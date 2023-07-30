"use client";
import Link from "next/link";
import { Menubar } from "primereact/menubar";

const start = (
  <Link className="text-2xl md:text-3xl text-white" href={"/"}>
    Cyprus Tax Calculator
  </Link>
);

const LINKS = [
  {
    label: "Income Tax Calculator",
    template: () => {
      return (
        <Link className="text-blue-700 lg:text-white py-2 px-4" href={"/"}>
          Income Tax Calculator
        </Link>
      );
    },
  },
  {
    label: "VAT Calculator",
    template: () => {
      return (
        <Link
          className="text-blue-700 lg:text-white py-2 px-4"
          href={"/vat-calculator"}
        >
          VAT Calculator
        </Link>
      );
    },
  },
];

const Header = () => {
  return (
    <header className="bg-blue-700">
      <div className="container mx-auto px-4 py-4">
        <Menubar
          model={LINKS}
          start={start}
          className="bg-blue-700 text-white flex justify-between"
        />
      </div>
    </header>
  );
};

export default Header;
