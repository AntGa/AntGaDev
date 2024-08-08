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
    <div className="flex flex-col gap-6">
      <div className="flex h-screen items-center bg-[#2D2D2D]">
        <p
          data-scroll
          data-scroll-speed="0.2"
          className="font-semi ml-[140px] text-9xl text-[#FFFCED]"
        >
          ANTON GARAY
        </p>
      </div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
      <div className="h-screen bg-[#2D2D2D]"></div>
    </div>
  )
}
