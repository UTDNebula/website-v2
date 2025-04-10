import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Image from 'next/image';
import Gradient from '@/../public/images/gradient.png';

import Cover from '@/../public/projects/jupiter/cover.png';
import search from '@/../public/projects/jupiter/icons8-search-100.png';
import calendar from '@/../public/projects/jupiter/icons8-calendar-100.png';
import community from '@/../public/projects/jupiter/icons8-community-100.png';

const features = [
  {
    title: 'Browse our communities',
    description:
      'Simplify your search for a community by using our helpful filters. Keep an eye out for our featured organizations for exciting upcoming events.',
    img: search,
    alt: 'magnifying glass',
  },
  {
    title: 'Keep up to date',
    description:
      "Use our events calendar to find out what's going on around campus and register for events to show your interest.",
    img: calendar,
    alt: 'calendar',
  },
  {
    title: 'Growing Community',
    description:
      'Interested in growing your own org, contact us to add you organization to our growing list of on campus communities.',
    img: community,
    alt: '3 people icon',
  },
];

const Jupiter = () => (
  <>
    <Head>
      <title>Jupiter - Nebula Labs</title>
      <meta key="og:title" property="og:title" content="Jupiter - Nebula Labs" />
      <meta
        key="og:description"
        property="og:description"
        content="Find your community on campus: get connected with student organizations and browse events."
      />
      <link rel="canonical" href="https://www.utdnebula.com/projects/jupiter" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/jupiter" />
    </Head>
    <Navbar royal={true} className="relative z-20" />
    <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
      <Image src={Gradient} alt="project background" fill className="-z-20" />
      <p className="px-16 py-2 rounded-full border-2 border-white whitespace-nowrap font-kallisto drop-shadow-sm">
        JUPITER
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-center text-shadow">
        Find your community
        <br />
        on campus
      </h1>
      <h2 className="text-3xl text-center text-shadow">
        Get connected with student organizations and browse events.
      </h2>
      <div className="md:mx-4 lg:mx-8 xl:mx-16 rounded-t-2xl overflow-hidden md:mb-[-4rem] lg:mb-[-8rem] xl:mb-[-16rem]">
        <Image src={Cover} alt="Jupiter screenshot" />
      </div>
    </div>
    <div className="relative -top-10 w-full flex justify-center">
      <a
        className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors drop-shadow-sm"
        href="https://jupiter.utdnebula.com"
        target="_blank"
      >
        Get Started
      </a>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">Features</h2>
      <p className="text-3xl text-center">
        Navigate the hundreds of communities on campus all on one platform.
      </p>
    </div>
    <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-cornflower-50">
            <Image src={feature.img} alt={feature.alt} className="h-10 w-10 m-7" />
          </div>
          <p className="text-2xl font-bold text-center">{feature.title}</p>
          <p className="text-xl text-center">{feature.description}</p>
        </div>
      ))}
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">Interested? Learn more about our project</h2>
      <a
        className="px-6 py-3 text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors"
        href="https://github.com/UTDNebula/jupiter"
        target="_blank"
      >
        Learn More
      </a>
    </div>
    <Footer />
  </>
);

export default Jupiter;
