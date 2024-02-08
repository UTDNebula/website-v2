import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import {periodToLeadershipMap} from '@/data/period-dictionary'

import Governance from '@/components/Governance';
import data, { current } from '@/data/governance';

import fs from 'fs';
import path from 'path';

const Page = ({ data }) => {

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
      {data}
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

  console.log('paths')
  console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {

  const period = params.period
  const data = periodToLeadershipMap.get(period)



  return {
    props: {
      period,
      data
    },
  };

}

export default Page;
