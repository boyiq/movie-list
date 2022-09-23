import React from 'react';

const{ useState } = React;
const{ useEffect } = React;

//---------APP component--------//
const App = (props) => {
  const moviedata = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const[displayedmovieList, setdisplayedmovieList] = useState([]);
  const[allmoviesList, setallmoviesList] = useState([]);
  const[watchedList, setwatchedList]=useState([]);
  const[toWatchList, settoWatchList]=useState([]);


  function getTargetMovies (array, target) {
    let searchResult = array.filter((element) => {
      return element.title.toLowerCase().includes(target.toLowerCase());
    })
    if (searchResult.length === 0) {
      alert("No results found");
    }
    setdisplayedmovieList(searchResult);
  }

  function addToWatchedList (justWatched) {
    setwatchedList([...watchedList, {title: justWatched}]);
    //console.log(`watched list is now ${JSON.stringify(watchedList)}`);
  }

  //function returnAfterSearch () {
  //  setdisplayedmovieList(moviedata);
  //}



  function addMovie (newmovie) {
    setallmoviesList([...allmoviesList, {title: newmovie}]);
    setdisplayedmovieList([...displayedmovieList, {title: newmovie}]);
    settoWatchList([...toWatchList, {title: newmovie}]);
  }
  return (
    <div>
      <div id="movielist">MovieList</div>
      <Add handleSubmit = {addMovie} displayedmovieList={displayedmovieList}/>
      <Search handleSubmit = {getTargetMovies} allmoviesList = {allmoviesList}/>
      <Filter />
      <Movieslist collection = {displayedmovieList} addToWatchedList={addToWatchedList}/>
    </div>
  )
};



//------ADD bar component------//
const Add = ({handleSubmit}) => {
  const [entry, setEntry] = useState('');

  return (
    <form class="formsection" onSubmit={(event)=>{
      event.preventDefault();
      handleSubmit(entry);
    }}>
      <div>
         <input type="text" class="inputbar" placeholder="Add movie" onChange={(event)=>{
           setEntry(event.target.value);
         }}></input>
         <button type="submit" class="clickbutton" id="add">ADD</button>
      </div>
    </form>
  )
}

//------SEARCH bar component------//
const Search = ({handleSubmit, allmoviesList}) => {
  const [entry, setEntry] = useState('');

  return(
    <form class="formsection" id="searchsection" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit(allmoviesList, entry);
    }}>
      <div>
        <input type="text" class="inputbar" id="searchbar" placeholder = "Enter movie title" value={entry}
          onChange={(event) => {setEntry(event.target.value)}}></input>
        <button type="submit" class="clickbutton" id="go">Go!</button>
      </div>
    </form>
  )
}


//-----FILTER component----------//
const Filter = ()=>{
  return (
    <div class="filtersection">
      <button class="watched filter" id="leftfilter">Watched</button>
      <button class="towatch filter" onClick={(event)=>{

      }}>To Watch</button>
    </div>
  )
}


//-----MOVIELIST component -------//
const Movieslist = ({collection, addToWatchedList}) => (
  <div>
    {collection.map((item) => (
      <Singlemovie movie = {item} addToWatchedList={addToWatchedList}/>
    ))}
  </div>
);



//------SINGLEMOVIE componnet-------//
const Singlemovie = ({movie, addToWatchedList}) => {
  const [watched, setwatched] = useState(false);

  return (
  <div class="singlemoviesection">
    <div class="singlemovie">{movie.title}</div>
    <button class={watched? "watched" : "towatch"} onClick={(event)=>{
      setwatched(!watched);
      addToWatchedList(movie.title);
    }}>{watched? "Watched" : "To Watch"}</button>
  </div>
  )
};



export default App;