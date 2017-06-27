import React, { Component } from 'react';

class UserPicture extends Component {

  render() {
    return (
      <img src={this.props.url} alt="" />
    );
  }

}

export default UserPicture;
