import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import Gradient from '@/../public/images/gradient.png';
import crowd from '@/../public/projects/api/icons8-crowd-100.png';
import expand from '@/../public/projects/api/icons8-expand-100.png';
import support from '@/../public/projects/api/icons8-support-100.png';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'API & Platform',
  description:
    'The Backbone of Nebula Labs: providing reliable and feature-rich data infrastructure for all of Nebula’s projects, and yours!',
  alternates: {
    canonical: '/projects/api',
  },
};

const features = [
  {
    title: 'Size',
    description: 'The largest dataset of university data on campus.',
    img: expand,
    alt: 'expanding icon',
  },
  {
    title: 'Public API',
    description:
      'A public API for Nebula products and external developers making data easily accessible.',
    img: crowd,
    alt: 'crowd',
  },
  {
    title: 'Support',
    description:
      'Continuously improving and up-to-date data as well as personal support in the Nebula Discord.',
    img: support,
    alt: 'wrench',
  },
];

export default function API() {
  return (
    <>
      <Navbar royal={true} className="relative z-20" />
      <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
        <Image src={Gradient} alt="project background" fill className="-z-20" />
        <p className="px-16 py-2 rounded-full border-2 border-white whitespace-nowrap font-display drop-shadow-sm">
          API & Platform
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-center text-shadow">
          The Backbone
          <br />
          of Nebula Labs
        </h1>
        <h2 className="text-3xl text-center text-shadow">
          Providing reliable and feature-rich data infrastructure for all of Nebula’s projects, and
          yours!
        </h2>
        <div className="h-10"></div>
      </div>
      <div className="relative -top-10 w-full flex justify-center">
        <a
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors drop-shadow-sm"
          href="https://api.utdnebula.com/swagger/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <p className="text-3xl text-center">
          Discover a realm of possibilities with Nebula API & Platform, where data integration meets
          streamlined authentication.
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
          href="https://github.com/UTDNebula/nebula-api"
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
