import React from 'react';
import styled from 'styled-components';
import MovieForm from '../movie_forms.jsx';

const Nav = styled.nav`
  min-height: 4rem;
  min-width: 100%;
  background: red;
`;
const Logo = styled.h1`
font-size: 34px;
font-weight: bold;
padding: 0 4rem;
`

const LogoDesc = styled.p`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  padding: 0 4rem 1rem;
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
    <LogoDesc>An assistant for movie nights!!!</LogoDesc>
    <Form><MovieForm/></Form>
  </Nav>
  )
}

