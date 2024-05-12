import clsx from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Rectangle from '@/../public/rectangle.png';
import Cover from '@/../public/skedge/cover.png';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

import Chrome from '@/../public/skedge/chrome.png';
import Firefox from '@/../public/skedge/firefox.png';

import medal from '@/../public/skedge/icons8-gold-medal-100.png';
import test_tube from '@/../public/skedge/icons8-test-tube-100.png';
import stopwatch from '@/../public/skedge/icons8-stopwatch-100.png';

interface Feature {
  title: string;
  description: string;
  img: StaticImageData;
  alt: string;
  imgOffset?: string;
}

const features: Feature[] = [
  {
    title: 'Spreadsheet where?',
    description:
      "Bye-bye clunky spreadsheets, hello easy-peasy degree planning with simple click-and-drag action. You're welcome!",
    img: medal,
    alt: 'medal',
  },
  {
    title: 'Slay your progress!',
    description:
      "Not sure where you are in your degree plan? That's ok. Tracking your degree plan is now a piece of cake with our degree tracker.",
    img: test_tube,
    alt: 'test tube',
    imgOffset: 'pb-5 pt-3',
  },
  {
    title: 'Save Time',
    description:
      'Skedge streamlines academic planning, enabling you to map out your course requirements, track your progress, and adjust your plan as needed so you can focus on what you do best.',
    img: stopwatch,
    alt: 'stopwatch',
    imgOffset: 'pb-5 pt-3',
  },
];

const Skedge = () => (
  <>
    <Head>
      <title>Skedge - Nebula Labs</title>
      <link rel="canonical" href="https://www.utdnebula.com/projects/skedge" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com/projects/skedge" />
    </Head>
    <Navbar royal={true} className="relative z-20" />
    <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
      <Image src={Rectangle} alt="project background" fill className="-z-20" />
      <p className="px-16 py-2 rounded-full border-2 border-white whitespace-nowrap font-kallisto drop-shadow">
        SKEDGE
      </p>
      <h1 className="text-5xl md:text-6xl font-bold text-center text-shadow">
        Hi
        <br />
        Hi
      </h1>
      <h2 className="text-3xl text-center text-shadow">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
        demonstrate the visual...
      </h2>
      <div className="md:mx-4 lg:mx-8 xl:mx-16 rounded-t-2xl overflow-hidden md:mb-[-4rem] lg:mb-[-8rem] xl:mb-[-16rem] ">
        <Image src={Cover} alt="Skedge screenshot" />
      </div>
    </div>
    <div className="relative -top-20 w-full flex justify-center gap-4">
      <div className="bg-royal px-10 py-6 flex flex-col gap-4 items-center rounded-2xl drop-shadow">
        <p className="text-3xl text-white font-medium">Get started</p>
        <div className="flex gap-4">
          <a
            className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
            href="https://chromewebstore.google.com/detail/skedge/ghipfanpcodcmkjacmmfjdmccdiaahab"
            target="_blank"
          >
            <Image src={Chrome} alt="Chrome icon" className="h-10 w-10" />
          </a>
          <a
            className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
            href="https://addons.mozilla.org/en-US/firefox/addon/sk-edge/"
            target="_blank"
          >
            <Image src={Firefox} alt="Firefox icon" className="h-10 w-10" />
          </a>
        </div>
      </div>
    </div>
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">Features</h2>
      <p className="text-3xl text-center">
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
        demonstrate the visual...
      </p>
    </div>
    <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-cornflower-50">
            <Image
              src={feature.img}
              alt={feature.alt}
              className={clsx('h-24 w-24 p-4', feature.imgOffset)}
            />
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
        href="https://github.com/UTDNebula/skedge"
        target="_blank"
      >
        Learn More
      </a>
    </div>
    <Footer />
  </>
);

export default Skedge;
