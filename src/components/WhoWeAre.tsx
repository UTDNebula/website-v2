import Link from 'next/link';
import React from 'react';

export default function WhoWeAre() {
  return (
    <div
      id="who-we-are"
      className="xl:pt-32 px-8 md:px-32 xl:px-64 flex justify-between flex-col lg:flex-row mx-auto font-main gap-8 lg:gap-16 lg:text-left text-center my-16"
    >
      <h1 className="font-bold lg:text-6xl text-2xl text-gradient leading-tight">
        Who&nbsp;We Are
      </h1>
      <div>
        <h3 className="lg:text-4xl text-lg lg:leading-normal">
          We&apos;re a community of student developers, designers, product specialists, and
          marketers crafting innovative tools to empower UT Dallas students, one galaxy at a time.
        </h3>
        <Link
          className="inline-block mt-6 px-6 py-3 text-white bg-royal rounded-full hover:bg-[#3634BB] transition-colors"
          href="/about/mission"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
