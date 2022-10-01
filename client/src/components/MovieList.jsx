import SingleMovie from './SingleMovie.jsx';
import React from 'react';
const{ useState } = React;

const MovieList = ({collection, changeWatchStatus, filterStatus, searchContent, deleteMovie}) => {
  //console.log('collection is ', collection)

  if (filterStatus === "Watched") {
    return (
      <div>
        {collection.map((item, index) => {
          if (item.watched && item.title.includes(searchContent)) {
            return (
              <SingleMovie movie = {item} movieindex={index} changeWatchStatus={changeWatchStatus} deleteMovie={deleteMovie}/>
            )
          }
         })}
      </div>
      );
  } else if (filterStatus === "To Watch") {
    return (
      <div>
        {collection.map((item, index) => {
          if (!item.watched && item.title.includes(searchContent)) {
            return (
            <SingleMovie movie = {item} movieindex={index} changeWatchStatus={changeWatchStatus} deleteMovie={deleteMovie}/>
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
              <SingleMovie movie = {item} movieindex={index} changeWatchStatus={changeWatchStatus} deleteMovie={deleteMovie}/>
            )
          }
        })}
      </div>
      );
  }
};

export default MovieList;