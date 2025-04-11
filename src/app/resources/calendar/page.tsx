import { ics } from 'calendar-link';
import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import ArrowBlack from '@/../public/icons/filled-chevron-up-black.svg';
import ArrowWhite from '@/../public/icons/filled-chevron-up-white.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import fetchCalendar from '@/lib/fetchCalendar';

import Error from './error';

export const metadata: Metadata = {
  title: 'Calendar',
  alternates: {
    canonical: '/calendar',
  },
};

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  day: 'numeric',
});

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
});

const fullFormat = new Intl.DateTimeFormat('en-US');

interface EventReactProps {
  name: string;
  start: string;
  end: string;
  location: string;
  description: string | undefined;
  htmlLink: string;
}

const Event = (props: EventReactProps) => {
  const important =
    !props.name.includes('Project Meeting') &&
    !props.name.includes('Division Meeting') &&
    !props.name.includes('After Hours');

  const start = new Date(props.start);
  const end = new Date(props.end);
  let startTime = timeFormat.format(start);
  if (start.getHours() >= 12 === end.getHours() >= 12) {
    //AMPM the same
    startTime = startTime.slice(0, -3);
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-2 py-1 rounded-lg cursor-pointer border-2 ' +
    (important
      ? 'hover:bg-periwinkle hover:text-haiti border-periwinkle'
      : 'hover:bg-royal hover:text-white border-royal');

  const iCalFileString = ics({
    title: props.name,
    start: props.start,
    end: props.end,
    location: props.location,
    description: props.description,
    url: props.htmlLink,
  });

  return (
    <details
      className={
        'group w-full p-4 rounded-lg ' + (important ? 'bg-royal text-white' : 'bg-periwinkle')
      }
    >
      <summary className="w-full flex items-center">
        <div className="grow">
          <p className="text-2xl">{props.name}</p>
          <p>
            {startTime} - {timeFormat.format(end)}
          </p>
          <p>{props.location === 'Unknown' ? 'TBD' : props.location}</p>
        </div>
        <div
          className={
            'cursor-pointer px-4 py-[0.9375rem] rounded-full transition-colors ' +
            (important ? 'hover:bg-white/10' : 'hover:bg-black/10')
          }
        >
          <Image
            src={important ? ArrowWhite : ArrowBlack}
            alt="Drowdown arrow"
            className="w-6 transition-all mb-0.5 group-open:mb-0 group-open:mt-0.5 group-open:rotate-180"
          />
        </div>
      </summary>
      {typeof props.description !== 'undefined' && <p>{props.description}</p>}
      <div className="mt-2 flex justify-center gap-2">
        <a
          className={buttonLinkClasses}
          target="_blank"
          href={
            'https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/r/eventedit/copy/' +
            props.htmlLink.split('eid=')[1]
          }
          rel="noreferrer"
        >
          Copy to Google Calendar
        </a>
        <a download={props.name} className={buttonLinkClasses} href={iCalFileString}>
          Copy with iCal
        </a>
      </div>
    </details>
  );
};

export default async function Calendar() {
  const data = await fetchCalendar();
  const state = data.message === 'success' ? 'done' : 'error';
  const events = typeof data.data !== 'undefined' ? data.data : [];

  let lastYear, lastMonth, lastDay;
  let firstYear = true;
  const labelsAndEvents = [];
  if (typeof events !== 'undefined') {
    for (const event of events) {
      if (event.status !== 'confirmed') {
        continue;
      }

      const start = new Date(event.start.dateTime);
      const year = start.getFullYear();
      if (lastYear !== year && !firstYear) {
        labelsAndEvents.push(
          <h2 key={year} className="text-5xl font-bold">
            {year}
          </h2>,
        );
        lastYear = year;
      }
      if (lastYear !== year && firstYear) {
        lastYear = year;
        firstYear = false;
      }
      const month = start.getMonth();
      if (lastMonth !== month) {
        labelsAndEvents.push(
          <h3 key={String(year) + String(month)} className="text-4xl font-semibold">
            {monthFormat.format(start)}
          </h3>,
        );
        lastMonth = month;
      }
      const day = start.getDay();
      if (lastDay !== day) {
        labelsAndEvents.push(
          <h4 key={fullFormat.format(start)} className="text-3xl font-medium">
            {dateFormat.format(start)}
          </h4>,
        );
        lastDay = day;
      }

      const description = event.description?.replace(/<[^>]*>/g, ' ');

      labelsAndEvents.push(
        <Event
          key={event.id}
          name={event.summary}
          start={event.start.dateTime}
          end={event.end.dateTime}
          location={event.location}
          description={description}
          htmlLink={event.htmlLink}
        />,
      );
    }
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  //error state
  let result = <Error />;

  if (state === 'done') {
    result = <div className="flex flex-col gap-4 w-full max-w-[40ch]">{...labelsAndEvents}</div>;
  }

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
