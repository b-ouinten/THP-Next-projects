import React, {useState, useEffect} from 'react';
import MardownInput from '../MarkdownInput';
import Showdown from "showdown";

const NoteDisplay = ({noteContent, noteTitle}) => {
  const [note, setNote] = useState(noteContent);
  const [title, setTitle] = useState(noteTitle);
  
  if(noteContent != undefined && noteTitle != undefined && note != noteContent && title != noteTitle) {
    setNote(noteContent);
    setTitle(noteTitle);
  } 

  const displayNote = (title, note) => {
    const converter = new Showdown.Converter();
    setNote(converter.makeHtml(note));
    setTitle(title);
  }

  const createMarkup = (html) => {
    return {__html: html};
  }

  return (
    <div>
      <h1 className="title" dangerouslySetInnerHTML={createMarkup(title)} />
      <div dangerouslySetInnerHTML={createMarkup(note)} />
      <MardownInput displayNote={displayNote} noteTitle={noteTitle} noteContent={noteContent}/>
    </div>
  )
}

export default NoteDisplay;