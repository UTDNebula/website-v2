import CopyInput from '@/app/resources/calendar/CopyInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Donate',
  alternates: {
    canonical: '/about/donate',
  },
};

export default function Donate() {
  return (
    <>
      <Header text="Support Nebula Labs" />
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <p className="text-3xl">
          Nebula Labs is a free and open-source student organization, funded entirely by UT Dallas
          and donations. To support our mission and help us continue to provide valuable resources
          and tools to students, consider donating. Your contribution will help us host events and
          fund our monthly cloud service costs.
        </p>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold pb-4 text-center">Mission</h2>
        <p className="text-3xl text-center">Build open-source software to help UTD students.</p>
        <p className="text-3xl text-center">
          Cultivate a community for people to learn, grow, and thrive growing.
        </p>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold pb-4 text-center">Donate</h2>
        <p className="text-3xl">Choose the below options once you click Donate.</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Designation</p>
            <CopyInput text="Other" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">How would you like to direct your donation?</p>
            <CopyInput text="Nebula Labs - ECS Student Council - 37650004" />
          </div>
        </div>
        <Link
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-royalDark transition-colors drop-shadow-sm"
          href="https://giving.utdallas.edu/"
          target="_blank"
        >
          Donate
        </Link>
        <p className="text-3xl">Thank you for your support!</p>
      </div>
      <Footer />
    </>
  );
}
