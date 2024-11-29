import React, { useState } from "react";

const EditProfileModal = ({ name, email, mobileNumber, onSave, onClose }) => {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedMobileNumber, setUpdatedMobileNumber] = useState(mobileNumber);

  const handleSave = () => {
    onSave(updatedName, updatedEmail, updatedMobileNumber);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-11/12 sm:w-1/3">
        <h3 className="text-xl font-semibold text-center mb-4">Edit Profile</h3>

        <div className="mb-4">
          <label htmlFor="name" className="text-sm text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm text-gray-700">Your Email</label>
          <input
            type="email"
            id="email"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="text-sm text-gray-700">Your Mobile Number</label>
          <input
            type="text"
            id="mobile"
            value={updatedMobileNumber}
            onChange={(e) => setUpdatedMobileNumber(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
