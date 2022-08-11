import React from 'react';
import Movie from './movie.jsx';
// import ModalComponent from './Modal.jsx'; -----> Future implementation
import User from './user.jsx';
import { useGlobalContext } from '../Helper/Context.jsx';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background: red;
`;

const MovieBox = styled.div`
  width: 80vw;
`;

const FavMovies = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-column: auto;
  width: 100%;
  max-height: 50vh;
  row-gap: 1rem;
  overflow-y: scroll;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  border: 2px solid white;
  background: black;
`;

const H4 = styled.h4`
  font-size: 18px;
  font-weight: bold;
`;

export default function MovieContainer() {
  const { movie, noMovie } = useGlobalContext();
  return (
    <Container>
      <SideBar>
        <FavMovies>
        <div>
          <H2>Favorites</H2>
        </div>
          <H4>Fate/Zero</H4>
          <H4>Marvel</H4>
        </FavMovies>
        <User/>
      </SideBar>
      {/* Future Implementation  */}
      {/* {noMovie === true ? <ModalComponent /> : null} */}
      <MovieBox>
        {movie.title === undefined ? null : <Movie movie={movie}/>}
      </MovieBox>
    </Container>
  )
}