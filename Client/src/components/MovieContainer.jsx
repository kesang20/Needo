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
  background: black;
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
  display: grid;
  grid-column: auto;
  width: 100%;
  max-height: 60vh;
  row-gap: 1rem;
  overflow-y: scroll;
  text-align: center;
  backrground: #df3232;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-weight: bold;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  backround: #df3232;
  position: fixed;
  width: 20vw;
`;

const H4 = styled.button`
  font-size: 18px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-evenly;
  position: fixed;
  bottom: 15vh;
  @media(max-width: 1300px) {
    flex-direction: column;
    width: 19vw;
    bottom: 12vh;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export default function MovieContainer() {
  const { movie, noMovie, getMovie, favorite, addMovie, LoggedIn } = useGlobalContext();
  const favorites = favorite.map((fav) => {return (<H4 onClick={clickHandler}>{fav.title}</H4>)});
  const clickHandler = () => {

  }

  return (
    <Container>
      <SideBar>
        <FavMovies>
        <div style={{marginBottom: '2rem'}}>
          <H2>Favorites</H2>
        </div>
         {favorites}
        </FavMovies>
        <ButtonContainer>
        <Button onClick={() => getMovie()}>Randomize</Button>
        {LoggedIn === true ?
        <Button onClick={() => addMovie(movie.id)}>+ Add to Fav</Button> : null}
      </ButtonContainer>
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