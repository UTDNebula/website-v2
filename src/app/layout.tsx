import '@/styles/globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const kallisto = localFont({
  src: [
    {
      path: '../fonts/Kallisto/Kallisto Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Thin Italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Light Italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Medium Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Bold Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Kallisto/Kallisto Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/Kallisto/Kallisto Heavy Italic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-kallisto',
});

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
  //copied from tailwind.config.js
  themeColor: '#573dff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-BKZ9JMC28B" />
      <body className={`${inter.variable} font-inter ${kallisto.variable} text-haiti`}>
        {children}
      </body>
    </html>
  );
}
