

import React, { useMemo, useState } from 'react'

export default function () {
    const[count,setCount]=useState(0)
    const[input,setInput]=useState('')
    console.log("count"+count);
    console.log("input"+input);

    const expensiveValue=useMemo(()=>{
          console.log('Running inside Expensive calcultion....');
          let result=0;
          for(let i=0;i<100000000;i++){
            result += count
          }
          return result;
    },[count])

    // without using useMemo() hook
    // const expensiveValue=expensiveCalculation(count) 
    // function expensiveCalculation(num){
    //     console.log('Running expensive calculation...');
    //     let result=0;
    //     for(let i=0;i<1000000000;i++){
    //         result+=num
    //     }
    //     return result
    // }

  return (
    <div>
        <h1>Without using useMemo() hook</h1>
        <p>Expensive Value:{expensiveValue}</p>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment </button>
        <input type="text"
           value={input}
           onChange={(e)=>setInput(e.target.value)}
           placeholder='Type something'
        />
        <h1>input:{input}</h1>
    </div>
  )
}
