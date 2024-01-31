import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Meetings = () => (
  <>
    <Head>
      <title>Meetings - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/Meetings" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/Meetings" />
    </Head>
    <Header text="Roles" />
    <Footer royalBg={false} />
  </>
);

export default Meetings;
