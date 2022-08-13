import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import { useGlobalContext } from '../Helper/Context.jsx';

const UserContainer = styled.div`
  position: fixed;
  width: 20vw;
  height: 12vh;
  bottom: 0;
  left: 0;
  background: #df3232;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid white;

`;

const SignIn = styled.button`
  font-size: 24px;
  border: 2px solid red;
  padding: 2px 10px;
  &:hover {
    background: blue;
  }
`;

const H1 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export default function User () {
  const { LoggedIn, userName } = useGlobalContext();
  return (
    <UserContainer>
      {LoggedIn === false ?
        <Modal sign={'Log In/ Sign Up'} />
        : <H1>{userName}</H1>}
    </UserContainer>
  )
}