import clsx from 'clsx';

const colors = {
  orange: 'bg-[#FDBB59]',
  'blue-1': 'bg-[#687BE8]',
  'blue-2': 'bg-[#5644DC]',
  pink: 'bg-[#FF6B4A]',
  royal: 'bg-royal',
  '4835BC': 'bg-[#4835BC]',
  '926FDB': 'bg-[#926FDB]',
  periwinkle: 'bg-periwinkle',
} as const;

const sizes = {
  medium: 'lg:h-[35vw] lg:w-[35vw]',
  large: 'lg:h-[45vw] lg:w-[45vw]',
} as const;

const Blob = (props: {
  className: string;
  color: keyof typeof colors;
  size: keyof typeof sizes;
  animate?: boolean;
}) => {
  const classes = clsx(
    'absolute rounded-full blur-[120px] mix-blend-multiply',
    sizes[props.size],
    colors[props.color],
    'to-transparent bg-gradient-radial',
    props.className,
  );

  return <span className={classes} />;
};

export default Blob;
