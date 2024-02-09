import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';
import { PopulatedGoveranceGroup } from '@/data/period-populator';
import { Person } from '@/data/person-dictionary';

import LinkedIn from '@/../public/linkedin-royal.svg';
import Email from '@/../public/email.svg';

const LeadershipCard = (props: Person) => {
  return (
    <div className="p-2 flex flex-col items-center grow-0 w-72 gap-4">
      {undefined !== undefined ? (
        <div className="bg-cornflower-50 w-full aspect-square rounded-3xl"></div>
      ) : (
        <Image
          src={`/governance/${props.netId}.jpg`}
          alt="Headshot"
          height={280}
          width={280}
          className="w-full aspect-square rounded-3xl"
          key={props.netId}
        />
      )}
      <h3 className="text-3xl font-bold text-center">{props.name}</h3>
      <p className="text-2xl text-center">{props.role}</p>
      <div className="flex gap-4">
        <a href={`mailto:${props.netId}@utdallas.edu`} key={'email'} className="w-8 h-8 relative">
          <Image src={Email} alt="Social link" fill />
        </a>
        <a
          href={`https://www.linkedin.com/in/${props.linkedIn}/`}
          key={'linkedIn'}
          className="w-8 h-8 relative"
        >
          <Image src={LinkedIn} alt="Social link" fill />
        </a>
      </div>
    </div>
  );
};

const LeadershipGroup = (props: PopulatedGoveranceGroup) => {
  return (
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">{props.name}</h2>
      <p className="text-3xl pb-4">{props.description}</p>
      <div className="flex flex-wrap justify-center gap-16">
        {props.people.map((person) => (
          <LeadershipCard {...person} key={person.role} />
        ))}
      </div>
    </div>
  );
};

interface GovernanceProps {
  period: string;
  data: PopulatedGoveranceGroup[];
  isCurrent: boolean;
  periodLinks: {
    path: string;
    periods: string[];
  };
}

const Governance = (props: GovernanceProps) => (
  <div className="bg-white">
    <Header text={'Our ' + (props.isCurrent ? '' : props.period + ' ') + 'Leadership Team'} />
    {props.data.map((group) => (
      <LeadershipGroup {...group} key={group.name} />
    ))}
    <PeriodLinks
      name="Historical governance periods"
      isCurrent={props.isCurrent}
      shownPeriod={props.period}
      {...props.periodLinks}
    />
    <Footer royalBg={false} />
  </div>
);

export default Governance;
