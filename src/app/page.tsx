"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

export const runtime = "edge"
export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="flex h-screen flex-col items-center justify-center bg-[#202123]">
        <div
          data-scroll
          data-scroll-speed="0.15"
          className="clipped relative flex w-full items-center justify-center text-9xl text-white"
        >
          {/* First Stage: ANT GA */}
          <motion.span
            initial={{ y: 140 }}
            animate={{ y: 0, x: -224 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1.2,
              x: { delay: 1.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className="tracking-tight"
          >
            ANT
          </motion.span>
          <motion.span
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 1.2,
            }}
            className="tracking-tight"
          >
            GA
          </motion.span>

          {/* Second Stage: Adding ON to ANT and RAY to GA */}
          <motion.span
            initial={{ y: 140, opacity: 0, x: -100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute tracking-tight"
          >
            ON
          </motion.span>
          <motion.span
            initial={{ y: 140, opacity: 0, x: 330 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
            }}
            className="absolute tracking-tight"
          >
            RAY
          </motion.span>
        </div>
      </div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
    </div>
  )
}
