import React from 'react';
import Bird from '../Bird';

class BirdList extends React.Component {
  render() {
    const { birds } = this.props;
    return (
      <>
        {
          birds.map((bird, index) => <Bird key={index} name={bird.name} image={bird.image} description={bird.description}></Bird>)
        }
      </>
    );
  }
}

export default BirdList;