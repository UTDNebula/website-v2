import type { Metadata } from 'next';
import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Mission',
  alternates: {
    canonical: '/mission',
  },
};

const values = [
  {
    name: 'Open Source',
    description: 'We believe in the principles of Free and Open Source Software.',
  },
  {
    name: 'Students as Primary Stakeholders',
    description: 'Our focal point is on the student body.',
  },
  {
    name: 'Industry Standards',
    description: 'Assist in the professional development of our membership.',
  },
  {
    name: 'Maintainability',
    description: 'Offer a consistent, reliable, and excellent experience.',
  },
  {
    name: 'Minimizing Overhead and Organizational Bloat',
    description: 'Established explicitly as a small team with defined roles.',
  },
  {
    name: 'Inclusive and Inviting Environment',
    description: 'Emphasis on finding highly motivated individuals.',
  },
];

export default function Mission() {
  return (
    <>
      <Header text="Mission" />
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col justify-center gap-8">
        <p className="text-3xl pb-4 leading-normal">
          The heart of Nebula Labs&apos; mission is the development of tools to assist the student
          body of UT Dallas (or other interested student bodies). The organization’s founding
          members, dissatisfied with the software tools offered by the University and cognizant of
          the University’s reputation for technologically talented individuals, set out to make a
          suite of tools for use by the student body to improve student life in all aspects.
        </p>
        <p className="text-3xl pb-4 leading-normal">
          In this mission, the organization commits itself to building tools that assist students in
          their academic, social, and personal lives here at UTD so as to enable them to make the
          most of the experiences and opportunities therein.
        </p>
        <p className="text-3xl pb-4 leading-normal">
          In that vein, we believe that working, learning, and mentoring as a part of Nebula Labs is
          one such opportunity that we can offer to improve student life directly. This means that
          the organization, while its primary focus is development, is also focused on the personal
          development of its membership and strives to ensure its work can be used to better the
          personal and professional lives of its members. In the words of our first President,
        </p>
        <p className="text-3xl leading-normal text-center italic">
          &lsquo;&lsquo;We build products and people.&rsquo;&rsquo;
        </p>
        <p className="text-3xl pb-4 leading-normal text-center italic">-Ryan Radloff</p>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-8">
        <h2 className="text-5xl font-bold pb-4 text-center">Values</h2>
        <div className="flex flex-wrap justify-center gap-16">
          {values.map((value) => (
            <div key={value.name}>
              <h3 className="text-3xl font-bold text-center">{value.name}</h3>
              <p className="text-2xl text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      <h3 className="px-8 lg:px-16 xl:px-32 py-24 text-3xl font-bold text-center">
        See{' '}
        <a
          className="text-royal underline decoration-transparent hover:decoration-inherit transition"
          href="https://nebula-labs.atlassian.net/wiki/spaces/Officers/pages/8716405/Organization+Mission+Goals+and+Values+as+of+Founding"
          target="_blank"
          rel="noreferrer"
        >
          our Confluence
        </a>{' '}
        for more
      </h3>
      <Footer />
    </>
  );
}
