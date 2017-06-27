import React, { Component } from 'react';

class Heading extends Component {

  render() {
    return (
      <h1>Friend list ({this.props.count})</h1>
    );
  }

}

export default Heading;
