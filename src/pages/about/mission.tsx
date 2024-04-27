import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const values = [
  {
    name: 'Open Source',
    description: 'We believe in the principles of Free and Open Source Software.',
  },
  {
    name: 'Students as Primary Stakeholders',
    description: 'Our focal point is on the student body.',
  },
  {
    name: 'Industry Standards',
    description: 'Assist in the professional development of our membership.',
  },
  {
    name: 'Maintainability',
    description: 'Offer a consistent, reliable, and excellent experience.',
  },
  {
    name: 'Minimizing Overhead and Organizational Bloat',
    description: 'Established explicitly as a small team with defined roles.',
  },
  {
    name: 'Inclusive and Inviting Environment',
    description: 'Emphasis on finding highly motivated individuals.',
  },
];

const Mission = () => (
  <>
    <Head>
      <title>Mission - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/resources/roles" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/resources/roles" />
    </Head>
    <Header text="Mission" />
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <p className="text-3xl pb-4">
        Whereas students often lack tools that assist in their academic and career success; whereas
        students benefit from applying their knowledge outside of the classroom; and whereas there
        should be a place to learn and have fun while building tools for the community, we establish
        the Nebula Labs organization to build and maintain tools that help students, to foster an
        interdisciplinary and welcoming community, and to teach the community what we learn.
      </p>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">Values</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {values.map((value) => (
          <div key={value.name}>
            <h3 className="text-3xl font-bold text-center">{value.name}</h3>
            <p className="text-2xl text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h3 className="text-3xl font-bold pb-4 text-center">
        See{' '}
        <a
          className="text-royal underline decoration-transparent hover:decoration-inherit transition"
          href="https://nebula-labs.atlassian.net/wiki/spaces/Officers/pages/8716405/Organization+Mission+Goals+and+Values+as+of+Founding"
          target="_blank"
        >
          our Confluence
        </a>{' '}
        for more
      </h3>
    </div>
    <Footer />
  </>
);

export default Mission;
