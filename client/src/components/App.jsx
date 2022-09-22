import React from 'react';

const{ useState } = React;


const App = (props) => {
  const moviedata = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const[displayedmovieList, setdisplayedmovieList] = useState(moviedata);

  function getTargetMovies (array, target) {
    let searchResult = array.filter((element) => {
      return element.title.toLowerCase().includes(target.toLowerCase());
    })
    if (searchResult.length === 0) {
      alert("No results found");
    }
    setdisplayedmovieList(searchResult);
  }

  function returnAfterSearch () {
    setdisplayedmovieList(moviedata);
  }

  return (
    <div>
      <div id="movielist">MovieList</div>
      <Search afterSearch ={returnAfterSearch} handleSubmit = {getTargetMovies} displayedmovieList = {displayedmovieList}/>
      <Movieslist collection = {displayedmovieList} />
    </div>
  )
};


const Search = ({handleSubmit, displayedmovieList}) => {
  const [entry, setEntry] = useState('');

  return(
    <form id="searchsection" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit(displayedmovieList, entry);

    }}>
      <div>
        <input type="text" id="searchbar" placeholder = "Enter movie title" value={entry}
          onChange={(event) => {setEntry(event.target.value)}} />
        <button type="submit">Go!</button>
      </div>
    </form>
  )
}

const Movieslist = ({collection}) => (
  <div>
    {collection.map((item) => (
      <Singlemovie movie = {item}/>
    ))}
  </div>
);

const Singlemovie = ({movie}) => (
  <div class="singlemovie">{movie.title}</div>
);


export default App;