import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import Budget from "@/pages/Budget";
import AllUsers from "@/pages/AllUsers";
import Donation from "@/pages/Donation";
import Contact from "@/pages/Contact";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Homepage from "./pages/Homepage";
import NewPassword from "./pages/Auth/NewPassword";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import PaymentPage from "./pages/Payment/PaymentPage";
import AdminLogin from "./pages/Admin/AdminLogin";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/payment" element={<PaymentPage />} />

        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
