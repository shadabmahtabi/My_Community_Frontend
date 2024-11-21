import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/UI/Navbar";
import Footer from "../components/UI/Footer";
import HeroSection from "../components/UI/HeroSection";
import BottomNavigation from "../components/UI/BottomNavigation";

const Home = () => {
  const { user } = useContext(AuthContext); // Access user from AuthContext
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define breakpoint for mobile devices
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <HeroSection />
      </main>

      {/* Footer or Bottom Navigation */}
      {isMobile ? <BottomNavigation /> : <Footer />}
    </div>
  );
};

export default Home;
