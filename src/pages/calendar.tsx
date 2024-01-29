import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

interface EventProps {
  name: string;
}

const Event = (props: EventProps) => {
  return <div className="p-2 flex flex-col items-center grow-0 w-72 gap-4">{props.name}</div>;
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

  return (
    <div className="bg-white">
      <Header text="Calendar of Events" />
      {error ? (
        <h2 className="text-5xl font-bold pb-4 text-center">Error loading calendar</h2>
      ) : typeof events === 'undefined' ? null : (
        events.data.items.map((event) => {
          if (event.status !== 'confirmed') {
            return null;
          }
          console.log(event);
          return <Event name={event.summary} key={event.id} />;
        })
      )}
      <Footer royalBg={false} />
    </div>
  );
};

export default Calendar;
