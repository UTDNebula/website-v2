import Chrome from '@/../public/projects/skedge/chrome.png';
import Cover from '@/../public/projects/skedge/cover.png';
import Firefox from '@/../public/projects/skedge/firefox.png';
import aggregate from '@/../public/projects/skedge/icons8-aggregate-100.png';
import calendar from '@/../public/projects/skedge/icons8-calendar-100.png';
import input from '@/../public/projects/skedge/icons8-input-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

export const metadata: Metadata = {
  title: 'Skedge',
  description:
    'Choose the perfect classes for you: easy access to all the information you need to plan your schedule.',
  alternates: {
    canonical: '/projects/skedge',
  },
};

const features = [
  {
    title: 'Multiple Sources',
    description: 'Find grade distributions and Rate My Professors scores for any given class.',
    img: { src: input, alt: 'input' },
  },
  {
    title: 'Aggregate',
    description:
      'Powerful query abilities that aggregate grade and Rate My Professors data across several years to give you a more wholistic view.',
    img: { src: aggregate, alt: 'aggregate' },
  },
  {
    title: 'Schedule Planner Integration',
    description:
      'Direct integration means getting the exact information you need, right when you need it.',
    img: { src: calendar, alt: 'calendar' },
  },
];

export default function Skedge() {
  return (
    <Project
      name="SKEDGE"
      tagline={
        <>
          Choose the perfect
          <br />
          classes for you
        </>
      }
      description="Easy access to all the information you need to plan your schedule."
      cover={{
        src: Cover,
        alt: 'Skedge screenshot',
      }}
      projectLink={
        <div className="relative -top-20 w-full flex justify-center gap-4 drop-shadow">
          <div className="bg-royal px-10 py-6 flex flex-col gap-4 items-center rounded-2xl drop-shadow-sm">
            <p className="text-3xl text-white font-medium">Get started</p>
            <div className="flex gap-4">
              <a
                className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                href="https://chromewebstore.google.com/detail/skedge/ghipfanpcodcmkjacmmfjdmccdiaahab"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Chrome} alt="Chrome icon" className="h-10 w-10" />
              </a>
              <a
                className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors"
                href="https://addons.mozilla.org/en-US/firefox/addon/sk-edge/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Firefox} alt="Firefox icon" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      }
      featuresDescription="Get all of your Rate My Professors and grade distribution data without ever leaving schedule planner!"
      features={features}
      learnMoreLink="https://github.com/UTDNebula/skedge"
      repos="skedge"
    />
  );
}
