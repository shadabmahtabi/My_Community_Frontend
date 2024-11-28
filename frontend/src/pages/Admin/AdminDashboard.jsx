"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import { FiPlus } from "react-icons/fi";

const AdminDashboard = () => {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [transactionData, setTransactionData] = useState({
    description: "",
    amount: 0,
    type: "income",
  });

  // Example Data
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  const transactions = [
    { id: 1, description: "Project A", amount: 500, type: "income" },
    { id: 2, description: "Stationery", amount: 50, type: "expense" },
  ];

  // Calculated Financial Data
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const remaining = totalIncome - totalExpenses;

  const pieData = [
    { name: "Income", value: totalIncome, color: "#4caf50" },
    { name: "Expenses", value: totalExpenses, color: "#f44336" },
    { name: "Remaining", value: remaining, color: "#2196f3" },
  ];

  // Handlers
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("Added User:", userData);
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();
    console.log("Added Transaction:", transactionData);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-100 border rounded">
          <h3 className="text-lg font-bold">Income</h3>
          <p className="text-xl font-semibold">₹{totalIncome}</p>
        </div>
        <div className="p-4 bg-red-100 border rounded">
          <h3 className="text-lg font-bold">Expenses</h3>
          <p className="text-xl font-semibold">₹{totalExpenses}</p>
        </div>
        <div className="p-4 bg-blue-100 border rounded">
          <h3 className="text-lg font-bold">Remaining</h3>
          <p className="text-xl font-semibold">₹{remaining}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Financial Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-₹{index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Users Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Registered Users</h3>
        <div className="space-y-2">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-gray-100 border rounded">
              <h4 className="font-bold">{user.name}</h4>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 bg-purple-500 text-white p-2 rounded">
              Add User <FiPlus />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Enter user details below.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddUser} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <DialogFooter>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded"
                >
                  Add User
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Transactions Section */}
      <div>
        <h3 className="text-lg font-bold mb-4">Transactions</h3>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-4 bg-gray-100 border rounded"
            >
              <h4 className="font-bold">{transaction.description}</h4>
              <p>
                ₹{transaction.amount} ({transaction.type})
              </p>
            </div>
          ))}
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 bg-blue-500 text-white p-2 rounded">
              Add Transaction <FiPlus />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
              <DialogDescription>
                Enter transaction details below.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <input
                type="text"
                placeholder="Description"
                value={transactionData.description}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    description: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Amount"
                value={transactionData.amount}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    amount: +e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
              <select
                value={transactionData.type}
                onChange={(e) =>
                  setTransactionData({
                    ...transactionData,
                    type: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <DialogFooter>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded"
                >
                  Add Transaction
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDashboard;
