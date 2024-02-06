import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';

interface LeadershipCardProps {
  image: string | StaticImageData;
  name: string;
  title: string;
  links: {
    link: string;
    image: string | StaticImageData;
  }[];
}
[];

const LeadershipCard = (props: LeadershipCardProps) => {
  return (
    <div className="p-2 flex flex-col items-center grow-0 w-72 gap-4">
      {props.image == '' ? (
        <div className="bg-cornflower-50 w-full aspect-square rounded-3xl"></div>
      ) : (
        <Image
          src={props.image}
          alt="Headshot"
          height={280}
          width={280}
          className="w-full aspect-square rounded-3xl"
        />
      )}
      <h3 className="text-3xl font-bold text-center">{props.name}</h3>
      <p className="text-2xl text-center">{props.title}</p>
      <div className="flex gap-4">
        {props.links.map((link, index) => (
          <a href={link.link} key={index} className="w-8 h-8 relative">
            <Image src={link.image} alt="Social link" fill />
          </a>
        ))}
      </div>
    </div>
  );
};

interface LeadershipGroupProps {
  name: string;
  description: string;
  people: LeadershipCardProps[];
}
[];

const LeadershipGroup = (props: LeadershipGroupProps) => {
  return (
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">{props.name}</h2>
      <p className="text-3xl pb-4">{props.description}</p>
      <div className="flex flex-wrap justify-center gap-16">
        {props.people.map((person) => (
          <LeadershipCard {...person} key={person.title} />
        ))}
      </div>
    </div>
  );
};

interface GovernanceProps {
  data: LeadershipGroupProps[];
  past?: string;
  periodLinks: {
    path: string;
    periods: string[];
    current: string;
  };
}

const Governance = (props: GovernanceProps) => (
  <div className="bg-white">
    <Header
      text={
        'Our Leadership Team' + (typeof props.past === 'undefined' ? '' : ' (' + props.past + ')')
      }
    />
    {props.data.map((group) => (
      <LeadershipGroup {...group} key={group.name} />
    ))}
    <PeriodLinks name="Historical governance periods" past={props.past} {...props.periodLinks} />
    <Footer royalBg={false} />
  </div>
);

export default Governance;
