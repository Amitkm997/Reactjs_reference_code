import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'
export default function CounterDisplay() {
    const{count}=useContext(CounterContext)
  return (
    <>
      <h1>Current Count:{count}</h1>
    </>
  )
}
