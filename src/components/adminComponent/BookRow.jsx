import React from 'react';

const BookRow = ({ book, openModal, handleDeleteBook }) => {
  return (
    <tr className="border-t">
      <td className="px-4 py-2">{book.title}</td>
      <td className="px-4 py-2">{book.author}</td>
      <td className="px-4 py-2">{book.category}</td>
      <td className="px-4 py-2 text-center">
        {book.pdf && (
          <a
            href={`http://localhost:3000/${book.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline mr-2"
          >
            Download PDF
          </a>
        )}
        <button
          onClick={() => openModal('view', book)}
          className="text-blue-600 hover:underline mr-2"
        >
          View
        </button>
        <button
          onClick={() => openModal('edit', book)}
          className="text-yellow-600 hover:underline mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteBook(book._id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookRow;
