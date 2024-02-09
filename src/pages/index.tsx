import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Circles from '@/../public/circles.svg';
import Blob from '@/components/Blob';
import Footer from '@/components/Footer';
import Arrow from '@/../public/arrow-white.svg';
import WhoWeAre from '@/components/WhoWeAre';
import useBlobBg from '@/lib/useBlobBg';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Head from 'next/head';

const Header = () => {
  const [frames, bgStyles] = useBlobBg();

  return (
    <div className="h-screen flex flex-col overflow-hidden relative ">
      {frames}
      <div style={bgStyles} className="absolute -z-30 w-full h-full text-xl" />
      <Image
        src={Circles}
        alt={''}
        priority
        className="absolute -z-20 max-w-[unset] h-[max(120vh,120vw)] w-[max(120vh,120vw)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
      <div className="absolute -z-10 w-full h-full opacity-75">
        <Blob className="-left-[20%] top-[35%]" color="4835BC" size="large" />
        <Blob className="right-[5%] -top-[10%]" color="4835BC" size="large" />
      </div>

      <Navbar className="absolute top-0 left-0 right-0" shadow={true} />
      <div className="grow flex flex-col justify-center px-8 lg:px-16 xl:px-32">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold lg:pb-5 xl:pb-20 font-inter [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
            Greetings from the stars
          </h3>
          <h1 className="text-6xl font-bold font-kallisto [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">
            We are Nebula Labs <br /> We build <b>Products</b> and <b>Talents</b>
          </h1>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center lg:gap-4 lg:h-16 text-white [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
        <p className="text-lg font-medium">Explore the Galaxy</p>
        <Image
          src={Arrow}
          alt="Arrow"
          className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out [filter:_drop-shadow(0_0_4px_rgb(0_0_0_/_0.4))]"
          onClick={() => window.scrollBy(0, window.innerHeight)}
        />
      </div>
    </div>
  );
};

const Home = () => (
  <>
    <Head>
      <link rel="canonical" href="https://www.utdnebula.com" key="canonical" />
      <meta property="og:url" content="https://www.utdnebula.com" />
    </Head>
    <Header />
    <WhoWeAre />
    <Projects />
    <Testimonials />
    {/* <div>beliefs</div> */}
    <CTA />
    <Footer />
  </>
);

export default Home;
