import React, { useState } from "react";
import { FaPen } from "react-icons/fa"; // Using React Icons for the Pencil Edit Icon

const Profile = () => {
  // State to manage user data and modal visibility
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [mobileNumber, setMobileNumber] = useState("+1234567890"); // New state for mobile number
  const [showModal, setShowModal] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedMobileNumber, setUpdatedMobileNumber] = useState(mobileNumber); // Mobile number for editing

  // Dummy donation history
  const donationHistory = [
    { id: 1, cause: "Helping the Homeless", amount: 100, date: "2024-11-26" },
    {
      id: 2,
      cause: "Support Education for All",
      amount: 150,
      date: "2024-11-25",
    },
    { id: 3, cause: "Clean Water for All", amount: 200, date: "2024-11-24" },
  ];

  // Calculate total donation amount
  const totalDonated = donationHistory.reduce(
    (total, donation) => total + donation.amount,
    0
  );

  // Handle save changes and close modal
  const handleSaveChanges = () => {
    setName(updatedName);
    setEmail(updatedEmail);
    setMobileNumber(updatedMobileNumber); // Save the updated mobile number
    setShowModal(false);
  };

  // Handle logout
  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing localStorage or redirecting to the login page.
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold text-center mb-6">Profile</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center space-x-4">
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">JD</span>{" "}
          {/* Placeholder initials */}
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <FaPen
              className="w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowModal(true)}
            />
          </div>
          <p className="text-sm text-gray-700">{email}</p>
          <p className="text-sm text-gray-700">{mobileNumber}</p> {/* Display mobile number */}
          <div className="text-sm text-gray-600 mt-2">
            Total Donations:{" "}
            <span className="text-green-600 font-semibold">₹{totalDonated}</span>
          </div>
        </div>
      </div>

      {/* Donation History */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Donation History</h2>

        <div className="space-y-4">
          {donationHistory.map((donation) => (
            <div
              key={donation.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="text-sm font-medium">{donation.cause}</p>
                <p className="text-xs text-gray-500">{donation.date}</p>
              </div>
              <p className="text-green-600 font-semibold">₹{donation.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Edit Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-11/12 sm:w-1/3">
            <h3 className="text-xl font-semibold text-center mb-4">
              Edit Profile
            </h3>

            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="text-sm text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="text-sm text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="mb-4">
              <label htmlFor="mobile" className="text-sm text-gray-700">
                Your Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                value={updatedMobileNumber}
                onChange={(e) => setUpdatedMobileNumber(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSaveChanges}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
