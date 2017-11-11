import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchInput: ''
  //   }
  // }
  state = {
    searchInput: ''
  }

  inputChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchInput)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search..."
            value={this.state.searchInput}
            onChange={this.inputChange}
          />
          <button>Search</button>
        </form>

      </div>
    )
  }
}


export default SearchBar;
