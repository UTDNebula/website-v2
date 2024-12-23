import Head from 'next/head';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });
const kallisto = localFont({
  src: [
    {
      path: '../fonts/Kallisto/Kallisto Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Thin Italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Light Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Medium Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Heavy Italic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nebula Labs</title>
        <meta key="og:title" property="og:title" content="Nebula Labs" />
        <meta
          key="og:description"
          property="og:description"
          content="An initiative to build tools to make students' lives easier at UT Dallas."
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/logoIcon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-kallisto: ${kallisto.style.fontFamily};
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-Q74JGS7ZPP" />
    </>
  );
}
