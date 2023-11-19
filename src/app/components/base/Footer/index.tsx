import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-3xl text-white">
          Cyprus Tax Calculator
        </Link>
        <span className="text-sm text-white">© 2023 All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
