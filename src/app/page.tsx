'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      <div className="flex h-screen flex-col items-center justify-center bg-[#202123]">
        <p
          data-scroll
          data-scroll-speed="0.15"
          className="font-semi ml-[140px] w-full text-9xl text-white"
        >
          ANTON GARAY
        </p>
        <p
          className="ml-[850px] w-full text-3xl text-white"
          data-scroll
          data-scroll-speed="0.14"
        >
          Game Maker & Full Stack Developer
        </p>
      </div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
    </div>
  )
}
