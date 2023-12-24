import { PrimeReactProvider } from "primereact/api";
import { NextIntlClientProvider } from "next-intl";

export default function MyApp({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />
    </PrimeReactProvider>
  );
}
