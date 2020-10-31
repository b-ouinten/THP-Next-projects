import React, {useState, useEffect} from 'react';
import NoteDisplay from '../NoteDisplay';
import Note from '../Note';

const Menu = () => {
  const [notes, setNotes] = useState([])
  const [noteSelected, setNoteSelected] = useState([]);

  const showNotes = () => {
    let notes = [];
    for( let i = 0; i < localStorage.length; i++){
      notes.push([localStorage.key(i), localStorage[localStorage.key(i)]]);
    }
    setNotes(notes);
  }

  useEffect(() => {
    showNotes();
  }, []);

  const editNote = (content, title) => {
    setNoteSelected([content, title]);
  }
  
  return (
    <div className="container">
      <div id="menu">
        {notes.map((note) => (
          <Note title={note[0]} content={note[1]} editNote={editNote}/>
        ))}
      </div>
      <div id="current-note">
        <NoteDisplay noteContent={noteSelected[0]} noteTitle={noteSelected[1]}/>
      </div>
    </div>
  )
}

export default Menu;