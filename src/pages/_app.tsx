import type { AppProps } from 'next/app';
import Head from 'next/head';
// providers
import ThemeProvider from '../theme';
import { MetaMaskProvider } from 'metamask-react';
// components
import Header from 'src/layout/Header';
import Footer from 'src/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SimpleApp</title>
        <meta name='...' content='...' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider>
        <MetaMaskProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </MetaMaskProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
