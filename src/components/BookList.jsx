// src/components/BookList.jsx
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

function BookList() {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <>
          <li key={book._id}>{book.title}</li>
          

          </>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
