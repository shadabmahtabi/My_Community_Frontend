import React from "react";

const BooksGrid = ({ books }) => {
 
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {books.length === 0 ? (
        <p className="text-center text-gray-600">
          No books available in this category.
        </p>
      ) : (
        books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="w-full h-64 flex justify-center p-2">
              <div className="h-full w-40 p-2">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-fill drop-shadow-lg"
                />
              </div>
            </div>
            <div className="p-6 h-full">
              <h3
                className={`font-bold text-gray-800 ${
                  book.title.length > 30 ? "text-sm" : "text-xl"
                }`}
              >
                {book.title}
              </h3>
              <p className="text-gray-600 mt-2">{book.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={`http://localhost:3000/${book.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800"
                >
                  View
                </a>
                <a
                  href={`http://localhost:3000/${book.pdf}`}
                  download
                  className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BooksGrid;
