"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useGesture } from "@use-gesture/react"
import { useState, useEffect } from "react"

export default function Home() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const springX = useSpring(0, { stiffness: 100, damping: 20 })
  const springY = useSpring(0, { stiffness: 100, damping: 20 })

  const handleMove = ({ xy: [px, py] }) => {
    setX(px)
    setY(py)
  }

  useGesture(
    {
      onMove: handleMove,
    },
    { target: window }
  )

  useEffect(() => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    springX.set((x - centerX) / 55)
    springY.set((y - centerY) / 80)
  }, [x, y, springX, springY])

  const translateX = useTransform(springX, (val) => `${val}px`)
  const translateY = useTransform(springY, (val) => `${val}px`)

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F5E6D7]">
      <motion.div
        initial={{ width: 0, height: 0, rotate: -15, borderRadius: 50 }}
        animate={{ width: "100vw", height: "100vh", rotate: 0, borderRadius: 0 }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.5, delay: 0.5 }}
        className="flex items-center justify-center bg-black"
        style={{
          translateX,
          translateY,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.75 }}
          className="text-[70px] text-white"
        >
          Anton Garay
        </motion.p>
      </motion.div>
    </div>
  )
}
