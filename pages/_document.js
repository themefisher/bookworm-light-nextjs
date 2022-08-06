import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  const { favicon } = config.site;

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href={favicon} />
      </Head>

      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
