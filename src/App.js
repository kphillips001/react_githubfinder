import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

import './App.css';

class App extends Component {
  // We want to put the users that come back into our state.
  // State is empty at first
  // Cannot directly change state. Have to use this.SetState
  state = {
    users: [],
    loading: false,
  };

  // lifecycle method
  async componentDidMount() {
    // Cannot directly change state. Have to use this.SetState
    // Setting state (loading) to true
    this.setState({ loading: true });

    // Axios deals with promises with .then (will get a response)
    // Create a variable res to await the request
    // Add api keys from env variables
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} `
    );

    // .then((res) => console.log(res.data));
    // will use async/await instead of .then

    // After we get the request and get the response, we want to reset the state. Set users to res.data that we get from the api, then set loading back to false.
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div container='container'>
          {/*Now that we have the users in state, we want to pass them down into the Users component through props. */}
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
