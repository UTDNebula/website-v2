import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image from 'next/image';
import { PopulatedGoveranceGroup } from '@/lib/period-populator';
import { Person } from '@/data/person-dictionary';

import OrgMatrix from '@/../public/org-matrix.png';
import LinkedIn from '@/../public/icons/linkedin-royal.svg';
import Email from '@/../public/icons/email.svg';

const fallbackSrc = '/governance/blank.jpg';

const LeadershipCard = (props: Person) => {
  const [src, setSrc] = useState(`/governance/${props.netId}.jpg`);
  useEffect(() => {
    setSrc(`/governance/${props.netId}.jpg`);
  }, [props.netId]);
  return (
    <div className="p-2 flex flex-col items-center grow-0 w-72 gap-4">
      <Image
        src={src}
        alt="Headshot"
        height={280}
        width={280}
        className="w-full aspect-square rounded-3xl"
        key={props.netId}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            // Broken image
            setSrc(fallbackSrc);
          }
        }}
        onError={() => {
          setSrc(fallbackSrc);
        }}
      />
      <h3 className="text-3xl font-bold text-center">{props.name}</h3>
      <p className="text-2xl text-center">{props.role}</p>
      <div className="flex gap-4">
        {typeof props.netId !== 'undefined' && props.netId !== '' && (
          <a href={`mailto:${props.netId}@utdallas.edu`} key={'email'} className="w-8 h-8 relative">
            <Image src={Email} alt="Social link" fill />
          </a>
        )}
        {typeof props.linkedIn !== 'undefined' && props.linkedIn !== '' && (
          <a
            href={`https://www.linkedin.com/in/${props.linkedIn}/`}
            key={'linkedIn'}
            className="w-8 h-8 relative"
          >
            <Image src={LinkedIn} alt="Social link" fill />
          </a>
        )}
      </div>
    </div>
  );
};

const LeadershipGroup = (props: PopulatedGoveranceGroup) => {
  return (
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">{props.name}</h2>
      <p className="text-3xl">{props.description}</p>
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
  <>
    <Header text={'Our ' + (props.isCurrent ? '' : props.period + ' ') + 'Leadership Team'} />
    {props.data.map((group) => (
      <LeadershipGroup {...group} key={group.name} />
    ))}
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-col items-center gap-12">
      <h2 className="text-5xl font-bold text-center">Organizational Structure</h2>
      <p className="text-3xl">
        Nebula Labs is based on a matrix style organizational structure. This means each member has
        two points of contact: their project lead and division head. Project leads are overseen by
        the Executive Director and division heads are overseen by the Vice President.
      </p>
      <Image
        src={OrgMatrix}
        alt="Organization matrix chart showing the overlap of projects and divisions"
      />
    </div>
    <PeriodLinks name="Historical governance periods" {...props.periodLinks} />
    <Footer />
  </>
);

export default Governance;
