// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { auth, JWT } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

const CALENDAR_ID = 'c_64bca4fdc75077d852bc5236ec20402d8514792841894b264da57d41bb0ee32e@group.calendar.google.com'

type Data = {
  message: string;
  data?: unknown;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (
    !(
      'REACT_APP_GOOGLE_CREDENTIALS' in process.env &&
      typeof process.env.REACT_APP_GOOGLE_CREDENTIALS === 'string'
    )
  ) {
    res.status(500).json({ message: 'API key is undefined' });
    return;
  }
  return new Promise<void>((resolve) => {
    const client = auth.fromJSON(
      JSON.parse(process.env.REACT_APP_GOOGLE_CREDENTIALS as string),
    );
    if (client instanceof JWT) {
      client.scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
    }
    const url = new URL('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events');
    url.searchParams.append('singleEvents', 'True');
    url.searchParams.append('orderBy', 'startTime');
    url.searchParams.append('maxResults', '100');
    url.searchParams.append('timeMin', new Date().toISOString());
    client
      .request({
        url: url.href,
        method: 'GET',
      })
      .then((data) => {
        if (data.statusText !== 'OK') {
          throw new Error(data.statusText);
        }
        res.status(200).json({
          message: 'success',
          data: data,
        });
        resolve();
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
        resolve();
      });
  });
}
