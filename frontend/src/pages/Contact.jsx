"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // for navigation

const Contact = () => {
  const img = "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg";
  const navigate = useNavigate(); // For navigating to the profile page

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage dialog state

  const handleProfileClick = () => {
    setIsDialogOpen(true); // Open profile options dialog
  };

  const handleLogout = () => {
    console.log("User Logged Out");
    setIsDialogOpen(false);
    // Implement logout logic here (e.g., clearing tokens or user data)
  };

  const handleGoToProfile = () => {
    navigate("/profile"); // Navigate to profile page
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-xl font-bold text-center mb-6">Contact Us</h1>

      {/* Navbar with Profile Button */}
      <div className="fixed top-0 left-0 w-full bg-white p-4 flex justify-between items-center z-10">
        <img src="../../../joda masjid logo.png" alt="Logo" className="w-20 h-20" />
        <h1 className="text-lg">Hello, <span className="font-bold">Username</span></h1>
        <div
          className="h-12 w-12 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center cursor-pointer"
          onClick={handleProfileClick} // Open the profile options dialog
        >
          <img src={img} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 mt-24">
        <h2 className="text-lg font-semibold mb-4">Community Contact Information</h2>

        {/* Email */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 font-medium">Email</p>
          <p className="text-sm text-blue-500">community@example.com</p>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 font-medium">Phone</p>
          <p className="text-sm text-blue-500">+123 456 7890</p>
        </div>

        {/* Address */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 font-medium">Address</p>
          <p className="text-sm text-gray-600">1234 Community St, City, Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="text-sm text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="text-sm text-gray-700 font-medium">Your Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Profile Options Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Options</DialogTitle>
            <DialogDescription>Choose an option</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button onClick={handleGoToProfile} className="w-full bg-blue-500 text-white p-2 rounded mb-2">
              Go to Profile
            </button>
            <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 rounded">
              <FiLogOut className="inline-block mr-2" />
              Logout
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
