import Image from 'next/image';
import ArrowButton from '@/../public/testimonials/arrow-button.svg';
import Valeria from '@/../public/testimonials/valeria.jpg';
import Hiba from '@/../public/testimonials/hiba.jpg';
import Greeshma from '@/../public/testimonials/greeshma.jpg';
import Carousel from './Carousel';

const testimonials = [
  {
    name: 'Hiba M.',
    role: 'Designer on Trends',
    image: Hiba,
    quote:
      "“Nebula's welcoming environment makes it easy to be passionate about web development while forming valuable friendships! Working on Trends has allowed me to grow as a designer and work alongside other talented individuals. I love how involved everyone is during the meetings, and how every decision, big or small, has so much thought and care put into it.”",
  },
  {
    name: 'Greeshma N.',
    role: 'Engineer on API',
    image: Greeshma,
    quote:
      "“Nebula's contributions to student life at UTD are the best! I love working with a group that's so student-centric and making products that improve my quality of life as a student. Nebula's a great place to learn and opens so many doors for other opportunities!”",
  },
  {
    name: 'Valeria',
    role: 'Engineer on Jupiter',
    image: Valeria,
    quote:
      "“Team Jupiter is always encouraging and supportive of each other's craft, and even outside of meetings I can always feel the support of my team. As a beginner designer, it is thanks to their support that I have been able to grow and further improve skills gained at Nebula Labs.”",
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
        {(item, index, valueCount, prev, next) => (
          <div className="bg-royal rounded-3xl flex flex-col md:flex-row w-fit items-center md:items-start text-center gap-8 p-4 font-medium md:text-lg md:justify-start">
            <Image className="rounded-lg w-3/5 md:w-2/5" src={item.image} alt={item.name} />
            <div className="w-full flex flex-col text-center md:text-left h-full relative">
              <p>{item.quote}</p>
              <h3 className="text-2xl font-bold mt-2">{item.name}</h3>
              <p>{item.role}</p>

              <div className="w-full md:w-auto flex justify-center gap-3 mt-auto md:mt-0 pt-2 md:absolute md:bottom-0 md:right-0 items-center">
                <button onClick={prev}>
                  <Image src={ArrowButton} alt="arrow" />
                </button>
                <p className="h-min">
                  {index + 1}/{valueCount}
                </p>
                <button onClick={next}>
                  <Image src={ArrowButton} alt="arrow" className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        )}
      </Carousel>
    </>
  );
};

export default Testimonials;
