import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const HeroSection = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

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
    <div>
      {/* Welcome Message */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Book Library</h1>
        {user && <p className="text-lg text-gray-600">Hello, {user.username}!</p>}
      </div>

      {/* Categories Section with Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
        <div className="flex gap-4 mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
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
              <img src={book.image} alt={book.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                <Link to={`/books/${book._id}`}>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HeroSection;
