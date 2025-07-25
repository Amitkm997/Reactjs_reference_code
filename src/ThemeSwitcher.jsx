

import React, { createContext, useState } from 'react'
export const ThemeContext=createContext();

export default function ThemeProvider({children}) {
    const[theme,setTheme]=useState('light')
    const toggleTheme=()=>setTheme((n)=>n==="light"?"dark":"light");
  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
           {children}
      </ThemeContext.Provider>
    </>
  )
}


