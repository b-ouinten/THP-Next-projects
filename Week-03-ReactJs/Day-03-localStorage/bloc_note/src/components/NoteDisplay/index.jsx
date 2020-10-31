import React from 'react';
import createMarkup from '../../tools/createMarkup'

const NoteDisplay = ({ note }) => {
  const { title, content } = note;

  return (
    <div style={{ height: 220 }}>
      <p dangerouslySetInnerHTML={createMarkup(title)} className="text-danger font-weight-bold"/>
      <p dangerouslySetInnerHTML={createMarkup(content)} className="text-white"/>
    </div>
  )
};

export default NoteDisplay;
