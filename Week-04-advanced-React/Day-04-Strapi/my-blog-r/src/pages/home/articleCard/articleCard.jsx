/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import './articleCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({
  article: {
    created_at, title, description, slug,
  },
}) => (
  <article>
    <h1><Link to={`/${slug}`}>{title}</Link></h1>
    <span>{created_at}</span>
    <p>{description}</p>
  </article>

);

export default ArticleCard;
