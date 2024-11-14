// src/context/BookContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (err) {
        setError('Error loading books');
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading, error }}>
      {children}
    </BookContext.Provider>
  );
};
