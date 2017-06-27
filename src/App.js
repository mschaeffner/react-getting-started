import React, { Component } from 'react';
import Heading from './Heading';
import UserItem from './UserItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: { first: 'Alice', last: 'A' }, email: 'alice@example.com' },
        { name: { first: 'Bob', last: 'B' }, email: 'bob@example.com' },
        { name: { first: 'Charlie', last: 'C' }, email: 'charlie@example.com' }
      ]
    };
  }

  render() {
    return (
      <div>
        <Heading/>
        {this.state.users.map(u => <UserItem user={u} /> )}
      </div>
    );
  }

}

export default App;
