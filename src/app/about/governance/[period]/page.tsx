import Governance from '@/components/Governance';
import { periodToLeadershipMap } from '@/data/period-dictionary';
import { getPopulatedPeriod, nonCurrentPeriods } from '@/lib/period-populator';
import type { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ period: string }>;
}): Promise<Metadata> {
  const { period } = await params;

  return {
    title: 'Governance',
    alternates: {
      canonical: '/governance/' + period,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ period: string }> }) {
  const { period } = await params;

  const data = getPopulatedPeriod(period);

  const periodLinks = {
    path: '/about/governance/',
    periods: ['Current', ...nonCurrentPeriods().filter((per) => per !== period)],
  };

  return <Governance data={data} period={period} isCurrent={false} periodLinks={periodLinks} />;
}

export async function generateStaticParams() {
  const periods = Array.from(periodToLeadershipMap.keys());
  periods.sort();
  periods.splice(periods.length - 1, 1);

  return periods.map((fileName) => ({
    period: fileName,
  }));
}
