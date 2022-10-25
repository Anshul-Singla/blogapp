import React from 'react';
import './signup.css';
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import { useState } from 'react';
import { signUpAPI } from '../../../store/auth/signup/signup.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const Signup = () => {
  const store = useSelector(store => store.authSignup);
  const dispatch = useDispatch();
  const [user , setUser] = useState({});
  
  const handleChange = (e) => {
    const {name , value} = e.target;
    setUser({
      ...user,
      [name] : value
    })
  };
  // console.log('store:', store)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAPI(user));
    
  //   if(store.status == 200){
  //     <Alert status='success'>
  //     <AlertIcon />
  //     User has been created
  //   </Alert>
  //   }else{
  //     <Alert status='error'>
  //   <AlertIcon />
  //   There was an error processing your request
  // </Alert>
  //   }
  }
  // useEffect(()=>{
  //     if(store.status == 200){
  //     <Alert status='success'>
  //     <AlertIcon />
  //     User has been created
  //   </Alert>
  //   }else{
  //     <Alert status='error'>
  //   <AlertIcon />
  //   There was an error processing your request
  // </Alert>
  //   }
  // },[store.status])
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