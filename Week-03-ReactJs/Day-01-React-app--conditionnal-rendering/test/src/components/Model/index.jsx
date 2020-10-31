import React, {Component} from 'react';

class Model extends Component {
  render() {
    const { isOpen  } = this.props;
    
    if (isOpen)
      return <p>Model opened !</p> 
    else
      return <p>Model closed !</p>
  }
}

export default Model;
