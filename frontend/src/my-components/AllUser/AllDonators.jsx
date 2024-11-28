"use client";

import React from "react";

const AllDonators = ({ users, totalDonations }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-bold text-gray-800 mb-3">All Donators</h2>
      <h2 className="text-green-500 font-semibold">Total = ₹{totalDonations.toLocaleString()}</h2>
    </div>
    <table className="w-full text-left border-collapse text-sm">
      <thead>
        <tr className="border-b text-gray-600">
          <th className="py-2">Name</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="py-2 flex items-center">
              <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
              {user.name}
            </td>
            <td className="py-2 text-green-500 font-semibold">{user.amount}</td>
            <td className="py-2">{user.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AllDonators;
