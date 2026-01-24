import Cover from '@/../public/projects/clubs/cover.png';
import calendar from '@/../public/projects/clubs/icons8-calendar-100.png';
import community from '@/../public/projects/clubs/icons8-community-100.png';
import search from '@/../public/projects/clubs/icons8-search-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Clubs',
  description:
    'Find your community on campus: get connected with student organizations and browse events.',
  alternates: {
    canonical: '/projects/clubs',
  },
};

const features = [
  {
    title: 'Browse our communities',
    description:
      'Simplify your search for a community by using our helpful filters. Keep an eye out for our featured organizations for exciting upcoming events.',
    img: {
      src: search,
      alt: 'magnifying glass',
    },
  },
  {
    title: 'Keep up to date',
    description:
      "Use our events calendar to find out what's going on around campus and register for events to show your interest.",
    img: {
      src: calendar,
      alt: 'calendar',
    },
  },
  {
    title: 'Growing Community',
    description:
      'Interested in growing your own org, contact us to add you organization to our growing list of on campus communities.',
    img: {
      src: community,
      alt: '3 people icon',
    },
  },
];

export default function Clubs() {
  return (
    <Project
      name="CLUBS"
      tagline={
        <>
          Find your community
          <br />
          on campus
        </>
      }
      description="Get connected with student organizations and browse events."
      cover={{
        src: Cover,
        alt: 'Clubs screenshot',
      }}
      projectLink="https://clubs.utdnebula.com"
      featuresDescription="Navigate the hundreds of communities on campus all on one platform."
      features={features}
      learnMoreLink="https://github.com/UTDNebula/utd-clubs"
      repos="utd-clubs"
    />
  );
}
