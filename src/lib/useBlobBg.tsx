import { CSSProperties, useEffect, useState } from 'react';

const createBg = () => {
  const bgInstance = crypto.randomUUID();
  const varGen = (idx: number) => `--opacity-${bgInstance}-${idx + 1}`;

  // implementation inspired by https://www.joshwcomeau.com/react/rainbow-button/#custom-properties-aka-css-variables-3
  // generated mesh with https://csshero.org/mesher/
  // unfortunately this animation only works with recent chrome/safari versions, custom css properties should hopefully land in firefox stable soon since they recently made it in a nightly release

  const points = [
    `radial-gradient(at 110% 68%, hsla(35,97%,67%,$OPACITY) 0px, transparent 60%)`,
    `radial-gradient(at 13.5% 91%, hsla(10,100%,64%,$OPACITY) 0px, transparent 60%)`,
    `radial-gradient(at 47% -12.71%, hsla(259,60%,64%,$OPACITY) 0px, transparent 60%)`,
    `radial-gradient(at 97% 3%, hsla(231,73%,65%,$OPACITY) 0px, transparent 60%)`,
    `radial-gradient(at -10% -10%, hsla(234,100%,88%,$OPACITY) 0px, transparent 60%)`,
    `radial-gradient(at 10% 38%, hsla(231,73%,65%,$OPACITY) 0px, transparent 60%)`,
  ].map((s, idx) => s.replace('$OPACITY', `var(${varGen(idx)})`));

  const background = points.join(', ');
  const cssVars = points.reduce(
    (acc, cur, idx) => {
      acc[varGen(idx)] = '1';
      return acc;
    },
    {} as Record<string, string>,
  );
  return { background, cssVars, bgInstance };
};

const generateKeyframe = (percent: number, vars: Record<string, string>) => {
  return `${(percent * 100).toFixed(2)}% { ${Object.entries(vars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(' ')} }`;
};

const generateVars = (cssVars: ReturnType<typeof createBg>['cssVars']) => {
  const newVars = { ...cssVars };
  const keys = Object.keys(newVars);
  const idx1 = Math.floor(Math.random() * keys.length);
  const idx2 = Math.floor(Math.random() * keys.length);
  const idx3 = Math.floor(Math.random() * keys.length);
  const idx4 = Math.floor(Math.random() * keys.length);
  newVars[keys[idx1]] = '0.6';
  newVars[keys[idx2]] = '0.6';
  newVars[keys[idx3]] = '0.2';
  newVars[keys[idx4]] = '0.2';
  return newVars;
};

const generateKeyframes = (count: number, id: string, cssVars: Record<string, string>) => {
  const frames = [];
  for (let i = 0; i < count; i++) {
    frames.push(generateKeyframe(frames.length / count, generateVars(cssVars)));
  }
  return `@keyframes switchColor-${id} { ${frames.join(' ')} }`;
};

const useBlobBg = (animation: boolean): [JSX.Element, CSSProperties] => {
  const [data, setData] = useState<ReturnType<typeof createBg> & { frames: string }>();
  useEffect(() => {
    const bg = createBg();
    try {
      Object.keys(bg.cssVars).forEach((v) => {
        CSS.registerProperty({
          // The name of our property, should match what we use in our CSS:
          name: v,
          // How we want to interpolate that value, when it changes:
          syntax: '<number>',
          // Whether it should inherit its value from the cascade
          // (like `font-size` does), or not (like `position` doesn't)
          inherits: false,
          initialValue: '1',
        });
      });
    } catch (e) {
      // registering properties may fail if they've already been registered
      console.error(e);
    }
    const frames = generateKeyframes(18, bg.bgInstance, bg.cssVars);
    setData({ ...bg, frames });
  }, []);
  return [
    <style jsx global key={data?.bgInstance}>{`
      ${data?.frames}
    `}</style>,
    {
      ...data?.cssVars,
      backgroundColor: 'hsla(0,0%,100%,0.5)',
      background: data?.background,
      animation: animation
        ? `15000ms infinite alternate switchColor-${data?.bgInstance} cubic-bezier(0.4, 0, 0.6, 1)`
        : '',
    },
  ];
};

export default useBlobBg;
