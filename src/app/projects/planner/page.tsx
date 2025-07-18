import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import Gradient from '@/../public/images/gradient.png';
import Cover from '@/../public/projects/planner/cover.png';
import browser from '@/../public/projects/planner/icons8-browser-100.png';
import stopwatch from '@/../public/projects/planner/icons8-stopwatch-100.png';
import sword from '@/../public/projects/planner/icons8-sword-100.png';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Planner',
  description:
    'Plan your degree with ease: Blast off your academic journey with the ultimate tool for customizing your four-year degree.',
  alternates: {
    canonical: '/projects/planner',
  },
};

const features = [
  {
    title: 'Spreadsheet where?',
    description:
      "Bye-bye clunky spreadsheets, hello easy-peasy degree planning with simple click-and-drag action. You're welcome!",
    img: browser,
    alt: 'browser',
  },
  {
    title: 'Slay your progress!',
    description:
      "Not sure where you are in your degree plan? That's ok. Tracking your degree plan is now a piece of cake with our degree tracker.",
    img: sword,
    alt: 'sword',
  },
  {
    title: 'Save Time',
    description:
      'Planner streamlines academic planning, enabling you to map out your course requirements, track your progress, and adjust your plan as needed so you can focus on what you do best.',
    img: stopwatch,
    alt: 'stopwatch',
  },
];

export default function Planner() {
  return (
    <>
      <Navbar royal={true} className="relative z-20" />
      <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
        <Image src={Gradient} alt="project background" fill className="-z-20" />
        <p className="px-16 py-2 rounded-full border-2 border-white whitespace-nowrap font-display drop-shadow-sm">
          PLANNER
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-center text-shadow">
          Plan your degree
          <br />
          with ease
        </h1>
        <h2 className="text-3xl text-center text-shadow">
          Blast off your academic journey with the ultimate tool for customizing your four-year
          degree.
        </h2>
        <div className="md:mx-4 lg:mx-8 xl:mx-16 rounded-t-2xl overflow-hidden md:mb-[-4rem] lg:mb-[-8rem] xl:mb-[-16rem]">
          <Image src={Cover} alt="Planner screenshot" />
        </div>
      </div>
      <div className="relative -top-10 w-full flex justify-center">
        <a
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors drop-shadow-sm"
          href="https://planner.utdnebula.com/auth/login"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <p className="text-3xl text-center">
          Say goodbye to the stress and hassle of degree planning and hello to a smooth, organized
          path towards graduation with Nebula Planner.
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
          href="https://github.com/UTDNebula/planner"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
      <Footer />
    </>
  );
}
