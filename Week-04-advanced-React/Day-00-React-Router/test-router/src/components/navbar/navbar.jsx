import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({books}) => {
  return (
    <nav>
      {
        books.map(book => (
            <>
              <Link to={`/book/${book.slug}`} activeClassName="hurray">{book.slug}</Link>
              <br/>
            </>
          )
        )
      }
    </nav>
  );
}