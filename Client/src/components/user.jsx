import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Helper/Context.jsx';

const UserContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: black;
  height: 12vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignIn = styled.button`
  font-size: 24px;
  border: 2px solid red;
  padding: 2px 10px;
  &:hover {
    background: blue;
  }
`;

export default function User () {
  const { LoggedIn } = useGlobalContext();
  return (
    <UserContainer>
      {LoggedIn === false ?
        <SignIn>
          LogIn/SignUp
        </SignIn>
        : null}
    </UserContainer>
  )
}