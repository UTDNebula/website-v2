import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ics } from 'calendar-link';

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
});

interface MeetingReactProps {
  name: string;
  found: boolean;
  start?: string;
  end?: string;
  location?: string;
  htmlLink?: string;
}

const Meeting = (props: MeetingReactProps) => {
  if (
    props.found === false ||
    typeof props.start === 'undefined' ||
    typeof props.end === 'undefined' ||
    typeof props.location === 'undefined' ||
    typeof props.htmlLink === 'undefined'
  ) {
    return (
      <div>
        <p className="text-4xl font-semibold">{props.name}</p>
        <p>No meetings currently planned.</p>
      </div>
    );
  }

  const start = new Date(props.start);
  const end = new Date(props.end);
  let startTime = timeFormat.format(start);
  if (start.getHours() >= 12 === end.getHours() >= 12) {
    //AMPM the same
    startTime = startTime.slice(0, -3);
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-2 py-1 rounded-lg cursor-pointer border-2 hover:bg-royal hover:text-white border-royal';

  const iCalFileString = ics({
    title: props.name,
    start: props.start,
    end: props.end,
    location: props.location,
    url: props.htmlLink,
  });

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="mr-auto">
        <p className="text-4xl font-semibold">{props.name}</p>
        <p>
          {dateFormat.format(start)} {startTime} - {timeFormat.format(end)}
        </p>
        <p>{props.location === 'Unknown' ? 'TBD' : props.location}</p>
      </div>
      <div className="mt-2 flex flex-row md:flex-col items-end gap-2">
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
    </div>
  );
};

const Meetings = () => {
  const router = useRouter();

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
        console.log(data.data);
        setEvents(data.data.data.items);
        setState('done');
      })
      .catch((error) => {
        setState('error');
        console.error('Feedback', error);
      });
  }, []);

  interface MeetingObject {
    name: string;
    found: boolean;
    start?: string;
    end?: string;
    location?: string;
    htmlLink?: string;
  }
  type MeetingProps = Record<'planner' | 'jupiter' | 'trends' | 'api', MeetingObject>;

  const meetings: MeetingProps = {
    planner: {
      name: 'Planner',
      found: false,
    },
    jupiter: {
      name: 'Jupiter',
      found: false,
    },
    trends: {
      name: 'Trends & Skedge',
      found: false,
    },
    api: {
      name: 'API & Platform',
      found: false,
    },
  };
  const elements = [];
  if (typeof events !== 'undefined') {
    for (const project in meetings) {
      for (const event of events) {
        if (event.status !== 'confirmed') {
          continue;
        }
        const name = event.summary.toLowerCase();
        if (name.includes('project meeting') && name.includes(project)) {
          meetings[project as keyof MeetingProps] = {
            ...meetings[project as keyof MeetingProps],
            found: true,
            start: event.start.dateTime,
            end: event.end.dateTime,
            location: event.location,
            htmlLink: event.htmlLink,
          };
        }
      }
      elements.push(<Meeting key={project} {...meetings[project as keyof MeetingProps]} />);
    }
  }

  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  //error state
  let result = (
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-4">
      <h2 className="text-5xl font-bold text-center">Error loading calendar</h2>
      <button className={buttonLinkClasses} onClick={() => router.reload()}>
        Reload
      </button>
    </div>
  );

  if (state === 'loading') {
    result = <h2 className="text-5xl font-bold pb-4 text-center">Loading...</h2>;
  } else if (state === 'done') {
    result = (
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">
        <div className="flex flex-col gap-16 w-full">{...elements}</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Meetings - Nebula Labs</title>
        <link rel="canonical" href="https://www.utdnebula.com/resources/meetings" key="canonical" />
        <meta property="og:url" content="https://www.utdnebula.com/resources/meetings" />
      </Head>
      <Header text="Meetings" />
      {result}
      <Footer />
    </>
  );
};

export default Meetings;
