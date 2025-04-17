import React from 'react';

import Navbar from '@/components/Navbar';

interface Props {
  text: string;
}

export default function Header(props: Props) {
  return (
    <div className="bg-linear-to-b from-royal to-white to-75%">
      <Navbar />
      <div className="px-8 h-[20vh] flex justify-center items-center">
        <h1 className="text-6xl font-bold text-royal text-center">{props.text}</h1>
      </div>
    </div>
  );
}
