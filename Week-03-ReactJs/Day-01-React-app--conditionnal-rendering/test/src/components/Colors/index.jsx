import React, { Component } from 'react';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: 'red' };
  }
  
  changeColor = (e) => {
    this.setState(({
      selectedColor: e.target.textContent
    }))
  }
  
  render() {
    const { selectedColor } = this.state;
    return (
      <>
        <button onClick={this.changeColor}>red</button>
        <button onClick={this.changeColor}>green</button>
        <button onClick={this.changeColor}>blue</button>
        <button onClick={this.changeColor}>yellow</button>
        <p>The last color clicked is {selectedColor}</p>
      </>
    );
  }
}

export default Colors;
