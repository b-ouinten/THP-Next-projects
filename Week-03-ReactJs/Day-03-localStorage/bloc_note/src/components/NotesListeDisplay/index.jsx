import React, { useState, useEffect } from 'react';
import Note from '../Note';
import NotePanel from '../NotePanel';
import useFormState from '../../hooks/useFormState'

const NotesListeDisplay = () => {
  const [input, setInput] = useState({});
  const [notes, setNotes] = useState([]);
  const [action, setAction] = useState('save');
  
  const setNote = (e, note) => {
    if (!note)
      note = {
        ...input,
        id: input.id===undefined ? notes.length : input.id,
        [e.currentTarget.name]: e.currentTarget.value,
      };
      
      setInput(note);
  }
  
  const addNewNote = (e) => {
    e.preventDefault();
    if (action==='save')
      setNotes([...notes, input]);
    else {
      setNotes(notes.map(note => note.id===input.id? input : note));
    }
  }

  const showNote = (e, note) => {
    setNote(e, note);
    setAction('update');
  }

  const emptyNotePanel = (e) => {
    setNote(e, {});
    setAction('save');
  }

  useEffect(() => {
    if (!localStorage.notes)
      setNotes([]);
    else
      setNotes(JSON.parse(localStorage.notes));
  }, []);

  useEffect(() => localStorage.notes = JSON.stringify(notes), [notes]);
  
  return (
    <>
      <div className="offset-md-2 col-2 pt-3 border border-white bg-dark">
        <button className="btn btn-danger btn-sm btn-block font-weight-bold mb-4" onClick={emptyNotePanel}>Add note</button>
        {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onClick={e => showNote(e, note)}/>)}
      </div>
      <div className="col-6 border border-white bg-dark">
        {<NotePanel action={action} note={input} onChange={setNote} onSubmit={addNewNote}/>}
      </div>
    </>
  );
}

export default NotesListeDisplay;
