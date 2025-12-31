import '@/styles/globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Bai_Jamjuree, Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-main',
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
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
  //copied from globals.css
  themeColor: '#573dff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
        <GoogleAnalytics gaId="G-Q74JGS7ZPP" />
      )}
      <body className={`${inter.variable} font-main ${baiJamjuree.variable} text-haiti`}>
        {children}
      </body>
    </html>
  );
}
