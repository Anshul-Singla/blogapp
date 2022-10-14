import React from 'react'
import './signup.css'
const Signup = () => {
  return (
    <div className='up_body' >
        <div className="up_form">
            <div className="up_form_form">
                <form >
                    <span>Username : <input type="text" name="username"  /></span> 
                    <span>Email : <input type="email" name="email"  /></span> 
                    <span>Password : <input type="password" name="password"  /></span> 
                    <span>Age : <input type="number" name="age" id="" /></span> 
                </form>
            </div>
            <div className="up_form_image"></div>
        </div>
    </div>
  )
}

export default Signup