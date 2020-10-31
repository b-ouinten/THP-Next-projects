import React, { useState } from 'react';

const New = ({ buttonclick }) => (
  <>
    <div className="new">
      <button type="button" onClick={buttonclick}>Add a note</button>
    </div>
  </>
);

export default New;
