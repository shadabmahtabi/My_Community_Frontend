// src/App.jsx
import React from 'react';
import { BookProvider } from './context/BookContext';
import BookList from './components/BookList';

function App() {
  return (
    <BookProvider>
      <div>
        <h1>Welcome to the Book Library</h1>
        <BookList />
      </div>
    </BookProvider>
  );
}

export default App;
