import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import React from "react";
import Script from "next/script";
import Header from "@/app/components/base/Header";
import Footer from "@/app/components/base/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-RY3J52NJY1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-RY3J52NJY1');
        `}
      </Script>
      <body className="bg-blue-100">
        <Header />
        <div className="container mx-auto px-4 my-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
