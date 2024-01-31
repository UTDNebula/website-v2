import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Projects = () => (
  <>
    <Head>
      <title>Projects - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects" />
    </Head>
    <Header text="Projects" />
    <Footer royalBg={false} />
  </>
);

export default Projects;
