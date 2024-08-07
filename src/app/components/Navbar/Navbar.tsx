import React from 'react'
import { ThemeButton } from '../ThemeButton/ThemeButton'
export const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className="flex">
      <ThemeButton theme="pastel" />
      <ThemeButton theme="dark" />
    </div>
  )
}
