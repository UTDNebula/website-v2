import Head from 'next/head';

import {
  getPopulatedPeriod,
  nonCurrentPeriods,
  PopulatedGoveranceGroup,
} from '@/lib/period-populator';
import { periodToLeadershipMap } from '@/data/period-dictionary';

import Governance from '@/components/Governance';

const Page = ({
  period,
  data,
  nonCurrentPeriods,
}: {
  period: string;
  data: PopulatedGoveranceGroup[];
  nonCurrentPeriods: string[];
}) => {
  const periodLinks = {
    path: '/about/governance/',
    periods: nonCurrentPeriods,
  };

  return (
    <>
      <Head>
        <title>{period + ' Governance - Nebula Labs'}</title>
        <link
          rel="canonical"
          href={'https://www.utdnebula.com/about/governance/' + period}
          key="canonical"
        />
        <meta property="og:url" content={'https://www.utdnebula.com/about/governance/' + period} />
      </Head>
      <Governance data={data} period={period} isCurrent={false} periodLinks={periodLinks} />
    </>
  );
};

export async function getStaticPaths() {
  const periods = Array.from(periodToLeadershipMap.keys());
  periods.sort();
  periods.splice(periods.length - 1, 1);

  const paths = periods.map((fileName) => {
    return {
      params: {
        period: fileName,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

interface Params {
  period: string;
}

export async function getStaticProps({ params }: { params: Params }) {
  const period = params.period;
  const data = getPopulatedPeriod(period);
  const _nonCurrentPeriods = ['Current', ...nonCurrentPeriods().filter((per) => per !== period)];

  return {
    props: {
      period,
      data,
      nonCurrentPeriods: _nonCurrentPeriods,
    },
  };
}

export default Page;
