/* eslint-disable react/prop-types */
import React from 'react';

const New = ({ new: { title, description, author } }) => (
  <div>
    <p>{title}</p>
    <p>{description}</p>
    <p>{author}</p>
  </div>
);

export default New;
