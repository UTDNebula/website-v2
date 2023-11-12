import ArrowButton from '@/../public/testimonials/arrow-button.svg';
import { createRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Carousel from './Carousel';
import Planner from '@/../public/projects/planner.png';
import API from '@/../public/projects/skedge.png';
import Skedge from '@/../public/projects/skedge.png';
import Jupiter from '@/../public/projects/jupiter.png';
import FilledChevronUp from '@/../public/filled-chevron-up.svg';
import clsx from 'clsx';

type Project = {
  title: string;
  shortName: string;
  description: string;
  url: string;
  image: StaticImageData;
  alt: string;
  color: string;
};

const PROJECTS_INFO: Project[] = [
  {
    title: 'Planner',
    shortName: 'Planner',
    description:
      'Planner is a tool designed to help students with their degree plans. With a user-friendly interface, students can easily map out their course requirements, track their progress, and make adjustments as needed.',
    url: '/',
    image: Planner,
    alt: "A laptop displaying Planner's dashboard, showing a list of degree plan cards",
    color: '#523DFF',
  },
  {
    title: 'Sk.edge',
    shortName: 'Sk.edge',
    description:
      'Sk.edge is a browser extension designed to simplify the process of selecting classes by providing students with valuable information all in one place.',
    url: '/',
    image: Skedge,
    alt: "A mockup of Sk.edge's dashboard, displaying statistics for a professor",
    color: '#6366F1',
  },
  {
    title: 'Nebula Trends & API',
    shortName: 'Trends & API',
    description:
      'Nebula API is a public API containing resources for UTD student data, including grade distribution information, and more. Trends is data visualization tool to inform student about import info at UTD.',
    url: '/',
    image: API,
    alt: '',
    color: '#FF6B4A',
  },
  {
    title: 'Jupiter',
    shortName: 'Jupiter',
    description:
      'Jupiter is the best way to get involved on campus. It’s easy to discover new organizations or exciting events to make the most of the on-campus experience.',
    url: '/',
    image: Jupiter,
    alt: "A laptop displaying Jupiter's dashboard, with a list of clubs and organizations.",
    color: '#926FDB',
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
      threshold: 1.0,
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
    <div className="w-screen overflow-x-clip">
      <div className="bg-stars bg-cover rounded-full flex items-center justify-center w-screen aspect-square lg:scale-[115%] scale-[200%] lg:my-52 my-[34rem] shadow-[0px_0px_87px_-1px_#312E81]">
        <div className="shrink-0 flex flex-col justify-center lg:scale-[calc(1/1.15)] scale-[calc(1/2)] h-min w-screen">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl md:text-4xl text-white">Check Out Our </h3>
            <h1 className="font-kallisto md:text-7xl text-4xl font-bold text-transparent w-min bg-clip-text bg-gradient-to-r from-[#6166FA] via-[#C2C9FF] to-[#FE8164]">
              Projects
            </h1>
          </div>
          <div className="text-center pt-4 text-white px-4">
            <p>Check out what we have been creating in our lab up in the galaxy</p>
          </div>
          <div className="gap-8 grid-cols-5 mx-auto pt-6 text-white hidden lg:grid">
            {PROJECTS_INFO.map((project, index) => (
              <button
                type="button"
                key={`project-selector-${index}`}
                className={`flex h-16 px-10 justify-center items-center rounded-full cursor-pointer ${
                  selected === index ? 'bg-[#6166FA] border-black' : 'border-white'
                } transition-colors duration-300 ease-in-out border-2`}
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
            <Carousel data={PROJECTS_INFO} keyBase={carouselKeyBase} ref={carouselRef}>
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
    <div className="rounded-3xl border w-full border-white text-white flex flex-col items-start gap-8 flex-shrink-0 p-10 relative overflow-clip">
      <Image src={project.image} alt={project.alt} />

      <h1 className="font-kallisto text-xl md:text-3xl">{project.title}</h1>
      <p className="md:text-lg text-base">{project.description}</p>

      <a className="text-base md:text-lg font-bold underline flex gap-2" href={project.url}>
        More Information
        <Image src={FilledChevronUp} alt="" className="rotate-90" />
      </a>

      <span
        style={{ backgroundColor: '#ffffff' }}
        className={clsx(
          'absolute -z-20 -top-[66px] -left-[50px] w-72 aspect-square overflow-clip rounded-full shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
        )}
      />
      <span
        style={{ backgroundColor: project.color }}
        className={clsx(
          'absolute -z-10 -top-10 -left-[50px] w-72 aspect-square overflow-clip rounded-full shrink-0 blur-[75px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
        )}
      />

      <span
        style={{ backgroundColor: '#ffffff' }}
        className={clsx(
          'absolute -z-20 -bottom-10 -right-36 w-72 aspect-square overflow-clip rounded-full shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
        )}
      />
      <span
        style={{ backgroundColor: project.color }}
        className={clsx(
          'absolute -z-10 bottom-0 -right-36 w-72 aspect-square overflow-clip rounded-full shrink-0 blur-[75px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]',
        )}
      />

      <span className="flex gap-3 md:mt-auto mb-8 items-center">
        <button onClick={prev}>
          <Image src={ArrowButton} alt="arrow" />
        </button>
        <p className="h-min">
          {index + 1}/{valueCount}
        </p>
        <button onClick={next}>
          <Image src={ArrowButton} alt="arrow" className="rotate-180" />
        </button>
      </span>
    </div>
  );
}
