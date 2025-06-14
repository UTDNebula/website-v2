import '@/styles/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.utdnebula.com'),
  title: {
    template: '%s - Nebula Labs',
    default: 'Nebula Labs',
  },
  description: "An initiative to build tools to make students' lives easier at UT Dallas.",
  openGraph: {
    title: 'Nebula Labs',
    description: "An initiative to build tools to make students' lives easier at UT Dallas.",
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  //copied from globals.css
  themeColor: '#573dff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <GoogleAnalytics gaId="G-Q74JGS7ZPP" />
      )}
      <body className="font-inter text-haiti">
        {children}
      </body>
    </html>
  );
}
