import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  // Sample categories and books data
  const categories = ["Fiction", "Non-Fiction", "Science", "History", "Mystery", "Biography"];
  const books = [
    { id: 1, title: 'The Great Gatsby', image: '/images/gatsby.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', image: '/images/mockingbird.jpg' },
    { id: 3, title: '1984', image: '/images/1984.jpg' },
    { id: 4, title: 'Pride and Prejudice', image: '/images/pride.jpg' },
    { id: 5, title: 'The Catcher in the Rye', image: '/images/catcher.jpg' },
    // Add more books as needed
  ];

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Welcome Message */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Book Library</h1>
        {user && <p className="text-lg text-gray-600">Hello, {user.username}!</p>}
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800">Categories</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img src={book.image} alt={book.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
              <Link to={`/books/${book.id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>

    </>
    
  );
};

export default Home;
