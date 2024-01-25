import Governance from '@/components/Governance';
import data, { current } from '@/data/governance';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  return (
    <Governance
      data={data[current]}
      periodLinks={{ path: router.pathname + '/', periods: Object.keys(data), current: current }}
    />
  );
};

export default Page;
