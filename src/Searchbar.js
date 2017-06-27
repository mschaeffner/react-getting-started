import React from 'react';

class Searchbar extends React.Component {

  render() {
    return (
      <input
        value={this.props.value}
        placeholder="Search"
        onChange={el => this.props.onValueChanged(el.target.value)}
      />
    );
  }

}

export default Searchbar;
