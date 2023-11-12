import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head prefix="og: http://ogp.me/ns#">
        <meta
          name="description"
          content="An initiative to build tools to make students' lives easier at UT Dallas."
        />
        <meta name="theme-color" content="#573DFF" />

        <meta property="og:title" content="Nebula Labs" />
        <meta
          property="og:description"
          content="An initiative to build tools to make students' lives easier at UT Dallas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://utdnebula.com/logoIcon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Nebula Labs Icon." />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:domain" content="utdnebula.com" />
      </Head>
      <body className="font-inter text-haiti">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
