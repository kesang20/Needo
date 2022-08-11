// Future Implementation--------- when more filtering properties available
import React, { useState } from 'react';
import { Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
ModalFooter,
Button,
FormControl,
FormLabel,
Input,
FormHelperText,
useDisclosure } from '@chakra-ui/react';
import { useGlobalContext } from '../Helper/Context.jsx';

export default function ModalComponent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { setLoggedIn, setUserName, getFavorite} = useGlobalContext();
  const [username, setUsername] = useState('');

  const changeHandler = (e) => {
    setUsername(e.target.value);
  }

  const clickHandler = () => {
    setLoggedIn(true);
    setUserName(username);
    getFavorite();
  }

  return (
    <>
      <Button onClick={onOpen}>{props.sign}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='text' value={username} onChange={changeHandler}/>
            <FormHelperText>Enter your username</FormHelperText>
            {/* <FormLabel>Password</FormLabel>
            <Input type='password' />
            <FormHelperText>Enter your Password</FormHelperText> */}
          </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' onClick={clickHandler}>Log In</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}