/*

design nits:
make links work
testimonials size wrong
sizing on cta
implement core values
hero blobs going over cutoff
learn more button pressed+hover states
lines + arrows on index
blobs on index
*/

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Circles from '@/../public/circles.svg';
import Blob from '@/components/Blob';
import Footer from '@/components/Footer';
import Arrow from '@/../public/arrow.svg';
import WhoWeAre from '@/components/WhoWeAre';
import useBlobBg from '@/lib/useBlobBg';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';

const Header = () => {
  const [frames, bgStyles] = useBlobBg();

  return (
    <div className="h-screen">
      {frames}
      <div style={bgStyles} className="absolute -z-30 w-full h-full text-xl" />
      <Image src={Circles} alt={''} priority className="absolute -z-20 h-auto w-full opacity-50" />
      <div className="absolute -z-10 w-full h-full opacity-75">
        <Blob className="-left-[20%] top-[35%]" color="4835BC" size="large" />
        <Blob className="right-[5%] -top-[10%]" color="4835BC" size="large" />
      </div>

      <Navbar />
      <main className="lg:pt-24 xl:pt-40">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold lg:pb-5 xl:pb-20 font-inter">
            Greetings from the stars
          </h3>
          <h1 className="text-6xl font-bold font-kallisto lg:pb-24 xl:pb-40">
            We are Nebula Labs <br /> We build <b>Products</b> and <b>Talents</b>
          </h1>
          <div className="flex flex-col relative lg:h-16 xl:h-24">
            <p className="text-lg font-medium">Explore the Galaxy</p>
            <Image
              src={Arrow}
              alt="Arrow"
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const Home = () => (
  <div>
    <Header />
    <WhoWeAre />
    <Projects />
    <Testimonials />
    {/* <div>beliefs</div> */}
    <CTA />
    <Footer />
  </div>
);

export default Home;
