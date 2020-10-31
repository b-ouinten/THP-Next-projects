import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NotesListeDisplay from './components/NotesListeDisplay';

const App = () => {
  return (
    <div className="container mt-3">
      <div className="row" style={{ height: 620 }}>
        <NotesListeDisplay />
      </div>
    </div>
  );
}
  
ReactDOM.render(<App />, document.getElementById('root'));
  