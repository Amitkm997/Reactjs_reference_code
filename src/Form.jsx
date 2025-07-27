import React, { useState } from 'react'
import List from './List';
import { useNavigate } from 'react-router-dom';
export default function Form() {
     const navigate=useNavigate()
     const[name,setName]=useState('');
     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('')
     console.log(name)
     const[user,setUser]=useState([])
     console.log(user)
     const handleSubmit=(e)=>{
       
        e.preventDefault();//prevent page reload
        if(name==''||email==''||password==''){
            console.log("please provide all fields");
            return
        } 
        let newUser={
            name:name,
            email:email,
            password:password
        }
        setUser([newUser,...user])
        // alert(`Name: ${name}, Email: ${email}`)
        navigate('/fetch')

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

            <table>
                {user.map((cur,index)=>(
                    <>
                    <li>{cur.name}</li>
                    <li>{cur.email}</li>
                    <li>{cur.password}</li>
                    </>
                ))}
            </table>
        </>
    )
}
