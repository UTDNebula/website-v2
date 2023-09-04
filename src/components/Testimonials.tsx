import Image from "next/image";
import Amrit from "@/../public/testimonials/amrit.png";
import JC from "@/../public/testimonials/jc.png";
import Kevin from "@/../public/testimonials/kevin.png";

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
    }
]

const Testimonials = () => (
    <>
      <div className="flex flex-col gap-8 text-center items-center mx-auto mt-24 my-12 max-w-3xl px-4">
        <h4 className="text-gradient font-semibold lg:font-bold text-4xl">We Got Something For Everyone</h4>
        <p>Our organization has something for everyone. Whether you&apos;re a seasoned pro or just starting out, we offer a range of opportunities to help you grow and develop.</p>
      </div>
      <div className="flex overflow-x-scroll text-white">
        {testimonials.map((t, idx, arr)=>(
          <div key={`testimonial-${t.name}`} className="flex flex-shrink-0 w-screen px-8  lg:px-32 xl:px-48 relative">
            <span id={`testimonial-${idx}`} className="absolute -top-6 right-0 w-full h-0"/>
            <div className="bg-royal rounded-3xl flex-shrink-0 flex flex-col md:flex-row w-fit items-center md:items-center text-center gap-8 p-8 font-medium md:text-lg md:justify-start">
                <Image className="md:w-2/5 lg:w-1/3" src={t.image} alt={t.name} />
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
    </>
)

export default Testimonials