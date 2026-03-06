import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Donate',
  alternates: {
    canonical: '/about/donate',
  },
};

export default function Donate() {
  return (
    <>
      <Header text="Support Nebula Labs" />
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <p className="text-3xl">
          Nebula Labs is a free and open-source student organization, funded entirely by UT Dallas
          and donations. If you would like to support our mission and help us continue to provide
          valuable resources and tools to students, consider donating. Your contribution will help
          us host events and fund our monthly cloud service costs. Thank you for your support!
        </p>
      </div>
      <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
        <Link
          className="px-10 py-6 text-2xl text-white bg-royal rounded-full hover:bg-royalDark transition-colors drop-shadow-sm"
          href="https://www.zeffy.com/en-US/donation-form/nebula-labs"
          target="_blank"
        >
          Donate
        </Link>
      </div>
      <Footer />
    </>
  );
}
