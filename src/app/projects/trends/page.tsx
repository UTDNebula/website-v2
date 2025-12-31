import Gradient from '@/../public/images/gradient.png';
import Cover from '@/../public/projects/trends/cover.png';
import aggregate from '@/../public/projects/trends/icons8-aggregate-100.png';
import input from '@/../public/projects/trends/icons8-input-100.png';
import scale from '@/../public/projects/trends/icons8-scale-100.png';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Trends',
  description:
    'Choose the perfect classes for you: easy access to all the information you need to plan your schedule.',
  alternates: {
    canonical: '/projects/trends',
  },
};

const features = [
  {
    title: 'Multiple Sources',
    description: 'Find grade distributions and Rate My Professors scores for any given class.',
    img: input,
    alt: 'input',
  },
  {
    title: 'Aggregate',
    description:
      'Powerful query abilities that aggregate grade and Rate My Professors data across several years to give you a more wholistic view.',
    img: aggregate,
    alt: 'aggregate',
  },
  {
    title: 'Compare',
    description:
      'See data for multiple courses, professors, and categories on a single graph without switching tabs.',
    img: scale,
    alt: 'scale',
  },
];

export default function Trends() {
  return (
    <>
      <Navbar royal={true} className="relative z-20" />
      <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
        <Image src={Gradient} alt="project background" fill className="-z-20" />
        <p className="px-16 py-2 rounded-full border-2 border-white whitespace-nowrap font-display font-bold drop-shadow-sm">
          TRENDS
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-center text-shadow">
          Choose the perfect
          <br />
          classes for you
        </h1>
        <h2 className="text-3xl text-center text-shadow">
          Easy access to all the information you need to plan your schedule.
        </h2>
        <div className="md:mx-4 lg:mx-8 xl:mx-16 rounded-t-2xl overflow-hidden md:mb-[-4rem] lg:mb-[-8rem] xl:mb-[-16rem]">
          <Image src={Cover} alt="Trends screenshot" />
        </div>
      </div>
      <div className="relative -top-10 w-full flex justify-center">
        <a
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors drop-shadow-sm"
          href="https://trends.utdnebula.com"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <p className="text-3xl text-center">
          Our data analytics platform to help you make informed decisions about your coursework.
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
          href="https://github.com/UTDNebula/utd-trends"
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
