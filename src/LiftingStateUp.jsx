

import React from 'react'
import { useState } from 'react'
export default function LiftingStateUp() {
    const[count,setCount]=useState(0)
  return (
     <>
        <ChildA count={count}/>
        <ChildB setCount={setCount}/>
     </>
  )
}


function ChildA(props ){
    return <h1>Count:{props.count}</h1>
} 

function ChildB(props){
    return <button onClick={()=>props.setCount((n)=>n+1)}>Increment</button>
}