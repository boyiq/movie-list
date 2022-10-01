import React from 'react';
const{ useState } = React;

const SingleMovie = ({movie, movieindex, changeWatchStatus}) => {

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
  </div>
  )
}

export default SingleMovie


