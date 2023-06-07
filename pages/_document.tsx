import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;
