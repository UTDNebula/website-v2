import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Contact = () => (
  <>
    <Head>
      <title>Contact - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/about/contact" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/about/contact" />
    </Head>
    <Header text="Contact" />
    <Footer royalBg={false} />
  </>
);

export default Contact;
