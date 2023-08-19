
// TODO: cleanup bg code

import { CSSProperties, useEffect, useState } from "react"

// TODO: Figure out why the animations only start on a fast refresh...
const createBg = () => {
    const bgInstance = crypto.randomUUID()
    const varGen = (idx: number) => `--opacity-${bgInstance}-${idx+1}`
  
    // implementation inspired by https://www.joshwcomeau.com/react/rainbow-button/#custom-properties-aka-css-variables-3
    // generated mesh with https://csshero.org/mesher/
    // unfortunately this animation only works with recent chrome/safari versions, custom css properties should hopefully land in firefox stable soon since they recently made it in a nightly release
  
    const points = [
      `radial-gradient(at 110% 68%, hsla(35,97%,67%,$OPACITY) 0px, transparent 60%)`,
      `radial-gradient(at 13.5% 91%, hsla(10,100%,64%,$OPACITY) 0px, transparent 60%)`,
      `radial-gradient(at 47% -12.71%, hsla(259,60%,64%,$OPACITY) 0px, transparent 60%)`,
      `radial-gradient(at 97% 3%, hsla(231,73%,65%,$OPACITY) 0px, transparent 60%)`,
      `radial-gradient(at -10% -10%, hsla(234,100%,88%,$OPACITY) 0px, transparent 60%)`,
      `radial-gradient(at 10% 38%, hsla(231,73%,65%,$OPACITY) 0px, transparent 60%)`
    ].map((s, idx) => s.replace("$OPACITY", `var(${varGen(idx)})`))
  
    const background = points.join(", ")
    const cssVars = points.reduce((acc, cur, idx)=> {
      acc[varGen(idx)] = '1'
      return acc
    }, {} as Record<string, string>)
    return {background, cssVars, bgInstance}
  }
  
  
  const bg = createBg()
  const {background, cssVars} = bg
  if (typeof window !== "undefined") {
    Object.keys(cssVars).forEach((v) => {
      CSS.registerProperty({
        // The name of our property, should match what we use in our CSS:
        name: v,
        // How we want to interpolate that value, when it changes:
        syntax: '<number>',
        // Whether it should inherit its value from the cascade
        // (like `font-size` does), or not (like `position` doesn't)
        inherits: false,
        initialValue: '1',
      })
    })
  }
  
  const generateKeyframe = (percent: number, vars: Record<string, string>) => {
    return `${(percent * 100).toFixed(2)}% { ${Object.entries(vars).map(([k,v]) => `${k}: ${v};`).join(" ")} }`
  }
  
  const generateVars = () => {
    const newVars = {...cssVars} as typeof cssVars
    const keys = Object.keys(newVars)
    const idx1 = Math.floor(Math.random()*keys.length)
    const idx2 = Math.floor(Math.random()*keys.length)
    newVars[keys[idx1]] = '0.6'
    newVars[keys[idx2]] = '0.6'
    return newVars
  }
  
  const generateKeyframes = (count: number) => {
    const frames = []
    for (let i = 0; i < count; i++) {
      frames.push(generateKeyframe(frames.length/count*3, cssVars))
      frames.push(generateKeyframe((frames.length)/count*3, generateVars()))
      frames.push(generateKeyframe(frames.length/count*3, cssVars))
    }
    return `@keyframes switchColor-${bg.bgInstance} { ${frames.join(" ")} }`
  }

const useBlobBg = (): [JSX.Element, CSSProperties] => {
    const [frames, setFrames] = useState('')
    useEffect(() => {
        setFrames(generateKeyframes(7))
    }, [])
    return [
        <style jsx global key={bg.bgInstance}>{`${frames}`}</style>,
        {
            ...cssVars,
            backgroundColor:'hsla(0,0%,100%,1)',
            background,
            animation: `2500ms infinite alternate switchColor-${bg.bgInstance} cubic-bezier(0.4, 0, 0.6, 1)`,
        }
    ]
}

export default useBlobBg