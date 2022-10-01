import React from 'react';
const{ useState } = React;

const SingleMovie = ({movie, movieindex, changeWatchStatus, deleteMovie}) => {

  return (
  <div class="singlemoviesection">
    <div class="singlemovie">{movie.title}</div>
    <button class={movie.watched? "watched" : "towatch"} onClick={(event)=>{
      if (!movie.watched) {
        changeWatchStatus(movieindex);
      } else {
        changeWatchStatus(movieindex)
      }

    }}>{movie.watched? "Watched" : "To Watch"}</button>
    <button onClick={(event) => {
      console.log('after clicking, the movieindex is', movieindex)
      deleteMovie(movieindex);
    }}>delete</button>
  </div>
  )
}

export default SingleMovie


