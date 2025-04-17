'use client';

import React from 'react';

export default function Error() {
  const buttonLinkClasses =
    'hover:scale-105 active:scale-95 transition duration-300 ease-in-out px-4 py-2 rounded-lg cursor-pointer hover:bg-royal hover:text-white border-royal border-2';

  return (
    <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-4">
      <h2 className="text-5xl font-bold text-center">Error loading calendar</h2>
      <button className={buttonLinkClasses} onClick={() => location.reload()}>
        Reload
      </button>
    </div>
  );
}
