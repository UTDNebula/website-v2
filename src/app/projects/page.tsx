import Arrow from '@/../public/icons/arrow-black.svg';
import Header from '@/components/Header';
import ApiLogoStandalone from '@/icons/ApiLogo';
import ClubsLogoStandalone from '@/icons/ClubsLogo';
import NotebookLogoStandalone from '@/icons/NotebookLogo';
import PlannerLogoStandalone from '@/icons/PlannerLogo';
import RoomsLogoStandalone from '@/icons/RoomsLogo';
import SkedgeLogoStandalone from '@/icons/SkedgeLogo';
import TrendsLogoStandalone from '@/icons/TrendsLogo';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects',
  },
};

const projects = [
  {
    name: 'Clubs',
    link: 'https://clubs.utdnebula.com/',
    description: 'Find and connect with student organizations',
    icon: ClubsLogoStandalone,
  },
  {
    name: 'Trends',
    link: 'https://trends.utdnebula.com/',
    description: 'Help plan coursework through grade and professor stats',
    icon: TrendsLogoStandalone,
  },
  {
    name: 'Skedge',
    link: '/projects/skedge',
    description: 'Integrate grade and professor stats into Schedule Planner',
    icon: SkedgeLogoStandalone,
  },
  {
    name: 'Rooms',
    link: 'https://rooms.utdnebula.com/',
    description: 'Find open rooms at UT Dallas',
    icon: RoomsLogoStandalone,
  },
  {
    name: 'API & Platform',
    link: '/projects/api',
    description:
      'Integrate ' +
      (new Date().getFullYear() - 2017) +
      '+ years of historical UTD data into your applications',
    icon: ApiLogoStandalone,
  },
  {
    name: 'Notebook',
    link: 'https://notebook.utdnebula.com/',
    description: 'Discover and share course notes',
    icon: NotebookLogoStandalone,
  },
  {
    name: 'Planner',
    link: '/projects/planner',
    description: 'Help plan degree and course requirements',
    icon: PlannerLogoStandalone,
  },
];

export default function Projects() {
  return (
    <>
      <Header text="Projects" />
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
        <p className="text-3xl">We build tools that help students at UT Dallas, check them out!</p>
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            className="p-4 flex flex-col gap-2 group hover:transition-none transition-all w-64 border-2 border-haiti/0 hover:border-haiti/100 rounded-3xl"
            target={project.link.startsWith('http') ? '_blank' : ''}
          >
            {project.icon && <project.icon className="fill-haiti h-16 w-16" />}
            <span className="flex flex-col gap-1">
              <span className="flex gap-2 w-full">
                <h2 className="font-bold text-2xl">{project.name}</h2>
                <Image
                  src={Arrow}
                  alt=""
                  className="-rotate-90 block transition group-hover:translate-x-1"
                />
              </span>
              <p>{project.description}</p>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
