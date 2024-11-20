import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const HeroSection = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  // Categories to display
  const categories = [
    "All Books",
    "Money",
    "Communication",
    "Web Development",
    "Habits",
    "Startups",
  ];

  // State to hold the selected category, books, current page, and books per page
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6; // Number of books per page

  // Fetch books when the category changes
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          selectedCategory === "All Books"
            ? "http://localhost:3000/books"
            : `http://localhost:3000/books/category/${selectedCategory}`
        );
        setBooks(response.data);
        setCurrentPage(1); // Reset to the first page when category changes
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [selectedCategory]);

  // Calculate pagination data
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      {/* Welcome Message */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Our Book Library
        </h1>
        {user && (
          <p className="text-lg text-gray-600">Hello, {user.username}🖐️</p>
        )}
      </div>

      {/* Categories Section with Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
        <div className="flex gap-4 mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBooks.length === 0 ? (
          <p className="text-center text-gray-600">
            No books available in this category.
          </p>
        ) : (
          currentBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="w-full h-64 flex justify-center  p-2">
              <div className="h-full w-40  p-2">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-fill drop-shadow-lg"
                />

              </div>
              </div>
              <div className="p-6  h-full">
                <h3
                  className={`font-bold text-gray-800 ${
                    book.title.length > 30 ? "text-sm" : "text-xl"
                  }`}
                >
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-2">{book.description}</p>
                <div className="flex gap-4 mt-4">
                  {/* View Button */}
                  <a
                    href={`http://localhost:3000/${book.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800"
                  >
                    View
                  </a>
                  {/* Download Button */}
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

      {/* Pagination Controls */}
      {books.length > booksPerPage && (
        <div className="flex justify-center items-center mt-6 mb-6 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === number + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
              }`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
