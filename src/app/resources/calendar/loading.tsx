import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Loading() {
  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  const result = (
    <div className="flex flex-col gap-4 w-full max-w-[40ch] animate-pulse -z-10">
      <h3 className="text-transparent w-fit text-4xl font-semibold bg-gray-200 rounded-full">
        January
      </h3>
      <h2 className="text-transparent w-fit text-3xl font-medium bg-gray-200 rounded-full">
        19 Monday
      </h2>
      <div className="text-transparent w-full p-4 bg-gray-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
      <div className="text-transparent w-full p-4 bg-gray-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
      <h2 className="text-transparent w-fit text-3xl font-medium bg-gray-200 rounded-full">
        19 Monday
      </h2>
      <div className="text-transparent w-full p-4 bg-gray-200 rounded-lg">
        <p className="text-2xl">After Hours</p>
        <p>7:00 - 9:00 PM</p>
        <p>AD 2.232</p>
      </div>
    </div>
  );

  return (
    <>
      <Header text="Calendar" />
      <h2 className="px-8 lg:px-16 xl:px-32 text-2xl text-center mb-12">
        Stop by any of our events to learn more about becoming a new member!
      </h2>
      <div className="px-8 lg:px-16 xl:px-32 mb-12 flex justify-center gap-2 flex-wrap">
        <a
          className={buttonLinkClasses}
          target="_blank"
          href="https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/?cid=c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com"
          rel="noreferrer"
        >
          Subscribe in Google Calendar
        </a>
        <a
          className={buttonLinkClasses}
          href="https://calendar.google.com/calendar/ical/c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com/public/basic.ics"
        >
          Subscribe with iCal
        </a>
        <a
          className={buttonLinkClasses}
          target="_blank"
          href="https://discord.utdnebula.com/"
          rel="noreferrer"
        >
          View on Discord
        </a>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">{result}</div>
      <Footer />
    </>
  );
}
