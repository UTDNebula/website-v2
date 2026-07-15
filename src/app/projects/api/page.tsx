import crowd from '@/../public/projects/api/icons8-crowd-100.png';
import expand from '@/../public/projects/api/icons8-expand-100.png';
import support from '@/../public/projects/api/icons8-support-100.png';
import Project from '@/components/Project';
import ApiLogoStandalone from '@/icons/ApiLogo';
import type { Metadata } from 'next';
import Link from 'next/link';
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
    <>
      <Project
        name="API & PLATFORM"
        logo={ApiLogoStandalone}
        tagline={
          <>
            The Backbone
            <br />
            of Nebula Labs
          </>
        }
        description="Providing reliable and feature-rich data infrastructure for all of Nebula’s projects, and yours!"
        projectLink={
          <div className="relative -top-10 w-full flex justify-center drop-shadow">
            <button
              className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-royalDark transition-colors drop-shadow-sm cursor-pointer"
              popoverTarget="key-and-docs-popover"
            >
              Get Started
            </button>
          </div>
        }
        featuresDescription="Discover a realm of possibilities with Nebula API & Platform, where data integration meets streamlined authentication."
        features={features}
        learnMoreLink="https://github.com/UTDNebula/nebula-api"
        repos={['nebula-api', 'api-tools']}
      />
      <div
        popover="auto"
        id="key-and-docs-popover"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 w-[60vw] max-w-[90vw]"
      >
        <h3 className="text-xl font-bold mb-2 text-center">API Key and Documentation</h3>
        <p className="mb-1">
          Request an API key on our{' '}
          <Link
            className="text-royal underline decoration-transparent hover:decoration-inherit transition"
            href="https://discord.utdnebula.com/"
            target="_blank"
          >
            Discord
          </Link>
          .
        </p>
        <p className="mb-1">
          Then view our{' '}
          <Link
            className="text-royal underline decoration-transparent hover:decoration-inherit transition"
            href="https://api.utdnebula.com/swagger/index.html"
            target="_blank"
          >
            documentation
          </Link>
          .
        </p>
      </div>
    </>
  );
}
