import React from 'react'
import useFetch from '../useFetch'

export default function UserData() {
   const{data,loading}= useFetch("https://jsonplaceholder.typicode.com/users")
   if(loading) return <>data loading</>
  return (
    <>
    
    <ul>
       { data.map((cur)=><li key={cur.id}>{cur.name}</li>)}
    </ul>
    </>
    
  )
}
