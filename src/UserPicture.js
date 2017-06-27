import React, { Component } from 'react';
import './styles.css';

class UserPicture extends Component {

  render() {
    return (
      <img src={this.props.url} className="picture" alt="" />
    );
  }

}

export default UserPicture;
