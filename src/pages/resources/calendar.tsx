import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ics } from 'calendar-link';

import ArrowWhite from '@/../public/icons/filled-chevron-up-white.svg';
import ArrowBlack from '@/../public/icons/filled-chevron-up-black.svg';

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

const Calendar = () => {
  const [events, setEvents] = useState<EventFetchProps[]>([]);
  const [state, setState] = useState('loading');

  interface EventFetchProps {
    status: string;
    id: string;
    summary: string;
    start: {
      dateTime: string;
    };
    end: {
      dateTime: string;
    };
    location: string;
    description?: string;
    htmlLink: string;
  }

  interface FetchProps {
    message: string;
    data: {
      data: {
        items: EventFetchProps[];
      };
    };
  }

  useEffect(() => {
    fetch('/api/getCalendar')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<FetchProps>;
      })
      .then((data) => {
        if (data.message !== 'success') {
          throw new Error(data.message);
        }
        setEvents(data.data.data.items);
        setState('done');
      })
      .catch((error) => {
        setState('error');
        console.error('Feedback', error);
      });
  }, []);

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

      labelsAndEvents.push(
        <Event
          key={event.id}
          name={event.summary}
          start={event.start.dateTime}
          end={event.end.dateTime}
          location={event.location}
          description={event.description}
          htmlLink={event.htmlLink}
        />,
      );
    }
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  //error state
  let result = (
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-4">
      <h2 className="text-5xl font-bold text-center">Error loading calendar</h2>
      <button className={buttonLinkClasses} onClick={() => location.reload()}>
        Reload
      </button>
    </div>
  );

  if (state === 'loading') {
    result = (
      <div className="flex flex-col gap-4 w-full max-w-[40ch] animate-pulse">
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
      </div>
    );
    //<h2 className="text-5xl font-bold pb-4 text-center">Loading...</h2>;
  } else if (state === 'done') {
    result = <div className="flex flex-col gap-4 w-full max-w-[40ch]">{...labelsAndEvents}</div>;
  }

  return (
    <>
      <Head>
        <title>Calendar - Nebula Labs</title>
        <link rel="canonical" href="https://www.utdnebula.com/resources/calendar" key="canonical" />
        <meta property="og:url" content="https://www.utdnebula.com/resources/calendar" />
      </Head>
      <Header text="Calendar" />
      <h2 className="px-8 lg:px-16 xl:px-32 text-2xl text-center mb-12">
        Stop by any of our events to learn more about becoming a new member!
      </h2>
      <div className="px-8 lg:px-16 xl:px-32 mb-12 flex justify-center gap-2 flex-wrap">
        <a
          className={buttonLinkClasses}
          target="_blank"
          href="https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/?cid=c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com"
        >
          Subscribe in Google Calendar
        </a>
        <a
          className={buttonLinkClasses}
          href="https://calendar.google.com/calendar/ical/c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71%40group.calendar.google.com/public/basic.ics"
        >
          Subscribe with iCal
        </a>
        <a className={buttonLinkClasses} target="_blank" href="https://discord.gg/tcpcnfxmeQ">
          View on Discord
        </a>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">{result}</div>
      <Footer />
    </>
  );
};

export default Calendar;
