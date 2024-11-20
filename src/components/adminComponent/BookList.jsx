import React from 'react';
import BookRow from './BookRow';

const BookList = ({ books, openModal, handleDeleteBook }) => {
  return (
    <table className="w-full bg-white shadow-md rounded overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="text-left px-4 py-2">Title</th>
          <th className="text-left px-4 py-2">Author</th>
          <th className="text-left px-4 py-2">Category</th>
          <th className="text-center px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow
            key={book._id}
            book={book}
            openModal={openModal}
            handleDeleteBook={handleDeleteBook}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
