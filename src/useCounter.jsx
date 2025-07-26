
import React, { useState } from 'react'

export default function useCounter(initalValue=0) {
      const[count,setCount]=useState(initalValue);

      const increment=()=>setCount((prev)=>prev+1);
      const decrement=()=>setCount((pre)=>pre-1);
      const reset =()=>setCount(initalValue);

      return {count,increment,decrement,reset}
}
