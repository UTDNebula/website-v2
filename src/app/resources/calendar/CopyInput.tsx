'use client';

import React from 'react';

interface Props {
  href: string;
}

export default function CopyInput(props: Props) {
  return (
    <input
      type="text"
      className="w-full bg-cornflower-50 border-2 border-royal px-2 py-1 rounded"
      value={props.href}
      readOnly
      onFocus={(e) => {
        e.target.select();
      }}
    />
  );
}
