import React from 'react';
import styled from 'styled-components';
import MovieForm from '../movie_forms.jsx';

const Nav = styled.nav`
  min-height: 4rem;
  min-width: 100%;
  background: red;
`;
const Logo = styled.h1`
padding: 2rem;
`
const Form = styled.div`
height: 5rem ;
position: fixed;
top: 1rem;
right: 5rem;
`

export default function Header () {
  return(
  <Nav>
    <Logo>Needo</Logo>
    <Form><MovieForm/></Form>
  </Nav>
  )
}

