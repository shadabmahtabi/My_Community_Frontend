import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import WelcomeMessage from "../HomepageComponent/WelcomeMessage";
import Categories from "../HomepageComponent/Categories";
import Pagination from "../HomepageComponent/Pagination";
import BooksGrid from "../HomepageComponent/BooksGrid"

const HeroSection = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  // Categories to display
  const categories = [
    "All Books",
    "Money",
    "Habits",
    "Startups",
    "Communication",
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
      <WelcomeMessage user={user} />

      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <BooksGrid books={currentBooks}/>

      {books.length > booksPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

    


    </div>
  );
};

export default HeroSection;
