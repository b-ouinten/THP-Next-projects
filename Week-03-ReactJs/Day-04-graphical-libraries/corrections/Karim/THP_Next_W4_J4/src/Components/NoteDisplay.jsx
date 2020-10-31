import React, { useState } from 'react';
import Showdown from 'showdown';

// Component qui permet d'écrire en Markdown
// Il est utilisé sur l'écran de gauche et de droite

const NoteDisplay = ({ title, content }) => {
  const converter = new Showdown.Converter();
  const createMarkDown = { __html: content ? converter.makeHtml(content) : '' };

  return (
    <>
      <h6 className="note_title">{title}</h6>
      <div dangerouslySetInnerHTML={createMarkDown} />
    </>
  );
};

export default NoteDisplay;
