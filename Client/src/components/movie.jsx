import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  height: 10vh;
  margin-left: 5vw;
  margin-top: 2rem;
`;

const Video = styled.video`
  height: 100%
  width: 100%;
`;

export default function Movie(props) {
  console.log(props);
  return (
    <>
    <Description>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.synopsis}</p>
    </Description>
      <Video id='movie'
        autoplay
        controls
        src={props.movie.thumbnail} type="video/mp4"
        onMouseOver={event => event.target.play()}
        >
        Sorry your browser doesn't support HTML video Tag, you can check out the video at
        <a href={props.movie.thumbnail} />
      </Video>
      </>
  )
}



// function Demo() {
//   return (


//   );
// }