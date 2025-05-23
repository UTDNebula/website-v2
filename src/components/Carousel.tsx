import React, { ForwardedRef, forwardRef, useCallback } from 'react';

type CarouselProps<T extends unknown[]> = {
  data: T;
  keyBase: string;
  children: (
    item: T[number],
    index: number,
    valueCount: number,
    prev: () => void,
    next: () => void,
  ) => React.ReactNode;
};

function CarouselInner<T extends unknown[]>(
  { data, keyBase, children }: CarouselProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const generateCardKey = useCallback((idx: number) => `${keyBase}-${idx}`, [keyBase]);

  const next = useCallback(
    (index: number) => () => {
      const el = document.querySelector(
        `#${generateCardKey(Math.min(data.length - 1, index + 1))}`,
      );
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    },
    [data.length, generateCardKey],
  );

  const prev = useCallback(
    (index: number) => () => {
      const el = document.querySelector(
        `#${generateCardKey(Math.min(data.length - 1, index - 1))}`,
      );
      el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    },
    [data.length, generateCardKey],
  );

  return (
    <div
      className="flex overflow-x-scroll text-white scroll-smooth no-scrollbar w-full"
      style={{ scrollSnapType: 'x mandatory' }}
      ref={ref}
    >
      {data.map((item, idx) => {
        const key = generateCardKey(idx);
        return (
          <div
            id={key}
            key={key}
            className="flex shrink-0 w-full px-8 snap-start lg:px-32 xl:px-48"
          >
            {children(item, idx, data.length, prev(idx), next(idx))}
          </div>
        );
      })}
    </div>
  );
}

const Carousel = forwardRef(CarouselInner) as <T extends unknown[]>(
  props: CarouselProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => React.ReactNode;

export default Carousel;
