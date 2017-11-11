import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  return (
    <div>
      {
        props.results.map(result => <SearchResult value={result.value} key={result.id} />)
      }
    </div>
  )
}

export default SearchResults;


