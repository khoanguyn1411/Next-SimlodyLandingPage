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
      <meta name="theme-color" content="#3B82F6" />
      <meta name="keywords" content="TungTung" />
      <meta name="author" content="tungtung" />
      {/* Open Graph */}
      <meta property="og:url" content="https://tungtung.vn" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="TungTung JSC" />
      <meta property="og:description" content="COMING SOON · OUR NEW WEBSITE" />
      <meta
        property="og:image"
        content="https://tungtung.vn/assets/images/web-cover.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" />
      {/* Twitter Card */}
      <meta name="twitter :card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@tungtung" />
    </NextHead>
  );
};
