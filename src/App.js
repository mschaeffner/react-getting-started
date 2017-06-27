import React, { Component } from 'react';
import Heading from './Heading';
import UserItem from './UserItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?seed=foobar&nat=nz&results=500')
      .then(response => response.json())
      .then(json => this.setState({ users: json.results }));
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
