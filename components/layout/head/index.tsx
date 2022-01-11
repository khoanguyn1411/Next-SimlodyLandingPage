import { APP_NAME } from "@constants";
import NextHead from "next/head";

type IProps = {
  pageTitle?: string;
};

export const Head: React.FC<IProps> = ({ pageTitle }) => {
  const title = pageTitle ? `${pageTitle} | ${APP_NAME}` : APP_NAME;

  return (
    <NextHead>
      <title>{title}</title>
      {/* <meta name="theme-color" content="#f37f26" /> */}
      <meta name="keywords" content="TungTung" />
      <meta name="author" content="tungtung" />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {/* Twitter Card */}
      <meta name="twitter :card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@tungtung" />
    </NextHead>
  );
};
