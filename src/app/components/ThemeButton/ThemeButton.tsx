import React from 'react'

export const ThemeButton = ({ theme }: { theme: string }) => {
  function onClick() {
    const HTML = document.querySelector('html')
    if (HTML) {
      HTML.setAttribute('theme', theme)
    }
  }

  return (
    <button onClick={onClick} className="h-[50px] w-[50px]">
      {theme}
    </button>
  )
}
