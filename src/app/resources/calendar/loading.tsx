import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

export default function Loading() {
  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  const result = (
    <div className="flex flex-col gap-4 w-full max-w-[40ch] animate-pulse -z-10">
      <h3 className="text-transparent w-fit text-4xl font-semibold bg-neutral-200 rounded-full">
        January
      </h3>
      <h2 className="text-transparent w-fit text-3xl font-medium bg-neutral-200 rounded-full">
        19 Monday
      </h2>
      <div className="text-transparent w-full p-4 bg-neutral-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
      <div className="text-transparent w-full p-4 bg-neutral-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
      <h2 className="text-transparent w-fit text-3xl font-medium bg-neutral-200 rounded-full">
        19 Monday
      </h2>
      <div className="text-transparent w-full p-4 bg-neutral-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
    </div>
  );

  return (
    <>
      <Header text="Calendar" />
      <h2 className="px-8 lg:px-16 xl:px-32 text-2xl text-center mb-2">
        Stop by any of our events to learn more about becoming a new member!
      </h2>
      <p className="px-8 lg:px-16 xl:px-32 text-center mb-8">Times in CT.</p>
      <div className="px-8 lg:px-16 xl:px-32 mb-12 flex justify-center gap-2 flex-wrap">
        <Link
          className={buttonLinkClasses}
          target="_blank"
          href="https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/?cid=c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com"
        >
          Subscribe in Google Calendar
        </Link>
        <button className={buttonLinkClasses}>Subscribe in Apple/Outlook</button>
        <Link className={buttonLinkClasses} target="_blank" href="https://discord.utdnebula.com/">
          View on Discord
        </Link>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">{result}</div>
      <Footer />
    </>
  );
}
