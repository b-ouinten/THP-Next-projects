import React from 'react';
import Client from '../Client';

class ClientList extends React.Component {
  render() {
    const { clients } = this.props;
    return (
      <div className="d-flex justify-content-between flex-wrap">
        {clients.map((client, index) => <Client key={index} data={client}/>)}
      </div>
    );
  }
}

export default ClientList;
