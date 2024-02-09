import Link from 'next/link';

interface GovernanceProps {
  name: string;
  path: string;
  periods: string[];
}

const PeriodLinks = (props: GovernanceProps) => {
  const periods = props.periods;
  const urls = periods.map((period) => {
    if (period === 'Current') {
      return props.path;
    }
    return props.path + period;
  });

  return (
    <div className="px-8 lg:px-16 xl:px-32 py-24 flex flex-wrap justify-center gap-8">
      <h2 className="text-5xl font-bold pb-4 text-center">{props.name}</h2>
      <div className="flex flex-wrap justify-center gap-x-8">
        {periods.map((period, index) => (
          <Link
            href={urls[index]}
            className="underline decoration-transparent hover:decoration-inherit transition"
            key={period}
          >
            <h3 className="text-xl font-semibold mb-4">{period}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PeriodLinks;
