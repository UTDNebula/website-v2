import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import { getPopulatedPeriod, currentPeriod, nonCurrentPeriods } from '@/lib/period-populator';
import { netIdToPersonMap } from '@/data/person-dictionary';
import { periodToLeadershipMap } from '@/data/period-dictionary';

import Governance from '@/components/Governance';

import fs from 'fs';
import path from 'path';

const Page = () => {
  const period = currentPeriod();
  const data = getPopulatedPeriod(period);
  const _nonCurrentPeriods = nonCurrentPeriods();

  const periodLinks = {
    path: '/about/governance/',
    periods: _nonCurrentPeriods,
  };

  return <Governance data={data} period={'Current'} isCurrent={true} periodLinks={periodLinks} />;
};

export default Page;
