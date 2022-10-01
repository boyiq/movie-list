import React from 'react';
const{ useState } = React;

//const selectedStyle = "backgroundColor: #4CAF50";


const Filter = ({filterStatus, allmoviesList, changeFilterStatus})=>{
  //const [isActive, setIsActive] = useState(false);

  return (
    <div class="filtersection">
      <button
      class="towatch filter leftfilter" onClick={(event) => {
        changeFilterStatus('All');
      }}>All</button>
      <button class="watched filter leftfilter" onClick={(event)=> {
        changeFilterStatus('Watched');
      }}>Watched</button>
      <button class="towatch filter" onClick={(event)=>{

        changeFilterStatus('To Watch');
      }}>To Watch</button>

    </div>
  )
}

export default Filter