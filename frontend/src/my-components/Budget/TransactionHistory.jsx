"use client";

import React from "react";

const TransactionHistory = ({ transactions }) => {
  const totalAmount = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold  mb-3">
          Transaction History
        </h2>
        <h2 className="text-green-500 font-semibold">
          Total = ₹{totalAmount.toLocaleString()}
        </h2>
      </div>
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">Category</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{transaction.category}</td>
              <td className="py-2 text-green-500 font-semibold">
                ₹{transaction.amount.toLocaleString()}
              </td>
              <td className="py-2">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
