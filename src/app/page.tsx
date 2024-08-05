"use client"

import { motion } from "framer-motion"
export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <motion.div
        initial={{ width: 0, height: 0, rotate: -15, borderRadius: 50 }}
        animate={{ width: "100vw", height: "100vh", rotate: 0, borderRadius: 0 }}
        transition={{ ease: [0.83, 0, 0.17, 1], duration: 1.5, delay: 1 }}
        className="bg-black"
      ></motion.div>
    </div>
  )
}
