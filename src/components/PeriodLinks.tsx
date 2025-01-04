import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';

interface PeriodLinkProps {
  name: string;
  path: string;
  periods: string[];
}

const PeriodLinks = (props: PeriodLinkProps) => {
  const periods = props.periods;
  const urls = periods.map((period) => {
    if (period === 'Current') {
      return props.path;
    }
    return props.path + period;
  });

  return (
    <div className="px-8 lg:px-16 xl:px-32 pt-12 pb-24 flex flex-col items-center">
      <div className="w-fit">
        <Listbox>
          {({ open }) => (
            <>
              <Listbox.Button
                className={
                  'transition-all duration-300 ease-in-out px-2 py-1 cursor-pointer border-x-2 border-t-2 hover:bg-royal hover:text-white border-royal rounded-t-lg' +
                  (open ? '' : ' rounded-b-lg border-2')
                }
              >
                {props.name}
              </Listbox.Button>
              <Transition
                as="div"
                className="transition-all duration-500 overflow-hidden"
                enterFrom="transform max-h-0"
                enterTo="transform opacity-100 max-h-48"
                leaveFrom="transform opacity-100 max-h-48"
                leaveTo="transform max-h-0"
              >
                <div className="rounded-b-lg border-2 border-royal max-h-48 overflow-auto">
                  {periods.map((period, index) => (
                    <Listbox.Option
                      key={period}
                      value={period}
                      className={
                        'p-2' + (index === periods.length - 1 ? '' : ' border-b-2 border-royal')
                      }
                    >
                      <Link
                        className="underline decoration-transparent hover:decoration-inherit transition"
                        href={urls[index]}
                      >
                        <h3 className="text-xl font-semibold">{period}</h3>
                      </Link>
                    </Listbox.Option>
                  ))}
                </div>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default PeriodLinks;
