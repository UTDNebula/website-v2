import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Membership = () => (
  <>
    <Head>
      <title>Membership - Nebula Labs</title>
      <meta property="og:title" content="Membership - Nebula Labs" />
      <link rel="canonical" href="https://www.utdnebula.com/resources/roles" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/resources/roles" />
    </Head>
    <Header text="Membership" />
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">Why Become a Member?</h2>
      <p className="text-3xl">
        Becoming a member of Nebula Labs offers a unique opportunity to contribute to an
        organization built by students, for students. In accordance with our founding mission and
        core values, we work to develop maintainable, high-quality tools that address gaps in campus
        resources and data accessibility in order to enhance the academic, social, and personal
        lives of students at UT Dallas. By joining Nebula Labs, students become part of a
        collaborative environment that seeks to improve its members&apos; technical and teamwork
        skills, providing crucial experience towards their professional development. Embracing an
        open-source ethos, our organization maintains transparency in all its processes, inviting
        all members to actively participate and contribute. Above all, we cultivate an inclusive and
        supportive environment, valuing motivation and dedication over innate skill, and actively
        combat elitism to foster a culture where all members can thrive and contribute meaningfully.
        Joining Nebula Labs is not merely about membership; it&apos;s about becoming part of a
        community dedicated to making a tangible difference in the lives of students and beyond.
      </p>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">How to Become a Member</h2>
      <p className="text-3xl">
        Look out for announcements in{' '}
        <a
          className="text-royal underline decoration-transparent hover:decoration-inherit transition"
          href="https://discord.gg/tcpcnfxmeQ"
          target="_blank"
        >
          our Discord
        </a>
        . The process generally involves active participation in a team for a semester and a brief
        membership form.
      </p>
    </div>
    <Footer />
  </>
);

export default Membership;
