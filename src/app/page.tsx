import Image from 'next/image';
import React from 'react';

import Gradient from '@/../public/images/BG6.png';
import Circles from '@/../public/images/circles.svg';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import WhoWeAre from '@/components/WhoWeAre';

import ScrollDownButton from './ScrollDownButton';

function Header() {
  return (
    <div className="h-[130vh] overflow-hidden relative bg-addition">
      <Image src={Gradient} alt="gradient background" fill priority className="object-fill -z-30" />

      <div className="h-screen flex flex-col relative">
        <Image
          src={Circles}
          alt={'circle image overlay'}
          className="absolute -z-20 max-w-[unset] h-[max(120vh,120vw)] w-[max(120vh,120vw)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
        />

        <div className="grow flex flex-col justify-center px-8 lg:px-16 xl:px-32">
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold lg:pb-5 xl:pb-20 font-main [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
              Greetings from the stars
            </h3>
            <h1 className="text-6xl font-bold font-display [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">
              We are Nebula Labs <br /> We build <b>Products</b> and <b>People</b>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center lg:gap-4 lg:h-16 text-white [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
          <p className="text-lg font-medium">Explore the Galaxy</p>
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Navbar className="absolute top-0 left-0 right-0" shadow={true} />
      <WhoWeAre />
      <Projects />
      <Testimonials />
      {/* <div>beliefs</div> */}
      <CTA />
      <Footer />
    </>
  );
}
