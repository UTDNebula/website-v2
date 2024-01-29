import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: 'true',
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  day: 'numeric',
});

const monthFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
});

const fullFormat = new Intl.DateTimeFormat('en-US');

interface EventProps {
  name: string;
  start: string;
  end: string;
  location: string;
}

const Event = (props: EventProps) => {
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

  return (
    <div
      className={'w-full p-4 rounded-lg ' + (important ? 'bg-royal text-white' : 'bg-periwinkle')}
    >
      <p className="text-2xl">{props.name}</p>
      <p>
        {startTime} - {timeFormat.format(end)}
      </p>
      <p>{props.location === 'Unknown' ? 'TBD' : props.location}</p>
    </div>
  );
};

const Calendar = () => {
  const [events, setEvents] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/getCalendar')
      .then((response) => response.json())
      .then((data) => {
        if (data.message !== 'success') {
          throw new Error(data.message);
        }
        setEvents(data.data);
      })
      .catch((error) => {
        setError(true);
        console.error('Feedback', error);
      });
  }, []);

  let lastYear, lastMonth, lastDay;
  let firstYear = true;
  const labelsAndEvents = [];
  if (typeof events !== 'undefined') {
    for (const event of events.data.items) {
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
        />,
      );
    }
  }

  return (
    <div className="bg-white">
      <Header text="Calendar of Events" />
      {error ? (
        <h2 className="text-5xl font-bold pb-4 text-center">Error loading calendar</h2>
      ) : typeof events !== 'undefined' && (
        <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center">
          <div className="flex flex-col gap-4 w-full max-w-[40ch]">{...labelsAndEvents}</div>
        </div>
      )}
      <Footer royalBg={false} />
    </div>
  );
};

export default Calendar;
