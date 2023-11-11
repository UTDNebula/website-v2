import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/image';

import LinkedIn from '@/../public/linkedin-royal.svg';
import Website from '@/../public/website.svg';
import Email from '@/../public/email.svg';

import Amrit from '@/../public/governance/amrit.png';

const governance = [
  {
    name: 'Officers',
    description:
      'As a group of leaders, our officer team works together to guide our organization towards its goals while upholding the principles upon which Nebula Labs was founded. Although each role has distinct responsibilities, they all contribute to ensuring the success and growth of our organization.',
    people: [
      {
        image: '',
        name: 'Caleb Lim',
        title: 'President',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'David Launikitis',
        title: 'Vice President',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Jake Spann',
        title: 'Executive Director',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Shaurya Dwivedi',
        title: 'Secretary',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: Amrit,
        name: 'Amrit Rathie',
        title: 'Treasurer',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
    ],
  },
  {
    name: 'Division Heads',
    description:
      'By overseeing and managing specific areas within Nebula Labs, division heads leverage their expertise to drive the achievement of organization-wide goals. They play a crucial role in orchestrating collaborative efforts, establishing and upholding standards, and cultivating a culture of innovation and development within their respective domains.',
    people: [
      {
        image: '',
        name: 'Hilary Nguyen',
        title: 'Head of Design',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Jason Antwi-Appah',
        title: 'Head of Engineering',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Vacant',
        title: 'Head of Product',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Vacant',
        title: 'Head of Marketing',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
    ],
  },
  {
    name: 'Project Leads',
    description:
      'Playing a crucial role in shaping every project we work on, project leads orchestrate the transformation of ideas into tangible and functional products. Their coordination skills ensure the successful development of each project, delivering valuable outcomes that positively impact our community.',
    people: [
      {
        image: '',
        name: 'Stephanie Li',
        title: 'Planner Lead',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Ruben Olano',
        title: 'Jupiter Lead',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'William Skaggs',
        title: 'Trends and Skedge Lead',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
      {
        image: '',
        name: 'Josh Pahman',
        title: 'API and Platform Lead',
        links: [
          {
            link: '/',
            image: LinkedIn,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
    ],
  },
  {
    name: 'Our Club Sponsor',
    description:
      'With more than a decade of teaching and mentoring experience within the community here at The University of Texas at Dallas, John Cole consistently leaves a positive impact on the people around him. Here at Nebula Labs we eagerly look forward to utilizing his invaluable support and knowledge as we grow as an organization.',
    people: [
      {
        image: '',
        name: 'John Cole',
        title: 'Professor and Club Sponsor',
        links: [
          {
            link: '/',
            image: Website,
          },
          {
            link: '/',
            image: Email,
          },
        ],
      },
    ],
  },
];

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-royal to-white to-75%">
      <Navbar />
      <div className="px-8 h-[40vh] flex justify-center items-center">
        <h1 className="text-6xl font-bold text-royal text-center">Our Leadership Team</h1>
      </div>
    </div>
  );
};

interface LeadershipCardProps {
  image: string;
  name: string;
  title: string;
  links: {
    link: string;
    image: string;
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
        {props.links.map((link) => (
          <a href={link.link} key={link.link} className="w-8 h-8 relative">
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
          <LeadershipCard {...person} key={person.name} />
        ))}
      </div>
    </div>
  );
};

const Governance = () => (
  <div className="bg-white">
    <Header />
    {governance.map((group) => (
      <LeadershipGroup {...group} key={group.name} />
    ))}
    <Footer royalBg={false} />
  </div>
);

export default Governance;
