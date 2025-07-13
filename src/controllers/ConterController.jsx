

import React, { useContext } from 'react'
import { CounterContext } from '../context/counterContext'

export default function ConterController() {
    const{increment,decrement}=useContext(CounterContext);
  return (
    <>
      <button onClick={increment}>increment</button><br /><br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
