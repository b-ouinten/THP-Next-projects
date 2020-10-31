import React, { Component } from 'react';
import Child from '../Child';

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = { showChild: false };
    this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    this.myChildIsClicked = this.myChildIsClicked.bind(this);
  }

  componentDidMount = () => {
    console.log(`${this.constructor.name} : Hi ! I'm mounting !`);
  }
  
  componentDidUpdate = () => {
    console.log(`${this.constructor.name} : I'm updating !`)
  }

  toggleChildVisibility() {
    this.setState(state => ({
      showChild: !state.showChild
    }));
  }

  myChildIsClicked () {
    console.log('You clicked on my child !');
  }

  render() {
    const { showChild } = this.state;
    let child;
    if (showChild)
      child = <Child onClick={this.myChildIsClicked}/>;
    else
      child = '';
    return (
      <>
        <button onClick={this.toggleChildVisibility}>{showChild ? 'Take my child !' : 'Give me back my child !'}</button>
        {child}
      </>
    );
  }
}

export default Parent;
