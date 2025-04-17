import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

import GitHub from '@/../public/icons/github-black.svg';
import Gmail from '@/../public/icons/gmail-black.svg';
import Instagram from '@/../public/icons/instagram-black.svg';
import Discord from '@/../public/icons/join-discord-black.svg';
import LinkedIn from '@/../public/icons/linkedin-black.svg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/contact',
  },
};

const linkClasses = 'text-2xl underline decoration-transparent hover:decoration-inherit transition';

export default function Contact() {
  return (
    <>
      <Header text="Contact Us" />
      <div className="px-8 lg:px-16 xl:px-32 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-2xl">
            Discord is the best place to stay up to date with our latest updates and events.
          </h2>
          <a
            className="hover:scale-105 transition"
            href="https://discord.utdnebula.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Discord} alt="discord" width="200" height="60" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl">You can also find us on these platforms:</h2>
          <div className="flex flex-row items-center gap-12">
            <a
              className={linkClasses + ' flex items-center gap-2'}
              href="https://instagram.com/utdnebula"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Instagram} alt="Instagram logo" width="30" height="30" />
            </a>
            <a
              className={linkClasses + ' flex items-center gap-2'}
              href="https://linkedin.com/company/utdnebula"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={LinkedIn} alt="LinkedIn logo" width="30" height="30" />
            </a>
            <a
              className={linkClasses + ' flex items-center gap-2'}
              href="https://github.com/utdnebula"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={GitHub} alt="GitHub logo" width="30" height="30" />
            </a>
            <a
              className={linkClasses + ' flex items-center gap-2'}
              href="mailto:leadership@utdnebula.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Gmail} alt="GitHub logo" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
