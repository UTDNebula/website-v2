import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const _404 = () => (
  <>
    <Head>
      <title>404 - Nebula Labs</title>
      <meta key="og:title" property="og:title" content="404 - Nebula Labs" />
    </Head>
    <div>
      <Header text="Not Found" />
      <h2 className="px-8 lg:px-16 xl:px-32 pb-12 text-5xl font-bold text-center">
        The requested page was not found on this site.
      </h2>
      <Footer />
    </div>
  </>
);

export default _404;
