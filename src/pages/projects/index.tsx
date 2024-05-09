import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';

const headerStyle =
  'text-3xl md:text-5xl font-bold pb-4 text-left hover:text-royal w-fit underline decoration-transparent hover:decoration-inherit transition';
const infoStyle = 'text-xl md:text-2xl text-left';

const Projects = () => (
  <>
    <Head>
      <title>Projects - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects" />
    </Head>
    <Header text="Projects" />
    <section className="flex flex-col gap-y-20 md:px-40 px-5">
      <section>
        <Link href="/projects/planner" className="w-full">
          <h2 className={headerStyle}>Planner</h2>
        </Link>
        <p className={infoStyle}>
          Planner is a student-focused tool for creating and tracking degree plans, offering a
          user-friendly interface to simplify course mapping and progress tracking.
        </p>
      </section>
      <section>
        <Link href="/projects/trends">
          <h2 className={headerStyle}>Trends</h2>
        </Link>
        <p className={infoStyle}>
          UTD Trends is a website that lets you visualize and compare grade distributions, and
          RateMyProfessor data for professors and courses.
        </p>
      </section>
      <section>
        <Link href="/projects/jupiter">
          <h2 className={headerStyle}>Jupiter</h2>
        </Link>
        <p className={infoStyle}>
          Jupiter is the best way to get involved on campus. It’s easy to discover new organizations
          or exciting events to make the most of the on-campus experience.
        </p>
      </section>
      <section>
        <Link href="/projects/skedge">
          <h2 className={headerStyle}>Skedge</h2>
        </Link>
        <p className={infoStyle}>
          A browser extension that hooks into course planner to give you grade and RateMyProfessor
          data while picking courses, easing your course selection experience.{' '}
        </p>
      </section>
      <section>
        <Link href="/projects/api">
          <h2 className={headerStyle}>API & Platform</h2>
        </Link>
        <p className={infoStyle}>
          The Nebula API serves as the authoritative data source for UTD information such as
          courses, student organizations, and more.
        </p>
      </section>
    </section>
    <Footer />
  </>
);

export default Projects;
