import Navbar from "@/components/Navbar";
import Image from "next/image";
import Circles from "@/../public/circles.svg";
import Blob from "@/components/Blob";
import Footer from "@/components/Footer";
import Arrow from "@/../public/arrow.svg";
import WhoWeAre from "@/components/WhoWeAre";
import useBlobBg from "@/lib/useBlobBg";
import CTA from "@/components/CTA";

import Amrit from "@/../public/testimonials/amrit.png";
import JC from "@/../public/testimonials/jc.png";
import Kevin from "@/../public/testimonials/kevin.png";

const Header = () => {
  const [frames, bgStyles] = useBlobBg()

  return (
  <div className="h-screen">
    {frames}
    <div style={bgStyles} className="absolute -z-30 w-full h-full text-xl" />
    <Image
      src={Circles}
      alt={""}
      priority
      className="absolute -z-20 h-auto w-full opacity-50"
    />
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
)};

const testimonials = [
  {
    name: 'Amrit',
    classification: 'Junior',
    image: Amrit,
    quote: '“Being a part of Nebula has been a huge part of my college career. I\'ve made some of my best friends and had some of my best experiences being a part of the group. I love creating software that helps students and I love teaching people web technologies.”'
  },
  {
  name: 'Kevin',
  classification: 'Sophomore',
  image: Kevin,
  quote: '“I love the team, I love the product, I love the unique challenges that the project presents. What more can I ask for :)”'
}, 
{
  name: 'JC',
  classification: 'Junior',
  image: JC,
  quote: '“I enjoyed interacting with an open source project which I’d never done before. The team working skills are also great to know and the people I have interacted with so far have been great.”'
},
]

const Home = () => (
  <div>
    <Header />
    {/* <WhoWeAre /> */}
    {/* <div>projects</div> */}
    {/* <div>projects</div> */}
    <div className="flex overflow-x-scroll w-screen text-white my-16">
      {testimonials.map((t, idx, arr)=>(
        <div key={`testimonial-${t.name}`} className="flex flex-shrink-0 w-screen px-8 relative lg:max-w-5xl">
          <span id={`testimonial-${idx}`} className="absolute -top-6 right-0 w-full h-0"/>
<div className="bg-royal rounded-3xl flex-shrink-0 flex flex-col md:flex-row w-fit items-center md:items-center text-center gap-8 p-8 font-medium md:text-lg md:justify-start">


          <Image className="md:w-2/5" src={t.image} alt={t.name} />
          <span className="contents md:flex flex-col md:text-left gap-8 md:h-full md:justify-center relative">

          <p>{t.quote}</p>
          <h3 className="text-2xl font-bold">
            {t.name}, {t.classification}
          </h3>
          
            <span className="flex gap-2 mt-auto mb-8 md:mb-0 md:mt-0 place-self-end md:absolute md:bottom-0">
              <a href={`#testimonial-${Math.max(0, idx-1)}`}>prev</a>
              <p>{idx+1}/{arr.length}</p>
              <a href={`#testimonial-${Math.min(arr.length-1, idx+1)}`}>next</a>
            </span>
          </span>
          </div>
        </div>
      ))}
    </div>
    {/* <div>beliefs</div> */}
    <CTA/>
    {/* <Footer /> */}
  </div>
);

export default Home;
