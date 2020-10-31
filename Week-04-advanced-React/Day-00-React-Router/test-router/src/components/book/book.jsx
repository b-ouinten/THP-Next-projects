import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Book = ({books}) => {
  let { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(null);
  const {title, author, description} = currentBook || {};

  useEffect(() => {
    setCurrentBook(books.find((book) => book.slug === bookSlug));
  }, [books, bookSlug])

  return (
    currentBook? (
      <>
        <h2>{title}</h2>
        <h3>{author}</h3> 
        <p>{description}</p> 
      </>
    ) : "Sorry ! This book doesn't exist !"
  );
}