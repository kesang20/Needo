import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../Helper/Context.jsx';
import {Select, HStack} from '@chakra-ui/react';
export default function MovieForm(props) {
  const { options, setOptions, submitStatus, setSubmitStatus } = useGlobalContext();
  //year array
  const yearOptions = [];
  for (let year = 2020; year >= 1902; year--) {
    yearOptions.push(<option value={year}>{year}</option>);
  }

  // genre array
  const genres = ["Action", "Anime", "Award-Winning", "Children & Family", "Classic", "Comedies", "Crime", "Cult", "Documentaries", "Dramas", "Fantasy", "French", "Horror", "Independent", "International", "Italian", "Music & Musicals", "Reality TV", "Romance", "Sci-Fi", "Thriller", "TV Show"];
  const genreOptions = [];
  for (let i = 0; i < genres.length; i++) {
    genreOptions.push(<option value={genres[i]}>{genres[i]}</option>);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setOptions({...options, [name]: value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(submitStatus);
    setSubmitStatus(!submitStatus)
  }

  return(

      <form onSubmit={submitHandler} >
         <HStack spacing='20px'>
        <Select
          w='180px'
          h='40px'
          size='sm'
          id='genre'
          placeholder='Select a Genre'
          value={options.genre}
          onChange={handleChange}
          name='genre'
        >
          {genreOptions}
        </Select>


        <Select
          w='180px'
          h='40px'
          size='sm'
          id='year'
          value={options.year}
          onChange={handleChange}
          name='year'
        >
          <option value="">Select a Year</option>
          {yearOptions}
        </Select>
        <input type="submit" />
        </HStack>
      </form>


  )
}

