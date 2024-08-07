'use client'

import { motion, useSpring } from 'framer-motion'
import { useGesture } from '@use-gesture/react'
import { useState, useEffect } from 'react'
import Background from './components/meshblobs/background'
import { Navbar } from './components/Navbar/Navbar'

interface TargetPosition {
  x: number
}

export default function Home() {
  const [target, setTarget] = useState<TargetPosition>({ x: 0 })
  const x = useSpring(0)

  useEffect(() => {
    x.set(target.x)
  }, [target, x])

  const bind = useGesture({
    onMove: ({ xy: [px], dragging }) => {
      if (!dragging) {
        const rect = document.body.getBoundingClientRect()
        const newX = (px - rect.width / 2) / (rect.width / 2)
        setTarget({ x: newX * 30 })
      }
    },
  })

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center bg-[#F5E6D7]"
      {...bind()}
    >
      <motion.div
        initial={{
          width: '0',
          height: '0',
          rotate: -15,
          borderRadius: 50,
        }}
        animate={{
          width: '105%',
          height: '100vh',
          rotate: 0,
          borderRadius: 0,
        }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.5, delay: 0.5 }}
        className="background absolute flex justify-center"
        style={{ x }}
      >
        <Navbar />
      </motion.div>
      <div className="h-screen w-screen bg-black"></div>
    </div>
  )
}
