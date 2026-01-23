import crowd from '@/../public/projects/api/icons8-crowd-100.png';
import expand from '@/../public/projects/api/icons8-expand-100.png';
import support from '@/../public/projects/api/icons8-support-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import React from 'react';

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
    img: {
      src: expand,
      alt: 'expanding icon',
    },
  },
  {
    title: 'Public API',
    description:
      'A public API for Nebula products and external developers making data easily accessible.',
    img: {
      src: crowd,
      alt: 'crowd',
    },
  },
  {
    title: 'Support',
    description:
      'Continuously improving and up-to-date data as well as personal support in the Nebula Discord.',
    img: {
      src: support,
      alt: 'wrench',
    },
  },
];

export default function API() {
  return (
    <Project
      name="API & PLATFORM"
      tagline={
        <>
          The Backbone
          <br />
          of Nebula Labs
        </>
      }
      description="Providing reliable and feature-rich data infrastructure for all of Nebula’s projects, and yours!"
      projectLink="https://api.utdnebula.com/swagger/index.html"
      featuresDescription="Discover a realm of possibilities with Nebula API & Platform, where data integration meets streamlined authentication."
      features={features}
      learnMoreLink="https://github.com/UTDNebula/nebula-api"
      repos={['nebula-api', 'api-tools']}
    />
  );
}
