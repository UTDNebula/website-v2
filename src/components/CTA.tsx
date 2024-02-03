import Circles from '@/../public/circles.svg';
import Image from 'next/image';
import Blob from '@/components/Blob';

const CTA = () => {
  return (
    <div className="relative flex place-content-center my-24 overflow-y-visible overflow-x-clip">
      <div className="absolute top-0 left-0 w-full h-full overflow-visible">
        {/* <Blob className="-left-12 -top-[25%] -z-20" color="pink" size="medium" />
        <Blob className="left-[15%] top-[35%] -z-20" color="royal" size="medium" /> */}
        <Image
          src={Circles}
          alt={''}
          className="absolute -top-48 h-screen w-full overflow-visible -z-10 object-cover"
        />
        {/* <Blob className="left-[70%] -top-16 -z-20" color="periwinkle" size="medium" /> */}
      </div>

      <div
        className="mx-6 md:max-w-4xl md:px-36 py-14 sm:px-20 px-12 text-white text-center flex flex-col place-items-center rounded-lg gap-7 font-medium drop-shadow-2xl hover:scale-105 duration-100 scale-100 transition-transform"
        style={{
          backgroundColor: 'hsla(226,100%,93%,1)',
          backgroundImage: `radial-gradient(circle at 58% 94%, hsla(43,96%,56%,1) 0px, transparent 50%),
          radial-gradient(circle at 87% 89%, hsla(10,100%,64%,1) 0px, transparent 50%),
          radial-gradient(circle at 20% 50%, hsla(234,89%,73%,1) 0px, transparent 80%),
          radial-gradient(circle at 41% 0%, hsla(248,100%,61%,1) 0px, transparent 50%)`,
        }}
      >
        <Image src={'/icon-white.svg'} alt={'logo'} width={100} height={0} />
        <h3 className="text-5xl tracking-tight leading-[3.25rem]">
          Ready to explore the stars with us?
        </h3>
        <p className="tracking-tight text-xl">
          Join Nebula Labs today and be a part of our mission to innovate and create tools that make
          a difference in the world.
        </p>
        <button className="w-min rounded-full bg-white text-cornflower-500 px-10 py-1 mt-5 whitespace-nowrap font-semibold shadow-xl hover:shadow-lg duration-75 transition-shadow">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default CTA;
