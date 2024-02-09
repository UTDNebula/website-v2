import { GoverancePeriod, periodToLeadershipMap } from '@/data/period-dictionary';
import { netIdToPersonMap, Person } from '@/data/person-dictionary';

export interface PopulatedGoveranceGroup {
  name: string;
  description: string;
  people: Person[];
}

export function getPopulatedPeriod(period: string) {
  const goverance: GoverancePeriod = periodToLeadershipMap.get(period)!;

  const populatedGroups: PopulatedGoveranceGroup[] = Object.keys(goverance).map((groupName) => {
    const people = goverance[groupName];

    const populatedPeople = Object.keys(people).map((role) => {
      const netId = people[role];
      const personData: Person = netIdToPersonMap.get(netId)!;
      personData['netId'] = netId;
      personData['role'] = role;

      return personData;
    });

    const group: PopulatedGoveranceGroup = {
      name: groupName,
      description: groupNameToDescMap.get(groupName)!,
      people: populatedPeople,
    };

    return group;
  });

  return populatedGroups;
}

const allPeriods = () => {
  return Array.from(periodToLeadershipMap.keys()).sort().reverse();
};

export const nonCurrentPeriods = () => {
  const all = allPeriods();
  all.shift();

  return all;
};

export const currentPeriod = () => {
  return allPeriods()[0];
};

const groupNameToDescMap = new Map<string, string>([
  [
    'Officers',
    `As a group of leaders, our officer team works together to guide 
    our organization towards its goals while upholding the principles upon which 
    Nebula Labs was founded. Although each role has distinct responsibilities, they 
    all contribute to ensuring the success and growth of our organization.`,
  ],
  [
    'Division Heads',
    `By overseeing and managing specific areas within Nebula Labs, 
    division heads leverage their expertise to drive the achievement of organization-wide
    goals. They play a crucial role in orchestrating collaborative efforts, establishing 
    and upholding standards, and cultivating a culture of innovation and development 
    within their respective domains.`,
  ],
  [
    'Project Leads',
    `Playing a crucial role in shaping every project we work on, 
    project leads orchestrate the transformation of ideas into tangible and functional 
    products. Their coordination skills ensure the successful development of each project, 
    delivering valuable outcomes that positively impact our community.`,
  ],
  [
    'Our Club Sponsor',
    `With more than a decade of teaching and mentoring experience 
    within the community here at The University of Texas at Dallas, John Cole consistently 
    leaves a positive impact on the people around him. Here at Nebula Labs we eagerly look 
    forward to utilizing his invaluable support and knowledge as we grow as an organization.`,
  ],
]);
