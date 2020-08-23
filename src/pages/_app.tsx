import '../styles/globals.scss';
import Head from 'next/head';

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hoang Trinh's Website</title>
        <meta
          name="description"
          content="A passionated developer who loves solving problems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default _App;
