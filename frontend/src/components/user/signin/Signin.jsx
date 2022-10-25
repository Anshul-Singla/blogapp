import React from 'react';
import './signin.css';
import  poster from '../background.jpg'
import {
Modal,
ModalOverlay,
ModalContent,
// ModalHeader,
// ModalFooter,
// ModalBody,
// ModalCloseButton,
Button,
useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react';
import { signUpAPI } from '../../../store/auth/signup/signup.actions';
import { useDispatch, useSelector } from 'react-redux';
const Signup = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const [user , setUser] = useState({});
  console.log('store:', store)
  const handleChange = (e) => {
    const {name , value} = e.target;
    // console.log('name:', name);
    // console.log('value:', value)
    setUser({
      ...user,
      [name] : value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAPI(user));

  }
  console.log('user:', user)
  // console.log('poster:', poster)
  return (
    <>
      <SignupForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </>)
  
}

function SignupForm({handleChange , handleSubmit}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Sign up</Button>

      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
         <ModalContent>
            <div className='up_body' >
              <div className="up_form">
                <div className="up_form_form">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <div>
                          <label htmlFor="">Firstname </label>
                          <input type="text" name="fName" onChange={handleChange} />
                        </div>
                        <div>
                          <label htmlFor="">Lastname </label>
                          <input type="text" name="lName" onChange={handleChange} />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="">E-mail </label>
                          <input type="email" name="email" onChange={handleChange}/>
                        </div>
                        <div>
                          <label htmlFor="">Password</label>
                          <input type="password" name="password" onChange={handleChange}  />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="">Age</label>
                          <input type="number" name="age"onChange={handleChange} />
                        </div>
                      </div> 
                      <div>
                        <div>
                          <label htmlFor="">Phone Number</label>
                          <input type="number" name="contact_number" onChange={handleChange} />
                        </div>
                      </div>
                      <input type="submit" value="Submit"  />
                      </form>
                  </div>
                  <div className="up_form_image" style={{
                    backgroundImage:`url(${poster})`
                  }} ></div>
              </div>
            </div>
        </ModalContent> 
      </Modal>
    </>
  )
}

export default Signup