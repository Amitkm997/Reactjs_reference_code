


import React from 'react'
import './App.css'
export default function Adhar(props) {
    console.log(props)
  return (
    <>
      <div className='adhar'>
         <h1>{props.name}</h1>
         <p>{props.email}</p>
         <p>{props.address}</p>
         <h1>0</h1>
         <button>likes</button>
      </div>
    </>
  )
}
