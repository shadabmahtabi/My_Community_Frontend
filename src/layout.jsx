// src/components/Layout.jsx
import React from 'react';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Global Navbar */}
      
      {/* The main content of each page */}
      <main className="flex-grow">{children}</main>

      <Footer /> {/* Global Footer */}
    </div>
  );
};

export default Layout;
