import React from 'react';
import Phone from '../UI/Phone';
import Email from '../UI/Email';

class Client extends React.Component {
  render() {
    const { data } = this.props;
    const { photo, firstName, lastName, job, phone } = data;
    return (
      <div className="card pb-2 mb-4 shadow" style={{width: "400px", height: "400px"}}>
        <img src={photo} alt="" className="h-75" style={{height: "225"}}/>
        <div className="card-body">
          <h4>{firstName} {lastName}</h4>
          <p>{job}</p>
          <div className="d-flex justify-content-start">
            <Phone phone={phone}/>
            <Email firstName={firstName} lastName={lastName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
