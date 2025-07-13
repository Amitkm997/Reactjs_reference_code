

import React, { useState,useEffect } from 'react'

export default function FetchData() {
    const[user,setUser]=useState([])
    console.log(user);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').
        then((res)=>res.json()).then((data)=>setUser(data)).
        catch((err)=>console.log(err))
    },[])
  return (
     <>
        {/* <h1>{user.name}</h1> */}
        {user.map((cur)=><h1>{cur.name}</h1>)} 
     </>
  )
}
