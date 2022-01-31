import { mediaStyles } from "@components/media";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { createEnvsFromList } from "../env";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();

    return {
      ...initialProps,
      ...page,
      styles: (
        <>
          {initialProps.styles}

          <style
            type="text/css"
            dangerouslySetInnerHTML={{ __html: mediaStyles }}
          />
        </>
      ),
    };
  }

  render() {
    const scriptEnv = `window.__ENV__ = ${JSON.stringify(
      createEnvsFromList()
    )}`;

    return (
      <>
        <Html lang="en">
          <Head>
            {/* Polyfill Intl.NumberFormat, its dependencies & en, vi locale data */}
            <script
              async={false}
              src="https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en,Intl.NumberFormat.~locale.vi"
            />
            <script dangerouslySetInnerHTML={{ __html: scriptEnv }} />
            <script
              async={false}
              src="https://cdn.paddle.com/paddle/paddle.js"
            />
          </Head>

          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
