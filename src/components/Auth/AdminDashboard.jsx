import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    // Redirect to login if token is missing
    if (!token) {
      alert('Unauthorized access. Please log in as an admin.');
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Clear token
    alert('Logged out successfully!');
    navigate('/admin/login'); // Redirect to login
  };

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard!</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
