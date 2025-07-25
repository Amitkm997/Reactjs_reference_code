

import React, { useState } from 'react'
import { createContext } from 'react'

export const CounterContext=createContext()

export default function counterProvider({children}) {
    const[count,setCount]=useState(0)
    const increment=()=>setCount(count=>count+1)
    const decrement=()=>setCount(count=>count-1)
  return (
    <>
    <CounterContext.Provider value={{count,increment,decrement}}>
        {children}
    </CounterContext.Provider>   
    </>
  )
}
