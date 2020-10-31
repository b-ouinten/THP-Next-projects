import React from 'react';

class Bird extends React.Component {
  constructor(props) {
    super(props);
    // Useless binding (this in whoIsMyParent arrow function points to the component no need to bind)
    this.whoIsMyParent = this.whoIsMyParent.bind(this);
    // We can add here some properties (attributes)
  }

  whoIsMyParent = () => {
    var i = 2;
    console.log('My parent is :', this.constructor.name, '!');
  }
  render() {
    const { name, image, description } = this.props;
    return (
      <>
        <h2>{name}</h2>
        <img src={image} alt="" width="400" height="250" onClick={this.whoIsMyParent}/>
        <p>{description}</p>
      </>
    );
  }
}

export default Bird;