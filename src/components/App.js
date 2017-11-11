import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults';

class App extends Component {

  searchBarChange = (searchString) => {
    console.log('search for', searchString)
  }

  render() {
    return (
      <div>
        <SearchBar
          handleSubmit={this.searchBarChange}
        />
        <SearchResults results={[
          {id: 1, value: 'Result one'},
          {id: 2, value: 'Result two'},
          {id: 3, value: 'Result three'}
        ]}/>
      </div>
    );
  }
}

export default App;
