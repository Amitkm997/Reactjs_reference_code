

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/form'>Form</Link>
        <Link to='/count'>Count</Link>  
        <Link to='/fetch'>FetchDta</Link>
        <Link to='/list'>List</Link>
        <Link to='/lift'>LiftingStateUp</Link>
        <Link to='/callback'>CallbackProps</Link>
      </>
  )
}
