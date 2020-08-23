import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';

const _App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Hoang Trinh&apos;s Website</title>
      <meta property="og:title" content="Hoang Trinh's Website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hoangtrinh.dev" />
      <meta
        property="og:image"
        content="https://hoangtrinh.dev/images/demo.png"
      />
      <meta
        property="og:description"
        content="A passionated developer who loves solving problems."
      />
      <meta
        name="description"
        content="A passionated developer who loves solving problems."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default _App;
