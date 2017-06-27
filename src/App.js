import React, { Component } from 'react';
import Heading from './Heading';
import UserItem from './UserItem';
import Searchbar from './Searchbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: null,
      keyword: ''
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?seed=foobar&nat=nz&results=500')
      .then(response => response.json())
      .then(json => this.setState({ users: json.results }));
  }

  render() {

    if(this.state.users === null) {
      return <h1>Loading ...</h1>
    }

    const filteredUsers = this.state.users.filter(user =>
      user.name.first.indexOf(this.state.keyword) >= 0);

    return (
      <div>
        <Heading/>
        <Searchbar value={this.state.keyword} onValueChanged={keyword => this.setState({keyword})} />
        {filteredUsers.map(u => <UserItem user={u} /> )}
      </div>
    );
  }

}

export default App;
