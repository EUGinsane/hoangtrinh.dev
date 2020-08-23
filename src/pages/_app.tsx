import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/global.scss';

const _App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Hoang Trinh&apos;s Website</title>
      <meta
        property="og:url"
        content="https://hoangtrinh.dev/demo.png"
      />
      <meta
        property="og:image"
        content="https://hoangtrinh.dev/demo.png"
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
