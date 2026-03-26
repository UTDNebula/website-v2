import Gradient from '@/../public/images/gradient.png';
import Contributors from '@/components/Contributors';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ApiLogoStandalone from '@/icons/ApiLogo';
import ClubsLogoStandalone from '@/icons/ClubsLogo';
import NotebookLogoStandalone from '@/icons/NotebookLogo';
import PlannerLogoStandalone from '@/icons/PlannerLogo';
import RoomsLogoStandalone from '@/icons/RoomsLogo';
import SkedgeLogoStandalone from '@/icons/SkedgeLogo';
import TrendsLogoStandalone from '@/icons/TrendsLogo';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

const icons = {
  clubs: ClubsLogoStandalone,
  trends: TrendsLogoStandalone,
  skedge: SkedgeLogoStandalone,
  rooms: RoomsLogoStandalone,
  api: ApiLogoStandalone,
  notebook: NotebookLogoStandalone,
  planner: PlannerLogoStandalone,
};

interface ImageWithAlt {
  src: StaticImageData;
  alt: string;
}

interface ProjectProps {
  name: React.ReactNode;
  inDevelopment?: boolean;
  icon?: keyof typeof icons;
  tagline: React.ReactNode;
  description: React.ReactNode;
  cover?: ImageWithAlt;
  projectLink: React.ReactNode;
  featuresDescription: React.ReactNode;
  features: {
    title: string;
    description: string;
    img: ImageWithAlt;
  }[];
  learnMoreLink: string;
  repos: string | string[];
}

export default function Project(props: ProjectProps) {
  const Logo = props.icon ? icons[props.icon] : null;

  return (
    <>
      <Navbar royal={true} className="relative z-20" />
      <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 flex flex-col items-center gap-8 rounded-3xl text-white relative overflow-hidden">
        <Image src={Gradient} alt="project background" fill className="-z-20" />
        <div className="font-display flex gap-1 items-center drop-shadow-sm bg-white rounded-full pl-2 pr-6">
          {Logo && <Logo className="h-16 w-auto fill-haiti" />}
          <span className="whitespace-nowrap text-2xl font-bold text-haiti flex flex-col items-center">
            {props.name}
            {props.inDevelopment && (
              <span className="font-main font-normal text-sm">In Development</span>
            )}
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-center text-shadow">
          {props.tagline}
        </h1>
        <h2 className="text-3xl text-center text-shadow">{props.description}</h2>
        {props.cover ? (
          <div className="md:mx-4 lg:mx-8 xl:mx-16 rounded-t-2xl overflow-hidden md:mb-[-4rem] lg:mb-[-8rem] xl:mb-[-16rem]">
            <Image src={props.cover.src} alt={props.cover.alt} />
          </div>
        ) : (
          <div className="h-10" />
        )}
      </div>
      {typeof props.projectLink === 'string' ? (
        <div className="relative -top-10 w-full flex justify-center drop-shadow">
          <Link
            className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors drop-shadow-sm"
            href={props.projectLink}
            target="_blank"
          >
            Get Started
          </Link>
        </div>
      ) : (
        props.projectLink
      )}
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold text-center">Features</h2>
        <p className="text-3xl text-center">{props.featuresDescription}</p>
      </div>
      <div className="mx-8 lg:mx-16 xl:mx-32 pt-6 px-6 grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-8">
        {props.features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-cornflower-50">
              <Image src={feature.img.src} alt={feature.img.alt} className="h-10 w-10 m-7" />
            </div>
            <p className="text-2xl font-bold text-center">{feature.title}</p>
            <p className="text-xl text-center">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold text-center">Interested? Learn more about our project</h2>
        <Link
          className="px-6 py-3 text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors"
          href={props.learnMoreLink}
          target="_blank"
        >
          Learn More
        </Link>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h3 className="text-4xl font-bold text-center">Contributors</h3>
        <Contributors repos={props.repos} />
      </div>
      <Footer />
    </>
  );
}
