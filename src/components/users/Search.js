import React, { Component } from 'react';

class Search extends Component {
  // Create empty state object and set for value to this.state.text
  // Next, create an onChange
  // State is only relevant to the component itself. No need for app level state.
  state = {
    text: '',
  };

  // OnChange handler - arrow function that takes in event parameter
  // Want to set the state - want text to be set to whatever is typed in. Access it with the event paramater
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Onsubmit handler
  // Don't forget the e.preventDefault
  // If we don't use an arrow function, we have to specifically bind "this" by adding this.onSubmit.bind.this
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
