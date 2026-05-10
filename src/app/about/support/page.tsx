import DonateForm from '@/../public/support/donate-form.png';
import CopyInput from '@/app/resources/calendar/CopyInput';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Support',
  alternates: {
    canonical: '/about/support',
  },
};

export default function Support() {
  return (
    <>
      <Header text="Support Nebula Labs" />
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col gap-12">
        <p className="text-3xl">
          Nebula Labs is a free and open-source student organization, funded entirely by UT Dallas
          and donations. To support our mission and help us continue to provide valuable resources
          and tools to students, consider donating or sponsoring. Your support will help us:
        </p>
        <ul className="text-2xl list-disc list-outside mx-8 flex flex-col gap-4">
          <li>
            Launch a formal mentorship program pairing experienced members with new recruits across
            design and engineering.
          </li>
          <li>Fund a semester-long speaker series bringing industry professionals to campus.</li>
          <li>Host a Nebula-sponsored workshop series on various Design and Engineering topics.</li>
          <li>Fund a hackathon track sponsorship with HackUTD, HackAI, or WeHack.</li>
          <li>
            Expand the API & Platform infrastructure to support more external developers and
            hackathon projects.
          </li>
          <li>
            Fund an interdisciplinary recruiting push to grow the org with a new wave of members.
          </li>
        </ul>
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
        <Image
          src={DonateForm}
          alt="Preview of the donation form, showing the two needed fields filled out"
          className="rounded-xl border-2 border-haiti max-w-full w-128"
        />
        <Link
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-royalDark transition-colors drop-shadow-sm"
          href="https://giving.utdallas.edu/"
          target="_blank"
        >
          Donate
        </Link>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <h2 className="text-5xl font-bold pb-4 text-center">Sponsor</h2>
        <p className="text-3xl">Open the Sponsor Packet below to learn more.</p>
        <Link
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-royalDark transition-colors drop-shadow-sm"
          href="/support/Nebula Labs Sponsor Packet.pdf"
          target="_blank"
        >
          Open Sponsor Packet
        </Link>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <p className="text-3xl text-center">Thank you for your support!</p>
      </div>
      <Footer />
    </>
  );
}
