import React, { useReducer } from 'react'
const initialState={count:0};

function reducer(state,action){
   switch(action.type){
    case 'increment':
        return {count:state.count+1}
    case 'decrement':
        return {count:state.count-1}
    default:
        return state;
   }
}

export default function UseReducer() {
    const[state,dispatch]=useReducer(reducer , initialState)
  return (
     <>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
     </>
  )
}
