import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

export const GlobalContext = React.createContext({});

export function useGlobalContext() {
  return React.useContext(GlobalContext);
}

export function GlobalContextProvider({children}) {


  const [options, setOptions] = useState({genre: '', year: ''});
  const [movie, setMovie] = useState({});
  const [submitStatus, setSubmitStatus] = useState(false);
  const [noMovie, setNoMovie] = useState(false);
  useEffect(() => {
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
    getMovie();
  }, [submitStatus]);

  const dependencies = [
    options,
    movie,
    submitStatus,
    noMovie
  ]

  const value = useMemo(() => ({
    options,
    movie,
    setOptions,
    submitStatus,
    setSubmitStatus,
    noMovie
  }), dependencies);

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
