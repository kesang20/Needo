import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export const GlobalContext = React.createContext({});

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

export function GlobalContextProvider({children}) {

// add years as an option future improvement --> when get better data
  const [options, setOptions] = useState({genre: ''});
  const [movie, setMovie] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const [noMovie, setNoMovie] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [favorite, setFavorites] = useState([]);
  const [userName, setUserName] = useState('');

  function getFavorite (userName) {
    axios
      .get('/favorites', {
        params: {username: userName}
      })
      .then(({ data }) => {
        setFavorites(data);
      })
      .catch((error) => console.log(error));
  }

  function getMovie() {
    axios
      .get('/movie', {
        params: options,
      })
      .then(({ data }) => {
        data.length === 0 ? setNoMovie(true) : setNoMovie(false);
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addMovie(movie) {
    axios
      .post('/addMovie', {username: userName, movies_id: movie})
      .then((response) => {
        getFavorite();
      })
      .catch((error) => console.log(error));
  }

  const dependencies = [
    options,
    movie,
    submitStatus,
    noMovie,
    LoggedIn,
    favorite,
    userName,
    addMovie
  ]

  const value = useMemo(() => ({
    options,
    movie,
    setOptions,
    submitStatus,
    setSubmitStatus,
    noMovie,
    getMovie,
    LoggedIn,
    setLoggedIn,
    favorite,
    setFavorites,
    userName,
    setUserName,
    getFavorite,
    addMovie
  }), dependencies);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
