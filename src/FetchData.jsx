import React, { useState, useEffect } from 'react'
import Adhar from './Adhar';
import './App.css'
export default function FetchData() {
   const [user, setUser] = useState([])
   console.log(user);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users').
         then((res) => res.json()).then((data) => setUser(data)).
         catch((err) => console.log(err))
   }, [])
   return (
      <>
         <div className='container'>
            {user.map((cur) => <Adhar
             name={cur.name} 
             email={cur.email} 
             address={cur.address.city}
             />)}
         </div>

      </>
   )
}
