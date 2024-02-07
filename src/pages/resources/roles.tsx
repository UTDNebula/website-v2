import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Roles = () => (
  <>
    <Head>
      <title>Roles - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/resources/roles" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/resources/roles" />
    </Head>
    <Header text="Roles" />
    <Footer royalBg={false} />
  </>
);

export default Roles;
