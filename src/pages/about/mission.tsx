import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Mission = () => (
  <>
    <Head>
      <title>Mission - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/mission" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/mission" />
    </Head>
    <Header text="Mission" />
    <Footer royalBg={false} />
  </>
);

export default Mission;
