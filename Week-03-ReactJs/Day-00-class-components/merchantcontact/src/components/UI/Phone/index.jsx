import React from 'react';

class Phone extends React.Component {
  render() {
    const { phone } = this.props;
    return <p><a href={`callto:${phone}`} className="btn btn-sm btn-primary mr-2">Call</a></p>;
  }
}

export default Phone;
