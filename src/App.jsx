import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import AboutUs from './pages/About';
import BooksPage from './pages/Books';
import ContactUs from './pages/Contact';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/books" element={<BooksPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
