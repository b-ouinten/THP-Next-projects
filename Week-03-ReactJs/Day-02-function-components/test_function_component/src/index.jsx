import React, { useState } from 'react';
import ReactDOM from "react-dom";
import SayName from './components/SayName';
import NameForm from './components/NameForm';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => setShowMessage(!showMessage)}>Toggle</button>
      <br/><br/>
      {showMessage && <SayName name='Ouahiba'/>}
      <NameForm />
    </>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));