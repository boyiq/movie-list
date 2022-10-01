import React from 'react';
import Filter from './Filter.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';
import MovieList from './MovieList.jsx';

const{ useState } = React;
const{ useEffect } = React;
const API_URL = 'http://127.0.0.1:3000/api';
const axios = require('axios');

//---------APP component--------//
const App = (props) => {
  //const moviedata = [
  //  {title: 'Mean Girls'},
  //  {title: 'Hackers'},
  //  {title: 'The Grey'},
  //  {title: 'Sunshine'},
  //  {title: 'Ex Machina'},
  //];
  const [filterStatus, setfilterStatus] = useState("All");
  const [searchContent, setsearchContent] = useState('');
  const [allmoviesList, setallmoviesList] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/movies`)
    .then((response)=> {
      setallmoviesList(response.data)});
  }, [])//dependency array)


  function getTargetMovies (target) {
    console.log('looking for ', target);
    setsearchContent(target);
  }

  function addMovie (newmovie) {
    setallmoviesList([...allmoviesList, {title: newmovie, watched: false}]);
  }

  function changeToWatched (movieindex) {
     let copy = [...allmoviesList];
     copy[movieindex].watched = true;
     setallmoviesList(copy);
  }

  function changeToToWatch (movieindex) {
    let copy = [...allmoviesList];
    copy[movieindex].watched = false;
    setallmoviesList(copy);
  }

  function changeFilterStatus (status) {
    setfilterStatus(status);
  }

  return (
    <div>
      <div id="movielist">MovieList</div>
      <Add handleSubmit = {addMovie}/>
      <Search handleSubmit = {getTargetMovies} allmoviesList = {allmoviesList}/>
      <Filter filterStatus={filterStatus} allmoviesList={allmoviesList} changeFilterStatus={changeFilterStatus}/>
      <MovieList collection = {allmoviesList} changeToToWatch = {changeToToWatch} changeToWatched = {changeToWatched} filterStatus = {filterStatus} searchContent={searchContent}/>
    </div>
  )
};

export default App;