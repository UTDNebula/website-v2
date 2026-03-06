export type LogoProps = {
  className?: string;
};

export type ProjectLogoCombinationProps = LogoProps & {
  duotone?: boolean;
  slotClassNames?: {
    nebulaLogo?: string;
    projectLogo?: string;
  };
};
