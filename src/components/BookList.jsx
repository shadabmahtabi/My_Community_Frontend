// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';  // Import the axios instance we just created

const BookList = () => {
  const [books, setBooks] = useState([]);  // State to hold the list of books
  const [loading, setLoading] = useState(true);  // State to handle loading state

  // Fetch books from the backend when the component mounts
  useEffect(() => {
    // This function fetches the books from the backend
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get('/books');  // Make a GET request to fetch books
        setBooks(response.data);  // Set the books data in the state
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);  // In case of error, stop loading
      }
    };

    fetchBooks();  // Call the fetchBooks function
  }, []);  // Empty dependency array means this effect runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show loading message until data is fetched
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <ul className="space-y-4">
        {/* Loop through the books and display each one */}
        {books.map((book) => (
          <li key={book._id} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
