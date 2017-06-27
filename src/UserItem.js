import React, { Component } from 'react';
import UserPicture from './UserPicture';

class UserItem extends Component {

  render() {
    const user = this.props.user;
    return (
      <div style={styles.user_item}>
        <UserPicture url={user.picture.medium} />
        <h2>{user.name.first} {user.name.last}</h2>
        <div>
          <a href="#">{user.email}</a>
        </div>
      </div>
    );
  }

}

export default UserItem;


const styles = {
  user_item: {
    height: '100px',
  }
}
