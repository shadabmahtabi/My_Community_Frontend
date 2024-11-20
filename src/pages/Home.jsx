import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import HeroSection from '../components/UI/HeroSection';

const Home = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext

  return (
    <>
      <div className="bg-gray-100 min-h-screen pb-6">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />
        
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
