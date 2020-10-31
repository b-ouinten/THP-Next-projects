import React from 'react';
import NoteDisplay from '../NoteDisplay';
import MarkdownInput from '../MarkdownInput'

const NotePanel = ({ note, action, onChange, onSubmit }) =>  (
    <div className="row mt-3">
      <div className="col-12">
        <NoteDisplay note={note}/>
      </div>
      <div className="col-12">
        <MarkdownInput action={action} note={note} onChange={onChange} onSubmit={onSubmit} />
      </div>            
    </div>
    );

export default NotePanel;
