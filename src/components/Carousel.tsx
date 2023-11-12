import { useCallback } from 'react';

type CarouselProps<T extends any[]> = {
  data: T;
  keyBase: string;
  children: (
    item: T[number],
    index: number,
    valueCount: number,
    prev: () => void,
    next: () => void,
  ) => JSX.Element;
};

function Carousel<T extends any[]>({ data, keyBase, children }: CarouselProps<T>) {
  const k = useCallback((idx: number) => `${keyBase}-${idx}`, [keyBase]);

  const next = useCallback(
    (index: number) => () => {
      const el = document.querySelector(`#${k(Math.min(data.length - 1, index + 1))}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    },
    [data.length, k],
  );

  const prev = useCallback(
    (index: number) => () => {
      const el = document.querySelector(`#${k(Math.min(data.length - 1, index - 1))}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    },
    [data.length, k],
  );

  return (
    <div
      className="flex overflow-x-scroll text-white scroll-smooth no-scrollbar"
      style={{ scrollSnapType: 'x mandatory' }}
    >
      {data.map((item, idx) => {
        const key = k(idx);
        return (
          <div
            id={key}
            key={key}
            // className="flex flex-shrink-0 w-screen px-8 snap-start lg:px-32 xl:px-48 relative"
            className="flex flex-shrink-0 w-screen px-8 snap-start lg:px-32 xl:px-48"
          >
            {children(item, idx, data.length, prev(idx), next(idx))}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
