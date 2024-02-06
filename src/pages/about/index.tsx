import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const About = () => (
  <>
    <Head>
      <title>About - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about" />
    </Head>
    <Header text="About" />
    <Footer royalBg={false} />
  </>
);

export default About;
