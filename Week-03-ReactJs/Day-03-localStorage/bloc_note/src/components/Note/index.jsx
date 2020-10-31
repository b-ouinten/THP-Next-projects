import React from 'react';
import createMarkup from '../../tools/createMarkup'

const Note = ({ id, title, content, onClick }) => (
    <div id={id} onClick={onClick}>
      <div dangerouslySetInnerHTML={createMarkup(title)} className="text-danger font-weight-bold" />
      <div dangerouslySetInnerHTML={createMarkup(content)} className="text-white" />
    </div>
  );
  
export default Note;
  