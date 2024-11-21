import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/UI/Navbar"; // Assuming you have a Navbar component
import Footer from "../components/UI/Footer";
import BottomNavigation from "../components/UI/BottomNavigation";


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle the contact form submission logic
    try {
      // Example: You can send the data to a backend API or email service here
      console.log({ name, email, message });
      // After successful submission, you can navigate to a confirmation page or show a success message
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting the contact form", error);
    }
  };

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
      <Navbar />
      <div className="h-auto w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Get in Touch with Us
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We'd love to hear from you! Whether you have a question, feedback, or inquiry, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 dark:text-gray-400">📍</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    1234 Business Ave, Suite 567, City, Country
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 dark:text-gray-400">📞</span>
                  <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500 dark:text-gray-400">✉️</span>
                  <p className="text-gray-600 dark:text-gray-400">support@company.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">Contact Form</h5>

                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
      
        </div>
      </div>
       {/* Footer or Bottom Navigation */}
     {isMobile ? <BottomNavigation /> : <Footer />}
    </>
  );
};

export default ContactUs;
