import Image from 'next/image';
import ArrowButton from '@/../public/testimonials/arrow-button.svg';
import Amrit from '@/../public/testimonials/amrit.png';
import JC from '@/../public/testimonials/jc.png';
import Kevin from '@/../public/testimonials/kevin.png';
import Carousel from './Carousel';

const testimonials = [
  {
    name: 'Amrit',
    classification: 'Junior',
    image: Amrit,
    quote:
      "“Being a part of Nebula has been a huge part of my college career. I've made some of my best friends and had some of my best experiences being a part of the group. I love creating software that helps students and I love teaching people web technologies.”",
  },
  {
    name: 'Kevin',
    classification: 'Sophomore',
    image: Kevin,
    quote:
      '“I love the team, I love the product, I love the unique challenges that the project presents. What more can I ask for :)”',
  },
  {
    name: 'JC',
    classification: 'Junior',
    image: JC,
    quote:
      '“I enjoyed interacting with an open source project which I’d never done before. The team working skills are also great to know and the people I have interacted with so far have been great.”',
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col gap-8 text-center items-center mx-auto mt-24 my-12 max-w-3xl px-4">
        <h4 className="text-gradient font-semibold lg:font-bold text-4xl">
          We Got Something For Everyone
        </h4>
        <p>
          Our organization has something for everyone. Whether you&apos;re a seasoned pro or just
          starting out, we offer a range of opportunities to help you grow and develop.
        </p>
      </div>
      <Carousel data={testimonials} keyBase="testimonials">
        {(item, idx, valueCount, prev, next) => (
          <div className="bg-royal rounded-3xl flex-shrink-0 flex flex-col md:flex-row w-fit items-center md:items-center text-center gap-8 p-8 font-medium md:text-lg md:justify-start">
            <Image className="md:w-2/5 lg:w-1/5" src={item.image} alt={item.name} />
            <span className="contents md:flex flex-col md:text-left gap-8 md:h-full md:justify-center relative">
              <p>{item.quote}</p>
              <h3 className="text-2xl font-bold">
                {item.name}, {item.classification}
              </h3>

              <span className="flex gap-3 mt-auto mb-8 md:mb-0 md:mt-0 place-self-end md:absolute md:bottom-0 items-center">
                <button onClick={prev}>
                  <Image src={ArrowButton} alt="arrow" />
                </button>
                <p className="h-min">
                  {idx + 1}/{valueCount}
                </p>
                <button onClick={next}>
                  <Image src={ArrowButton} alt="arrow" className="rotate-180" />
                </button>
              </span>
            </span>
          </div>
        )}
      </Carousel>
    </>
  );
};

export default Testimonials;
