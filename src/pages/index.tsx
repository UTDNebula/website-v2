import Navbar from "@/components/Navbar";
import Image from "next/image";
import Circles from "@/../public/circles.svg";
import Blob from "@/components/Blob";
import Footer from "@/components/Footer";
import Arrow from "@/../public/arrow.svg";
import WhoWeAre from "@/components/WhoWeAre";
import { useEffect, useState } from "react";

// TODO: cleanup bg code
// TODO: Figure out why the animations only start on a fast refresh...
const createBg = () => {
  const bgInstance = crypto.randomUUID()
  const varGen = (idx: number) => `--opacity-${bgInstance}-${idx+1}`

  // implementation inspired by https://www.joshwcomeau.com/react/rainbow-button/#custom-properties-aka-css-variables-3
  // generated mesh with https://csshero.org/mesher/
  // unfortunately this animation only works with recent chrome/safari versions, custom css properties should hopefully land in firefox stable soon since they recently made it in a nightly release

  const points = [
    `radial-gradient(at 110% 68%, hsla(35,97%,67%,$OPACITY) 0px, transparent 50%)`,
    `radial-gradient(at 13.5% 91%, hsla(10,100%,64%,$OPACITY) 0px, transparent 50%)`,
    `radial-gradient(at 47% -12.71%, hsla(259,60%,64%,$OPACITY) 0px, transparent 50%)`,
    `radial-gradient(at 97% 3%, hsla(231,73%,65%,$OPACITY) 0px, transparent 50%)`,
    `radial-gradient(at -10% -10%, hsla(234,100%,88%,$OPACITY) 0px, transparent 50%)`,
    `radial-gradient(at 10% 38%, hsla(231,73%,65%,$OPACITY) 0px, transparent 50%)`
  ].map((s, idx) => s.replace("$OPACITY", `var(${varGen(idx)})`))

  const background = points.join(", ")
  const cssVars = points.reduce((acc, cur, idx)=> {
    acc[varGen(idx)] = '1'
    return acc
  }, {} as Record<string, string>)
  return {background, cssVars}
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
  return `@keyframes switchColor { ${frames.join(" ")} }`
}

const Header = () => {
  const [frames, setFrames] = useState('')
  useEffect(() => {
    setFrames(generateKeyframes(7))
  }, [])

  return (
  <div className="h-screen">
    <style jsx global>{`${frames}`}</style>
    <div suppressHydrationWarning style={{
      backgroundColor:'hsla(0,0%,100%,1)',
      ...cssVars,
      background,
      animation: "2500ms infinite alternate switchColor cubic-bezier(0.4, 0, 0.6, 1)",
      }} className="absolute -z-30 w-full h-full text-xl" />
    <Image
      src={Circles}
      alt={""}
      priority
      className="absolute -z-20 h-auto w-full opacity-50"
    />
    <div className="absolute -z-10 w-full h-full opacity-75">
      <Blob className="-left-[20%] top-[35%]" color="4835BC" size="large" />
      <Blob className="right-[5%] -top-[10%]" color="4835BC" size="large" />
    </div>

    <Navbar />
    <main className="lg:pt-24 xl:pt-40">
      <div className="text-center text-white">
        <h3 className="text-xl font-semibold lg:pb-5 xl:pb-20 font-inter">
          Greetings from the stars
        </h3>
        <h1 className="text-6xl font-bold font-kallisto lg:pb-24 xl:pb-40">
          We are Nebula Labs <br /> We build <b>Products</b> and <b>Talents</b>
        </h1>
        <div className="flex flex-col relative lg:h-16 xl:h-24">
          <p className="text-lg font-medium">Explore the Galaxy</p>
          <Image
            src={Arrow}
            alt="Arrow"
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </main>
  </div>
)};

const Home = () => (
  <div>
    <Header />
    <WhoWeAre />
    {/* <div>projects</div> */}
    {/* <div>projects</div> */}
    {/* <div>testimonials</div> */}
    {/* <div>beliefs</div> */}
    {/* <div>cta card</div> */}
    <Footer />
  </div>
);

export default Home;
