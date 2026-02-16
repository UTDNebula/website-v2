'use client';

import Header from '@/components/Header';
import { viewCalendarLink } from '@/data/calendarId';
import Link from 'next/link';
import React from 'react';

export default function Error() {
  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  return (
    <>
      <Header text="Calendar" />
      <h2 className="px-8 lg:px-16 xl:px-32 text-2xl text-center mb-6">Error loading calendar</h2>
      <h3 className="px-8 lg:px-16 xl:px-32 text-xl text-center mb-12">
        View it{' '}
        <Link
          className="text-royal underline decoration-transparent hover:decoration-inherit transition"
          href={viewCalendarLink}
          target="_blank"
        >
          here
        </Link>
        .
      </h3>
      <div className="px-8 lg:px-16 xl:px-32 mb-12 flex justify-center gap-2 flex-wrap">
        <button className={buttonLinkClasses} onClick={() => location.reload()}>
          Reload
        </button>
      </div>
    </>
  );
}
