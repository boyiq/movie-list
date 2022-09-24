import React from 'react';
const{ useState } = React;

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

export default Add;