// src/App.jsx
import React from 'react';
import BookList from './components/BookList';  // Import the BookList component

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold my-4">Welcome to the Book Library</h1>
      <BookList />  {/* Display the list of books */}
    </div>
  );
}

export default App;
