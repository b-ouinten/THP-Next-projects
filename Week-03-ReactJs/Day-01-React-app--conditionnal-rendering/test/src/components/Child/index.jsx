import React, { Component } from 'react';

class Child extends Component {
  componentDidMount = () => {
    console.log(`${this.constructor.name} : Hello ! I'm mounting`);
  }
  
  componentWillUnmount = () => {
    console.log(`${this.constructor.name} : Goodbye ! I'm unmounting !`);
  }

  render() {
    const { onClick } = this.props;
    return <p onClick={onClick}>I'm a child</p>
  }
}

export default Child;
