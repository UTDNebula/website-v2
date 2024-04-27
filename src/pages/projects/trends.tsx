import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Trends = () => (
  <>
    <Head>
      <title>Trends - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects/trends" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/trends" />
    </Head>
    <Header text="Trends" />
    <Footer />
  </>
);

export default Trends;
