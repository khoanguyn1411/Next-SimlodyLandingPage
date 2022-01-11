import "../styles/globals.css";
import "../public/fonts/FontAwesomePro/css/fontawesome.min.css";
import "../public/fonts/FontAwesomePro/css/solid.min.css";
import "../public/fonts/FontAwesomePro/css/regular.min.css";
import "rc-drawer/assets/index.css";

// import type { AppProps } from 'next/app';
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { MediaContextProvider } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#3B82F6"
        height={2}
        options={{ showSpinner: false }}
      />
      <MediaContextProvider>
        <Component {...pageProps} />
      </MediaContextProvider>
    </>
  );
}

export default MyApp;
