import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Circles from '@/../public/images/circles.svg';
import Gradient from '@/../public/images/BG6.png';
import Footer from '@/components/Footer';
import Arrow from '@/../public/icons/arrow-white.svg';
import WhoWeAre from '@/components/WhoWeAre';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className="h-[130vh] overflow-hidden relative bg-addition">
      <Image
        src={Gradient}
        alt="gradient background"
        fill
        priority
        className="object-cover -z-30"
      />

      <div className="h-screen flex flex-col relative">
        <Image
          src={Circles}
          alt={'circle image overlay'}
          className="absolute -z-20 max-w-[unset] h-[max(120vh,120vw)] w-[max(120vh,120vw)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
        />

        <div className="grow flex flex-col justify-center px-8 lg:px-16 xl:px-32">
          <div className="text-center text-white">
            <h3 className="text-xl font-semibold lg:pb-5 xl:pb-20 font-inter [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
              Greetings from the stars
            </h3>
            <h1 className="text-6xl font-bold font-kallisto [text-shadow:_0_0_16px_rgb(0_0_0_/_0.4)]">
              We are Nebula Labs <br /> We build <b>Products</b> and <b>People</b>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center lg:gap-4 lg:h-16 text-white [text-shadow:_0_0_4px_rgb(0_0_0_/_0.4)]">
          <p className="text-lg font-medium">Explore the Galaxy</p>
          <button
            className="hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => router.replace('/#who-we-are')}
          >
            <Image
              src={Arrow}
              alt="Arrow"
              className="[filter:_drop-shadow(0_0_4px_rgb(0_0_0_/_0.4))]"
            />
          </button>
        </div>
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
    <Navbar className="absolute top-0 left-0 right-0" shadow={true} />
    <WhoWeAre />
    <Projects />
    <Testimonials />
    {/* <div>beliefs</div> */}
    <CTA />
    <Footer />
  </>
);

export default Home;
