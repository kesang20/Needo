import React from 'react';
import Movie from './movie.jsx';
import { useGlobalContext } from '../Helper/Context.jsx';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 76vh;
`;

export default function MovieContainer() {
  const { movie } = useGlobalContext();
  return (
    <Container>
    {movie.title === undefined ? null : <Movie movie={movie}/>}
    </Container>
  )
}