"use client";
import Link from "next/link";
import { Menubar } from "primereact/menubar";

const start = (
  <Link className="text-2xl md:text-3xl text-white" href={"/"}>
    Rent Georgia
  </Link>
);

const Header = () => {
  return (
    <header className="bg-blue-700">
      <div className="container mx-auto px-4 py-4">
        <p>Rent Georgia</p>
      </div>
    </header>
  );
};

export default Header;
