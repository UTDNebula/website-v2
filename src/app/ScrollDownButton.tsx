'use client';

import Image from 'next/image';
import React from 'react';

import Arrow from '@/../public/icons/arrow-white.svg';

export default function ScrollDownButton() {
  return (
    <button
      className="hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={() => (window.location.hash = 'who-we-are')}
    >
      <Image src={Arrow} alt="Arrow" className="[filter:_drop-shadow(0_0_4px_rgb(0_0_0_/_0.4))]" />
    </button>
  );
}
