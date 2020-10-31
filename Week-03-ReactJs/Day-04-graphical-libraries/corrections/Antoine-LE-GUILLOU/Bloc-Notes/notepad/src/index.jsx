
// REACT
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


// COMPONENTS

import MarkdownInput from "./components/MarkdownInput/markdownInput";
import Note from "./components/Notes/notes";
import NoteDisplay from "./components/NoteDisplay/notedisplay";

// ASSETS
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './assets/main.scss';



const App = (props) => {



    // NOTES 
    const [notes, setNotes] = useState([]);

   
    const handleNotes = (value) => {

        console.log(value)

        if (value) {

            if (notes) {

                setNotes(notes.concat(value));
            }
            else {
                setNotes([value]);
            }
        }
    }


    // CURRENT NOTE

    const [currentNote, setCurrentNote] = useState({ id: "", title: "", content: "" })


    const handleCurrentNote = (value) => {
        if (value) {
            setCurrentNote(value);
        }
    }

    useEffect(() => {

        if (notes.length > 0) { localStorage.setItem("notes", JSON.stringify(notes)); }

    }, [notes])


    useEffect(() => {

        setNotes(JSON.parse(localStorage.getItem("notes")));

    }, [])




    return (

        <>


            <main className="container-fluid text-white">

                <div className="row py-4 elegant-color-dark" id="notepad">



                    <div className="col-12 col-md-4 col-lg-3">


                        <button className="btn-lg btn-danger col-12 my-4" onClick={() => {
                            setCurrentNote({ id: "", title: "", content: "" })
                        }}>Ajouter</button>

                        <div id="notes_container">


                            {notes ? notes.map((note) => <Note id={note.id} title={note.title} content={note.content} onClick={(value) => { handleCurrentNote(value) }}></Note>) : null}


                        </div>


                    </div>


                    <div className="col-12 col-md-8 col-lg-9">

                        <NoteDisplay id={currentNote.id} title={currentNote.title} content={currentNote.content} />

                        <MarkdownInput id={currentNote.id} onSubmit={(value) => handleNotes(value)} title={currentNote.title} content={currentNote.content} onInput={(value) => {
                            handleCurrentNote(value);
                        }} />

                    </div>



                </div>

            </main>

        </>
    )
}


ReactDOM.render(<App />, document.querySelector("#root"));