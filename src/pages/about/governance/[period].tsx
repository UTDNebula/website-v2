import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PeriodLinks from '@/components/PeriodLinks';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import Governance from '@/components/Governance';
import data, { current } from '@/data/governance';

const Page = () => {
  const router = useRouter();

  const periodLinks = {
    path: router.pathname.replace(/\[.*\]/, ''),
    periods: Object.keys(data),
    current: current,
  };

  if (
    typeof router.query.period === 'undefined' ||
    Array.isArray(router.query.period) ||
    !(router.query.period in data)
  ) {
    return (
      <div className="bg-white">
        <Header text="Period not found" />
        <PeriodLinks name="Historical governance periods" past={null} {...periodLinks} />
        <Footer royalBg={false} />
      </div>
    );
  }

  return (
    <Governance
      data={data[router.query.period]}
      past={router.query.period}
      periodLinks={periodLinks}
    />
  );
};

export default Page;
