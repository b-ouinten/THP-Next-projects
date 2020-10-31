import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import faker from 'faker';
import ClientsList from './components/ClientsList';

class App extends React.Component {
  render() {
    const clients = Array.from({ length: 100 }, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      photo: faker.image.avatar(),
      job: faker.name.jobTitle()
    }));
    return (
      <div className="container-fluid mt-4">
        <h2 className="my-5">I love my clients and I am happy when I thank them ! </h2>
        <ClientsList clients={clients}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
