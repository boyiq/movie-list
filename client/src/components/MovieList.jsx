import SingleMovie from './SingleMovie.jsx';
import React from 'react';
const{ useState } = React;

const MovieList = ({collection, changeToToWatch, changeToWatched, filterStatus, searchContent}) => {

  if (filterStatus === "Watched") {
    return (
      <div>
        {collection.map((item, index) => {
          if (item.watched === true && item.title.includes(searchContent)) {
            return (
              <SingleMovie movie = {item} movieindex={index} changeToToWatch={changeToToWatch} changeToWatched={changeToWatched}/>
            )
          }
         })}
      </div>
      );
  } else if (filterStatus === "To Watch") {
    return (
      <div>
        {collection.map((item, index) => {
          if (item.watched === false && item.title.includes(searchContent)) {
            return (
            <SingleMovie movie = {item} movieindex={index} changeToToWatch={changeToToWatch} changeToWatched={changeToWatched}/>
            )
          }
         })}
      </div>
      );
  } else if (filterStatus === "All") {
    return (
      <div>
        {collection.map((item, index) => {
          if (item.title.includes(searchContent)) {
            return (
              <SingleMovie movie = {item} movieindex={index} changeToToWatch={changeToToWatch} changeToWatched={changeToWatched}/>
            )
          }
        })}
      </div>
      );
  }
};

export default MovieList;