import React, { Component } from 'react';
import Heading from './Heading';

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
        {this.state.users.map(user =>
          <div>{user.name.first + ' ' + user.name.last + ' ' + user.email}</div>
        )}
      </div>
    );
  }

}

export default App;
