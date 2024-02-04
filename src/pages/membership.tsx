import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Membership = () => (
  <>
    <Head>
      <title>Membership - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/membership" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/membership" />
    </Head>
    <Header text="Membership" />
    <Footer royalBg={false} />
  </>
);

export default Membership;
