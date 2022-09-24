import React from 'react';
const{ useState } = React;

const Search = ({handleSubmit, allmoviesList}) => {
  const [entry, setEntry] = useState('');

  return(
    <form class="formsection" id="searchsection" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit(entry);
    }}>
      <div>
        <input type="text" class="inputbar" id="searchbar" placeholder = "Enter movie title" value={entry}
          onChange={(event) => {setEntry(event.target.value)}}></input>
        <button type="submit" class="clickbutton" id="go">Go!</button>
      </div>
    </form>
  )
}

export default Search;