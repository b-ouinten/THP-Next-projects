import React, { Component } from 'react';
import Model from '../Model';
import Number from '../UI/Number';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentNumber: 0,
      modelIsOpen: false
    };

    this.toggleModel = this.toggleModel.bind(this);
  }
  
  increment = () => {
    this.setState(state => ({currentNumber: state.currentNumber + 1}));
  };
  
  decrement = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1,
    });
  };

  toggleModel() {
    this.setState(state => ({ modelIsOpen: !state.modelIsOpen }));
  }
  
  render() {
    let { currentNumber, modelIsOpen } = this.state;
    
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.toggleModel}>{modelIsOpen ? 'Close model' : 'Open model'}</button>
        
        <Number number={currentNumber}/>
        <Model isOpen={modelIsOpen} />
      </div>
      );
    }
  }
  
  export default Counter;