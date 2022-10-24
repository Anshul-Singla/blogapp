import React from 'react';
import './signup.css';
import  poster from './background.jpg'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react';
const Signup = () => {
  const [user , setuser] = useState({});
  console.log('poster:', poster)
  return (
    <>
      <BasicUsage />
    </>)
  
}

function BasicUsage() {
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
                    <form >
                      <div>
                        <div>
                          <label htmlFor="">Firstname </label>
                          <input type="text" name="username"  />
                        </div>
                        <div>
                          <label htmlFor="">Lastname </label>
                          <input type="text" name="username" />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="">E-mail </label>
                          <input type="email" name="email" />
                        </div>
                        <div>
                          <label htmlFor="">Password</label>
                          <input type="password" name="password"   />
                        </div>
                      </div>
                      <div>
                        <div>
                          <label htmlFor="">Age</label>
                          <input type="number" name="age" />
                        </div>
                      </div> 
                      <div>
                        <div>
                          <label htmlFor="">Phone Number</label>
                          <input type="password" name="password" />
                        </div>
                      </div>
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