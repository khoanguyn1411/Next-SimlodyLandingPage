import "../styles/globals.css";
import "aos/dist/aos.css";

import "../public/fonts/FontAwesomePro/css/fontawesome.min.css";
import "../public/fonts/FontAwesomePro/css/solid.min.css";
import "../public/fonts/FontAwesomePro/css/regular.min.css";
import "rc-drawer/assets/index.css";

// import type { AppProps } from 'next/app';
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { MediaContextProvider } from "@components";
import { useEffect } from "react";
import AOS from "aos";
import MessengerCustomerChat from "react-messenger-customer-chat";
import envGlobal from "../env";

function MyApp({ Component, pageProps }: AppProps) {
  const { PAGE_ID, APP_ID } = envGlobal();
  
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <NextNProgress
        color="#3B82F6"
        height={2}
        options={{ showSpinner: false }}
      />
      <MediaContextProvider>
        <Component {...pageProps} />
        <MessengerCustomerChat pageId={PAGE_ID} appId={APP_ID} />
      </MediaContextProvider>
    </>
  );
}

export default MyApp;
