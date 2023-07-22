import clsx from "clsx"
import { useEffect, useState } from "react"

let blobCount = 0

const Blob = (props: {className: string, color: keyof typeof colors, size: keyof typeof sizes}) => {
    const colors = {
        "orange": "bg-[#FDBB59]",
        "blue-1": "bg-[#687BE8]",
        "blue-2": "bg-[#5644DC]",
        "pink": "bg-[#FF6B4A]",
        "4835BC": "bg-[#4835BC]",
        "926FDB": "bg-[#926FDB]",
        "periwinkle": "bg-periwinkle"
    } as const 
    
    const sizes = {
        medium: "h-[35vw] w-[35vw]",
        large: "h-[45vw] w-[45vw]",
    } as const

    const [instance, setInstance] = useState(0)

    useEffect(() => {
        setInstance(++blobCount)
        return () => {
          blobCount--
        }
      }, [])

    const classes = clsx(
        "absolute rounded-full motion-safe:animate-slow-pulse blur-[120px] mix-blend-multiply",
        sizes[props.size], 
        colors[props.color], 
        props.className
    )

    return (
        <div style={{
            animationDelay: `${(Math.floor(instance/2) * 2500)}ms`,
        }}
        className={classes} />
    )
}

    export default Blob