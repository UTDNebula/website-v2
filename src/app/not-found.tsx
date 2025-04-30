import Head from 'next/head';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const _404 = () => (
  <>
    <Head>
      <title>404 - Nebula Labs</title>
      <meta key="og:title" property="og:title" content="404 - Nebula Labs" />
    </Head>
    <div>
      <Header text="Not Found" />
      <h2 className="px-8 lg:px-16 xl:px-32 pb-12 text-5xl font-bold text-center">
        The requested page was not found on this site.
      </h2>
      <Footer />
    </div>
  </>
);

export default _404;
