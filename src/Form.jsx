

import React, { useState } from 'react'

export default function Form() {
     const[name,setName]=useState('');
     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('')
     console.log(name)
     const handleSubmit=(e)=>{
        e.preventDefault();//prevent page reload
        if(name==''||email==''||password==''){
            console.log("please provide all fields");
            return
        } 
        alert(`Name: ${name}, Email: ${email}`)
        setName('')
        setEmail('')
        setPassword('')
     }
    return (
        <>
        <h1>Submit form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                 type="text" 
                 name='name'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 /><br /><br />
                <label>Email:</label>
                <input 
                type='email'
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                /><br /><br />
                <label>Password</label>
                <input 
                type='text'
                name='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                /><br /><br />
                <button type='submit'>Submit</button>
            </form>

            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            <h1>Password:{password}</h1>
        </>
    )
}
