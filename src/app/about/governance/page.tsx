import Governance from '@/components/Governance';
import { currentPeriod, getPopulatedPeriod, nonCurrentPeriods } from '@/lib/period-populator';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Governance',
  alternates: {
    canonical: '/governance',
  },
};

export default function Page() {
  const period = currentPeriod();
  const data = getPopulatedPeriod(period);

  const periodLinks = {
    path: '/about/governance/',
    periods: nonCurrentPeriods(),
  };

  return <Governance data={data} period={'Current'} isCurrent={true} periodLinks={periodLinks} />;
}
