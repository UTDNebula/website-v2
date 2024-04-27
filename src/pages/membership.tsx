import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Membership = () => (
  <>
    <Head>
      <title>Membership - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/resources/roles" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/resources/roles" />
    </Head>
    <Header text="Membership" />
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">Why Become a Member?</h2>
      <p className="text-3xl pb-4">
        Becoming a member of Nebula Labs offers a unique opportunity to contribute to an
        organization built on foundational values and missions aimed at enhancing the academic and
        career success of students. At its core, Nebula Labs is driven by the imperative to develop
        tools that empower the student body, addressing gaps in resources and fostering a vibrant
        community of learners. By joining Nebula Labs, individuals engage in a collaborative
        environment dedicated to the creation of software solutions tailored to enhance various
        facets of student life, from academic endeavors to personal growth. Embracing an open-source
        ethos, the organization ensures accessibility and transparency in its processes, inviting
        all members to actively participate and contribute. Moreover, Nebula Labs prioritizes the
        interests of students above all else, championing their needs even in the face of external
        pressures. Through adherence to industry standards and a commitment to maintainability,
        members gain invaluable experience in professional development while ensuring the longevity
        and effectiveness of their contributions. Nebula Labs further distinguishes itself by
        maintaining a lean organizational structure, minimizing bureaucracy to maximize focus on its
        core missions. Above all, the organization cultivates an inclusive and supportive
        environment, valuing motivation and dedication over innate skill, and actively combating
        elitism to foster a culture where all members can thrive and contribute meaningfully.
        Joining Nebula Labs is not merely about membership; it&apos;s about becoming part of a
        community dedicated to making a tangible difference in the lives of students and beyond.
      </p>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">How to Become a Member</h2>
      <p className="text-3xl pb-4">AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p>
    </div>
    <Footer />
  </>
);

export default Membership;
