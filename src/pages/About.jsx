import React, { useEffect, useState } from 'react';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import BottomNavigation from "../components/UI/BottomNavigation";



const AboutUs = () => {
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
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6 mb-12 md:mb-2">
      <h1 className="text-4xl font-bold text-center text-gray-800">About Us</h1>

      <p className="mt-4 text-lg text-gray-600">
        Welcome to My Library, a place where you can explore a wide range of books and resources
        to fuel your knowledge and personal growth. Our mission is to provide a seamless and
        enjoyable reading experience to readers of all ages and backgrounds.
      </p>

      <h2 className="mt-6 text-2xl font-semibold text-gray-800">Our Mission</h2>
      <p className="mt-2 text-lg text-gray-600">
        At My Library, we believe in the power of books to transform lives. Our mission is to make
        knowledge accessible to everyone by providing a platform where users can explore, discover,
        and enjoy reading materials that suit their interests and needs.
      </p>

      <h2 className="mt-6 text-2xl font-semibold text-gray-800">Our Team</h2>
      <p className="mt-2 text-lg text-gray-600">
        Our team consists of passionate individuals who share a love for reading and a commitment to
        making a difference in the world of literature. From content curators to tech enthusiasts,
        we work together to bring you the best possible library experience.
      </p>

      <h2 className="mt-6 text-2xl font-semibold text-gray-800">Contact Us</h2>
      <p className="mt-2 text-lg text-gray-600">
        If you have any questions or feedback, feel free to <a href="mailto:contact@mylibrary.com" className="text-blue-600">email us</a>.
      </p>
    </div>
    {/* Footer or Bottom Navigation */}
    {isMobile ? <BottomNavigation /> : <Footer />}
    </>
  );
};

export default AboutUs;
