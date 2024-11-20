import React from 'react';

const Sidebar = ({ loggedInAdmin, openModal, handleLogout }) => {
  return (
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
  );
};

export default Sidebar;
