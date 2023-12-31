import "../globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import React from "react";
import Script from "next/script";
import Header from "@/app/components/base/Header";
import Footer from "@/app/components/base/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="container mx-auto px-4 my-8">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
