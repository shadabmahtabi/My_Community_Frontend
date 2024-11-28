import React, { useState } from "react";
import { FaPen, FaTrashAlt, FaPlus } from "react-icons/fa"; // React Icons for actions

const TransactionManagement = () => {
  // Sample transaction data (in a real application, this would come from an API)
  const [transactions, setTransactions] = useState([
    { id: 1, donorName: "John Doe", amount: 500, date: "2024-11-26" },
    { id: 2, donorName: "Jane Smith", amount: 300, date: "2024-11-25" },
    { id: 3, donorName: "Alice Brown", amount: 200, date: "2024-11-24" },
  ]);

  // States for managing the "Add Transaction" form
  const [newTransaction, setNewTransaction] = useState({
    donorName: "",
    amount: "",
    date: "",
  });

  // Handle adding a new transaction
  const handleAddTransaction = () => {
    if (
      newTransaction.donorName &&
      newTransaction.amount &&
      newTransaction.date
    ) {
      const newTrans = {
        ...newTransaction,
        id: transactions.length + 1,
      };
      setTransactions([...transactions, newTrans]);
      setNewTransaction({ donorName: "", amount: "", date: "" }); // Reset form
    }
  };

  // Handle editing a transaction
  const handleEditTransaction = (id) => {
    const transactionToEdit = transactions.find((t) => t.id === id);
    setNewTransaction({
      donorName: transactionToEdit.donorName,
      amount: transactionToEdit.amount,
      date: transactionToEdit.date,
    });
    setTransactions(transactions.filter((t) => t.id !== id)); // Temporarily remove the transaction
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold text-center mb-6">
        Transaction Management
      </h1>

      {/* Add New Transaction Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Transaction</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Donor Name</label>
            <input
              type="text"
              value={newTransaction.donorName}
              onChange={(e) =>
                setNewTransaction({
                  ...newTransaction,
                  donorName: e.target.value,
                })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter donor name"
            />
          </div>
          <div>
            <label className="block mb-2">Amount</label>
            <input
              type="number"
              value={newTransaction.amount}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, amount: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter donation amount"
            />
          </div>
          <div>
            <label className="block mb-2">Date</label>
            <input
              type="date"
              value={newTransaction.date}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, date: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={handleAddTransaction}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Add Transaction
        </button>
      </div>

      {/* Transaction List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Transaction List</h2>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex justify-between items-center py-3 border-b"
            >
              <div>
                <span className="font-semibold">{transaction.donorName}</span>
                <div>{transaction.date}</div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-600 font-semibold">
                  ₹{transaction.amount}
                </span>
                <button
                  onClick={() => handleEditTransaction(transaction.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaPen /> {/* Edit Icon */}
                </button>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt /> {/* Delete Icon */}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionManagement;
