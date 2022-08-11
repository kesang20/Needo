import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 14%;
  margin-left: 5vw;
  margin-top: 2%;
`;


export default function Movie(props) {
  return (
    <>
      <video id='movie'
        autoplay
        controls
        src={props.movie.thumbnail} type="video/mp4"
        onMouseOver={event => event.target.play()}
        >
        Sorry your browser doesn't support HTML video Tag, you can check out the video at
        <a href={props.movie.thumbnail} />
      </video>
    <Description>
      <div>
        <h2>Title: {props.movie.title}</h2>
        <p>synopsis: {props.movie.synopsis}</p>
        <span>Duration: {props.movie.duration}</span>
      </div>
      <div>
        <button>Randomize</button>
        <button>Add To Watch List</button>
      </div>
    </Description>
      </>
  )
}



// function Demo() {
//   return (


//   );
// }