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
import { useDispatch, useSelector } from 'react-redux';
import { signInAPI } from '../../../store/auth/signin/signin.actions';
const Signin = () => {
  const store = useSelector(store => store.authSignin);
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
    dispatch(signInAPI(user))

  }
  console.log('user:', user)
  // console.log('poster:', poster)
  return (
    <>
      <SigninForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </>)
  
}

function SigninForm({handleChange , handleSubmit}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>

      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
         <ModalContent>
            <div className='up_body' >
              <div className="up_form">
                <div className="up_form_form">
                    <form onSubmit={handleSubmit}>
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

export default Signin