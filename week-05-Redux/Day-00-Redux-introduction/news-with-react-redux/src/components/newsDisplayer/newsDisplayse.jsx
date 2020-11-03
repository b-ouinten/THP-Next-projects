/* eslint-disable react/prop-types */
import './newsDisplayse.scss';
import React from 'react';
import NewCard from '../newCard';

const NewsDisplayer = ({ news }) => (
  <div>
    {
      news.map((oneNew) => <NewCard new={oneNew} />)
    }
  </div>
);

export default NewsDisplayer;
