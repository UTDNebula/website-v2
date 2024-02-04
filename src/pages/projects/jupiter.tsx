import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Jupiter = () => (
  <>
    <Head>
      <title>Jupiter - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects/jupiter" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/jupiter" />
    </Head>
    <Header text="Jupiter" />
    <Footer royalBg={false} />
  </>
);

export default Jupiter;
