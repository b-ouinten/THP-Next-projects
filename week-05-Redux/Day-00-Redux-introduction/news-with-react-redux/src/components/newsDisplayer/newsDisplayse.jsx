/* eslint-disable react/prop-types */
import './newsDisplayse.scss';
import React from 'react';
import New from '../new';

const NewsDisplayer = ({ news }) => (
  <div>
    {
      news.map((oneNew) => <New new={oneNew} />)
    }
  </div>
);

export default NewsDisplayer;
