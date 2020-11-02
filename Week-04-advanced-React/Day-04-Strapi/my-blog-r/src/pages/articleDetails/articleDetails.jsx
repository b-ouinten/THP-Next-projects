import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
  const { articleSlug } = useParams();

  return (
    <>
      Article :
      {' '}
      {articleSlug}
    </>
  );
};

export default ArticleDetails;
