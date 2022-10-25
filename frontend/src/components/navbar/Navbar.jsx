import React from 'react'
import Signin from '../user/signin/Signin'
import Signup from '../user/signup/Signup'
import  './navbar.css'
const Navbar = () => {
  // console.log('style:', style)
  return (
    <div className="n-navbar">
        <p>Home</p>
        <div className='n-privateList'>
          <p>Tourist</p>
          <p>Jokes</p>
          <p>Favourite Blogs</p>

        </div>
        <div className='n-auth' >
          <Signin/>
          <Signup/>
        </div>
    </div>
  )
}

export default Navbar