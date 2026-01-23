import Cover from '@/../public/projects/planner/cover.png';
import browser from '@/../public/projects/planner/icons8-browser-100.png';
import stopwatch from '@/../public/projects/planner/icons8-stopwatch-100.png';
import sword from '@/../public/projects/planner/icons8-sword-100.png';
import Project from '@/components/Project';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Planner',
  description:
    'Plan your degree with ease: Blast off your academic journey with the ultimate tool for customizing your four-year degree.',
  alternates: {
    canonical: '/projects/planner',
  },
};

const features = [
  {
    title: 'Spreadsheet where?',
    description:
      "Bye-bye clunky spreadsheets, hello easy-peasy degree planning with simple click-and-drag action. You're welcome!",
    img: {
      src: browser,
      alt: 'browser',
    },
  },
  {
    title: 'Slay your progress!',
    description:
      "Not sure where you are in your degree plan? That's ok. Tracking your degree plan is now a piece of cake with our degree tracker.",
    img: {
      src: sword,
      alt: 'sword',
    },
  },
  {
    title: 'Save Time',
    description:
      'Planner streamlines academic planning, enabling you to map out your course requirements, track your progress, and adjust your plan as needed so you can focus on what you do best.',
    img: {
      src: stopwatch,
      alt: 'stopwatch',
    },
  },
];

export default function Planner() {
  return (
    <Project
      name="PLANNER"
      tagline={
        <>
          Plan your degree
          <br />
          with ease
        </>
      }
      description="Blast off your academic journey with the ultimate tool for customizing your four-year degree."
      cover={{
        src: Cover,
        alt: 'Planner screenshot',
      }}
      projectLink="https://planner.utdnebula.com/auth/login"
      featuresDescription="Say goodbye to the stress and hassle of degree planning and hello to a smooth, organized path towards graduation with Nebula Planner."
      features={features}
      learnMoreLink="https://github.com/UTDNebula/planner"
    />
  );
}
