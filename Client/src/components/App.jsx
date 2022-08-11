import React from 'react';
import MovieContainer from './MovieContainer.jsx';
import Header from './nav/Header.jsx';
import { GlobalContextProvider } from '../Helper/Context.jsx';
import { ChakraProvider } from '@chakra-ui/react'


export default function App () {
  return (
    <>
    <ChakraProvider>
     <GlobalContextProvider>
      <Header/>
      <MovieContainer/>
     </GlobalContextProvider>
     </ChakraProvider>
    </>
  )
}


// /Users/kesang/Desktop/HackReactor/mvp/Needo/Client/src/Styles/styles.jsx