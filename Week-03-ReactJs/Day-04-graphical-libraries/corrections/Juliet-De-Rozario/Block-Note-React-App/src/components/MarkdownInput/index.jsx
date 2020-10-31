import React, { useState } from 'react';

const MarkdownInput = ({displayNote, noteTitle, noteContent}) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [oldTitle, setOldTitle] = useState('');

  if(noteContent != undefined && noteTitle != undefined && content != noteContent && title != noteTitle) {
    setContent(noteContent);
    setTitle(noteTitle);
    setOldTitle(noteTitle);
  } 

  const handleChange = (event) => {
    if(event.target.id === "content") {
      setContent(event.target.value);
    } else {
      setTitle(event.target.value);
    }
    displayNote(title, content);
  };

  const handleSubmit = () => {
    localStorage.removeItem(oldTitle);
    localStorage[title] = content;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" placeholder="Titre de la note" value={title} onChange={handleChange}/>
      <textarea className="textarea" type="text" id="content" placeholder="Saisissez votre note ici" value={content} onChange={handleChange}/>
      <button type="submit">
        Sauvegarder
      </button>
    </form>
  )
}

export default MarkdownInput;