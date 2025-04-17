'use client';

import Image from 'next/image';
import React from 'react';

import Arrow from '@/../public/icons/arrow-white.svg';

export default function ScrollUpButton() {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="items-center flex flex-col rounded-full p-2 transition border border-white/0 hover:border-white"
    >
      <Image src={Arrow} alt="arrow" width="20" height="20" className="rotate-180" />
      Top
    </button>
  );
}
