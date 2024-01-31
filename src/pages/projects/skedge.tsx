import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Skedge = () => (
  <>
    <Head>
      <title>Skedge - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects/skedge" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/skedge" />
    </Head>
    <Header text="Skedge" />
    <Footer royalBg={false} />
  </>
);

export default Skedge;
