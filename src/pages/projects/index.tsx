import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const headerStyle = 'text-5xl font-bold pb-4 text-left hover:text-royal transition-colors w-fit';

const Projects = () => (
  <>
    <Head>
      <title>Projects - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects" />
    </Head>
    <Header text="Projects" />
    <section className="flex flex-col gap-y-20 px-40">
      <section>
        <a href="https://planner.utdnebula.com/">
          <h2 className={headerStyle}>Planner</h2>
        </a>
        <p className="text-2xl text-left">
          Planner is a tool to help students craft their college experience the way they want
          through an intuitive degree planning tool, featuring degree validation and course
          requirements.
        </p>
      </section>
      <section>
        <a href="https://trends.utdnebula.com/">
          <h2 className={headerStyle}>Trends</h2>
        </a>
        <p className="text-2xl text-left">
          UTD Trends is a website that lets you visualize and compare historical class grade
          distributions, and RateMyProfessor data.
        </p>
      </section>
      <section>
        <a href="https://jupiter.utdnebula.com/">
          <h2 className={headerStyle}>Jupiter</h2>
        </a>
        <p className="text-2xl text-left">
          A platform to find and keep track of events and organizations at UT Dallas.
        </p>
      </section>
      <section>
        <a href="https://chromewebstore.google.com/detail/skedge/ghipfanpcodcmkjacmmfjdmccdiaahab">
          <h2 className={headerStyle}>Skedge</h2>
        </a>
        <p className="text-2xl text-left">
          A browser extension that hooks into course planner to give you grade and RateMyProfessor
          data while picking courses.{' '}
        </p>
      </section>
      <section>
        <a href="https://github.com/UTDNebula/nebula-api">
          <h2 className={headerStyle}>API & Platform</h2>
        </a>
        <p className="text-2xl text-left">
          The Nebula API is a public API containing resources for UTD student data, including
          professor information, grade distribution information, and more.
        </p>
      </section>
    </section>
    <Footer royalBg={false} />
  </>
);

export default Projects;
