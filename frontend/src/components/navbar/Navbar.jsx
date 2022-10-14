import React from 'react'
import  './navbar.css'
const Navbar = () => {
  // console.log('style:', style)
  return (
    <div className="navbar">
        <p>Home</p>
        <div className='auth' >
          <p>Sign in</p>
          <p>Sign up</p>
        </div>
    </div>
  )
}

export default Navbar