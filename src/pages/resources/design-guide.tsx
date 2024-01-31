import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const DesignGuide = () => (
  <>
    <Head>
      <title>Design Guide - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/design-guide" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/design-guide" />
    </Head>
    <Header text="Design Guide" />
    <Footer royalBg={false} />
  </>
);

export default DesignGuide;
