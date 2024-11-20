import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    published: '',
    image: '',
    category: '',
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
    try {
      const response = await fetch('http://localhost:3000/books/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Book added successfully!');
        fetchBooks(); // Refresh book list
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
        fetchBooks(); // Refresh book list
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
        fetchBooks(); // Refresh book list
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
      <div className="w-64 bg-blue-800 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <p className="text-sm mb-6">Logged in as: <strong>{loggedInAdmin}</strong></p>
        <button
          onClick={() => openModal('add')}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Add New Book
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Book List</h1>
        <table className="w-full bg-white shadow-md rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Author</th>
              <th className="text-left px-4 py-2">Category</th>
              <th className="text-center px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="border-t">
                <td className="px-4 py-2">{book.title}</td>
                <td className="px-4 py-2">{book.author}</td>
                <td className="px-4 py-2">{book.category}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    onClick={() => openModal('view', book)}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openModal('edit', book)}
                    className="text-yellow-600 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBook(book._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              {modalType === 'add' ? 'Add Book' : modalType === 'edit' ? 'Edit Book' : 'Book Details'}
            </h2>
            {modalType === 'view' ? (
              <div>
                <p><strong>Title:</strong> {formData.title}</p>
                <p><strong>Author:</strong> {formData.author}</p>
                <p><strong>Pages:</strong> {formData.pages}</p>
                <p><strong>Published:</strong> {formData.published}</p>
                <p><strong>Category:</strong> {formData.category}</p>
                <p><strong>Image:</strong> <a href={formData.image} target="_blank" rel="noopener noreferrer">View Image</a></p>
              </div>
            ) : (
              <form>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="number"
                  name="pages"
                  placeholder="Pages"
                  value={formData.pages}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="date"
                  name="published"
                  value={formData.published}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-2 border rounded"
                />
              </form>
            )}
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              {modalType === 'add' && (
                <button
                  onClick={handleAddBook}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Book
                </button>
              )}
              {modalType === 'edit' && (
                <button
                  onClick={handleUpdateBook}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Update Book
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
