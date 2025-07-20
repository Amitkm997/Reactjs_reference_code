import React, { useContext } from 'react'

import { ThemeContext } from './ThemeSwitcher'
export default function ThemeChange() {
    const{theme,toggleTheme}=useContext(ThemeContext);
  return (
    <>
    <h1>Theme:{theme}</h1>
    <button onClick={toggleTheme}>Change Theme</button>
    </>
    
  )
}
