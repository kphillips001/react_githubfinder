import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  // No longer need this state.
  // state = {
  //   users: [
  //     {
  //       id: 'id',
  //       login: 'mojombo',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
  //       html_url: 'https://github.com/mojombo',
  //     },
  //     {
  //       id: 'id',
  //       login: 'defunkt',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
  //       html_url: 'https://api.github.com/users/defunkt',
  //     },
  //     {
  //       id: 'id',
  //       login: 'pjhyett',
  //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
  //       html_url: 'https://api.github.com/users/pjhyett',
  //     },
  //   ],
  // };

  // Want to loop through users and create a list
  // Takes in a function. Will use a callback function
  // Map requires a unique id
  render() {
    return (
      <div style={userStyle}>
        {/* Change this.state to this.props as users are coming in as props */}
        {this.props.users.map((user) => (
          // <div key={user.id}>{user.login}</div>
          // Pass user in as a prop
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
