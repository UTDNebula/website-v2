import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Newsletter = () => (
  <>
    <Head>
      <title>Newsletter - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/newsletter" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/newsletter" />
    </Head>
    <Header text="Newsletter" />
    <Footer royalBg={false} />
  </>
);

export default Newsletter;
