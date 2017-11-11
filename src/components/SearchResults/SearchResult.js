import React from 'react';

const SearchResult = (props) => {
  return (

    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>{props.value}</div>
      <button>Add To Plans</button>
    </div>
  )
}

export default SearchResult;
