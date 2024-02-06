import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import ArrowWhite from '@/../public/filled-chevron-up-white.svg';
import ArrowBlack from '@/../public/filled-chevron-up-black.svg';

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
  const [open, setOpen] = useState(false);

  const important =
    props.name.includes('Kickoff') ||
    props.name.includes('Social') ||
    props.name.includes('All-Hands');

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

  return (
    <button
      className={
        'text-left w-full p-4 rounded-lg ' + (important ? 'bg-royal text-white' : 'bg-periwinkle')
      }
      onClick={() => setOpen((old) => !old)}
    >
      <div className="w-full flex">
        <div className="grow">
          <p className="text-2xl">{props.name}</p>
          <p>
            {startTime} - {timeFormat.format(end)}
          </p>
          <p>{props.location === 'Unknown' ? 'TBD' : props.location}</p>
        </div>
        <Image
          src={important ? ArrowWhite : ArrowBlack}
          alt=""
          className={'w-6 transition-transform' + (open ? '' : ' rotate-180')}
        />
      </div>
      {open && (
        <>
          {typeof props.description !== 'undefined' && <p>{props.description}</p>}
          <div className="mt-2 flex justify-center gap-2">
            <a
              className={buttonLinkClasses}
              target="_blank"
              href={'https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/r/eventedit/copy/' + props.htmlLink.split('eid=')[1]}
            >
              Copy to Google Calendar
            </a>
            <a
              className={buttonLinkClasses}
              href="https://calendar.google.com/calendar/ical/c_64bca4fdc75077d852bc5236ec20402d8514792841894b264da57d41bb0ee32e%40group.calendar.google.com/public/basic.ics"
            >
              Copy with iCal
            </a>
          </div>
        </>
      )}
    </button>
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
        console.log(data.data);
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
          description={'hi'}
          ///description={event.description}
          htmlLink={event.htmlLink}
        />,
      );
    }
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  //error state
  let result = (
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">
      <h2 className="text-5xl font-bold pb-4 text-center">Error loading calendar</h2>
      <button className={buttonLinkClasses} onClick={() => location.reload()}>
        Reload
      </button>
    </div>
  );

  if (state === 'loading') {
    result = <h2 className="text-5xl font-bold pb-4 text-center">Loading...</h2>;
  } else if (state === 'done') {
    result = (
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">
        <div className="flex flex-col gap-4 w-full max-w-[40ch]">{...labelsAndEvents}</div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header text="Calendar of Events" />
      <div className="px-8 lg:px-16 xl:px-32 pb-12 flex justify-center gap-2 flex-wrap">
        <a
          className={buttonLinkClasses}
          target="_blank"
          href="https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/calendar/?cid=Y182NGJjYTRmZGM3NTA3N2Q4NTJiYzUyMzZlYzIwNDAyZDg1MTQ3OTI4NDE4OTRiMjY0ZGE1N2Q0MWJiMGVlMzJlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
        >
          Subscribe in Google Calendar
        </a>
        <a
          className={buttonLinkClasses}
          href="https://calendar.google.com/calendar/ical/c_64bca4fdc75077d852bc5236ec20402d8514792841894b264da57d41bb0ee32e%40group.calendar.google.com/public/basic.ics"
        >
          Subscribe with iCal
        </a>
        <a className={buttonLinkClasses} href="https://discord.gg/tcpcnfxmeQ">
          View on Discord
        </a>
      </div>
      {result}
      <Footer royalBg={false} />
    </div>
  );
};

export default Calendar;
