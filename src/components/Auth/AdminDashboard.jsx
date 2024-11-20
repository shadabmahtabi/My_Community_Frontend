import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../adminComponent/Sidebar';
import BookList from '../adminComponent/BookList';
import Modal from '../adminComponent/Modal';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    published: '',
    image: '',
    category: '',
    pdf: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'add', 'edit', or 'view'
  const [editingBookId, setEditingBookId] = useState(null);
  const [loggedInAdmin, setLoggedInAdmin] = useState('');
  const navigate = useNavigate();

  // Fetch all books
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/books', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });
      const data = await response.json();
      if (response.ok) setBooks(data);
      else alert('Failed to fetch books');
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, pdf: e.target.files[0] });
  };

  // Open modal
  const openModal = (type, book = null) => {
    setModalType(type);
    if (type === 'edit' || type === 'view') {
      setEditingBookId(book._id);
      setFormData(book);
    } else {
      setFormData({
        title: '',
        author: '',
        pages: '',
        published: '',
        image: '',
        category: '',
        pdf: null,
      });
    }
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    setEditingBookId(null);
  };

  // Add a book
  const handleAddBook = async () => {
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('pages', formData.pages);
    data.append('published', formData.published);
    data.append('image', formData.image);
    data.append('category', formData.category);
    data.append('pdf', formData.pdf);

    try {
      const response = await fetch('http://localhost:3000/books/addBook', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: data,
      });

      if (response.ok) {
        alert('Book added successfully!');
        fetchBooks();
        closeModal();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Update book
  const handleUpdateBook = async () => {
    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    data.append('pages', formData.pages);
    data.append('published', formData.published);
    data.append('image', formData.image);
    data.append('category', formData.category);
    if (formData.pdf) data.append('pdf', formData.pdf);

    try {
      const response = await fetch(`http://localhost:3000/books/${editingBookId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: data,
      });

      if (response.ok) {
        alert('Book updated successfully!');
        fetchBooks();
        closeModal();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // Delete a book
  const handleDeleteBook = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        alert('Book deleted successfully!');
        fetchBooks();
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Logout admin
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        loggedInAdmin={loggedInAdmin}
        openModal={openModal}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Book List</h1>
        <BookList
          books={books}
          openModal={openModal}
          handleDeleteBook={handleDeleteBook}
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        modalType={modalType}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        closeModal={closeModal}
        handleAddBook={handleAddBook}
        handleUpdateBook={handleUpdateBook}
      />
    </div>
  );
};

export default AdminDashboard;
