import React, { Component } from 'react';

class Number extends Component {
  render() {
    const { number } = this.props;
    return <p>{number}</p>;
  }
}

export default Number;
