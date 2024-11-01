import Head from 'next/head';

import { getPopulatedPeriod, currentPeriod, nonCurrentPeriods } from '@/lib/period-populator';

import Governance from '@/components/Governance';

const Page = () => {
  const period = currentPeriod();
  const data = getPopulatedPeriod(period);
  const _nonCurrentPeriods = nonCurrentPeriods();

  const periodLinks = {
    path: '/about/governance/',
    periods: _nonCurrentPeriods,
  };

  return (
    <>
      <Head>
        <title>Governance - Nebula Labs</title>
        <meta key="og:title" property="og:title" content="Governance - Nebula Labs" />
        <link rel="canonical" href="https://www.utdnebula.com/about/governance" key="canonical" />
        <meta property="og:url" content="https://www.utdnebula.com/about/governance" />
      </Head>
      <Governance data={data} period={'Current'} isCurrent={true} periodLinks={periodLinks} />
    </>
  );
};

export default Page;
