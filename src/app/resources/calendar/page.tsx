import ArrowBlack from '@/../public/icons/filled-chevron-up-black.svg';
import ArrowWhite from '@/../public/icons/filled-chevron-up-white.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import fetchCalendar from '@/lib/fetchCalendar';
import { ics } from 'calendar-link';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CopyInput from './CopyInput';
import Error from './error';

// Do not cache
export const dynamic = 'force-dynamic';

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
  timeZone: 'America/Chicago',
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  day: 'numeric',
  timeZone: 'America/Chicago',
});

const fullFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  timeZone: 'America/Chicago',
});

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  timeZone: 'America/Chicago',
});

const keyFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Chicago',
});

const getDateNumber = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  timeZone: 'America/Chicago',
});

const getMonthNumber = new Intl.DateTimeFormat('en-US', {
  month: 'numeric',
  timeZone: 'America/Chicago',
});

const getYearNumber = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  timeZone: 'America/Chicago',
});

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
            {startTime} - {start.toDateString() !== end.toDateString() && fullFormat.format(end)}{' '}
            {timeFormat.format(end)}
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
        <Link
          className={buttonLinkClasses}
          target="_blank"
          href={
            'https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/r/eventedit/copy/' +
            props.htmlLink.split('eid=')[1]
          }
        >
          Copy to Google Calendar
        </Link>
        <Link download={props.name} className={buttonLinkClasses} href={iCalFileString}>
          Copy with iCal
        </Link>
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

      const start = new Date(
        event.start.date ? event.start.date + 'T00:00:00' : event.start.dateTime,
      );
      const year = getYearNumber.format(start);
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
      const month = getMonthNumber.format(start);
      if (lastMonth !== month) {
        labelsAndEvents.push(
          <h3 key={String(year) + String(month)} className="text-4xl font-semibold">
            {monthFormat.format(start)}
          </h3>,
        );
        lastMonth = month;
      }
      const day = getDateNumber.format(start);
      if (lastDay !== day) {
        labelsAndEvents.push(
          <h4 key={keyFormat.format(start)} className="text-3xl font-medium">
            {dateFormat.format(start)}
          </h4>,
        );
        lastDay = day;
      }

      const description = event.description?.replace(/<[^>]*>/g, ' ');

      let end = event.end.date ? event.end.date + 'T23:59:00' : event.end.dateTime;
      if (event.end.date) {
        let endDate = new Date(end);
        endDate.setDate(endDate.getDate() - 1);
        end = endDate.toISOString();
      }

      labelsAndEvents.push(
        <Event
          key={event.id}
          name={event.summary}
          start={event.start.date ? event.start.date + 'T00:00:00' : event.start.dateTime}
          end={end}
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
        <button className={buttonLinkClasses} popoverTarget="ics-cal-popover">
          Subscribe in Apple/Outlook
        </button>
        <Link className={buttonLinkClasses} target="_blank" href="https://discord.utdnebula.com/">
          View on Discord
        </Link>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">{result}</div>
      <Footer />
      <div
        popover="auto"
        id="ics-cal-popover"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 w-[80vw] max-w-[90vw]"
      >
        <h3 className="text-xl font-bold mb-2 text-center">Instructions</h3>
        <p className="mb-1">
          <b>Apple Calendar on Mac</b>: File &gt; New Calendar Subscription... &gt; Paste in the
          URL.
        </p>
        <p className="mb-1">
          <b>Apple Calendar on iOS</b>: Calendars &gt; Add Calendar &gt; Add Subscription Calendar
          &gt; Paste in the URL.
        </p>
        <p className="mb-4">
          <b>Outlook Calendar on Desktop</b>: Add calendar &gt; Subscribe from web &gt; Paste in the
          URL.
        </p>
        <CopyInput href="webcal://calendar.google.com/calendar/ical/c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com/public/basic.ics" />
      </div>
    </>
  );
}
