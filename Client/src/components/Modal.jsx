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
  const { setLoggedIn, setUserName } = useGlobalContext();
  const [username, setUsername] = useState('');
  const [ password, setPassword ] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [ passwordError, setPassswordError ] = useState('');

  const changeHandler = (e) => {
    // console.log(e.target.type);
    e.target.type === 'text' ? setUsername(e.target.value) : setPassword(e.target.value);
  }

  const validate = () => {

    if (!username) {
      setUsernameError('username must be enter')
      return false;
    }

    // password validation
    // password should include a special character
    // password should includ a uppercase letter
    // password should include numbers

    const pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!password || !pattern.test(password)) {
      console.log('not vlaid password')
      setPassswordError('password must have atleast 8 digits with atleast one lowercase letter, one uppercase letter, one number, and one special character')
      return false;
    }

    return true;
  }

  const clickHandler = () => {
    let isValid = validate();

    if(isValid) {
      setLoggedIn(true);
      setUserName(username);
    }
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

            { usernameError ?
              <FormHelperText color="red">
                {usernameError}
              </FormHelperText> :
              <FormHelperText>
                Enter your username
              </FormHelperText>
            }

            <FormLabel>Password</FormLabel>
            <Input type='password' value={password} onChange={changeHandler}/>

            { passwordError ?
              <FormHelperText color="red">
               {passwordError}
              </FormHelperText> :
              <FormHelperText>
                Enter your Password
              </FormHelperText>
            }
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