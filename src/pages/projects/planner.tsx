import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Planner = () => (
  <>
    <Head>
      <title>Planner - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects/planner" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/planner" />
    </Head>
    <Header text="Planner" />
    <Footer royalBg={false} />
  </>
);

export default Planner;
