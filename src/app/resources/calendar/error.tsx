'use client';

import React from 'react';

import Header from '@/components/Header';

export default function Error() {
  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  return (
    <>
      <Header text="Calendar" />
      <h2 className="px-8 lg:px-16 xl:px-32 text-2xl text-center mb-12">Error loading calendar</h2>
      <div className="px-8 lg:px-16 xl:px-32 mb-12 flex justify-center gap-2 flex-wrap">
        <button className={buttonLinkClasses} onClick={() => location.reload()}>
          Reload
        </button>
      </div>
    </>
  );
}
