import { APP_NAME } from "@constants";
import envGlobal from "env";
import NextHead from "next/head";
import { useRouter } from "next/router";

export type IHeadProps = {
  pageType?: "website",
  pageTitle?: string;
  pageDescription?: string;
  pageKeywords?: string[];
  pageAuthor?: string;
  pageCoverImageRectangle?: string;
  pageCoverImageSquare?: string;
};

export const Head: React.FC<IHeadProps> = ({
  pageType = "website",
  pageTitle,
  pageDescription = "Giúp gia tăng giá trị của đội nhóm bằng cách nâng cao nguồn nhân lực",
  pageKeywords = ["Symlody", "symlody", "simlody"],
  pageAuthor = 'symlody',
  pageCoverImageRectangle = '/images/cover-bg/cover_bg.png',
  pageCoverImageSquare
}) => {
  const router = useRouter();

  const { SITE_URL, APP_ID } = envGlobal();

  const title = pageTitle ? `${pageTitle} | ${APP_NAME}` : APP_NAME;
  const url = SITE_URL + router.asPath;
  const keywords = pageKeywords.join(', ');

  const coverImageRectangle = SITE_URL + pageCoverImageRectangle;
  const coverImageSquare = SITE_URL + (pageCoverImageSquare || pageCoverImageRectangle);

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="theme-color" content="#3B82F6" />

      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={pageAuthor} />
      <meta property="fb:app_id" content={APP_ID} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={coverImageRectangle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:creator" content={pageAuthor} />
      <meta name="twitter:image" content={coverImageSquare || coverImageRectangle} />
    </NextHead>
  );
};
