import clsx from "clsx"
import { useEffect, useState } from "react"

let blobCount = 0

const Blob = (props: {className: string, color: keyof typeof colors, size: keyof typeof sizes, animate?: boolean}) => {
    const colors = {
        "orange": "from-[#FDBB59]",
        "blue-1": "from-[#687BE8]",
        "blue-2": "from-[#5644DC]",
        "pink": "from-[#FF6B4A]",
        "4835BC": "from-[#4835BC]",
        "926FDB": "from-[#926FDB]",
        "periwinkle": "from-periwinkle"
    } as const 
    
    const sizes = {
        medium: "lg:h-[35vw] lg:w-[35vw]",
        large: "lg:h-[45vw] lg:w-[45vw]",
    } as const

    const [instance, setInstance] = useState(0)

    useEffect(() => {
        setInstance(++blobCount)
        return () => {
          blobCount--
        }
      }, [])

    const classes = clsx(
        "absolute mix-blend-multiply",
        props.animate && "motion-safe:animate-slow-pulse", 
        sizes[props.size], 
        colors[props.color], 
        "to-transparent bg-gradient-radial",
        props.className
    )

    return (
        <div style={{
            animationDelay: `${-(2500/4*instance)}ms`,
        }}
        className={classes} />
    )
}

export default Blob