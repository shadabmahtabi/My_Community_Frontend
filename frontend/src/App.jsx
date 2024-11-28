import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import Homepage from "@/pages/Homepage";
import Budget from "@/pages/Budget";
import AllUsers from "@/pages/AllUsers";
import Donation from "@/pages/Donation";
import Contact from "@/pages/Contact";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TransactionManagement from "./pages/Admin/TransactionManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/transaction" element={<TransactionManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
