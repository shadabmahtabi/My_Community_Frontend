import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Navbar from '../components/UI/Navbar';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [readingHistory, setReadingHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // Fetch the user's data, borrowed books, reading history, and recommendations
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch borrowed books, reading history, and recommendations for the logged-in user
        const response = await axios.get(`http://localhost:3000/users/profile/${user._id}`);
        setBorrowedBooks(response.data.borrowedBooks);
        setReadingHistory(response.data.readingHistory);
        setRecommendations(response.data.recommendations);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  // Personal details
  const userDetails = {
    fullName: user.fullName || 'John Doe',
    mobileNumber: user.mobileNumber || '+1234567890',
    email: user.email || 'johndoe@example.com',
    membership: user.membership || 'Standard',
  };

  return (
    <>
    <Navbar/>
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* User Information */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-8">
        <div className="flex items-center space-x-6">
          <img
            className="w-24 h-24 rounded-full"
            src={user.photo || '/default-avatar.png'}
            alt="User Profile"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {userDetails.fullName}
            </h2>
            <p className="text-gray-500">Membership: {userDetails.membership}</p>
            <button
              onClick={logout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="text-gray-700 font-semibold">Full Name</h3>
            <p>{userDetails.fullName}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="text-gray-700 font-semibold">Email</h3>
            <p>{userDetails.email}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded shadow">
            <h3 className="text-gray-700 font-semibold">Mobile Number</h3>
            <p>{userDetails.mobileNumber}</p>
          </div>
        </div>

        {/* Borrowed Books Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Currently Borrowed Books
          </h3>
          <ul className="mt-4 space-y-2">
            {borrowedBooks.length === 0 ? (
              <p className="text-gray-600">No borrowed books found.</p>
            ) : (
              borrowedBooks.map((book, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-gray-50 p-4 rounded shadow"
                >
                  <span>{book.title}</span>
                  <span className="text-gray-600">
                    Due: {new Date(book.dueDate).toLocaleDateString()}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Reading History */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Reading History
          </h3>
          <ul className="mt-4 space-y-2">
            {readingHistory.length === 0 ? (
              <p className="text-gray-600">No reading history found.</p>
            ) : (
              readingHistory.map((book, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded shadow text-gray-700"
                >
                  {book}
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Recommendations */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Book Recommendations
          </h3>
          <ul className="mt-4 space-y-2">
            {recommendations.length === 0 ? (
              <p className="text-gray-600">No recommendations available.</p>
            ) : (
              recommendations.map((book, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded shadow text-blue-700 hover:underline"
                >
                  {book}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
