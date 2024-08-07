'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import { useGesture } from '@use-gesture/react'
import { useState, useEffect } from 'react'
import Background from './components/meshblobs/background'
import { Navbar } from './components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#F5E6D7]">
      <motion.div
        initial={{ width: 0, height: 0, rotate: -15, borderRadius: 50 }}
        animate={{
          width: '100vw',
          height: '100vh',
          rotate: 0,
          borderRadius: 0,
        }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.5, delay: 0.5 }}
        className="background flex justify-center overflow-hidden"
      >
        <Navbar></Navbar>
      </motion.div>
    </div>
  )
}
