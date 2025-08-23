import { auth, JWT } from 'google-auth-library';

const CALENDAR_ID =
  'c_81b7102868d4acac8b7db3a18de6440d45740e4754be4f8a28a5c3915b0d1e71@group.calendar.google.com';

type Data = {
  message: string;
  data?: {
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
  }[];
};

export default async function fetchCalendar(): Promise<Data> {
  const CREDENTIALS = process.env.REACT_APP_GOOGLE_CREDENTIALS;
  if (typeof CREDENTIALS !== 'string') {
    return { message: 'API key is undefined' };
  }

  try {
    const client = auth.fromJSON(JSON.parse(CREDENTIALS));
    if (client instanceof JWT) {
      client.scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
    }
    const url = new URL(
      'https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events',
    );
    url.searchParams.append('singleEvents', 'True');
    url.searchParams.append('orderBy', 'startTime');
    url.searchParams.append('maxResults', '100');
    url.searchParams.append('timeMin', new Date().toISOString());
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    url.searchParams.append('timeMax', date.toISOString());

    const data = await client.request({
      url: url.href,
      method: 'GET',
    });

    if (data.statusText !== 'OK') {
      throw new Error(data.statusText);
    }

    return { message: 'success', data: (data.data as { items: Data['data'] }).items };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

// Do not cache
export const revalidate = 0;
