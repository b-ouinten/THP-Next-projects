import React from 'react';

class Email extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return <p><a href={`mailto:${lastName.toLowerCase()}.${firstName.toLowerCase()}@gmail.com`} className="btn btn-sm btn-primary">Send an email</a></p>;
  }
}

export default Email;
