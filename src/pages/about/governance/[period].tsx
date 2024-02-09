import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import {getPopulatedPeriod, nonCurrentPeriods} from '@/data/period-populator'
import {netIdToPersonMap} from '@/data/person-dictionary'
import { Leadership, periodToLeadershipMap } from '@/data/period-dictionary'

import Governance from '@/components/Governance';

import fs from 'fs';
import path from 'path';

const Page = ({ period, data, nonCurrentPeriods }: {period: string, data: Leadership, nonCurrentPeriods: string[]}) => {


  return (
    <Governance
      data={data}
      period={period}
      isCurrent={false}
      otherPeriods={nonCurrentPeriods}
    />
  );

  // const router = useRouter();

  // const periodLinks = {
  //   path: router.pathname.replace(/\[.*\]/, ''),
  //   periods: Object.keys(data),
  //   current: current,
  // };

  // if (
  //   typeof router.query.period === 'undefined' ||
  //   Array.isArray(router.query.period) ||
  //   !(router.query.period in data)
  // ) {
  //   return (
  //     <div className="bg-white">
  //       <Header text="Period not found" />
  //       <PeriodLinks name="Historical governance periods" past={null} {...periodLinks} />
  //       <Footer royalBg={false} />
  //     </div>
  //   );
  // }

  // return (
  //   <Governance
  //     data={data[router.query.period]}
  //     past={router.query.period}
  //     periodLinks={periodLinks}
  //   />
  // );

  return (
    <div>
      <br />
      {period}
      <br />
    </div>
  );
};

export async function getStaticPaths() {

  const periods = Array.from(periodToLeadershipMap.keys())
  periods.sort()
  periods.splice(periods.length - 1, 1)

  const paths = periods.map((fileName) => {
    return {
      params: {
        period: fileName,
      }
    }
  })

  return {
    paths,
    fallback: false,
  };
}

interface Params {
  period: string;
}

export async function getStaticProps({ params }: { params: Params }) {

  const period = params.period
  const data = getPopulatedPeriod(period)
  const not2 = nonCurrentPeriods().filter(per => per !== period)
  const notCurrentPeriods = ['Current',...not2]

  return {
    props: {
      period,
      data,
      notCurrentPeriods
    },
  };

}

export default Page;
