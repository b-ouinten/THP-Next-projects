import React, { useState } from 'react';
import New from './New';
import NoteDisplay from './NoteDisplay';

// Partie gauche de l'écran
// Permet de selectionner une note

const Nav = ({ list, click, newclick }) => {
  const contentToShow = Object.entries(list).sort((a, b) => (a[0] < b[0] ? 1 : -1)).map((entry) => (
    <div className="note_display" id={entry[0]} onClick={click} key={entry[0]}>
      <NoteDisplay
        {...{ title: entry[1].title, content: entry[1].content }}
      />
    </div>
  ));

  return (
    <>
      <div className="nav">
        <New buttonclick={newclick} />
        <div className="list">{contentToShow}</div>
      </div>
    </>
  );
};


export default Nav;
