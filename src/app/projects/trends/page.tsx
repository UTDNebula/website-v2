import Cover from '@/../public/projects/trends/cover.png';
import aggregate from '@/../public/projects/trends/icons8-aggregate-100.png';
import input from '@/../public/projects/trends/icons8-input-100.png';
import scale from '@/../public/projects/trends/icons8-scale-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
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
    img: { src: input, alt: 'input' },
  },
  {
    title: 'Aggregate',
    description:
      'Powerful query abilities that aggregate grade and Rate My Professors data across several years to give you a more wholistic view.',
    img: { src: aggregate, alt: 'aggregate' },
  },
  {
    title: 'Compare',
    description:
      'See data for multiple courses, professors, and categories on a single graph without switching tabs.',
    img: { src: scale, alt: 'scale' },
  },
];

export default function Trends() {
  return (
    <Project
      name="TRENDS"
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
        alt: 'Trends screenshot',
      }}
      projectLink="https://trends.utdnebula.com"
      featuresDescription="Our data analytics platform to help you make informed decisions about your coursework."
      features={features}
      learnMoreLink="https://github.com/UTDNebula/utd-trends"
      repos="trends"
    />
  );
}
