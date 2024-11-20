import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    published: '',
    image: '',
    category: '',
  });
  const [books, setBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBookId, setEditingBookId] = useState(null);
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

  // Add a book
  const handleAddBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Unauthorized access');
      navigate('/admin/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/books/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Book added successfully!');
        setFormData({ title: '', author: '', pages: '', published: '', image: '', category: '' });
        fetchBooks(); // Refresh book list
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('An error occurred while adding the book.');
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
        fetchBooks(); // Refresh book list
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Handle edit
  const handleEditBook = (book) => {
    setIsEditing(true);
    setEditingBookId(book._id);
    setFormData(book); // Populate form with book details
  };

  // Update book
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/books/${editingBookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Book updated successfully!');
        setIsEditing(false);
        setEditingBookId(null);
        setFormData({ title: '', author: '', pages: '', published: '', image: '', category: '' });
        fetchBooks(); // Refresh book list
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 h-screen ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>

      <form onSubmit={isEditing ? handleUpdateBook : handleAddBook} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2 mx-auto  mb-4">
        <h2 className="text-2xl mb-4">{isEditing ? 'Edit Book' : 'Add a New Book'}</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="number"
          name="pages"
          placeholder="Pages"
          value={formData.pages}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="date"
          name="published"
          value={formData.published}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          type="submit"
          className={`bg-${isEditing ? 'yellow' : 'blue'}-500 text-white py-2 px-4 rounded hover:bg-${isEditing ? 'yellow' : 'blue'}-600 transition duration-200`}
        >
          {isEditing ? 'Update Book' : 'Add Book'}
        </button>
      </form>

      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.category}</td>
              <td className="border px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEditBook(book)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBook(book._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
