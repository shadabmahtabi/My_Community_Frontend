import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  // Dummy data for borrowed books, history, and user details
  const borrowedBooks = [
    { title: 'The Great Gatsby', dueDate: '2024-11-20' },
    { title: 'To Kill a Mockingbird', dueDate: '2024-11-25' },
  ];
  const readingHistory = [
    '1984 by George Orwell',
    'Pride and Prejudice by Jane Austen',
    'Moby Dick by Herman Melville',
  ];
  const recommendations = [
    'The Catcher in the Rye',
    'The Alchemist',
    'Brave New World',
  ];

  // Personal details
  const userDetails = {
    fullName: user.fullName || 'John Doe',
    mobileNumber: user.mobileNumber || '+1234567890',
    email: user.email || 'johndoe@example.com',
    membership: 'Standard',  // Assuming "Standard" membership level for example
  };

  return (
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
            {borrowedBooks.map((book, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-50 p-4 rounded shadow"
              >
                <span>{book.title}</span>
                <span className="text-gray-600">
                  Due: {book.dueDate}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reading History */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Reading History
          </h3>
          <ul className="mt-4 space-y-2">
            {readingHistory.map((book, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded shadow text-gray-700"
              >
                {book}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Book Recommendations
          </h3>
          <ul className="mt-4 space-y-2">
            {recommendations.map((book, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded shadow text-blue-700 hover:underline"
              >
                {book}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
