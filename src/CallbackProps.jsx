import React from 'react'

export default function CallbackProps() {
    const handleClick=(value)=>{
        console.log('Received from Child',value)
    }
  return (
    <>
      <Child onClickButton={handleClick} />
    </>
  )
}


function Child(props){
   return <button onClick={()=>props.onClickButton("Hello i'm from child")}>Click Me---</button>
}