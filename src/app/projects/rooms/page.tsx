import Cover from '@/../public/projects/rooms/cover.png';
import filter from '@/../public/projects/rooms/icons8-filter-100.png';
import input from '@/../public/projects/rooms/icons8-input-100.png';
import update from '@/../public/projects/rooms/icons8-update-64.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Rooms',
  description: 'Scheduling made easy: find open rooms at UT Dallas.',
  alternates: {
    canonical: '/projects/rooms',
  },
};

const features = [
  {
    title: 'Multiple Sources',
    description: 'Events are pulled from CourseBook and the Astra and Mazevo org booking sites.',
    img: { src: input, alt: 'input' },
  },
  {
    title: 'Real-Time Availability',
    description: "Availability updates daily so you'll never walk into an occupied room.",
    img: { src: update, alt: 'update' },
  },
  {
    title: 'Filters',
    description: 'Show rooms based on time, building, and capacity.',
    img: { src: filter, alt: 'filter' },
  },
];

export default function Rooms() {
  return (
    <Project
      name="ROOMS"
      tagline={
        <>
          Event planning
          <br />
          made easy
        </>
      }
      description="Find open rooms at UT Dallas."
      cover={{
        src: Cover,
        alt: 'Rooms screenshot',
      }}
      projectLink="https://rooms.utdnebula.com"
      featuresDescription="Find the perfect spot to study, hang out, or host your club meeting."
      features={features}
      learnMoreLink="https://github.com/UTDNebula/utd-rooms"
      repos="utd-rooms"
    />
  );
}
