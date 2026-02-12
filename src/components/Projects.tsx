'use client';

import FilledChevronUp from '@/../public/icons/filled-chevron-up-white.svg';
import Clubs from '@/../public/projects/clubs.png';
import Planner from '@/../public/projects/planner.png';
import Rooms from '@/../public/projects/rooms.png';
import Trends from '@/../public/projects/trends.png';
import ArrowButton from '@/../public/testimonials/arrow-button.svg';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { createRef, useEffect, useState } from 'react';
import Carousel from './Carousel';

type Project = {
  title: string;
  shortName: string;
  description: string;
  url: string;
  image?: StaticImageData;
  alt: string;
  color: string;
};

const PROJECTS_INFO: Project[] = [
  {
    title: 'Clubs',
    shortName: 'Clubs',
    description:
      'Clubs is the best way to get involved on campus. It’s easy to discover new organizations or exciting events to make the most of the on-campus experience.',
    url: '/projects/clubs',
    image: Clubs,
    alt: "A laptop displaying Clubs's dashboard, with a list of clubs and organizations.",
    color: '#926FDB',
  },
  {
    title: 'Trends & Skedge',
    shortName: 'Trends',
    description:
      'Trends and Skedge are tools designed to simplify the course selection and registration process by providing students with valuable data, all in one place.',
    url: '/projects/trends',
    image: Trends,
    alt: "A laptop displaying Trends' dashboard, with search results for GOVT 2306.",
    color: '#6366F1',
  },
  {
    title: 'Rooms',
    shortName: 'Rooms',
    description:
      "Rooms is here to make finding a room for your org meeting, hangout, or studying easy, just put in a date and time and see what's free.",
    url: '/projects/rooms',
    image: Rooms,
    alt: "A laptop displaying Rooms' results page for events in SCI.",
    color: '#523DFF',
  },
  {
    title: 'Nebula API',
    shortName: 'API',
    description:
      'The Nebula API serves as the authoritative data source for UTD information such as courses, student organizations, and more.',
    url: '/projects/api',
    // image: API,
    alt: '',
    color: '#FF6B4A',
  },
  {
    title: 'Notebook',
    shortName: 'Notebook',
    description:
      'Notebook is a note-sharing platform that allows students to upload their notes to share with their classmates and save others\' notes that they find useful. Currently in development.',
    url: '/projects/notebook',
    /* image: Notebook, */ //no image yet
    alt: "",
    color: '#523DFF',
  },
  {
    title: 'Planner',
    shortName: 'Planner',
    description:
      'Planner is a student-focused tool for creating and tracking degree plans, offering a user-friendly interface to simplify course mapping and progress tracking.',
    url: '/projects/planner',
    image: Planner,
    alt: "A laptop displaying Planner's dashboard, showing a list of degree plan cards",
    color: '#523DFF',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const carouselRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!carouselRef.current) return;
    const cb: IntersectionObserverCallback = (entries) => {
      if (entries.length === 0) return;
      const sorted = entries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const current = sorted[0];
      setSelected(parseInt(current.target.id.split('-')[1]));
    };

    const obs = new IntersectionObserver(cb, {
      root: carouselRef.current,
      threshold: 0.5,
    });

    for (const child of carouselRef.current.children) {
      obs.observe(child);
    }

    return () => {
      obs.disconnect();
    };
  }, [carouselRef]);
  const carouselKeyBase = 'projects';
  return (
    <div className="w-full overflow-x-clip">
      <div className="bg-stars bg-cover rounded-full flex items-center justify-center w-full aspect-square lg:scale-[115%] scale-[200%] lg:my-52 my-[34rem] shadow-[0px_0px_87px_-1px_#312E81]">
        <div className="shrink-0 flex flex-col justify-center lg:scale-[calc(1/1.15)] scale-[calc(1/2)] h-min w-full">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl text-white">Check Out Our</h3>
            <h1 className="pb-2 font-display md:text-7xl text-4xl font-bold text-transparent w-min bg-clip-text bg-linear-to-r from-[#6166FA] via-[#C2C9FF] to-[#FE8164]">
              Projects
            </h1>
          </div>
          <div className="text-center pt-2 text-white px-4">
            <p>Check out what we have been creating in our lab up in the galaxy</p>
          </div>
          <div className="gap-8 grid-cols-6 mx-auto pt-6 text-white hidden lg:grid">
            {PROJECTS_INFO.map((project, index) => (
              <button
                type="button"
                key={`project-selector-${index}`}
                className={`hover:scale-105 active:scale-95 transition flex h-16 px-8 justify-center items-center rounded-full cursor-pointer ${
                  selected === index ? 'bg-[#6166FA] border-black' : 'border-white'
                } transition duration-300 ease-in-out border-2`}
                onClick={() => {
                  const el = document.querySelector(`#${carouselKeyBase}-${index}`);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }}
              >
                {project.shortName}
              </button>
            ))}
          </div>
          <div className="pt-6">
            <Carousel<Project[]> data={PROJECTS_INFO} keyBase={carouselKeyBase} ref={carouselRef}>
              {(project, index, valueCount, prev, next) => (
                <ProjectCard
                  valueCount={valueCount}
                  prev={prev}
                  next={next}
                  index={index}
                  project={project}
                />
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard(props: {
  index: number;
  project: Project;
  valueCount: number;
  prev: () => void;
  next: () => void;
}) {
  const { project, index, next, valueCount, prev } = props;
  return (
    <div
      className={`rounded-3xl border w-full border-white text-white gap-8 shrink-0 p-10 relative overflow-clip md:items-center ${
        project.image
          ? 'grid md:grid-cols-2 grid-cols-1'
          : 'flex flex-col items-start justify-between'
      }
      `}
    >
      {project.image ? (
        <Image src={project.image} alt={project.alt} className="md:order-2" />
      ) : (
        <span></span>
      )}

      <div className={`flex flex-col gap-8 md:order-1${!project.image ? ' w-full' : ''}`}>
        <h1 className="font-display font-bold text-xl md:text-3xl">{project.title}</h1>
        <p className="md:text-lg text-base">{project.description}</p>

        <Link
          className="text-base md:text-lg font-bold underline flex gap-2"
          href={project.url}
          target={project.url.includes('http') ? '_blank' : ''}
        >
          More Information
          <Image src={FilledChevronUp} alt="" className="rotate-90" />
        </Link>
      </div>

      <span
        style={{ backgroundColor: '#ffffff' }}
        className="absolute -z-20 -top-[66px] -left-[50px] w-72 aspect-square overflow-clip rounded-full shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      />
      <span
        style={{ backgroundColor: project.color }}
        className="absolute -z-10 -top-10 -left-[50px] w-72 aspect-square overflow-clip rounded-full shrink-0 blur-[75px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      />

      <span
        style={{ backgroundColor: '#ffffff' }}
        className="absolute -z-20 -bottom-10 -right-36 w-72 aspect-square overflow-clip rounded-full shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      />
      <span
        style={{ backgroundColor: project.color }}
        className="absolute -z-10 bottom-0 -right-36 w-72 aspect-square overflow-clip rounded-full shrink-0 blur-[75px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      />

      <span className="flex gap-3 items-center mt-auto md:mt-0 md:order-3 mr-auto place-self-end">
        <button
          onClick={prev}
          className="hover:scale-105 active:scale-95 transition cursor-pointer"
        >
          <Image src={ArrowButton} alt="arrow" />
        </button>
        <p className="h-min">
          {index + 1}/{valueCount}
        </p>
        <button
          onClick={next}
          className="hover:scale-105 active:scale-95 transition cursor-pointer"
        >
          <Image src={ArrowButton} alt="arrow" className="rotate-180" />
        </button>
      </span>
    </div>
  );
}
