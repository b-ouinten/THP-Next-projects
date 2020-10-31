import React from 'react';
import ReactDOM from "react-dom";
import NoteDisplay from './components/NoteDisplay'
import "./index.scss";


import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return <div className="container-fluid">
        <div><NoteDisplay /></div>
    </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));