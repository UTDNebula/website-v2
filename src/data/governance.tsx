import { StaticImageData } from 'next/image';

import LinkedIn from '@/../public/linkedin-royal.svg';
import Website from '@/../public/website.svg';
import Email from '@/../public/email.svg';

import Amrit from '@/../public/governance/amrit.png';

export const current = '2023-2024';

function vacant(title: string) {
  return {
    image: '',
    name: 'Vacant',
    title: title,
    links: [],
  };
}

const clubSponsor = {
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
};

interface StringKeys {
  [key: string]: {
    name: string;
    description: string;
    people: {
      image: string | StaticImageData;
      name: string;
      title: string;
      links: {
        link: string;
        image: string | StaticImageData;
      }[];
    }[];
  }[];
}

const data: StringKeys = {
  '2023-2024': [
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
        vacant('Head of Product'),
        vacant('Head of Marketing'),
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
    clubSponsor,
  ],
  '2022-2023': [],
  '2021-2022': [],
  '2020-2021': [],
  '2019-2020': [],
  '2018-2019': [],
  '2017-2018': [],
};

export default data;
