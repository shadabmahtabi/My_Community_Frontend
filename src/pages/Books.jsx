import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

const BooksPage = () => {
  // Categories to display
  const categories = ["All Books", "Money", "Communication", "Web Development", "Habits", "Startups"];
  
  // State to hold the selected category and the books
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [books, setBooks] = useState([]);

  // Fetch books when the category changes
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/category/${selectedCategory}`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    // If the category is "All Books", fetch all books
    if (selectedCategory === "All Books") {
      axios.get('http://localhost:3000/books')
        .then(response => setBooks(response.data))
        .catch(error => console.error("Error fetching books:", error));
    } else {
      fetchBooks();
    }
  }, [selectedCategory]);

  return (
    <>
      <Navbar/>
    <div>
      {/* Welcome Message */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Browse Our Book Collection</h1>
        <p className="text-lg text-gray-600 mt-4">Find books in various categories</p>
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
        {books.length === 0 ? (
          <p className="text-center text-gray-600">No books available in this category.</p>
        ) : (
          books.map((book) => (
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
    </div>
    <Footer/>
    </>
  );
};

export default BooksPage;
